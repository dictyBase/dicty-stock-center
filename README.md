[![Dependency Status](https://david-dm.org/dictybase/Dicty-Stock-Center/develop.svg?style=flat-square)](https://david-dm.org/dictybase/Dicty-Stock-Center/develop)
[![devDependency Status](https://david-dm.org/dictybase/Dicty-Stock-Center/develop/dev-status.svg?style=flat-square)](https://david-dm.org/dictybase/Dicty-Stock-Center/develop#info=devDependencies)


#Dicty Stock Center
Dicty Stock Center application rebuilt with React and Redux!

* [Development](#development)
  * [Configuration](#configuration)
    * [Providers](#providers)
    * [Auth server](#auth-server)
    * [API server](#api-server)
  * [Running the application(dev version)](#running-the-applicationdev-version)
  * [Application Structure](#application-structure)
* [Deployment](#deployment)
  * [Build and running docker containers](#build-and-running-docker-containers)
    * [Makefile targets](#makefile-targets)
        * [make build-dev ](#make-build-dev)
        * [make dsc-server ](#make-dsc-server)
        * [make start ](#make-start)
        * [make stop and <code>make restart</code> ](#make-stop-and-make-restart)
        * [make build-staging ](#make-build-staging)
        * [make push-image ](#make-push-image)


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
  [here](http://fontawesome.io/icons/#brand)

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
├── docs                     # Project documentation 
├── Dockerfile               # Dockerfile to build docker images for deploying
├── Makefile                 # Makefile to run various deployment tasks
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

For additional information make sure to follow the original starter kit
[documenation](docs/react-redux-starter-kit.md)

#Deployment
The application is deployed by [building docker
image](https://docs.docker.com/engine/reference/commandline/build/) and running
it through [kubernetes](https://k8s.io).

##Build and running docker containers
The docker image build is done through [Makefile](/Makefile). It can build a dev
version for quick testing in a developer’s machine and another version to
deploy in a staging machine.

### Makefile targets

#### `make build-dev` 
Will built a `dictybase/dsc:dev` image from
the source code of current branch.

#### `make dsc-server`
Will run a container from the dev image, accessible through `http://localhost:9994`.

#### `make start`
Will also start the fake api
[server](https://github.com/dictyBase/fake-dsc-server) along
with dev container. It can be started separately using the `make
fake-api-server` command.

#### `make stop` and `make restart`
Obvious, isn’t it.

#### `make build-staging`
Build a tagged and untagged version of docker images. The tag no
is extracted from the latest git tag available in the local
working folder. It is built with the following configuration ....

* The [providers](#providers) configuration file is expected to
  be in `client/hush.js` relative to the root of this git
  checkout.

* The application is expected to available under `/stockcenter` url subpath.

* The [API server](#api-server) is expected to be available
  under `https://betatest.dictybase.org/fakeapi/stockcenter`

* The [Auth server](#auth-server) is expected to be available under
  `https://betatest.dictybase.org/api/authserver`

#### `make push-image`
Pushes the staging images(tagged and untagged) to [docker
hub](https://hub.docker.com/r/dictybase/dsc/tags/)
