FROM node:argon
MAINTAINER Siddhartha Basu<siddhartha-basu@northwestern.edu>

# Setup server url
# could also be set with docker build
ARG api_server
ENV API_SERVER ${api_server:-https://betatest.dictybase.org/fakeapi/stockcenter}

# base path for serving assets
ARG asset_base
ENV ASSET_BASE ${asset_base:-/stockcenter}

# Create app directory
RUN mkdir -p /usr/src/app 

# copy package.json for dependency install
# also to separate caching of dependencies from source code
COPY package.json /usr/src/app

# install express and logger globally
RUN npm install -g express morgan \
    && cd /usr/src/app \
# Install app dependencies \
    && npm install 

# Bundle app source
COPY . /usr/src/app

# Create client config file
RUN cd /usr/src/app \
    && cp src/utils/clientConfig.sample.js src/utils/clientConfig.js \
    && npm run deploy \
    && mv dist /www \
# Add our user and group first to make sure their IDs get assigned consistently
    && groupadd -r app && useradd -r -g app app \
# install push server
    && cp server/push-server.js /usr/local/bin/ \
# cleanup
    && cd .. \
    && rm -rf app


# Set as default user 
USER app
ENV NODE_PATH /usr/local/lib/node_modules

EXPOSE 9596
CMD ["node", "/usr/local/bin/push-server.js"]



