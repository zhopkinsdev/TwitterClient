import React, {Component} from 'react';
import Tweet from './Tweet.component';
import { connect } from 'react-redux';

export class TweetList extends Component {
  
  filterTweets = (tweets, filterWord) => {
    return tweets.filter(tweet => {
      return tweet.text.toLowerCase().includes(filterWord.toLowerCase());
  })
}
  render(){
    const { homeTweets, filterWord, searchUser} = this.props

    //in the homeTimeline tweets there is 'full_text', 
    //in tweets from a specified user is 'text'; filterWord shouldn't be empty
    let filteredTweets = homeTweets
    if(filterWord){
      filteredTweets = this.filterTweets(homeTweets, filterWord)
    }
    console.log('searchUser: ', this.props.searchUser )
 
    return (
      <div className='tc'>
        {!filteredTweets ? null :
        filteredTweets.map((tweet, i) => {
            return (
              <>
              {searchUser ?
                  <Tweet
                    key={i}
                    image={tweet.user.profile_image_url}
                    id={tweet.user.screen_name}
                    text={tweet.text}
                  />
                  :
                  <Tweet
                    key={i}
                    image={tweet.user.profile_image_url}
                    id={tweet.user.screen_name}
                    text={tweet.full_text}
                    />
              }
              </>
            );
          })
        }
      </div>
  );
  }
}

const mapStateToProps = ({user: {homeTweets},  searchUser: {filterWord, searchUser}}) => ({
  homeTweets,
  filterWord,
  searchUser
});

export default connect(mapStateToProps)(TweetList);
