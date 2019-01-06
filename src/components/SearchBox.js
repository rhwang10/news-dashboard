import React from 'react'
import Autosuggest from 'react-autosuggest'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'

const NYT_SECTIONS = [
  {
    type: 'top-stories',
    section: 'home'
  },
  {
    type: 'top-stories',
    section: 'opinion'
  },
  {
    type: 'top-stories',
    section: 'world'
  },
  {
    type: 'top-stories',
    section: 'national'
  },
  {
    type: 'top-stories',
    section: 'politics'
  },
  {
    type: 'top-stories',
    section: 'upshot'
  },
  {
    type: 'top-stories',
    section: 'nyregion'
  },
  {
    type: 'top-stories',
    section: 'business'
  },
  {
    type: 'top-stories',
    section: 'technology'
  },
  {
    type: 'top-stories',
    section: 'science'
  },
  {
    type: 'top-stories',
    section: 'health'
  },
  {
    type: 'top-stories',
    section: 'sports'
  },
  {
    type: 'top-stories',
    section: 'arts'
  },
  {
    type: 'top-stories',
    section: 'books'
  },
  {
    type: 'top-stories',
    section: 'movies'
  },
  {
    type: 'top-stories',
    section: 'theater'
  },
  {
    type: 'top-stories',
    section: 'sundayreview'
  },
  {
    type: 'top-stories',
    section: 'fashion'
  },
  {
    type: 'top-stories',
    section: 'tmagazine'
  },
  {
    type: 'top-stories',
    section: 'food'
  },
  {
    type: 'top-stories',
    section: 'travel'
  },
  {
    type: 'top-stories',
    section: 'magazine'
  },
  {
    type: 'top-stories',
    section: 'realestate'
  },
  {
    type: 'top-stories',
    section: 'automobiles'
  },
  {
    type: 'top-stories',
    section: 'obituaries'
  },
  {
    type: 'top-stories',
    section: 'insider'
  }
]

function getSuggestions(value) {
  const input = value.trim().toLowerCase()
  const length = value.length

  return NYT_SECTIONS.filter(topStories =>
    topStories.section.toLowerCase().slice(0, length) === input
  )
}

function getSuggestionValue(suggestion) {
  return suggestion.section
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.section}</span>
  )
}

function shouldRenderSuggestions() {
  return true;
}


class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      redirect: false,
      typing: false,
      typingTimeout: 0,
    }
  }

  onChange = (event, { newValue }) => {

    const self = this;

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      value: newValue,
      typing: false,
      typingTimeout: setTimeout(function () {
        console.log("user has stopped typing for some time, run the query")
      }, 5000)
    })
  }


  // onChange = (event, { newValue }) => {
  //   this.setState({
  //     value: newValue
  //   })
  // }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  runQuery = () => {
    this.setState({
      redirect: true
    })
  }

  render() {
    const { value, suggestions,redirect } = this.state

    const inputProps = {
      placeholder: "Search for a section",
      value,
      onChange: this.onChange
    }

    if (redirect && value) {
      this.props.history.push('/articles/' + value)
      return <Redirect to={"/articles/" + value} />
    }

    return (
      <div class="search-bar">
        <Autosuggest
          suggestions = {suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          shouldRenderSuggestions={shouldRenderSuggestions}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    )
  }
}


export default withRouter(SearchBox);
