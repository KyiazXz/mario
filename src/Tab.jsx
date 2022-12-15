import { Component } from "react";
import {data} from './data/tabs'
export default class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
            active : 2 , 
            Data : data
        }
    }
    // clickHandler = () => {
    //     this.setState({
    //         active: true,
              

    //     })
    // }   
    render(){
        console.log(this.state.Data)
        return(
            <div className="container">
               {this.state.Data.map((e , index) => {
                    return (<button className={this.state.active === index ?('active-btn'):('btn')}
                    onClick={()=>this.setState({active:index})}> {e.title} </button>)
                })}
                <div>
                    {this.state.Data[this.state.active].description}
                </div>
            </div>
        )
    }
} 

