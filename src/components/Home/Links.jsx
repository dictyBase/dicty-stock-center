import React from 'react'
import LinkList from '../LinkList'
import { PanelBlue } from 'styles'

const content = [
  { name: 'Contact the DSC', to: '/contact', routerAware: true },
  { name: 'DSC FAQ', to: '/faq/information', routerAware: true },
  {
    name: 'Nomenclature Guide',
    to: '/nomenclature/information',
    routerAware: false
  },
  {
    name: 'Other Stock Centers',
    to: '/other-stock-centers/information',
    routerAware: true
  }
]

const Links = () => {
  Links.displayName = 'front page links'
  return (
    <PanelBlue>
      <LinkList list={content} />
    </PanelBlue>
  )
}

export default Links
