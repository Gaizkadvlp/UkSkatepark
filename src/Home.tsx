import uk_pista from './assets/uk_pista.jpeg'
import instagram from './assets/instagram_logo.jpeg'
import facebook from './assets/facebook_logo.jpeg'

function Home() {
  return (
    <main>
      <img src={uk_pista} alt="uk_pista" />
        <p>Siguenos por las Redes Sociales</p>
      <div className='rrss' id='rrss'>
        <a
          href="https://www.instagram.com/ukskatepark/"
          target="_blank"
          rel="noreferrer"
          className="link">
          <img src={instagram} alt="Logo instagram" className='logo_rrss' />
        </a>
        <a
          href="https://www.facebook.com/UKSkatepark/"
          target="_blank"
          rel="noreferrer"
          className="link">
          <img src={facebook} alt="Logo facebook" className='logo_rrss' />
        </a>

      </div>
      <div className="contacto">
        <a href="tel:+34941234567" className="link">Tlf: 941 234 567</a><br /><br />
        <a href="mailto:ukskateparkberango@gmail.com" className="link">email: ukskateparkberango@gmail.com</a>

      </div>
      <div className='mapa'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.223888271528!2d-3.0008767232467557!3d43.3723424705499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5c0b59cbdf5d%3A0xa7d6e23771a689b4!2sUK%20SkatePark%20-%20Indoor%20Berango!5e0!3m2!1ses!2ses!4v1704662592535!5m2!1ses!2ses" width="600" height="450" /* style="border:0;"  allowfullscreen="" */ loading="lazy" /*referrerpolicy="no-referrer-when-downgrade"*/></iframe>
      </div>
    </main>
  )
}

export default Home
