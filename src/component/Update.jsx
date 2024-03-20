import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
     const coffees=useLoaderData()
     const { name, quantity, supplier, category, details, taste, photo, _id, } = coffee

        return (
        <div>
            <h1>this is</h1>
        </div>
    );
};

export default Update;