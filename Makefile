fake-api-server:
	docker run --name fake-api-server -d -p 9996:8080 dictybase/fake-dsc-server

dsc-server:
	docker run --name dsc-server -d -p 9994:9596 dictybase/dsc

start: fake-api-server dsc-server

stop-dsc-server:
	docker stop dsc-server
	docker rm dsc-server

stop-fake-server:
	docker stop fake-api-server
	docker rm fake-api-server

stop: stop-fake-server stop-dsc-server

restart: stop start

