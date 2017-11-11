import createHistory from 'history/createBrowserHistory'

const history = createHistory({
    basename: __BASENAME__
})

export default history
