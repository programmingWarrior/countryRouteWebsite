import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const CountryShow = (props) => {
    const history = useHistory();
    const handleClick = (id) => {
        history.push(`/name/${id}`);
    }

    const {name,capital,flag} = props.country;

    const countryStyle={
        border: '1px solid purple',
        margin:'20px',
        padding:'20px',
        textAlign:'center',
        background:'skyblue',
        borderRadius:'10px'
    }
    const imgStyle = {
        width:'200px',
        height:'150px'
    }

    return (
            <div style={countryStyle}>
            <h1>This is Country Show</h1>
            <h1>Name:{name}</h1>
            <h2>Capital:{capital}</h2>
            <img style={imgStyle} src={flag} alt=""/>
            <p><Link to={`/name/${name}`}>Show details of {name}</Link></p>
            <button onClick={()=>handleClick(name)}>Click me</button>
            <br/>
        </div>
    );
};

export default CountryShow;