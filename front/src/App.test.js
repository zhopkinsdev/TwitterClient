import React from 'react';
import { shallow } from 'enzyme';
import { App }  from './App';
import FilterTweet from './components/FilterTweets/FilterTweets.component';

describe('App component', () => {
  const mockProps = {
    homeTweets: { uid: '123'},
    hidden: true
  }

  let wrapper = shallow(<App {...mockProps}/>)

  describe('FilterTweet', () => {
    it('should not render FilterTweet', () => {
      const mockProps = {
        homeTweets: { uid: '123'},
        hidden: true
      }
      const newWrapper = shallow(<App {...mockProps}/>)
      
      expect(newWrapper.exists(FilterTweet)).toBe(false)
    
    })
  })

  it('should render FilterTweet', () => {
    const mockProps = {
      homeTweets: { uid: '123'},
      hidden: false
    }
    const newWrapper = shallow(<App {...mockProps}/>)

    expect(newWrapper.exists(FilterTweet)).toBe(true)
  
  
})
})