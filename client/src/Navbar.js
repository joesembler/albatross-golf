

function Navbar({ user, setUser }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => setUser(null));
    }
  
    if(user){
      return (
      <div className="Navbar">
        <div className="helloUser">
          Hello, {user.username}
        </div>
        <button id="logOutButton" onClick={handleLogout}>Logout</button>
      </div>
    );
    } 
    else{
      return(
        <div>
          Loading
        </div>
      );
    } 
}

export default Navbar