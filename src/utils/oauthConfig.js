import clientConfig from 'utils/clientConfig'

// const getRandomString = (length) => {
    // const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    // let text = ''
    // for (let i = 0; i < length; i += 1) {
        // text += possible.charAt(Math.floor(Math.random() * length))
    // }
    // return text
// }

const oauthConfig = {
    github: {
        name: 'Github',
        url: '/auth/github',
        authorizationEndpoint: 'https://github.com/login/oauth/authorize',
        clientId: clientConfig.github.clientId,
        redirectUrl: window.location.origin,
        optionalUrlParams: [
            ['scope', 'user:email'],
            ['state', 'dictyBase']
        ],
        type: '2.0',
        popupOptions: { width: 1020, height: 618 }
    },
    google: {
        name: 'Google',
        url: '/auth/google',
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
        clientId: clientConfig.google.clientId,
        redirectUrl: window.location.origin,
        requiredUrlParams: [
            ['response_type', 'token']
        ],
        optionalUrlParams: [
            ['scope', 'email'],
            ['state', 'dictyBase']
        ],
        display: 'popup',
        type: '2.0',
        popupOptions: { width: 452, height: 633 }
    },
    facebook: {
        name: 'Facebook',
        url: '/auth/facebook',
        authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
        clientId: clientConfig.facebook.clientId,
        redirectUrl: window.location.origin + '/',
        optionalUrlParams: [
            ['scope', 'email'],
            ['state', 'dictyBase'],
            ['response_type', 'token']
        ],
        display: 'popup',
        type: '2.0',
        popupOptions: { width: 580, height: 400 }
    }
}


export default oauthConfig
