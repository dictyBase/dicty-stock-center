import { createHistory } from 'history'
import { useRouterHistory } from 'react-router-dom'

const history = useRouterHistory(createHistory)({
    basename: __BASENAME__
})

export default history
