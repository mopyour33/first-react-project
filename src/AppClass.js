import React, { Component } from 'react'

export default class AppClass extends Component {
  constructor(props){
    super(props)
    this.state={
      counter2: 0,
      num:1,
      value:0
    };
    console.log("constructor");
  }

  increase = () =>{
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1
    });
    console.log("increase funcition", this.state);

  };
  

  componentDidMount(){
    //api 콜
    console.log("componentDidMount");
  }

componentDidUpdate(){
  console.log("componentDidUpdate", this.state);
}

componentWillUnmount(){
  console.log("byebye");
}

  render() {
    console.log("rendor")
    return (
      <div>
        <div>state:{this.state.counter2}</div>
        <button onClick={this.increase}>클릭!</button>
        
      </div>
    )
  }
}
