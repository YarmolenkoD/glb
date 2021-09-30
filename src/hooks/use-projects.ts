import { useCallback, useEffect, useMemo, useState } from 'react'
import _ from 'lodash'

// hooks
import { IFilterParams } from 'hooks'

// images
import images from 'assets/images/data/projects'

// data
import jsonData from '../data/projects.json'

// types
import { IProject } from 'types'

export interface IProjectsData {
  projects: IProject[]
  currentPage: number
  loadMore: ({ page: number }) => void
  hasMore: boolean
  loading: boolean
}

interface IFilterProjectsParams {
  country?: string|null
}

export type FilterProjectsParams = IFilterProjectsParams|null

interface IParams {
  initialPage?: number
  count?: number
  filters?: IFilterParams
}

const formatProjects = (projects, filters: IFilterParams = []) => {
  const filter = filters.reduce((res, { key, value, active }) => {
    if (active) {
      return {
        ...res,
        [key]: value
      }
    }
    return res
  }, {})

  return _.filter(projects, filter).map((project) => ({
    ...project,
    images: images[project.id] || []
  }))
}

export const useProjects = ({ initialPage = 1, count = 100, filters }: IParams) => {
  const data = useMemo(() => formatProjects(jsonData.projects, filters), [filters])

  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [projects, setProjects] = useState<IProject[]>([])
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setHasMore(projects.length < data.length)
  }, [projects.length])

  useEffect(() => {
    setCurrentPage(initialPage)
    setProjects(data.slice((initialPage - 1) * count, count))
  }, [data])

  const loadMore = useCallback(({ page }) => {
    setLoading(true)
    setProjects(data.slice(0, page * count))
    setCurrentPage(page)
    setLoading(false)
  }, [projects.length, currentPage])

  return {
    projects,
    currentPage,
    loadMore,
    hasMore,
    loading
  } as IProjectsData
}

export const useProject = (id) => {
  return jsonData.projects?.find(project => project.id === id) || null
}

export const useCoverImage = (project) => {
  return project.images[0]
}
