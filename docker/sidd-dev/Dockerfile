# It's a multi stage build https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage
# The first one build single file js for the web app
# The second one copies the file and server with a golang static web server
FROM node:10.16.0-alpine
LABEL maintainer "Siddhartha Basu <siddhartha-basu@northwestern.edu>"

# include git, otherwise npm install doesn't work
RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh jq

# URL for api server
ARG api_server
ENV REACT_APP_API_SERVER ${api_server:-https://siddapi.dictybase.dev}

# URL for auth server
ARG auth_server
ENV REACT_APP_AUTH_SERVER ${auth_server:-https://siddtoken.dictybase.dev}

# URL for graphql server
ARG graphql_server
ENV REACT_APP_GRAPHQL_SERVER ${graphql_server:-https://siddgraphql.dictybase.dev}

# base path for React Router
ARG basename
ENV REACT_APP_BASENAME ${basename:-stockcenter}

# URL for navbar json
ARG navbar_json
ENV REACT_APP_NAVBAR_JSON ${navbar_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/navbar/navbar.json}

# URL for footer json
ARG footer_json
ENV REACT_APP_FOOTER_JSON ${footer_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/footer/footer.json}

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy only necessary files
COPY package*.json /usr/src/app/
COPY babel.rc /usr/src/app/
COPY jsconfig.json /usr/src/app/

RUN npm ci

# add necessary folders
ADD src src
ADD public public

# overwrite the client key file
ADD https://raw.githubusercontent.com/dictybase-playground/client-keys/2.0.0/clientConfig.js /usr/src/app/src/utils/clientConfig.js

RUN npm run build

FROM dictybase/static-server:1.0.0
RUN mkdir /www
WORKDIR /www
COPY --from=0 /usr/src/app/build ./
ENTRYPOINT ["/usr/local/bin/app", "run", "-f", "/www", "--vf", "/static", "--sub-url", "/stockcenter"]
