import React from "react";
import { useState } from "react";
import useInput from "./useInput";

export default function PersonalInfo() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirsName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Merhaba ${firstName} ${lastName}`);
    resetFirsName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>Name</label>
          <input
            type="text"
            {...bindFirstName}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            type="text"
            {...bindLastName}
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}
