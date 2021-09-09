import React from 'react';


const DisplayNames = (props) => {
    return ( 
        <React.Fragment>
            <h2>Names List</h2>
            <hr />
            <ul>
                {props.listedNames.map((name) => {
                    return <li>{name}</li>
                })}
            </ul>
        </React.Fragment>
     );
}
 
export default DisplayNames;