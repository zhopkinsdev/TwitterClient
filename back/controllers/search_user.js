const tweetsFromUser = (req, res, client) => {
  const {user} = req.body
  const params = { screen_name: user, count: 10 };
   
  client
      .get(`statuses/user_timeline`, params)
      .then(timeline => res.json(timeline.data))
      .catch(error => {
      res.json(error);
    });
}

module.exports = {
  tweetsFromUser
}