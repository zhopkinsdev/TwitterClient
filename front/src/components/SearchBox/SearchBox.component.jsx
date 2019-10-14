import React, {Component} from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/search_user/search_user.actions';
import { searchUser } from '../../redux/search_user/search_user.actions';
import { setCurrentUserTweets } from '../../redux/user/user.actions';

import * as Consts from '../../consts'


export class SearchBox extends Component {
  constructor(props){
    super(props)
      this.state = {
        input: ''
      }
    }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
//Search tweets for specified user 
//-----------------------------------------------------------------------
  searchUser = () => {
    if(this.state.input !== ''){
      this.props.toggleCartHidden(false)
      this.props.searchUser(this.state.input)
      

      this.executeSearchFunction(this.state.input)
      // this.fetchTweets(this.state.input)
      // this.setInterval = setInterval(() => {
      //   this.fetchTweets(this.state.input)}, 6000
      // )
      this.setState({input: ''})
  }
}
//-----------------------------------------------------------------------
executeSearchFunction = (input) => {
    this.fetchTweets(input)
    //SetInterval is not working correctly. Better to execute in a new
    //component in componentDidMount()

    // this.setInterval = setInterval(() => {
    //   this.fetchTweets(input)}, 6000)


}
//-----------------------------------------------------------------------
fetchTweets = (user) => {
    fetch(Consts.HOST+Consts.PORT+'/user', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          user: user
        })
      })
      .then(response=> response.json())
      .then(userTweets => this.props.setCurrentUserTweets(userTweets))
      .catch(err => console.log('Unable to fetch selected user timeline: ', err))
    
}
//-----------------------------------------------------------------------
  render(){

      //this.interval remains undefined even after assigning to setInterval()

      // console.log('this.interval: ', this.interval)
      // if(this.interval){
      //   console.log('clear interval')
      //   clearInterval(this.interval)
      //   this.interval = undefined
      //}
      
    
    return (
      <div className='pa2'>
        <input
          className='pa3 ba b--light-blue mb4 br4 shadow-5'
          type='search'
          value={this.state.input}
          placeholder='user name'
          onChange={this.onInputChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.searchUser()
            }
          }}
        />
      </div>
  );
  }
  
}

const mapStateToProps = ({searchUser: {searchUser}}) => ({
  searchUser
});
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: boolValue => dispatch(toggleCartHidden(boolValue)),
  searchUser: user => dispatch(searchUser(user)),
  setCurrentUserTweets: homeTweets => dispatch(setCurrentUserTweets(homeTweets))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
