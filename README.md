## Twitter Client

A simple *Twitter client* that initially shows general public tweets. It allows the user to specify a Twitter handle to view tweets from. After requesting tweets from a specific user, you can filter/search tweets by text.

### Technology

- ReactJS/Redux
- NodeJs
- Express

### Deployment

In the /back folder find .env_sample file. Copy and rename it to .env
Paste your Twitter API keys. (It won't work without API keys)

You can use Docker to run the project

```sh
docker-compose build
docker-compose up
```
To run tests in Docker:
1. Run `docker-compose up -d` (Start docker in background)
2. Run `docker-compose exec front bash` (To enter bash)
3. Run tests with `npm test`

OR
Run following commands in each folders: /back; /front
1. Run `npm install`
2. Run `npm start`
3. Run tests with `npm test` -- you may have to press "a" to run all tests

To open  - localhost:3000

### Manual

* Interface is simple and there shouldn't be any issues using it.
* Home button - for receiving timeline tweets (after searching specific user)
* Input form with 'user name' placeholder - for searching a specific user (to execute press 'Enter')
* After launching a search a second Input form with a placeholder 'filter tweets' becomes active. You can filter tweets from a user 
