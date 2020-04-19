import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    width: 345
  },
  media: {
    height: 140,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  h2: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  h3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  box:{
    justifyContent:"center",
    display:"flex"
  }
});

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.h2}> Our Team </h2>
      <h3 className={classes.h3}>Healthcare workers need our help to fight COVID-19</h3>
      <Box color="text.primary" className={classes.box}>
      Volunteer your time or request support for meals, pet care, errands, and more during the COVID-19 pandemic.
      </Box>
      <Container max-width="sm" className={classes.container}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Nhật Quang
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Developer
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Facebook
            </Button>

            <Button size="small" color="primary">
              Instagram
        </Button>

            <Button size="small" color="primary">
              LinkedIn
        </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hoàng Lâm
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Developer
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Facebook
            </Button>

            <Button size="small" color="primary">
              Instagram
        </Button>

            <Button size="small" color="primary">
              LinkedIn
        </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hoàng Minh
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Developer
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Facebook
            </Button>

            <Button size="small" color="primary">
              Instagram
        </Button>

            <Button size="small" color="primary">
              LinkedIn
        </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hồng Minh
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Developer
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Facebook
            </Button>

            <Button size="small" color="primary">
              Instagram
        </Button>

            <Button size="small" color="primary">
              LinkedIn
        </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tuấn Hoàng
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Developer
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Facebook
            </Button>

            <Button size="small" color="primary">
              Instagram
        </Button>

            <Button size="small" color="primary">
              LinkedIn
        </Button>
          </CardActions>
        </Card>
      </Container>
    </div>

  );
}

