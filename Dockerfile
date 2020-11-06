FROM dictybase/frontend-builder:latest

ARG graphql_server
ENV REACT_APP_GRAPHQL_SERVER ${graphql_server}

ARG ga_tracking_id
ENV REACT_APP_GA_TRACKING_ID ${ga_tracking_id}

ARG client_keys
ENV CLIENT_KEYS ${client_keys}

ARG basename
ENV REACT_APP_BASENAME ${basename:-stockcenter}

ARG deploy_env
ENV DEPLOY_ENV ${deploy_env}

ARG alt_graphql_server
ENV REACT_APP_ALT_GRAPHQL_SERVER ${alt_graphql_server:-https://betagraphql.dictycr.org}

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.json ./
COPY yarn.lock ./

RUN yarn install

ADD src src
ADD public public
ADD $CLIENT_KEYS /usr/src/app/src/common/utils/clientConfig.js

RUN yarn build

FROM dictybase/static-server:2.2.1
RUN mkdir /www
WORKDIR /www
COPY --from=0 /usr/src/app/build ./
ENTRYPOINT ["/usr/local/bin/app", "run", "-f", "/www", "--sub-url", "/stockcenter"]
