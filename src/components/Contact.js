import React from 'react';
import './Contact.css';

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      online: props.online
    }
  };
  render(){
    return(
      <div className = "Contact">
          <img className = "avatar" src = {this.props.avatar}></img>
          <div>
              <p className = "name">{this.props.name}</p>
                  <div className = "status" onClick = {() => {
                    this.setState({
                      online: !this.state.online
                    })
                  }}>
                    <div className = {this.state.online ? "status-online" : "status-offline"} />
                    <p className = "status-text">{this.state.online ? "En ligne" : "Hors ligne"} </p>
                    </div>
          </div>
        </div>
      )
  }
}

export default Contact;
