FROM node:argon
MAINTAINER Siddhartha Basu<siddhartha-basu@northwestern.edu>

# Create app directory
RUN mkdir -p /usr/src/app /usr/src/server

# Bundle app source
COPY . /usr/src/app

# Setup server url
ARG api_server
ENV API_SERVER ${api_server:-https://betatest.dictybase.org/fakeapi/stockcenter}

# install express and logger globally
RUN npm install -g express morgan \
    && cd /usr/src/app \
# Install app dependencies \
    && npm install \
# Create client config file
    && cp src/utils/clientConfig.sample.js src/utils/clientConfig.js \
    && npm run deploy \
    && mv dist /www \
# Add our user and group first to make sure their IDs get assigned consistently
    && groupadd -r app && useradd -r -g app app \
# install push server
    && cp server/push-server.js /usr/src/server/ \
# cleanup
    && cd .. \
    && rm -rf app


# Set as default user 
USER app
ENV NODE_PATH /usr/local/lib/node_modules

EXPOSE 9596
CMD ["node", "/usr/src/server/push-server.js"]



