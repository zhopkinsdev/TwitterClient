const homeTimeline = (req, res, client) => {
  const params = { tweet_mode: 'extended', count: 10 };
   
  client
    .get(`statuses/home_timeline`, params)
    .then(timeline => res.json(timeline.data))
    .catch(error => {
    res.json(error);
  })
}

module.exports = {
  homeTimeline
}