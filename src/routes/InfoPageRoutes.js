import InfoPage from 'components/InfoPage/InfoPage'
import EditInfoPage from 'components/InfoPage/EditInfoPage'

export default [
  {
    path: '/information/:name',
    component: InfoPage
  },
  {
    path: '/information/:name/edit',
    component: EditInfoPage
  }
]
