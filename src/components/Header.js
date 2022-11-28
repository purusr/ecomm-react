import images from '../React-icon.svg.png';
function Header(){
    return (
      <header>
      <nav className='nav'>
          <img src={images} className='nav-img' ></img>
          <h3 className='brand-name'>React Shoppy</h3>
       <ul className='nav-items'>
        <li>
          Home
        </li>
        <li>
          About
        </li>
        <li>
          Contact
        </li>
        <li>
          Cart
        </li>
        </ul>
      </nav>
    </header>
    
    )
    }

    export default Header;