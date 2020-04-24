import React, { useContext } from 'react';
import localeContext, { getLongLineText } from '../../../context/localeCtx';

const WEBSITE_EMAIL = "doctorally.project@gmail.com";
const WEBSITE_EMAIL_URL = "mailto:doctorally.project@gmail.com"
const WEBSITE_ADDRESS = "No 1 Hoang Minh Giam St";
const WEBSITE_URL = '"http://localhost:3000"';

const Terms_of_use = () => {
  const locale = useContext(localeContext);
  return (
    <>
      <h1>{getLongLineText(locale.lang, "terms_of_use", "h1", "title")}</h1>
      <p style={{ fontStyle: 'italic' }}>{getLongLineText(locale.lang, "terms_of_use", "h1", "p1")}</p>
      <p>
        {getLongLineText(locale.lang, "terms_of_use", "h1", "p2_main1")}
        <a href={WEBSITE_URL}>{WEBSITE_URL}</a>
        {getLongLineText(locale.lang, "terms_of_use", "h1", "p2_main2")}
      </p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h1", "p3")}</p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h1", "p4")}</p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h1", "p5")}</p>

      <h2>{getLongLineText(locale.lang, "terms_of_use", "h2_access", "title")}</h2>
      <p>
      <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_access", "p1_strong")}</strong>
      {getLongLineText(locale.lang, "terms_of_use", "h2_access", "p1_main")}
      </p>
      <p>
      <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_access", "p2_strong")}</strong>
      {getLongLineText(locale.lang, "terms_of_use", "h2_access", "p2_main")}
      </p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_access", "p3")}</p>
      <p>
      <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_access", "p4_strong")}</strong>
      {getLongLineText(locale.lang, "terms_of_use", "h2_access", "p4_main")}
      </p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_access", "p5")}</p>

      <h2>{getLongLineText(locale.lang, "terms_of_use", "h2_ads", "title")}</h2>
      <p>
      <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_ads", "p1_strong")}</strong>
      {getLongLineText(locale.lang, "terms_of_use", "h2_ads", "p1_main")}
      </p>
      <p>
      <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_ads", "p2_strong")}</strong>
      {getLongLineText(locale.lang, "terms_of_use", "h2_ads", "p2_main")}
      </p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_ads", "p3")}</p>

      <h2>{getLongLineText(locale.lang, "terms_of_use", "h2_disclaimer", "title")}</h2>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_disclaimer", "p1")}</p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_disclaimer", "p2")}</p>

      <h2>{getLongLineText(locale.lang, "terms_of_use", "h2_limitation", "title")}</h2>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_limitation", "p1")}</p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_limitation", "p2")}</p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_limitation", "p3")}</p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_limitation", "p4_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_limitation", "p4_main")}
      </p>

      <h2>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "title")}</h2>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "p1")}</p>
      <ul>
        <li>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "li_1")}</li>
        <li>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "li_2")}</li>
        <li>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "li_3")}</li>
        <li>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "li_4")}</li>
        <li>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "li_5")}</li>
        <li>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "li_6")}</li>
        <li>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "li_7")}</li>
      </ul>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_copyright", "p2")}</p>

      <h2>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "title")}</h2>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p1")}</p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p2_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p2_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p3_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p3_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p4_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p4_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p5_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p5_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p6_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p6_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p7_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p7_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p8_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p8_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p9_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p9_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p10_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p10_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p11_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p11_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p12_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p12_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p13_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p13_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p14_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p14_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p15_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p15_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p16_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p16_main")}
      </p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p17")}</p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p18")}</p>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p19")}</p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p20_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p20_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p21_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p21_main")}
      </p>
      <p>
        <strong>{getLongLineText(locale.lang, "terms_of_use", "h2_general", "p22_strong")}</strong>
        {getLongLineText(locale.lang, "terms_of_use", "h2_general", "p22_main")}
      </p>

      <h2>{getLongLineText(locale.lang, "terms_of_use", "h2_contact", "title")}</h2>
      <p>{getLongLineText(locale.lang, "terms_of_use", "h2_contact", "p1")}</p>
      <p>
        {getLongLineText(locale.lang, "terms_of_use", "h2_contact", "p2")}
        <a href={WEBSITE_EMAIL_URL}>{WEBSITE_EMAIL}</a>
      </p>
    </>
  )
}

export default Terms_of_use;