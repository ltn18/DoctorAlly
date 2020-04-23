import React, { useContext } from 'react';
import localeContext, { getLongLineText } from '../../context/localeCtx';

const CountryCard = (props) => {
  const { name, cases, deaths, recovered, flag } = props;
  const locale = useContext(localeContext);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Lexend Giga' }}>
        <h3>{props.name}&nbsp;&nbsp;&nbsp;&nbsp;</h3>
        <img style={{ width: 30, height: 15 }} src={props.flag} alt='flag' />
      </div>
      <div style={{ fontFamily: 'Lexend Giga' }}>
        {getLongLineText(locale.lang, "covid19_data", "cases", null)}: {props.cases}
      </div>
      <div style={{ fontFamily: 'Lexend Giga' }}>
        {getLongLineText(locale.lang, "covid19_data", "deaths", null)}: {props.deaths}
      </div>
      <div style={{ fontFamily: 'Lexend Giga' }}>
        {getLongLineText(locale.lang, "covid19_data", "recovered", null)}: {props.recovered}
      </div>
    </>
  )
}

export default CountryCard
