import uk_logo from './assets/uk_logo.jpeg'

function Header () {
    return (
    <header>
        <img src={uk_logo} alt="uk_logo" id='logo' />
        <p>Uk Skatepark</p>
    </header>
    )
}

export default Header