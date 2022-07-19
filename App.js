import logo from './logo.svg';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import './App.css';

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.crendential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = false;
  }

  function handleSignOut(event) {
     setUser({});
  }

  useEffect(() => {
    /* global google */ 
    google.account.id.initialize({
      client_id: "435664134418-mn5bk2a6jmirsh1vnjlcka0ovif2k8ct.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.account.id.prompt();
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
      { Object.keys(user).length != 0 &&
      <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
      }
    { user &&
      <div>
        <img src = {user.picture}></img>
        <h3>{user.name}</h3>
      </div>
      }
    </div>
  );
    }
export default App;
