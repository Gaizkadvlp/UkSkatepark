import uk_logo from './assets/uk_logo.jpeg'

function Header() {
  return (
    <header>
      <img src={uk_logo} alt="uk_logo" id='logo' />
      <h1>Uk Skatepark</h1>
    </header>
  )
}

export default Header