#Dicty Stock Center
Dicty Stock Center application rebuilt with React and Redux!

#Development
Git clone and then run `npm install`

##Configuration
This is the most important part and it is absolutely needed to run the application.

###Providers
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
* The url of the auth server is configured by the global __AUTH_SERVER__ that
  can be found in the global [config](config/_base.js) file. The default
  location is `http://localhost:9999`. It can also be configured by setting __AUTH_SERVER__
  environmental variable.

* The binaries for the auth server could be downloaded from its release
  [page](https://github.com/dictyBase/authserver/releases). Download that is
  suitable for your OS and make sure you always use the latest one.

###API server
* The url of the auth server is configured by the global __API_SERVER__ that
  can be found in the global [config](config/_base.js) file. The default
  location is `http://localhost:8080`. It can also be configured by setting __API_SERVER__
  environmental variable.

* An API server to **test** the application can be found [here](https://github.com/dictyBase/fake-dsc-server)

#Running the application
Simply do

```npm start```

to run the developmental server.
For rest of the information make sure to follow the original starter kit [documenation](docs/react-redux-starter-kit.md)


