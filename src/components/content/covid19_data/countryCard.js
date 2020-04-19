import React from 'react'

const CountryCard = (props) => {
    const { name, cases, deaths, recovered } = props
    return (
        <>
            <h3>{props.name}</h3>
            <div>Cases: {props.cases}</div>
            <div>Death: {props.deaths}</div>
            <div>Recovered: {props.recovered}</div>
        </>
    )
}

export default CountryCard
