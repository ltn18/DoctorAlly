import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container, Box, Link } from '@material-ui/core';

import localeContext, { getText } from '../../context/localeCtx';

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
  },
  font: {
    fontFamily: 'Lexend Giga',
  },
  facebookLink: {
    color: "#1778F2"
  },
  instagramLink: {
    color: "#c32aa3"
  },
  linkedinLink: {
    color: "#007bb5"
  }
});

const DATA = [
  {
    id: 1,
    name: "Nhật Quang",
    role: "Backend Developer",
    imgURL: "nhatquang.jpg",
    facebookLink: "https://www.facebook.com/quang.sot.1412",
    instagramLink: "https://www.instagram.com/quang.sot.1412/",
    linkedinLink: ""
  },
  {
    id: 2,
    name: "Hoàng Minh",
    role: "Frontend Developer",
    imgURL: "hoangminh.jpg",
    facebookLink: "https://www.facebook.com/nhminh.mgf",
    instagramLink: "https://www.instagram.com/h0___og.minhng/",
    linkedinLink: ""
  },
  {
    id: 3,
    name: "Hoàng Lâm",
    role: "UI/UX Engineer",
    imgURL: "hoanglam.jpg",
    facebookLink: "https://www.facebook.com/hoanglam.295/",
    instagramLink: "https://www.instagram.com/lam.nguyen.cc/",
    linkedinLink: "https://www.linkedin.com/in/nguyentamhoanglam/"
  },
  {
    id: 4,
    name: "Hồng Minh",
    role: "Product Designer",
    imgURL: "hongminh.jpg",
    facebookLink: "https://www.facebook.com/hongminh4402",
    instagramLink: "https://www.instagram.com/hongminh4402/",
    linkedinLink: ""
  },
  {
    id: 5,
    name: "Tuấn Hoàng",
    role: "Business Strategy",
    imgURL: "tuanhoang.jpg",
    facebookLink: "https://www.facebook.com/nthoang84",
    instagramLink: "https://www.instagram.com/tuaanhoang84/",
    linkedinLink: "https://www.linkedin.com/in/nthoang84/"
  }
]

const DevCard = (props) => {
  const classes = useStyles();
  const { name, role, imgURL, facebookLink, instagramLink, linkedinLink } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgURL}
        />
        <CardContent>
          <Typography className={classes.font} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.font} variant="body2" color="textSecondary" component="p">
            {role}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link target="_blank" href={facebookLink} className={classes.facebookLink} target="_blank">
          Facebook
        </Link>
        <Link target="_blank" href={instagramLink} className={classes.instagramLink} target="_blank">
          Instagram
        </Link>
        <Link target="_blank" href={linkedinLink} className={classes.linkedinLink} target="_blank">
          LinkedIn
        </Link>
      </CardActions>
    </Card>
  )
}

export default function About() {
  const classes = useStyles();
  const locale = useContext(localeContext);

  return (
    <div>
      <h2 className={classes.h2}>{getText("about", "h2", locale.lang)}</h2>
      <h3 className={classes.h3}>{getText("about", "h3", locale.lang)}</h3>
      <Box color="text.primary" className={classes.box}>{getText("about", "box", locale.lang)}</Box>
      <Container max-width="sm" className={classes.container}>
        {DATA.map((item) => (
          <DevCard
            name={item.name}
            role={item.role}
            imgURL={item.imgURL}
            facebookLink={item.facebookLink}
            instagramLink={item.instagramLink}
            linkedinLink={item.linkedinLink}
          />
        ))}
      </Container>
    </div>

  );
}

