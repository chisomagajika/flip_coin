import React,{Component} from 'react';


class StartWars extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        item: []
      };
      this.changeState = this.changeState.bind(this);
    }
    changeState(){
        var max = 61;
        var min = 1;
        
        var number =  Math.floor(Math.random() * (max - min + 1)) + min
        
        this.setState({id:number}); 
    
      fetch(`https://swapi.co/api/planets/${number}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              item: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, item } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            
            <div >
                <button type = 'reset' onClick={this.changeState} >
                    StartWars
                </button>
                <div> {item.name} {item.gravity}</div>  
            </div>
           
        );
      }
    }
  }

  export default StartWars
  