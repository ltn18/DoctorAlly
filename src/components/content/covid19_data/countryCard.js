import React from 'react'

const CountryCard = (props) => {
  const { name, cases, deaths, recovered, flag } = props
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Lexend Giga' }}>
        <h3>{props.name}&nbsp;&nbsp;&nbsp;&nbsp;</h3>
        <img style={{ width: 30, height: 15 }} src={props.flag} alt='flag' />
      </div>
      <div style={{ fontFamily: 'Lexend Giga' }}>Cases: {props.cases}</div>
      <div style={{ fontFamily: 'Lexend Giga' }}>Death: {props.deaths}</div>
      <div style={{ fontFamily: 'Lexend Giga' }}>Recovered: {props.recovered}</div>
    </>
  )
}

export default CountryCard
