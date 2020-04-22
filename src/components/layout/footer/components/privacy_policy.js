import React, { useContext } from 'react';
import localeContext, { getLongLineText } from '../../../context/localeCtx';
const WEBSITE_URL = "http://localhost:3000";
const WEBSITE_NAME = "DoctorAlly";
const WEBSITE_UPDATE_DATE = "Friday, April 17, 2020";

const Privacy_policy = () => {
  const locale = useContext(localeContext);
  return (
    <div>
      <>
        <h1>{getLongLineText("privacy_policy", "h1", "title", locale.lang)}</h1>
        <p style={{ fontStyle: 'italic' }}>{getLongLineText("privacy_policy", "h1", "p1", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h1", "p2", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h1", "p3", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h1", "p4", locale.lang)}</p>

        <h2>{getLongLineText("privacy_policy", "h2_consent", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_consent", "p1", locale.lang)}</p>

        <h2>{getLongLineText("privacy_policy", "h2_infoColl", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_infoColl", "p1", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_infoColl", "p2", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_infoColl", "p3", locale.lang)}</p>

        <h2>{getLongLineText("privacy_policy", "h2_infoUse", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_infoUse", "p1", locale.lang)}</p>
        <ul>
          <li>{getLongLineText("privacy_policy", "h2_infoUse", "li_1", locale.lang)}</li>
          <li>{getLongLineText("privacy_policy", "h2_infoUse", "li_2", locale.lang)}</li>
          <li>{getLongLineText("privacy_policy", "h2_infoUse", "li_3", locale.lang)}</li>
          <li>{getLongLineText("privacy_policy", "h2_infoUse", "li_4", locale.lang)}</li>
          <li>{getLongLineText("privacy_policy", "h2_infoUse", "li_5", locale.lang)}</li>
          <li>{getLongLineText("privacy_policy", "h2_infoUse", "li_6", locale.lang)}</li>
          <li>{getLongLineText("privacy_policy", "h2_infoUse", "li_7", locale.lang)}</li>
        </ul>

        <h2>{getLongLineText("privacy_policy", "h2_log", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_log", "p1", locale.lang)}</p>

        <h2>{getLongLineText("privacy_policy", "h2_advertising", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_advertising", "p1", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_advertising", "p2", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_advertising", "p3", locale.lang)}</p>

        <h2>{getLongLineText("privacy_policy", "h2_third_party", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_third_party", "p1", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_third_party", "p2", locale.lang)}</p>

        <h2>{getLongLineText("privacy_policy", "h2_third_party", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_third_party", "p1", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_third_party", "p2", locale.lang)}</p>

        <h2>{getLongLineText("privacy_policy", "h2_ccpa", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_ccpa", "p1", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_ccpa", "p2", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_ccpa", "p3", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_ccpa", "p4", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_ccpa", "p5", locale.lang)}</p>

        <h2>{getLongLineText("privacy_policy", "h2_gdpr", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_gdpr", "p1", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_gdpr", "p2", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_gdpr", "p3", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_gdpr", "p4", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_gdpr", "p5", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_gdpr", "p6", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_gdpr", "p7", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_gdpr", "p8", locale.lang)}</p>

        <h2>{getLongLineText("privacy_policy", "h2_childrenInfo", "title", locale.lang)}</h2>
        <p>{getLongLineText("privacy_policy", "h2_childrenInfo", "p1", locale.lang)}</p>
        <p>{getLongLineText("privacy_policy", "h2_childrenInfo", "p2", locale.lang)}</p>
      </>
    </div>
  )
}

export default Privacy_policy
