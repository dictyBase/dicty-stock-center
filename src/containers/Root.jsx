// Similar concept as store, load the module based on dev or prod
if (process.env.REACT_APP_DEBUG) {
    module.exports = require('./Root.dev')
} else {
    module.exports = require('./Root.prod')
}
