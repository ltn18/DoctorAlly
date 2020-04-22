import React, { useContext } from 'react';
import localeContext, { getLongLineText } from '../../../context/localeCtx';

const WEBSITE_EMAIL = "doctorally.project@gmail.com";
const WEBSITE_ADDRESS = "No 1 Hoang Minh Giam St";


const Terms_of_use = () => {
  const locale = useContext(localeContext);
  return (
    <>
      <h1>{getLongLineText("terms_of_use", "h1", "title", locale.lang)}</h1>
      <p style={{ fontStyle: 'italic' }}>{getLongLineText("terms_of_use", "h1", "p1", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h1", "p2", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h1", "p3", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h1", "p4", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h1", "p5", locale.lang)}</p>

      <h2>{getLongLineText("terms_of_use", "h2_access", "title", locale.lang)}</h2>
      <p>{getLongLineText("terms_of_use", "h2_access", "p1", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_access", "p2", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_access", "p3", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_access", "p4", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_access", "p5", locale.lang)}</p>

      <h2>{getLongLineText("terms_of_use", "h2_ads", "title", locale.lang)}</h2>
      <p>{getLongLineText("terms_of_use", "h2_ads", "p1", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_ads", "p2", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_ads", "p3", locale.lang)}</p>

      <h2>{getLongLineText("terms_of_use", "h2_disclaimer", "title", locale.lang)}</h2>
      <p>{getLongLineText("terms_of_use", "h2_disclaimer", "p1", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_disclaimer", "p2", locale.lang)}</p>

      <h2>{getLongLineText("terms_of_use", "h2_limitation", "title", locale.lang)}</h2>
      <p>{getLongLineText("terms_of_use", "h2_limitation", "p1", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_limitation", "p2", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_limitation", "p3", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_limitation", "p4", locale.lang)}</p>

      <h2>{getLongLineText("terms_of_use", "h2_copyright", "title", locale.lang)}</h2>
      <p>{getLongLineText("terms_of_use", "h2_copyright", "p1", locale.lang)}</p>
      <ul>
        <li>{getLongLineText("terms_of_use", "h2_copyright", "li_1", locale.lang)}</li>
        <li>{getLongLineText("terms_of_use", "h2_copyright", "li_2", locale.lang)}</li>
        <li>{getLongLineText("terms_of_use", "h2_copyright", "li_3", locale.lang)}</li>
        <li>{getLongLineText("terms_of_use", "h2_copyright", "li_4", locale.lang)}</li>
        <li>{getLongLineText("terms_of_use", "h2_copyright", "li_5", locale.lang)}</li>
        <li>{getLongLineText("terms_of_use", "h2_copyright", "li_6", locale.lang)}</li>
        <li>{getLongLineText("terms_of_use", "h2_copyright", "li_7", locale.lang)}</li>
      </ul>
      <p>{getLongLineText("terms_of_use", "h2_copyright", "p2", locale.lang)}</p>

      <h2>{getLongLineText("terms_of_use", "h2_general", "title", locale.lang)}</h2>
      <p>{getLongLineText("terms_of_use", "h2_general", "p1", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p2", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p3", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p4", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p5", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p6", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p7", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p8", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p9", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p10", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p11", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p12", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p13", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p14", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p15", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p16", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p17", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p18", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p19", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p20", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p21", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_general", "p22", locale.lang)}</p>

      <h2>{getLongLineText("terms_of_use", "h2_contact", "title", locale.lang)}</h2>
      <p>{getLongLineText("terms_of_use", "h2_contact", "p1", locale.lang)}</p>
      <p>{getLongLineText("terms_of_use", "h2_contact", "p2", locale.lang)}</p>
    </>
  )
}

export default Terms_of_use
