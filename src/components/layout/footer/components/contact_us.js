import React, { useContext } from 'react';

import { Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import localeContext, { getText } from '../../../context/localeCtx';

const [facebookLink, instagramLink, gmailLink, linkedinLink] = [
  "https://www.facebook.com/doctorally.project/",
  "https://www.instagram.com/doctorally.project/",
  "mailto:doctorally.project@gmail.com",
  "https://www.linkedin.com/company/doctorally/"
]

const useStyles = makeStyles({
  root: {
    width: 550,
    height: 650,
    margin: '40px',
    borderRadius: '20px',
  },
  media: {
    height: 140,
  },
  title: {
    "&:hover": {
      cursor: 'pointer'
    }
  },
  font: {
    fontFamily: 'Lexend Giga',
  },
});

const contactData = [
  {
    id: 0,
    title: "Facebook",
    description: "",
    imgURL: "facebook.png",
    backgroundColor: '#1877f2',
    color: '#ffffff',
    link: facebookLink
  },
  {
    id: 1,
    title: "Instagram",
    description: "",
    imgURL: "instagram.png",
    backgroundColor: '#DD2A7B',
    color: 'white',
    link: instagramLink
  },
  {
    id: 2,
    title: "Gmail",
    description: "",
    imgURL: "gmail.png",
    backgroundColor: '#B23121',
    color: 'white',
    link: gmailLink
  },
  {
    id: 3,
    title: "LinkedIn",
    description: "",
    imgURL: "linkedin.png",
    backgroundColor: '#0E76A8',
    color: 'white',
    link: linkedinLink
  }
]

const Contact_us = () => {
  const classes = useStyles();
  const locale = useContext(localeContext);

  const ContactCard = (props) => {
    const { title, description, imgURL, backgroundColor, color, link } = props;
    return (
      <Card className={classes.root} style={{ backgroundColor }}>
        <CardMedia
          className={classes.media}
          image={imgURL}
          title={title}
          style={{ height: 550 }}
        />
        <CardContent >
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            <Link target="_blank" className={classes.font} href={link} style={{ color }}>{title}</Link>
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
        <div style={{ marginTop: '30px', alignSelf: 'center', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 25, fontWeight: 'bold' }}>{getText("contact_us", "title", locale.lang)}</span>
          <span style={{ fontSize: 20, fontStyle: 'italic' }}>
            &nbsp; &nbsp; {getText("contact_us", "description", locale.lang)}
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {
            contactData.filter(item => item.id % 4 == 0 || item.id % 4 == 1).map((item) => (
              <ContactCard
                color={item.color}
                backgroundColor={item.backgroundColor}
                title={item.title}
                description={item.description}
                imgURL={item.imgURL}
                link={item.link}
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
                link={item.link}
              />
            ))
          }
        </div>
      </Container>
    </>
  );
}

export default Contact_us