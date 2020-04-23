import React from 'react';
import ReactPlayer from 'react-player';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <Container>
      <div className={classes.player}>
        <h1>HOW IT WORKS</h1>
        <ReactPlayer
          width={1170}
          height={500}
          url='https://youtu.be/VaKzNtwPQxE'
          playing
          controls
        />
      </div>

      <h2>For Doctors</h2>

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

      <h2>For Volunteers</h2>

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

      <h2>Disclaimer</h2>
      <p>It's important for both parties to take responsibiliity for evaluating which requests and offers to accept. Hospital Hero is run by volunteers, and we're not able to evaluate or verify the accuracy of any request/offer.</p>

      <p>If you face any problems or would love to inquire more information,
        email us through <a href="mailto:doctorally.project@gmail.com">doctorally.project@gmail.com</a>.
      </p>
    </Container>

  )
}

export default How_it_works
