// import React from 'react';

// class ClassComp extends React.Component {
//     render() {
//         return(
//             <h3>Sample Class Component meethod 1</h3>
//         )
//     }
// }

// export default ClassComp;

import React, {Component} from 'react';

class ClassComp extends Component {
    render() {
        return(
            <div>
                <h3>{this.props.text}</h3>
                {this.props.children}
            </div>
       )
    }
}

export default ClassComp;