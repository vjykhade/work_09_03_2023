import React,  { Component } from "react";

class Message extends Component {
    constructor()
    {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage()
    {
        this.setState(
            {
                message: 'Thank you for subscribing'
            }
        )
    }
    changeMessageUn()
    {
        this.setState(
            {
                message: 'Ohh We Miss You..!'
            }
        )
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
                <button onClick={() => this.changeMessageUn()}>UnSubscribe</button>
            </div>
        )
    }
}

export default Message