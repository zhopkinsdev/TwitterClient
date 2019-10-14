import React, {Component} from 'react';
import { connect } from 'react-redux';

import { setCurrentUserTweets } from '../../redux/user/user.actions';
import { filterTweets } from '../../redux/search_user/search_user.actions';


class FilterTweets extends Component {


  onInputChange = (event) => {
    this.props.filterTweets(event.target.value)
  }

  render(){
    const {searchUser} = this.props
  
    return(
      <div className='tc'>
        <h1 className="f4 lh-copy">Filter tweets for @{searchUser}</h1>
        <input
        className='pa3 ba b--light-blue br4 mb4 shadow-5'
        type='search'
        placeholder='filter tweets'
        onChange={this.onInputChange}
      />
      </div>
      
    )
  }
}

const mapStateToProps = ({searchUser: {searchUser}}) => ({
  searchUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUserTweets: homeTweets => dispatch(setCurrentUserTweets(homeTweets)),
  filterTweets: filterWord => dispatch(filterTweets(filterWord))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterTweets);