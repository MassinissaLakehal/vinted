import axios from "axios";
import { useState } from "react";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username: username, email: email, password: password } // clé: valeur
      );
      setUser(response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signUpPage">
      <h1>S'inscrire</h1>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <input
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Mot de passe"
          value={password}
        />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
