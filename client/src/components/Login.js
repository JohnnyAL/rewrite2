import React, { Component, useState } from "react";
import axios from "axios";

const Login = props => {
  const [login, setLogin] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const { username, password } = login;

  const handleChange = event => {
    console.log("hey");
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post("/api/auth/login", {
        username,
        password
      })
      .then(response => {
        // redirect
        props.history.push("/");
        // update state for user in <App/>
        console.log(response);
        props.setUser(response.data);
      })
      .catch(err => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Sign in</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Login;

// export default class Login extends Component {
//   state = {
//     username: "",
//     password: "",
//     message: ""
//   };

//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     axios
//       .post("/api/auth/login", {
//         username: this.state.username,
//         password: this.state.password
//       })
//       .then(response => {
//         // redirect
//         this.props.history.push("/");
//         // update state for user in <App/>
//         console.log(response);
//         this.props.setUser(response.data);
//       })
//       .catch(err => {
//         this.setState({
//           message: err.response.data.message
//         });
//       });
//   };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="username">Username: </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={this.state.username}
//             onChange={this.handleChange}
//           />

//           <label htmlFor="password">Password: </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />

//           <button type="submit">Sign in</button>
//         </form>
//         {this.state.message && <p>{this.state.message}</p>}
//       </>
//     );
//   }
// }
