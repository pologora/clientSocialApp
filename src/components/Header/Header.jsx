import './Header.css'
import dog from '../../images/pies3.jpg'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__title'>
      <h2>Imagebook</h2>
        <img className='header__img' src={dog} alt='dog' />
      </div>
    </header>
  )
}

export default Header
