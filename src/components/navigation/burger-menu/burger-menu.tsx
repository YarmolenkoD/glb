import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// styled components
import * as Elements from './elements'

// data
import { NavigationItems, IExtraProps, IRenderItemProps } from '../data'
import { useScrollBlock } from '../../../hooks/use-scroll-block';

interface IBurgerProps {
  open: boolean,
  setOpen: (boolean) => void
}

const Burger = ({ open, setOpen }: IBurgerProps) => {
  return (
    <Elements.Burger open={open} onClick={() => setOpen(!open)}>
      <div/>
      <div/>
      <div/>
    </Elements.Burger>
  )
}

interface IMenuProps {
  items: NavigationItems
  open: boolean
  setOpen: (boolean) => void
}

const Menu = ({ open, items, setOpen }: IMenuProps) => {
  const { t } = useTranslation()

  const onItemClick = useCallback(() => {
    setOpen(false)
  }, [])

  const renderItem = useCallback(({ path, title, isActive }: IRenderItemProps) => {
    const extraProps: IExtraProps = {}

    if (isActive) {
      extraProps.isActive = isActive
    }

    return <Elements.Item onClick={onItemClick}>
      <Elements.Link
        exact
        to={path}
        activeClassName="active"
        {...extraProps}
      >
        {t(title)}
      </Elements.Link>
    </Elements.Item>
  }, [])

  return (
    <Elements.Menu open={open}>
      {items.map(renderItem)}
    </Elements.Menu>
  )
}

interface IProps {
  items: NavigationItems
}

export default function BurgerMenu({ items }: IProps) {
  const [open, setOpen] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  useEffect(() => {
    if (open) {
      blockScroll()
    } else {
      allowScroll()
    }
  }, [open])

  return <>
    <Burger open={open} setOpen={setOpen} />
    <Menu open={open} items={items} setOpen={setOpen} />
  </>
}
