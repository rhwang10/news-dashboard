import React from 'react';
import Autosuggest from 'react-autosuggest'

// Component imports
import ArticlePage from './ArticlePage'

// Data import
import { sections as NYT_SECTIONS } from '../data/nytimes_top_sections'

// Style import
import '../styles/HomePage.css';

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

class HomePage extends React.Component {

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

    self.setState({
      redirect: false
    })

    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }

    self.setState({
      value: newValue,
      typing: false,
      typingTimeout: setTimeout(function () {
        self.runQuery()
      }, 1000)
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
    const { value, suggestions, redirect } = this.state

    const inputProps = {
      placeholder: "Search for a section",
      value,
      onChange: this.onChange
    }

    return (
      <div class="app-content">
        <header>
          <div class="homepage-content">
            <h1>Search the New York Times, intelligently</h1>
          </div>
          <div class="homepage-content">
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
          </div>
        </header>
        <div class="article-content">
          { redirect && value &&
            <ArticlePage section={value} />
          }
        </div>
      </div>
    )
  }
}

export default HomePage
