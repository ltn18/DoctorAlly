import React, { useContext } from 'react';
import ReactPlayer from 'react-player';

import localeContext, { getLongLineText } from '../context/localeCtx';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const WEBSITE_EMAIL = "doctorally.project@gmail.com";

const useStyles = makeStyles((theme) => ({
  player: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: '10px',
    padding: 10,
  },
}));

const How_it_works = () => {
  const classes = useStyles();
  const locale = useContext(localeContext);

  return (
    <Container>
      <div className={classes.player}>
        <h1>{getLongLineText(locale.lang, "how_it_works", "title", null)}</h1>
        <ReactPlayer
          width={1170}
          height={500}
          url='https://youtu.be/VaKzNtwPQxE'
          muted
          playing
          controls
        />
      </div>

      <h2>{getLongLineText(locale.lang, "how_it_works", "for_doctors", "title")}</h2>

      <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
      <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
      <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
      <ul>
        <li>Provide, operate, and maintain our webste</li>
        <li>Improve, personalize, and expand our webste</li>
        <li>Understand and analyze how you use our webste</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ul>

      <h2>{getLongLineText(locale.lang, "how_it_works", "for_volunteers", "title")}</h2>
      <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
      <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
      <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
      <ul>
        <li>Provide, operate, and maintain our webste</li>
        <li>Improve, personalize, and expand our webste</li>
        <li>Understand and analyze how you use our webste</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
      </ul>

      <h2>{getLongLineText(locale.lang, "how_it_works", "notice", "title")}</h2>
      <p>{getLongLineText(locale.lang, "how_it_works", "notice", "description")}</p>

      <p>{getLongLineText(locale.lang, "how_it_works", "footer", null)}<a href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</a>.
      </p>
    </Container>

  )
}

export default How_it_works
