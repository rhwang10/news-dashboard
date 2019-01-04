import React from 'react';

class ArticleCard extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.render()
  }

  render () {
    const articleData = this.props.article

    return (
      <div class="articleCard">
        <div class="articleCard_details">
          {articleData.abstract}
        </div>
      </div>
    )
  }
}

export default ArticleCard
