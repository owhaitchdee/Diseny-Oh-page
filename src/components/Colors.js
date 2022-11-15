import React from 'react';

class Event extends React.Component {
    constructor(){
        super();
        this.state = {{n:0}};
        this.state = {name: "Choose Color"}
    }
    Green(){
        this.setState({name: "Hello Green"});
        this.setState({color: 'green'});  
    }
    Red(){
        this.setState({name: "Hello Red"});
        this.setState({color: 'red'});  
    }
    Yellow(){
        this.setState({name: "Hello Yellow"});
        this.setState({color: 'yellow'});  
    }
    render(){
        return (
            <center>
                <div classname="App" style={{backgroundColor: this.state.color}}>
                    <h1>{this.state.key}</h1>
                    <button className="btn btn-default" onClick={()=>this.Green()}>Green</button>
                </div>
            </center>
        )
    }
}