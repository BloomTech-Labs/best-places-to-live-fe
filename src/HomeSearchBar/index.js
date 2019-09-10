import React from 'react';

const HomeSearchBar = () =>{

    return (
        <div >
            <h1> City Search</h1>
            <input
                id="outlined-search"
                label="Enter an Address, City, or Zip Code"
                type="Search "
                placeholder="Enter an Address, City, or Zip Code"
            />
        </div>
    );
        
    
}

export default HomeSearchBar;