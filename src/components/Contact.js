import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return(
        <div className = "Contact">
            <img className = "avatar" src = {props.avatar}></img>
            <div>
                <p className = "name">{props.name}</p>
                {props.online?(
                    <div className = "status">
                        <div className = "status-online"/>
                        <p className = "status-text">En ligne</p>
                    </div>
                ) : (
                    <div className = "status">
                        <div className = "status-offline"/>
                        <p className = "status-text">Hors ligne</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact;
