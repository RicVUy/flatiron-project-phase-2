import Clock from './Clock'

function Header({user, setUser}) {
  //const [] = useState(null)
  

  function handleLoginClick() {
    setUser({
      id: 1,
      username: "Ricardo"
    })
  }
  function handleLogoutClick() {
    setUser(null)
  }
  return (
    <header>
    <h1>TIMECARD</h1>
    <Clock/>
    <nav>
   {user ? (
    <button onClick={handleLogoutClick}>LogOut</button>
   ) : (
    <button onClick={handleLoginClick}>Login</button>
   )}
    </nav>
   
    </header>
  )
}

export default Header