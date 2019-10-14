import React, { Component } from 'react';
import TweetList from './components/Tweets/TweetList.component';
import SearchBox from './components/SearchBox/SearchBox.component';
import Scroll from './components/Scroll/Scroll.component';
import FilterTweet from './components/FilterTweets/FilterTweets.component';
import ErrorBoundry from './components/ErrorBoundary/ErrorBoundary.component';

import { connect } from 'react-redux';
import { setCurrentUserTweets } from './redux/user/user.actions';
import { toggleCartHidden } from './redux/search_user/search_user.actions';
import { filterTweets } from './redux/search_user/search_user.actions';
import { searchUser } from './redux/search_user/search_user.actions';
import * as Consts from './consts'

export class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        searchInput: ''
      }
  }

  componentDidMount() {
    //show general public tweets
    this.fetchHomeTimeline()
  }

//-----------------------------------------------------------------------
  fetchHomeTimeline = () => {
    const {setCurrentUserTweets} = this.props
    fetch(Consts.HOST+Consts.PORT+'/home_timeline', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response=> response.json())
    .then(userTweets => setCurrentUserTweets(userTweets))
    .catch(err => console.log('Unable to fetch home timeline: ', err))
  }
//Removes filters and returns general tweets
//-----------------------------------------------------------------------
  homeButton = () => {
    if(!this.props.hidden){
      this.props.toggleCartHidden(true)
      this.props.searchUser('')
      this.props.filterTweets('')
      this.fetchHomeTimeline()
      
    }
  }
//-----------------------------------------------------------------------
  render() {
    //homeTweets - displayed tweets; hidden - filter input appears after user search
    const { homeTweets, hidden } = this.props;

    return (
      <div>
        <button
            className='f6 link dim br-pill ma3 ph3 pv2 mb2 white bg-dark-blue shadow-5'
            onClick={this.homeButton}
          >HOME</button>

        <div className='tc'>
          <h1 className='f1'>Twitter Client Rav</h1>
          <SearchBox/>
          {hidden ? null : <FilterTweet/>}
          <Scroll>
            { !homeTweets.length  ? <h1>Loading...</h1> :
              <ErrorBoundry>
                <TweetList/>
              </ErrorBoundry>
            }
          </Scroll>
        </div>
      </div>
      
      );
  }
}

const mapStateToProps = ({user: {homeTweets}, searchUser:{hidden}}) => ({
  homeTweets,
  hidden

});

const mapDispatchToProps = dispatch => ({
  setCurrentUserTweets: homeTweets => dispatch(setCurrentUserTweets(homeTweets)),
  toggleCartHidden: boolValue => dispatch(toggleCartHidden(boolValue)),
  filterTweets: filterWord => dispatch(filterTweets(filterWord)),
  searchUser: user => dispatch(searchUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);