import Strains from 'components/Strains'
import StrainDetail from 'components/Strains/StrainDetail'

export default [
  {
    path: '/strains',
    component: Strains
  },
  {
    path: '/strains/:id',
    component: StrainDetail
  }
]
