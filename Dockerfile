FROM node:14.18-alpine3.14 

ARG navbar_json
ARG footer_json
ARG graphql_server
ARG ga_tracking_id
ARG client_keys
ARG basename
ARG deploy_env
ARG alt_graphql_server
ENV REACT_APP_NAVBAR_JSON ${navbar_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/navbar/navbar.json}
ENV REACT_APP_FOOTER_JSON ${footer_json:-https://raw.githubusercontent.com/dictyBase/migration-data/master/footer/footer-condensed.json}
ENV REACT_APP_GRAPHQL_SERVER ${graphql_server}
ENV REACT_APP_GA_TRACKING_ID ${ga_tracking_id}
ENV CLIENT_KEYS ${client_keys}
ENV REACT_APP_BASENAME ${basename:-stockcenter}
ENV DEPLOY_ENV ${deploy_env}
ENV REACT_APP_ALT_GRAPHQL_SERVER ${alt_graphql_server:-https://betagraphql.dictycr.org}
ENV CI true

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
