name=node-app

all: build deploy

build:
	docker build . -t $(name)

deploy:
	docker run -p 42069:8080 -d $(name)
