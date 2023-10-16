import React from 'react'
import styele from './country.module.css'
export default function Country(props) {
    const {country} = props;
    const {name, flags, capital, population, area} = country;
  const handleRemoveCountry = (name) =>{
    props.onRemoveCountry(name)
  }
    return (
    <article className={styele.country}>
        <div>
            <img src={flags.png} alt={name.common} className={styele.flag}></img>
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <button className={styele.btn} onClick={()=>{
                handleRemoveCountry(name.common)
            }}>
                Remove Country
            </button>
        </div>
    </article>
  )
}
