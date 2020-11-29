import React from 'react';
import PropTypes, { string } from 'prop-types'; 


function comp(props) {
   

    
    
    
    return (
        
        <div> 
            {props.handle(props.name)}
            
            <h4>  Full Name is : {props.name} </h4>
            <h4>  Bio : {props.bio} </h4>
            <h4>  Profession is : {props.prof} </h4>
            {props.children}
            

        </div>
       
    )
}
comp.defaultProps={
name :" Unknow person" ,
bio : " Add your bio",
prof: " What's your profession ? "}

comp.propTypes = {
name : PropTypes.string ,
bio : PropTypes.string ,
prof : PropTypes.string 
}

export default comp
