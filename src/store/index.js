// Select either of prod or dev configurations
// Development setup comes with the redux-devtools
if (__DEBUG__) {
    module.exports = require('./configureStore.dev')
} else {
    module.exports = require('./configureStore.prod')
}
