# Bankless Mailchimp API
We used Mailchimp API for sending newsletter to our subscribers. So this REST API is due to registering new subscribers to MailChimp.

## Used Technologies
- Node.js
- Typescript
- Express.js

## Development
1. Clone this repo
2. Install dependencies with `yarn install`
3. Rename `.env.sample` to `.env`
4. Update variables in `.env` file
5. Run project in development mode with `yarn dev`

## Deployment
0. *[PREDISPOSITION]: Install Docker on deployment server*
1. Clone this repo to deployment server
2. Rename `.env.sample` to `.env`
3. Update variables in `.env` file
4. Run `./deploy.sh` script
5. App is default running on port `8001`


## Commands
All commands are specified inside `package.json` file

### `yarn dev`
Running app in `development` mode (auto-compile & auto-restart after change). 

### `yarn build`
Builds app into `dist` folder

### `yarn start`
Running built app from `dist` folder
