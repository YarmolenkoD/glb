import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'

// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

// components
import Tabs, { TABS } from './tabs/tabs'

// hooks
import {
  useProjects,
  useFiltersParams,
  useQuery,
  IFilterResponse,
  IProjectsData
} from 'hooks'

// constants
import { FADE_ANIMATION_DURATION } from 'constant-variables'

export function ProjectsInfiniteList() {
  const history = useHistory()

  const params = useQuery()
  const [activeTab, setActiveTab] = useState(TABS[0].key)
  const [filters]: IFilterResponse = useFiltersParams()

  const {
    projects,
    loadMore,
    currentPage,
    loading,
    hasMore
  }: IProjectsData = useProjects({
    initialPage: 1,
    filters
  })

  useEffect(() => {
    const tab = params.get('tab') || activeTab
    setActiveTab(tab)
  }, [])

  useEffect(() => {
    history.push({ search: `?tab=${activeTab}` })
  }, [activeTab])

  const goToProject = useCallback((id) => {
    history.push(`/projects/${id}`)
  }, [])

  const onLoadMore = useCallback(() => {
    loadMore({ page: currentPage + 1 })
  }, [currentPage])

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

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Tabs
          activeTab={activeTab}
          onChange={setActiveTab}
        />
        <InfiniteScroll
          dataLength={projects?.length}
          next={onLoadMore}
          loader={null}
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
