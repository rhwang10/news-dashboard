import React, { Component } from 'react';

// Style import
import '../styles/ArticlePage.css';

// Component Imports
import Articles from './Articles'
import CustomTrend from './CustomTrend'

class ArticlePage extends Component {
  state = {
    sectionName: '',
  }

  componentDidMount() {
    const sectionName = this.props.section
    this.setState({ sectionName })
  }

  render () {
    return (
      <div className="article-page">
        { this.state && this.state.sectionName &&
          <Articles sectionName={this.state.sectionName}></Articles>
        }
      </div>
    );
  }
}

export default ArticlePage;
