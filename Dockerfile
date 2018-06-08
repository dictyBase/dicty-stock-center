FROM node:8.11.2-alpine
LABEL maintainer "Siddhartha Basu <siddhartha-basu@northwestern.edu>"
LABEL maintainer "Eric Hartline <eric.hartline@northwestern.edu>"

# include git, otherwise npm install doesn't work
RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh

# URL for api server
ARG api_server
ENV REACT_APP_API_SERVER ${api_server:-http://betaapi.dictybase.local}

# URL for auth server
ARG auth_server
ENV REACT_APP_AUTH_SERVER ${auth_server:-http://betaauth.dictybase.local}

# base path for React Router
ARG basename
ENV REACT_APP_BASENAME $basename

# Setup client keys for third party auth
ARG client_keys
ENV CLIENT_KEYS ${client_keys:-https://raw.githubusercontent.com/dictybase-playground/client-keys/master/clientConfig.js}

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy only necessary files
# also to separate caching of dependencies from source code
COPY package.json package-lock.json .babelrc ./

# add necessary folders
ADD src src
ADD public public

# overwrite the client key file
ADD $CLIENT_KEYS /usr/src/app/src/utils/clientConfig.js

# Use same node path
ENV NODE_PATH src

# install dependencies
RUN npm install

# build app
RUN npm run build



