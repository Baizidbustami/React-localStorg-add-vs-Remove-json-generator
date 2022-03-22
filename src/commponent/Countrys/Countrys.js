import React, { useEffect, useState } from 'react';
import Users from './Users/Users';

const Countrys = () => {
    const [country, setCountry] = useState([]);
    useEffect( ()=>{

// public foolder এ data.json নামের একটা file আমার সব data রাখা আছে ।

        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    } ,[])
    return (

        // Users নামের file একটা সাথে কানেক্ট করা হইছে

        <div>{
            country.map(count => <Users count={count}></Users>)
        }
            <h1>All Country</h1>
            <h1>name</h1>
           
        </div>
    );
};

export default Countrys;