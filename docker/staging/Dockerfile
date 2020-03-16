FROM dictybase/frontend-builder:staging
LABEL maintainer "Siddhartha Basu <siddhartha-basu@northwestern.edu>"
LABEL maintainer "Eric Hartline <eric.hartline@northwestern.edu>"

# base path for React Router
ARG basename
ENV REACT_APP_BASENAME ${basename:-stockcenter}

# Google Analytics tracking ID
ARG ga_tracking_id
ENV REACT_APP_GA_TRACKING_ID ${ga_tracking_id:-UA-16352781-8}

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy only necessary files
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

# add necessary folders
ADD src src
ADD public public

# overwrite the client key file
ADD $CLIENT_KEYS /usr/src/app/src/utils/clientConfig.ts

RUN npm run build

FROM dictybase/static-server:1.0.0
RUN mkdir /www
WORKDIR /www
COPY --from=0 /usr/src/app/build ./
ENTRYPOINT ["/usr/local/bin/app", "run", "-f", "/www", "--vf", "/static", "--sub-url", "/stockcenter"]
