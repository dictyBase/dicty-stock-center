FROM node:argon
MAINTAINER Siddhartha Basu<siddhartha-basu@northwestern.edu>

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install 

# Bundle app source
COPY . /usr/src/app

# Create client config file
RUN cd /usr/src/app \
    && cp src/utils/clientConfig.sample.js src/utils/clientConfig.js \
    && npm run deploy \
    && mv dist /www \
# Add our user and group first to make sure their IDs get assigned consistently
    && groupadd -r app && useradd -r -g app app


# Set as default user 
USER app

EXPOSE 9596
CMD ["node", "server/push-server.js"]



