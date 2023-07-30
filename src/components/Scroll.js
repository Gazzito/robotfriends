import React from "react";

const Scroll = (props) =>{
    return (
        <div style ={{marginTop:'20px',
         overflowY: 'scroll',
         borderTop: '1px solid rgba(255,255,255, 0.4)',
         height:'500px', 
         scrollBehavior: 'smooth'}}>
        {props.children}
        </div>
        );
}

export default Scroll