import React from 'react';

class Event extends React.Component {
    constructor(){
        super();
        this.state = {color: 'black'};
        this.state = {name: "Choose Color"}
    }
    Green(){
        this.setState({name: "You chose Green"});
        this.setState({color: 'green'});  
    }
    Red(){
        this.setState({name: "You chose Red"});
        this.setState({color: 'red'});  
    }
    Yellow(){
        this.setState({name: "You chose Yellow"});
        this.setState({color: 'yellow'});  
    }
    Orange(){
        this.setState({name: "You chose Orange"});
        this.setState({color: 'orange'});  
    }
    Blue(){
        this.setState({name: "You chose Blue"});
        this.setState({color: 'blue'});  
    }
    Violet(){
        this.setState({name: "You chose Violet"});
        this.setState({color: 'purple'});  
    }
    Clear(){
        this.setState({name: "Choose a color"});
        this.setState({color: 'black'});
    }
    render(){
        return (
            <center>
                <div className="container-fluid text-center" style={{textAlign:"center",marginBottom:"40px",padding:"20px",color:'white',backgroundColor: this.state.color,opacity:"85%"}}>
                    <h4>{this.state.name}</h4>
                    <button className="btn btn-primary" onClick={()=>this.Green()}>Green</button>
                    <button className="btn btn-primary" onClick={()=>this.Red()}>Red</button>
                    <button className="btn btn-primary" onClick={()=>this.Yellow()}>Yellow</button>
                    <button className="btn btn-primary" onClick={()=>this.Orange()}>Orange</button>
                    <button className="btn btn-primary" onClick={()=>this.Blue()}>Blue</button>
                    <button className="btn btn-primary" onClick={()=>this.Violet()}>Violet</button>
                    <button className="btn btn-primary" onClick={()=>this.Clear()}>Clear</button>
                </div>
            </center>
        )
    }
}

export default Event;