import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import update from 'immutability-helper'
import InfiniteScroll from 'react-infinite-scroll-component'

// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

// hooks
import { useProjects, useFiltersParams, IFilterResponse, IProjectsData } from 'hooks'

// constants
import { FADE_ANIMATION_DURATION } from 'constant-variables'

export function ProjectsInfiniteList() {
  const history = useHistory()
  const [filters, setFilters]: IFilterResponse = useFiltersParams()

  const {
    projects,
    loadMore,
    currentPage,
    loading,
    hasMore
  }: IProjectsData = useProjects({ initialPage: 1, filters })

  const goToProject = useCallback((id) => {
    history.push(`/projects/${id}`)
  }, [])

  const onLoadMore = useCallback(() => {
    loadMore({ page: currentPage + 1 })
  }, [projects.length, currentPage])

  const toggleFilter = useCallback((index: number) => {
    setFilters(update(filters, {
      [index]: {
        active: {
          $set: !filters[index].active
        }
      }
    }))
  }, [filters])

  const renderItem = useCallback((item, index) => {
    return <Elements.ProjectItemAnimateContainer
      animateOnce
      duration={FADE_ANIMATION_DURATION}
      animateIn="fadeIn"
    >
      <Elements.ProjectItem
        onClick={goToProject.bind(null, item.id)}
        key={`project-item-${index}`}
        bg={item?.images?.[0]}
      >
        <Elements.ProjectHoverBox>
          <Elements.ProjectTitle>{item.title}</Elements.ProjectTitle>
        </Elements.ProjectHoverBox>
      </Elements.ProjectItem>
    </Elements.ProjectItemAnimateContainer>
  }, [goToProject])

  const renderFilterItem = useCallback(({ key, active, value }, index) => {
    return <Elements.FilterItem
      onClick={() => toggleFilter(index)}
      className={active ? 'active' : ''}
      key={`filter-item-${key}`}
    >
      <Elements.FilterKey>
        {key}:
      </Elements.FilterKey>
      <Elements.FilterValue>
        {value.toLowerCase()}
      </Elements.FilterValue>
    </Elements.FilterItem>
  }, [filters])

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        {
          filters.length > 0 && <Elements.FiltersContainer>
            {filters.map(renderFilterItem)}
          </Elements.FiltersContainer>
        }
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
