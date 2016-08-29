TAG_COMMIT_ID = $(shell git rev-list --tags --max-count=1)
LATEST_TAG = $(shell git describe --tags $(TAG_COMMIT_ID))

fake-api-server:
	docker run --name fake-api-server -d -p 9900:8080 dictybase/fake-dsc-server

dsc-server:
	docker run --name dsc-server -d -p 9994:9596 dictybase/dsc:dev

start: fake-api-server dsc-server

stop-dsc-server:
	docker stop dsc-server
	docker rm dsc-server

stop-fake-server:
	docker stop fake-api-server
	docker rm fake-api-server

stop: stop-fake-server stop-dsc-server

restart: stop start

show-latest-tag:
	@echo $(LATEST_TAG)

build-dev:
	docker build --rm -t dictybase/dsc:dev .

build-staging-untagged:
	docker build --rm --build-arg api_server=https://betatest.dictybase.org/fakeapi/stockcenter \
	--build-arg basename=/stockcenter \
	--build-arg client_keys=client/hush.js \
	--build-arg auth_server=https://betatest.dictybase.org/api/authserver \
	-t dictybase/dsc:staging .

build-staging-tagged:
	docker build --rm --build-arg api_server=https://betatest.dictybase.org/fakeapi/stockcenter \
	--build-arg basename=/stockcenter \
	--build-arg client_keys=client/hush.js \
	--build-arg auth_server=https://betatest.dictybase.org/api/authserver \
	-t dictybase/dsc:staging-$(LATEST_TAG) .

build-staging: build-staging-untagged build-staging-tagged
		

