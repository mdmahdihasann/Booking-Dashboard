import React, { useState } from 'react'
import FieldSet from "../inputs/FieldSet";
import Field from "../inputs/Field";
import { forgetPassword } from '../firebase/firebase';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const handleForget = async(e)=>{
        e.preventDefault();
        try {
            await forgetPassword(email)
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
     <form  >
        <FieldSet label="LOGIN PAGE">
          <Field label="User Name" >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your name"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Field>
          <button type="submit" onClick={handleForget}>Submit</button>
        </FieldSet>
      </form>
  )
}

export default ForgetPassword