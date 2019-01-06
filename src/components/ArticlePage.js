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
    const { match: { params } } = this.props
    const sectionName = params.sectionName
    this.setState({ sectionName })
  }

  render () {
    return (
      <div className="article-page">
        <header className="article-page-header">
          <CustomTrend/>
        </header>
        <body>
        { this.state && this.state.sectionName &&
          <Articles sectionName={this.state.sectionName}></Articles>
        }
        </body>
      </div>
    );
  }
}

export default ArticlePage;
