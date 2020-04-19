import React from 'react';

import { Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 500,
    height: 250,
    margin: '40px'
  },
  media: {
    height: 140,
  },
  title: {
    "&:hover": {
      cursor: 'pointer'
    }
  }
});

const contactData = [
  {
    id: 0,
    title: "Facebook",
    description: "",
    imgURL: "AAAAAA",
    backgroundColor: '#1877f2',
    color: '#ffffff'
  },
  {
    id: 1,
    title: "Instagram",
    description: "",
    imgURL: "",
    backgroundColor: '#DD2A7B',
    color: 'white'
  },
  {
    id: 2,
    title: "Gmail",
    description: "",
    imgURL: "",
    backgroundColor: '#B23121',
    color: 'white'
  },
  {
    id: 3,
    title: "LinkedIn",
    description: "",
    imgURL: "",
    backgroundColor: '#0E76A8',
    color: 'white'
  }
]

const Contact_us = () => {
  const classes = useStyles();

  const ContactCard = (props) => {
    const { title, description, imgURL, backgroundColor, color } = props;
    return (
      <Card className={classes.root} style={{ backgroundColor }}>
        <CardMedia
          className={classes.media}
          image={imgURL}
          title={title}
        />
        <CardContent >
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            <Link style={{ color }}>{title}</Link>
          </Typography>
          <Typography style={{ color }} variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    )
  }

  console.log(contactData);
  return (
    <>
      <Container style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {
            contactData.filter(item => item.id % 4 == 0 || item.id % 4 == 1).map((item) => (
              <ContactCard
                color={item.color}
                backgroundColor={item.backgroundColor}
                title={item.title}
                description={item.description}
                imgURL={item.imgURL}
              />
            ))
          }
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {
            contactData.filter(item => item.id % 4 == 2 || item.id % 4 == 3).map(item => (
              <ContactCard
                color={item.color}
                backgroundColor={item.backgroundColor}
                title={item.title}
                description={item.description}
                imgURL={item.imgURL}
              />
            ))
          }
        </div>
      </Container>
    </>
  );
}

export default Contact_us
