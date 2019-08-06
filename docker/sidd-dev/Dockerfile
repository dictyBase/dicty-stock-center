# It's a multi stage build https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage
# The first one build single file js for the web app
# The second one copies the file and server with a golang static web server
FROM dictybase/frontend-builder:devsidd
LABEL maintainer "Siddhartha Basu <siddhartha-basu@northwestern.edu>"

# base path for React Router
ARG basename
ENV REACT_APP_BASENAME ${basename:-stockcenter}

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy only necessary files
COPY package-lock.json .babelrc ./
COPY jsconfig.json ./
# package.json has to be modified later on, so 
ADD package.json package-dev.json

# create new package.json with relative path
RUN jq '. + {"homepage": "/stockcenter"}' package-dev.json > package.json \
  && rm package-dev.json

RUN npm install

# add necessary folders
ADD src src
ADD public public

# overwrite the client key file
ADD $CLIENT_KEYS /usr/src/app/src/utils/clientConfig.js

# standard install/build commands
RUN npm run build

FROM dictybase/static-server:1.0.0
RUN mkdir /www
WORKDIR /www
COPY --from=0 /usr/src/app/build ./
ENTRYPOINT ["/usr/local/bin/app", "run", "-f", "/www", "--vf", "/static", "--sub-url", "/stockcenter"]
