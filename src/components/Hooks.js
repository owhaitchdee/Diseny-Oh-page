import {useState} from 'react';

function Hooks (){
    let [varName, setVarName] = useState ("Initial Value");
    function abc(){
        // 3. Ternary operator
       (varName === "Initial Value") ? (setVarName (varName = "Yes, ako pa rin to")) : (setVarName (varName = "No, iba na!"));
//        2. If else expression
        // if (varName === "Initial Value"){
        //     setVarName (varName = "Yes, ako pa rin ito");
        //     document.getElementById('here').innerHTML = varName
        // } else {
        //     setVarName (varName = "Initial Value");
        //     document.getElementById('here').innerHTML = varName
        // }
//        setVarName (varName= "New Value");
    }
    return(
        <div>
            <h1>{varName}</h1>
            <p id="here"></p>
            <button onClick={abc}>Change</button>
        </div>
    )
}

export default Hooks;

// function DesPF(propsname){
//     const {name, age} = propsname;
//     return(
//         <div>
//             Name:<h1>{name}</h1>
//             Age:<h2>{age}</h2>
//         </div>
//     )
// }

// export default DesPF;