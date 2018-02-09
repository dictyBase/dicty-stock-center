// Select either of prod or dev configurations
// Development setup comes with the redux-devtools
if (process.env.REACT_APP_DEBUG) {
    module.exports = require('./configureStore.dev')
} else {
    module.exports = require('./configureStore.prod')
}
