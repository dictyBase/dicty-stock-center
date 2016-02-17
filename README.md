#React Redux Auth trial application
A react and redux based SPA to learn and create example on how to use oauth2
login flow with various third party providers.

#Install
Git clone and then run `npm install`

#Configuration
The most important part and it is absolutely needed before you could run the application.

##Providers
* Copy the provided sample [clientConfig.sample.js](src/utils/clientConfig.sample.js) file
  to __clientConfig.js__  in the same folder. 

* Then add providers name and their corresponding client ids. 

* All the providers should have a matching counterpart in the
  [oauthConfig.js](src/utils/oauthConfig.js) file. Fill up all the
  configuration parameters for every new provider in that file.

* For each of the provider name a corresponding login button will be shown up
  in the login route. The list of supported buttons are given
  [here](https://lipis.github.io/bootstrap-social/)

##Auth server
* The url of the auth server is configured by the global __AUTH_SERVER__ that
  can be found in the global [config](config/_base.js) file. The default
  location is `http://localhost:9999`. It can also be configured by setting __AUTH_SERVER__
  environmental variable.

* The binaries for the auth server could be downloaded from its release
  [page](https://github.com/dictyBase/authserver/releases). Download that is
  suitable for your OS and make sure you always use the latest one.

#Running the application
Simply do

```npm start```

to run the developmental server.
For rest of the information make sure to follow the original [documenation](docs/README.md)


