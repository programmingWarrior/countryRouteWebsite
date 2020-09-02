import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CountryDetail = () => {
    let{id} = useParams();
    const [shawon,setShawon] = useState([]);

        useEffect(()=>{
            fetch(`https://restcountries.eu/rest/v2/name/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setShawon(data[0]);
                console.log(data[0]);
            });

    },[]);
    
    return (
        <div>
            <h1>Name:{shawon.name}</h1>
            <img src={shawon.flag} alt=""/>
            <h1>Capital:{shawon.capital}</h1>
        </div>
    );
};

export default CountryDetail;