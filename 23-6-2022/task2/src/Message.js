import React,{Component} from "react";

class Message extends Component{

  constructor(){
    super()
    this.state={
        message:'welcome visitor'
    }

  }

     ChangeMessage(){


     this.setState({message :"thank you for subscribing"})
    
  }

    render(){
        return (
        <div>
   <hr></hr>
              <h3>*using state with statefull classes*</h3>
        <h3>{this.state.message}</h3>
        <button onClick={()=>this.ChangeMessage()}>Subscribe</button>
        </div>
    )}

}
export default Message