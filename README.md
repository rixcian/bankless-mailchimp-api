# Bankless Mailchimp API

## Used Technologies
- Node.js
- Typescript
- Express.js

## Development
1. Clone this repo
2. Install dependencies with `yarn install`
3. Rename `.env.sample` to `.env`
4. Update variables in `.env` file
5Run project in development mode with `yarn dev`

## Deployment

1. Clone this repo to deployment server
2. Install dependencies `yarn install`
3. Rename `.env.sample` to `.env`
4. Update variables in `.env` file
5. Build app with `yarn build`
6. Create `frontend` folder inside `./dist`
7. Copy built React app into `./dist/frontend` folder


## Commands
All commands are specified inside `package.json` file

### `yarn dev`
Running app in `development` mode (auto-compile & auto-restart after change). 

### `yarn build`
Builds app into `dist` folder

### `yarn start`
Running built app from `dist` folder


## Deployment
1. `$ docker build . -t node-typescript-api`
2. `$ docker run -p 8000:8000 -d --env-file .env --name api-starter node-typescript-api:latest`


## Linters
`TODO`
