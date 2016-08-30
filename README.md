[![Dependency Status](https://david-dm.org/dictybase/Dicty-Stock-Center/master.svg?style=flat-square)](https://david-dm.org/dictybase/Dicty-Stock-Center/master)
[![devDependency Status](https://david-dm.org/dictybase/Dicty-Stock-Center/master/dev-status.svg?style=flat-square)](https://david-dm.org/dictybase/Dicty-Stock-Center/master#info=devDependencies)


#Dicty Stock Center
Dicty Stock Center application rebuilt with React and Redux!

* [Development](#development)
  * [Configuration](#configuration)
    * [Providers](#providers)
    * [Auth server](#auth-server)
    * [API server](#api-server)
  * [Running the application(dev version)](#running-the-applicationdev-version)
  * [Application Structure](#application-structure)

#Development
* First clone this repository.
* Next configure the application as described below.

##Configuration

###Providers
* This is the most important part and it is absolutely needed to run the application.
* Copy the provided sample [clientConfig.sample.js](src/utils/clientConfig.sample.js) file
  to __clientConfig.js__  in the same folder. 
* Then add providers name and their corresponding client ids. 
* All the providers should have a matching counterpart in the
  [oauthConfig.js](src/utils/oauthConfig.js) file. Fill up all the
  configuration parameters for every new provider in that file.
* For each of the provider name a corresponding login button will be shown up
  in the login route. The list of supported buttons are given
  [here](https://lipis.github.io/bootstrap-social/)

###Auth server
* By default, the application expect it to run on `http://localhost:9999`
* The url of the auth server can be configured by __AUTH_SERVER__ environmental variable.
* The binaries for the auth server could be downloaded from its release
  [page](https://github.com/dictyBase/authserver/releases). Download that is
  suitable for your OS and make sure you always use the latest one.
* The __AUTH_SERVER__ env variable can also be customize by modifying the
  global variable in the webpack [config](config/_base.js) file. 


###API server
* By default, the application expect it to run on `http://localhost:8080`
* The url of the auth server can be configured by __API_SERVER__ environmental variable.
* An API server to **test** the application can be found [here](https://github.com/dictyBase/fake-dsc-server)
* The __API_SERVER__ env variable can also be customize by modifying the
  global variable in the webpack [config](config/_base.js) file. 

## Running the application(dev version)

* ```npm install```
* ```npm start```

##Application Structure

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── docker                   # Docker scripts
├── docs                     # Project documentation 
├── src                      # Application source code
│   ├── actions              # Redux action creators
│   ├── components           # Generic React Components (generally Dumb components)
│   ├── constants            # Constants. (e.g. redux action types)
│   ├── containers           # Components that provide context. Smart components
│   ├── forms                # Resources related to forms used in the dsc application
│   ├── reducers             # Redux reducers
│   ├── store                # Redux store configuration
│   ├── static               # Static assets
│   ├── styles               # Application-wide styles
│   ├── utils                # Application utilities
│   ├── index.ejs            # Template for generating index.html file for production
│   ├── index.html           # Template for application development. 
│   ├── index.jsx            # Application rendering
│   └── routes.js            # Application route definitions
└── tests                    # Unit tests
```

For rest of the information make sure to follow the original starter kit
[documenation](docs/react-redux-starter-kit.md)
