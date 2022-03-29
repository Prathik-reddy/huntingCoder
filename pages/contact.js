import React, { useState } from 'react';

const contact = () => {

  const [inputField, setInputField] = useState({
    name: "",
    phone: "",
    msg:""
  })

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  const submitButton =async () => {
    const {name, phone, msg} = inputField;
    const response = await fetch("http://localhost:3000/api/postContact/", {
      method: 'POST', headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,phone,msg })
    });

    alert({inputField})
    setInputField({name:"", phone:"", msg:""})
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <table>
        <tr>
          <td>Name :</td>
          <td>
            <input type="text" name="name" onChange={inputsHandler} value={inputField.name} />
          </td>
        </tr>
        <tr>
          <td>Phone :</td>
          <td>
            <input type="number" name="phone" onChange={inputsHandler} value={inputField.phone} />
          </td>
        </tr>
        <tr>
          <td>Message :</td>
          <td>
            <input type="text" name="msg" onChange={inputsHandler} value={inputField.msg} />
          </td>
        </tr>
        <tr>
          <td>Submit :</td>
          <td>
            <input type="Submit" onClick={submitButton} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default contact;
