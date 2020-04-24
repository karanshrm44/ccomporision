import React from 'react';
import './App.css';
import tweets from './data';
import {TwitterTweetEmbed} from 'react-twitter-embed';

function App() {

  let mapItem =  (item) => (
    <div className = "tweet-box">
        <TwitterTweetEmbed tweetId = {item.id} />
    </div>
  )
  return (
    <div className="App">
        <h1 style = {{
          color:'#fff',
          fontSize:40,
          margin:0,
          marginLeft:'auto',
          marginRight:'auto',
          textAlign:'center',
          paddingTop:25
        }}>Concur Customer Review</h1>
        <div className = "concur-box">
            {
              tweets.map(mapItem)
            }
        </div>
    </div>
  );
}

export default App;
