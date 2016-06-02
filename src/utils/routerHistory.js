import createHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'

const history = useRouterHistory(createHistory)({
    basename: __BASENAME__
})

export default history
