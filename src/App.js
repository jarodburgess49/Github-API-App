import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Switch,Route, Link} from "react-router-dom"
import './App.css';
import firebase from "firebase/app"
import Home from "./pages/home"
import signin from "./pages/signin"
import signup from "./pages/signup"
import Footer from "./layout/footer"
import UserContext from './context/usercontext';
import Header from './layout/header';
import firebaseConfig from "./configuration/fbconfig"



//firebase
firebase.initializeApp(firebaseConfig)

function App() {


  const [user, setUser] = useState(null)  
  return (
    <Router>
<UserContext.Provider value={{user,setUser}}>
  <Header/>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin" component={signin} />
    <Route exact path="/signup" component={signup} />
  </Switch>
  <Footer/>


</UserContext.Provider>

    </Router>
    
  );
}

export default App;

