import Plasmids from 'components/Plasmids'
import PlasmidDetail from 'components/Plasmids/PlasmidDetail'

export default [
  {
    path: '/plasmids',
    component: Plasmids
  },
  {
    path: '/plasmids/:id',
    component: PlasmidDetail
  }
]
