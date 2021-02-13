import React from 'react';

class Lifecycles extends React.Component{

    constructor(){
        super();
        console.log('Constructor');
        
    }

    componentDidMount(){
        console.log('component mount');
    }
    componentDidUpdate(){
        console.log('component updated');

    }
    componentWillUnmount(){
        console.log('component will unmount');
    }
   shouldComponentUpdate(nextProps, nextState){
       console.log('should component update ',  nextProps);
       return false;
   }
    render(){
        console.log('render lifecycle');
        return(
            <div className = 'lifecycles'>
                    <h3>LIFE CYCLES METHODS</h3>
                    {this.props.text}
                    
            </div>
            
        )
    }
}
export default Lifecycles;