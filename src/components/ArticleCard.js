import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ArticleCard extends React.Component {


  componentWillReceiveProps(nextProps) {
    this.render()
  }

  render () {
    const articleData = this.props.article

    return (
      <div class="article-card">
        {articleData && articleData.multimedia[0] &&
          <Card>
              <CardMedia
                component="img"
                class="article-card-image"
                src={articleData.multimedia[4].url}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {articleData.title}
              </Typography>
              <Typography component="p">
                {articleData.abstract}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        }
      </div>
    )
  }
}

export default ArticleCard
