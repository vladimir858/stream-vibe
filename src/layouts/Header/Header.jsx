import './Header.scss'
import Logo from "../../components/logo";
const Header = () => {
  return(
    <header className="header">
      <div className="header__inner container">
<Logo loading="eager"   className="header__logo"  />
      </div>
    </header>
    )

}

export default Header
