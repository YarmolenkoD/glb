import { useCallback, useEffect, useMemo, useState } from 'react'

// hooks
import { useTranslation } from './use-translation'

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

interface IParams {
  initialPage?: number
  count?: number
}

const formatProjects = (projects) => (
  projects.map((project) => ({
    ...project,
    images: images[project.id] || []
  }))
)

export const useProjects = ({ initialPage = 1, count = 10 }: IParams) => {
  const translation = useTranslation()
  const data = useMemo(() => formatProjects(jsonData[translation]), [translation])

  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [projects, setProjects] = useState<IProject[]>([])
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setHasMore(projects.length < data.length)
  }, [projects.length])

  useEffect(() => {
    setProjects(data.slice((initialPage - 1) * count, count))
  }, [])

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
  const translation = useTranslation()

  return jsonData[translation]?.find(project => project.id === id) ?? null
}

export const useCoverImage = (project) => {
  return project.images[0]
}
