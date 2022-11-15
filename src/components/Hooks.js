//import {useState} from 'react';

// function Hooks (){
//     let [varName, setVarName] = useState ("Initial Value");
//     function abc(){
//         //3. Ternary operator
// //        (varName === "Initial Value") ? (setVarName (varName =
//   //          "Yes, ako pa rin to")) : (setVarName = (varName = "No, iba na!"));
//         if (varName === "Initial Value"){
//             setVarName = (varName = "Yes, ako pa rin ito");
//         } else if  (varName === "Yes, ako pa rin ito"){
//             setVarName = (varName = "No, iba na!");
//         } else {
//             setVarName = (varName = "Initial Value");
//         }
//         // 1. setVarName (varName= "New Value");
//     }
//     return(
//         <div>
//             <h1>{varName}</h1>
//             <button onClick={abc}>Change</button>
//         </div>
//     )
// }

// export default Hooks;

function DesPF(propsname){
    const {name, age} = propsname;
    return(
        <div>
            Name:<h1>{name}</h1>
            Age:<h2>{age}</h2>
        </div>
    )
}

export default DesPF;