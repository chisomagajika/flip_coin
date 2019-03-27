import React,{Component} from 'react';
import StarWars from './StarWars';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {show:''};
    this.flipCoin = this.flipCoin.bind(this);
  }
  
  
  flipCoin(){
    
   var max = 100;
   var min = 1;
   
  var number1 =  Math.floor(Math.random() * (max - min + 1)) + min
  console.log(number1)

  if(number1%2===0){
    this.setState({show:'heads'}) 
  }
  else{
    this.setState({show:'tails'})
  }
  
 }
 render() {
  return (
    <div onClick={this.flipCoin}>
      <div >{this.state.show} </div>
      <button type= 'reset' >
        Click me
      </button>
      <StarWars/>
    </div>
    );
  } 
}


export default App;
