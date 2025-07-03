import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Singup = (props) => {
   const [credentials, setCredentials] = useState({ name:'', email: '', password: '', cpassword:''  });
   const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
   const {name, email, password} = credentials
    try {
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email,password  }),
      });

      const json = await response.json();
      console.log(json);
      
 if (json.success) {
        localStorage.setItem('token', json.authtoken);
        navigate('/'); // redirect to home
         props.showAlert("Account Created Successfully", "success")
      } else {
        props.showAlert("Invalid credentials", "error")
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className='container mt-3'>
      <h2 className='my-2'>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' aria-describedby="nameHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassowrd" className="form-label">Confirm Password</label>
    <input type="password" className="form-control"  name='cpassword' id="password" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="passowrd" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="password" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Singup
