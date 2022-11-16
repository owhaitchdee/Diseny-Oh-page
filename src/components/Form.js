import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Name() {
  return (
    <div className="container-fluid text-center" style={{backgroundColor:"black",opacity:"95%",textAlign:"center",whiteSpace:"nowrap",marginTop:"40px",padding:"20px",color:"white"}}>
      <h4>Subscription Form</h4>
      <div style={{display: 'flex', justifyContent: 'center', verticalAlign:'bottom',paddingTop:'2px'}}>
      <InputGroup size="sm" className="mb-3" style={{width:"400px"}}>
        <Form.Control placeholder="Enter your name" id="input" aria-label="username" aria-describedby="basic-addon2"
        />
        <Button variant="btn-primary" id="button-addon2" onClick={check} style={{border:"solid 2px purple", color:"purple"}}>
          Submit
        </Button>
      </InputGroup>
      </div>
      <p id="here" style={{color:"white"}}></p>

    </div>
  );
}

function check(){

    let a = document.getElementById("input").value;
    if (a === ""){
        document.getElementById("here").innerHTML = "Please enter your name";
        document.getElementById("input").value = ""
    } else if (a !== "" ){
        document.getElementById("here").innerHTML = "Hello "+ a + ", thank you for subscribing!";
        document.getElementById("input").value = ""
    } 
    }

export default Name;