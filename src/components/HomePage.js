import React from 'react';

// Component imports
import SearchBox from './SearchBox'

// Style import
import '../styles/HomePage.css';

class HomePage extends React.Component {

  render() {
    return (
      <div class="homepage">
        <header>
          <div class="homepage-content">
            <h1>Search the New York Times, intelligently</h1>
          </div>
          <div class="homepage-content">
            <SearchBox/>
          </div>
        </header>
        <body>
        </body>
      </div>
    )
  }
}

export default HomePage
