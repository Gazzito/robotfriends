import React from "react";

const SearchBox = ({searchChange}) =>{
    return (
        <div >    
            <input 
            className="br-pill bb ba bw1 h2 pa2"
            type="search" 
            placeholder="Your Friend"
            onChange={searchChange}
            />
      
        </div>
    )

}

export default SearchBox;