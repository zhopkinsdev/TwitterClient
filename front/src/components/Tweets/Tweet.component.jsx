import React from 'react';

const Tweet = ({image, id, text }) => {
  return (
  //it's better to use pure css for more control
  //cards are not even; need to fix (for simplicity used tachyons)
  <div className='tc grow mw5 bg-white br3 pa3 ma2 dib bw2 b--black-10 shadow-5'>   
  <img alt='robots' src={image} className="br-100 h3 w3 dib" />
      <div>
        <h2>{id}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Tweet;