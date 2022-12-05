# Movie Api - Empowerment labs backend

## Description

NestJS App that allows to set movies as favorite and to create comments associated with a movie. 

### requirements 

- Node.js v16 or higher
- Typescript v4.4 or higher
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- MongoDB v6
- npm 6 or higher

## Installation

```bash
$ npm install
```

## Running the app
First you need a proper .env file, you will find an example with the environment variables required to start the project.

```bash
cp .env.example .env
```
Then you can run the project, I recommend to use the watch mode:

```bash
# development
$ npm run start

# watch mode -- RECOMMENDED
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Documentation
This project uses compodoc for the documentation. On the movie-use-case.ts file there is an example of the documentation comments.

Execute 

```bash
npx @compodoc/compodoc -p tsconfig.json -s
```

Then you can open your browser and navigate to [the documentation](http://localhost:8080/)

## Swagger (openapi)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - Juan Sebastian Cifuentes

