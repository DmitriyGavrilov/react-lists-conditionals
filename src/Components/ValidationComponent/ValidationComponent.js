import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {
    let valid = null;
    // console.log(props.lengthofchar);
    if (props.lengthofchar < 5) {
        valid = 'Text too short';
    } else {
        valid = 'Text long enough';
    }
    return <div><p>{valid}</p></div>;
};

export default ValidationComponent;