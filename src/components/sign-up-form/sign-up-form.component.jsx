import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log("user created encountered an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          name="displayName"
          type="text"
          value={displayName}
          required
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={email}
          required
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
