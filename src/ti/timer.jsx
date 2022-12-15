import { Component } from "react";

export default class Timer extends Component{
constructor (){
    super();
    this.state = {
        counter : 0
    }
}



    render(){
        return (
            <div>
                <button>{this.counter}</button>
                <button>{this.decrement}</button>
                <h1>
                    {this.state.counter}
                </h1>
            </div>
        )
    }
}