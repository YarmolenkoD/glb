import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

// hooks
import { IProjectsData, useProjects } from 'hooks'

export function ProjectsInfiniteList() {
  const history = useHistory()

  const {
    projects,
    loadMore,
    currentPage,
    loading,
    hasMore
  }: IProjectsData = useProjects({ initialPage: 1 })

  const goToProject = useCallback((id) => {
    history.push(`/projects/${id}`)
  }, [])

  const onLoadMore = useCallback(() => {
    loadMore({ page: currentPage + 1 })
  }, [projects.length, currentPage])

  const renderItem = useCallback((item, index) => {
    return <Elements.ProjectItem
      onClick={goToProject.bind(null, item.id)}
      key={`project-item-${index}`}
      bg={item?.images?.[0]}
    >
      <Elements.ProjectHoverBox>
        <Elements.ProjectTitle>{item.title}</Elements.ProjectTitle>
      </Elements.ProjectHoverBox>
    </Elements.ProjectItem>
  }, [goToProject])

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <InfiniteScroll
          dataLength={projects?.length}
          next={onLoadMore}
          loader={<h4>Loading...</h4>}
          hasMore={!loading && hasMore}
        >
          <Elements.ProjectsList>
            {projects?.map(renderItem)}
          </Elements.ProjectsList>
        </InfiniteScroll>
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}
