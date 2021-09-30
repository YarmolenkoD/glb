import { Dispatch, useEffect, useState } from 'react'

import { useQuery } from 'hooks'

interface IFilterParam {
  key: string
  active: boolean
  value: string|null
}

export type IFilterParams = IFilterParam[]
export type IFilterResponse = [IFilterParams, (newFilters: IFilterParams) => Dispatch<any>]

export const useFiltersParams = (): IFilterResponse => {
  const params = useQuery()
  const [filters, setFilters] = useState<IFilterParams>([])

  useEffect(() => {
    const newFilters: IFilterParams = []

    const country = params.get('country')
    const category = params.get('category')
    const tab = params.get('tab')

    if (country) newFilters.push({ key: 'country', active: true, value: country })
    if (category) newFilters.push({ key: 'category', active: true, value: category })
    if (tab) newFilters.push({ key: 'status', active: true, value: tab })

    setFilters(newFilters)
  }, [params])

  return <IFilterResponse>[filters, setFilters]
}