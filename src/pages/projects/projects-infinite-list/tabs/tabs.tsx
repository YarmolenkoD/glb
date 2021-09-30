import { useTranslation } from 'react-i18next'

// styled components
import * as Elements from './elements'

interface ITab {
  key: string
  title: string
}

interface IProps {
  activeTab: string
  onChange: (string) => void
}

export const TABS: ITab[] = [
  {
    key: 'completed',
    title: 'Completed'
  },
  {
    key: 'progress',
    title: 'In progress'
  },
]

export default function Tabs (props: IProps) {
  const { activeTab, onChange } = props
  const { t } = useTranslation()

  return <Elements.Container>
    {
      TABS.map((tab, index) => {
        return <Elements.Tab
          onClick={() => onChange(tab.key)}
          key={`tab-item-${tab.key}=${index}`}
          className={activeTab === tab.key ? 'active' : ''}
        >
          {t(tab.title)}
        </Elements.Tab>
      })
    }
  </Elements.Container>
}