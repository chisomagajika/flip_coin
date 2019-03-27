import React,{Component} from 'react';


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {show:''};
  //   this.flipCoin = this.flipCoin.bind(this);
  // }
  
  
  flipCoin(){
  // let show = "head";
   var max = 100;
   var min = 1;
   
  var number =  Math.floor(Math.random() * (max - min + 1)) + min
  console.log(number)
  if(number%2===0){
    document.getElementById("headsOrTails").innerHTML = 'Heads'
  }
  else{
    document.getElementById("headsOrTails").innerHTML = 'Tails'
  }
  
 }
 render() {
  return (
    <div onClick={this.flipCoin}>
      <div id= "headsOrTails" > </div>
      <button type= 'reset' >
        Click me
      </button>
    </div>
    );
  } 
}


export default App;
