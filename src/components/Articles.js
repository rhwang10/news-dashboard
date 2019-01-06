import React from 'react'
import axios from 'axios'
import { config } from '../configs/config'

import ArticleCard from './ArticleCard'

class Articles extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get(`${config.NYT_TOP_API_URL}/${this.props.sectionName}.json?api-key=${config.NYT_API_KEY}`)
      .then(response => {
        const articles = response.data.results
        this.setState({ articles })
      }).catch(error => {
        console.log(error)
      })
  }

  render() {

    return (
      <div class="articles-total">
        { this.state && this.state.articles &&
          this.state.articles.map((article, index) => <ArticleCard key={index} article={article}/>)
        }
      </div>
    )
  }
}

export default Articles
