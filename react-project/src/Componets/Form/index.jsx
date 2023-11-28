import React from 'react'
import "./form.css"
import img6 from "../../assets/Google.svg"


function Form() {
  return (
<>  <form action="" className='forms'>
            <div className='input1'>
        <label htmlFor="First name">First name</label>
        <input className="Inputs" type="text" />
        <label htmlFor="Email or phone number">Email or phone number</label>
        <input type="text" className="Inputs" />
        <label htmlFor="Password">Password</label>
        <input type="text" className="Inputs" />
        <input type="checkbox" style={{marginTop:"17px"}}/>
    <label htmlFor="Remember me" style={{marginLeft:"5px"}}>Remember me</label><br />
    <input type="checkbox" />
    <label htmlFor="Remember me" style={{marginLeft:"5px"}}>I agree to all the <span>Terms</span> and <span>Privacy policy</span> </label>
        </div>
        <div className='input2'> 
        <label htmlFor="Last name">Last name</label>
        <input type="text" className="Inputs"/>
        <label htmlFor="">Date of birth (MM/DD/YY)</label>
        <div className='calendar' ><input type="text" className="Inputs" /></div>
        <label htmlFor="Confirm password">Confirm password</label>
        <input type="text" className="Inputs"/>
        <span id='span'>Forgot password?</span>
        </div>
        
        
    </form>
    <button className='btn1'>Create account</button>
    <button className='btn2'><img src={img6} alt="" style={{marginRight:"8px"}}/>Sign-in with google</button>
    <p id='text3'>Don’t have an account?<span> Log In</span></p>
    </>
    
    
  )
}

export default Form