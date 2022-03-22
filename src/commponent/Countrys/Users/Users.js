import React from 'react';
import { addToDb, removeFormDb } from './LoculStor';

const Users = (props) => {

    // এটা fetch Data এর কানেকশন

    const {id, balance} = props.count

    // এটা localStorage এর কানেকশন
    // Buttone ব্যবহার করে id add করতে পারি + localStorage এ ও add করতে পারি
    const addToCart = id =>{
         addToDb(id)
        // localStorage.setItem(id,1)removeFormDb
    } 
    // Buttone ব্যবহার করে localStorage এর id টা কে deket করতে পারি

    const removeFromCart = id =>{
        removeFormDb(id);
    }
    return (
        <div>
            <h3>Name: {id}</h3>
            <p style={{color: "red"}}>Name: {balance}</p>
            <button onClick={()=>addToCart(id)}>AddToCart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Users;