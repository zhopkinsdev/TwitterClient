## Twitter Client

*Twitter client* is a single page application which initially shows general public tweets. Allows the user to specify a Twitter handle to view the tweets from. When a user requests a specific Twitter handle and the UI shows the latest tweets from that handle, ability to filter / search tweets by text

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
To run test in Docker:
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
