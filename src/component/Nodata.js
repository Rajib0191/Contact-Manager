import React from 'react';
import Navbar from './Navbar';

const Nodata = () => {
    return (
        <div className='nodata__section'>
            <Navbar />
            <h3 style={{ textAlign: "center", padding: "50px 0" }}>No contacts added yet. Create one!</h3>
        </div >
    );
};

export default Nodata;