import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router-dom'

class ArticleCard extends React.Component {


  componentWillReceiveProps(nextProps) {
    this.render()
  }

  render () {
    const articleData = this.props.article
    const articleUrl = this.props.article.url

    return (
      <div class="article-card">
        {articleData && articleData.multimedia[4] &&
          <Card>
              <CardMedia
                component="img"
                class="article-card-image"
                src={articleData.multimedia[4].url}
              />
            <div class="article-card-content">
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {articleData.title}
                </Typography>
                <Typography component="p">
                  {articleData.abstract}
                </Typography>
              </CardContent>
              <CardActions>
                <a href={articleUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="small" color="primary">
                    Link
                  </Button>
                </a>
              </CardActions>
            </div>
          </Card>
        }
      </div>
    )
  }
}

export default withRouter(ArticleCard);
