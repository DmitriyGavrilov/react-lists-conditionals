import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (<div>    
                {props.arrofchar != null ? props.arrofchar.map((word) => {
                    // console.log(word);
                    return word.text != '' ? <div key={word.id} onClick={props.deletechar} className="CharComponent">{word.text}</div> : null;
                }) : null}
            </div>);
};

export default CharComponent;