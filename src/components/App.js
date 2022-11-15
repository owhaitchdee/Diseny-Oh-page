import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Name() {
  return (
    <div className="container-fluid text-center" style={{backgroundColor:"black",opacity:"95%",textAlign:"center",whiteSpace:"nowrap",marginTop:"40px",paddingTop:"20px"}}>
        <p id="here" style={{color:"white"}}></p>
        <div style={{display: 'flex', justifyContent: 'center', verticalAlign:'bottom',paddingTop:'2px'}}>
        <FloatingLabel  column sm={6} controlId="floatingInput" label="Name" className="mb-3 ml-3" >
            <Form.Control id="input" type="text"  placeholder="Enter your name" style={{width:"400px"}}/>
        </FloatingLabel>
        <button className="btn-primary2" onClick={check} >Submit</button>
    </div></div>
  );
}

function check(){

    let a = document.getElementById("input").value;
    if (a === ""){
        document.getElementById("here").innerHTML = "Please enter your name";
        document.getElementById("input").innerHTML = ""
    } else if (a !== "" ){
        document.getElementById("here").innerHTML = "Hello "+ a + ", thank you for subscribing!";
        document.getElementById("input").innerHTML = ""

    } 
    }

export default Name;