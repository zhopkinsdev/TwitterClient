import React from 'react';
import { shallow } from 'enzyme';
import { TweetList }  from './TweetList.component';

describe('TweetList component', () => {
  
  let wrapper

  it('fileters tweets', () => {
    const mockProps = {
      tweets: [],
      filterWord: ''
    }
    wrapper = shallow(<TweetList {...mockProps}/>)
    expect(wrapper.instance().filterTweets([],'')).toEqual([]);
  });

  it('fileters tweets correctly', () => {
    const filteredTweets = [{
      text: 'test'
    }]

    const  tweets = [{text: 'asdf'}, {text: 'test'}]
    const  filterWord = 'test'
    
    wrapper = shallow(<TweetList/>)
    expect(wrapper.instance().filterTweets(tweets,filterWord)).toEqual(filteredTweets);
  });
})
