import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container, Box, Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
    width: 345,
  },
  media: {
    height: 350,
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
  box: {
    justifyContent: "center",
    display: "flex"
  }
});

const DATA = [
  {
    id: 1,
    name: "Nhật Quang",
    role: "Developer",
    imgURL: "nhatquang.jpg",
    facebookLink: "https://www.facebook.com/quang.sot.1412",
    instagramLink: "https://www.instagram.com/quang.sot.1412/",
    linkedinLink: ""
  },
  {
    id: 2,
    name: "Hoàng Minh",
    role: "Developer",
    imgURL: "hoangminh.jpg",
    facebookLink: "https://www.facebook.com/nhminh.mgf",
    instagramLink: "https://www.instagram.com/h0___og.minhng/",
    linkedinLink: ""
  },
  {
    id: 3,
    name: "Hoàng Lâm",
    role: "Developer",
    imgURL: "hoanglam.jpg",
    facebookLink: "https://www.facebook.com/hoanglam.295/",
    instagramLink: "https://www.instagram.com/lam.nguyen.cc/",
    linkedinLink: ""
  },
  {
    id: 4,
    name: "Hồng Minh",
    role: "Developer",
    imgURL: "hongminh.jpg",
    facebookLink: "https://www.facebook.com/hongminh4402",
    instagramLink: "https://www.instagram.com/hongminh4402/",
    linkedinLink: ""
  },
  {
    id: 5,
    name: "Tuấn Hoàng",
    role: "Developer",
    imgURL: "tuanhoang.jpg",
    facebookLink: "https://www.facebook.com/nthoang84",
    instagramLink: "https://www.instagram.com/tuaanhoang84/",
    linkedinLink: ""
  }
]

const DevCard = (props) => {
  const classes = useStyles();
  const { name, role, imgURL, facebookLink, instagramLink, linkedinLink, linkColor } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={facebookLink} color={linkColor} target="_blank">
          Facebook
        </Link>
        <Link href={instagramLink} color={linkColor} target="_blank">
          Instagram
        </Link>
        <Link href={linkedinLink} color={linkColor} target="_blank">
          LinkedIn
        </Link>
      </CardActions>
    </Card>
  )
}

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
        {DATA.map((item) => (
          <DevCard
            name={item.name}
            role={item.role}
            imgURL={item.imgURL}
            facebookLink={item.facebookLink}
            instagramLink={item.instagramLink}
            linkedinLink={item.linkedinLink}
            linkColor="primary"
          />
        ))}
      </Container>
    </div>

  );
}

