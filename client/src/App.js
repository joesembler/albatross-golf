import React, { useEffect, useState } from "react";
import { Routes ,Route } from 'react-router-dom';
import NavBar from "./Navbar";
import Login from "./Login";
import Home from "./Home";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user}/>}/>
          {/* <Route path="/new" element={<NewRound/>}/> */}
        </Routes>
      </main>
    </>
  );
}

export default App;


// import { Route, Routes } from 'react-router-dom'
// import {useEffect, useState} from 'react'


// import Navbar from './Navbar'
// import Home from './Home'
// import Auth from './Auth'
// import Login from './Login'

// function App() {
//   const [errors, setErrors] = useState(false)
  

//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState({});
 
//   useEffect(() => { 
//     let userVar;
//     fetch("/authorized_user")
//     .then((res) => {
//       if (res.ok) {
//         res.json()
//         .then((userData) => {
//           userVar = userData;
//         });
//       }
//     });
//     console.log(userVar)
//       setIsAuthenticated(true)
//       setUser(userVar)

//   },[]);

//   console.log(user)
  
//   // function handlePost(obj){
//   //     fetch('/petpals',{
//   //       method:'POST',
//   //       headers: {'Content-Type': 'application/json'},
//   //       body:JSON.stringify(obj)
//   //     })
//   //     .then(res => res.json())
//   //     .then(data => {
//   //       if(data.errors){
//   //         setErrors(data.errors)
//   //       } else {
//   //         setPetPals([...petPals,data])
//   //       }
//   //     })
//   // }

//   // console.log("petpals:", petPals,"species", species,"errors:", errors,"user", user)

//   if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>;

//   return (
//     <div id="App">
//       <Navbar user={user} setUser={setUser} />
//       <Routes>
      
//     <Route exact path="/" element={<Home/>}>
//     </Route>
//     <Route exact path="/sign_up" element={<Auth />}>
      
//     </Route>
//     <Route exact path="/login" element={ <Login />}>
         
//     </Route>
    
//     </Routes>

//     </div>
//   );
// }

// export default App;
