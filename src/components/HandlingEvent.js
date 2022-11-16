// function Event(){
//     function Okay(){
//         alert("Goods!");
//     }
//     return(
//         <div>
//             <h1>Hello</h1>
//             <button onClick={Okay}> Click me</button>
//         </div>

//     )
// }

// export default Event;

// import React from 'react';

// class Event extends React.Component{
//     Okay(){
//         document.getElementById("here").innerHTML = "Goods Class!";
//     }
//     render() {
//         return(
//             <div>
//                 <h1 id="here">Hello</h1>
//                 <button onClick={this.Okay}> Click me</button>
//             </div>
//        )
//     }
// }

// export default Event;

import React from 'react';

class Event extends React.Component{
    constructor(){
        super();
        this.state = {key: "value"}
    }
    
    Okay(){
        this.setState({key: "Hello Green"});
    }
    render() {
        return(
            <div>
                <h1 id="here">{this.state.key}</h1>
                <button onClick={()=>this.Okay()}> Click me</button>
            </div>
       )
    }
}

export default Event;