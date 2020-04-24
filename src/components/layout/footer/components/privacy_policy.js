import React, { useContext } from 'react';
import localeContext, { getLongLineText } from '../../../context/localeCtx';
import "./style.css";

const WEBSITE_URL = "http://localhost:3000";
const Privacy_policy = () => {
  const locale = useContext(localeContext);
  return (
    <div>
      <>
        <h1>{getLongLineText(locale.lang, "privacy_policy", "h1", "title")}</h1>
        <p style={{ fontStyle: 'italic' }}>{getLongLineText(locale.lang, "privacy_policy", "h1", "p1")}</p>
        <p>
          {getLongLineText(locale.lang, "privacy_policy", "h1", "p2_main1")}
          <a href={WEBSITE_URL}>{WEBSITE_URL}</a>
          {getLongLineText(locale.lang, "privacy_policy", "h1", "p2_main2")}
        </p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h1", "p3")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h1", "p4")}</p>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_consent", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_consent", "p1")}</p>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_infoColl", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_infoColl", "p1")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_infoColl", "p2")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_infoColl", "p3")}</p>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_infoUse", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_infoUse", "p1")}</p>
        <ul>
          <li>{getLongLineText(locale.lang, "privacy_policy", "h2_infoUse", "li_1")}</li>
          <li>{getLongLineText(locale.lang, "privacy_policy", "h2_infoUse", "li_2")}</li>
          <li>{getLongLineText(locale.lang, "privacy_policy", "h2_infoUse", "li_3")}</li>
          <li>{getLongLineText(locale.lang, "privacy_policy", "h2_infoUse", "li_4")}</li>
          <li>{getLongLineText(locale.lang, "privacy_policy", "h2_infoUse", "li_5")}</li>
          <li>{getLongLineText(locale.lang, "privacy_policy", "h2_infoUse", "li_6")}</li>
          <li>{getLongLineText(locale.lang, "privacy_policy", "h2_infoUse", "li_7")}</li>
        </ul>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_log", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_log", "p1")}</p>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_advertising", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_advertising", "p1")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_advertising", "p2")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_advertising", "p3")}</p>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_third_party", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_third_party", "p1")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_third_party", "p2")}</p>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_third_party", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_third_party", "p1")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_third_party", "p2")}</p>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_ccpa", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_ccpa", "p1")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_ccpa", "p2")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_ccpa", "p3")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_ccpa", "p4")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_ccpa", "p5")}</p>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_gdpr", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_gdpr", "p1")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_gdpr", "p2")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_gdpr", "p3")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_gdpr", "p4")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_gdpr", "p5")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_gdpr", "p6")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_gdpr", "p7")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_gdpr", "p8")}</p>

        <h2>{getLongLineText(locale.lang, "privacy_policy", "h2_childrenInfo", "title")}</h2>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_childrenInfo", "p1")}</p>
        <p>{getLongLineText(locale.lang, "privacy_policy", "h2_childrenInfo", "p2")}</p>
      </>
    </div>
  )
}

export default Privacy_policy
