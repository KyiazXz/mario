import { Component } from "react";
import { TabKyiaz } from "./tabJava";
import "./tabKz.css"

export default class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
            active : true,
             Data : TabKyiaz
        }
    }
    render(){
        console.log(this.state.Data)
        const data = this.state.Data
        return (
            <div>
                {data.map((e , index) =>{
                    return (<button className={this.state.active === index ? ('active-btn') : ('btn')} onClick={ () => this.setState ({active : index})}>{e.button}</button>)
                })}
                <div>
                 {data[this.state.active]}
                </div>
              
            </div>
        )
    }
}