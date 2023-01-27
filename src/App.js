import { useState } from "react";
import React from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const [isSubmit,setSubmitted]=useState(false);
  function handleChange(event) {
    const { value, name } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      }
    });
  }
  function handleClick(e){
    e.preventDefault();
    setSubmitted(true);

  }

  return (
    <div className="container">
    {isSubmit ? <div>
      <h1>Submitted successfully</h1>
      <p>First name ={contact.fName}</p>
      <p>Last name ={contact.lName}</p>
      <p>Email ={contact.email}</p>
    </div>
    :
    <div>
    <h1>
      Hello {contact.fName} {contact.lName}
    </h1>
    <p>{contact.email}</p>
    <form onSubmit={handleClick}>
      <input
        name="fName"
        onChange={handleChange}
        placeholder="First Name"
        // value={contact.fName}
      />
      <input
        name="lName"
        onChange={handleChange}
        placeholder="Last Name"
        // value={contact.lName}
      />

      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        // value={contact.email}
      />
      <button>Submit</button>
    </form>
    </div>
    }
    
  </div>
  );
}

export default App;
