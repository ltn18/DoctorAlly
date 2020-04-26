import React, { useContext } from 'react';

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
  const locale = useContext(localeContext);

  return (
    <Container style={{ fontFamily: 'Faustina' }}>

      <h2>{getLongLineText(locale.lang, "how_it_works", "h2_general", "title")}</h2>
      <p>{getLongLineText(locale.lang, "how_it_works", "h2_general", "p1")}</p>
      <p>{getLongLineText(locale.lang, "how_it_works", "h2_general", "p2")}</p>
      <ul>
        <li>{getLongLineText(locale.lang, "how_it_works", "h2_general", "li_1")}</li>
        <li>{getLongLineText(locale.lang, "how_it_works", "h2_general", "li_2")}</li>
        <li>{getLongLineText(locale.lang, "how_it_works", "h2_general", "li_3")}</li>
        <li>{getLongLineText(locale.lang, "how_it_works", "h2_general", "li_4")}</li>
        <li>{getLongLineText(locale.lang, "how_it_works", "h2_general", "li_5")}</li>
        <li>{getLongLineText(locale.lang, "how_it_works", "h2_general", "li_6")}</li>
        <li>{getLongLineText(locale.lang, "how_it_works", "h2_general", "li_7")}</li>
      </ul>
      <p>{getLongLineText(locale.lang, "how_it_works", "h2_general", "p3")}</p>

      <h2>{getLongLineText(locale.lang, "how_it_works", "for_doctors", "title")}</h2>
      <li>{getLongLineText(locale.lang, "how_it_works", "for_doctors", "li_1")}</li>
      <li>{getLongLineText(locale.lang, "how_it_works", "for_doctors", "li_2")}</li>
      <li>{getLongLineText(locale.lang, "how_it_works", "for_doctors", "li_3")}</li>

      <h2>{getLongLineText(locale.lang, "how_it_works", "for_volunteers", "title")}</h2>
      <li>{getLongLineText(locale.lang, "how_it_works", "for_volunteers", "li_1")}</li>
      <li>{getLongLineText(locale.lang, "how_it_works", "for_volunteers", "li_2")}</li>
      <li>{getLongLineText(locale.lang, "how_it_works", "for_volunteers", "li_3")}</li>

      <h2>{getLongLineText(locale.lang, "how_it_works", "notice", "title")}</h2>
      <p>{getLongLineText(locale.lang, "how_it_works", "notice", "description")}</p>

      <p>{getLongLineText(locale.lang, "how_it_works", "footer", null)}<a href={`mailto:${WEBSITE_EMAIL}`}>{WEBSITE_EMAIL}</a>.
      </p>
    </Container>

  )
}

export default How_it_works