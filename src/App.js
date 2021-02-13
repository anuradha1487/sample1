import logo from './logo.svg';
import './App.css';
import React from 'react';
import Lifecycles from './lifecycle.component';

class App  extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      count : 47+props.increment,
      text : '',
      showText : true
    
    }
    this.props = props
  }
  handleClick =  ()=>{this.setState((prevState,prevProp) => {
      return {count : prevState.count+ prevProp.increment}
  },
    ()=> console.log(this.state.count))

  }

  updateText = () =>{
    this.setState({text : this.state.text+'_hello'})
    
  }
  toggleText = () =>{

    this.setState({showText : !this.state.showText})
  }
  render(){
    console.log("app render");
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <button onClick = {this.updateText}>
          Update Text
        </button>
        <button onClick = {this.toggleText}>
          Toggle LifeCycles
        </button>
            {this.state.showText ? 
            <Lifecycles text = {this.state.text}/> : null}
       
          
        
         
      </header>
    </div>
  
  );
  }
}
export default App;
