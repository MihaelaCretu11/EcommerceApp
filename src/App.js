import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import LogIn from "./LogIn";
import Header from "./Header.js";
import Home from "./Home.js";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  //Piece of code which runs based on a given condition
  //daca intre [ ] nu e nimic, va rula o singura data, 
  // daca intre [] avem basket va rula o data cand app component loads si de fiecare daca cand cosul de modifica
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else{
        //the usser is logged out
        dispatch ( {
          type: "SET_USER",
          user: null,
        })
      }
    })

    return () => {
      //Any clean-up operations:
      unsubscribe();
    }
  }, [])

console.log('user is', user);
    return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={
              <div>
                <LogIn />
              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route path="/" element={
              <div>
                <Header />
                <Home />
              </div>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
