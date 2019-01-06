import React from 'react'
import axios from 'axios'
import { config } from '../configs/config'
import ArticleCard from './ArticleCard'

require('dotenv').config()

class Articles extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    const api_key = process.env.NYT_API_KEY
    const api_url = process.env.NYT_TOP_API_URL
    
    axios.get(`${api_url}/${this.props.sectionName}.json?api-key=${api_key}`)
      .then(response => {
        const articles = response.data.results
        console.log(articles)
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
