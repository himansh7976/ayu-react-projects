
import './Nav.css'
function Nav() {
    return (
        <div className="nav-container">
            <div className='logo'>
                <img src='https://themewagon.gitlab.io/restaurant/assets/img/logo.png'></img>
            </div>
            <div className='list-element'>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>MENU</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
            </div>


        </div>
    )
}
export default Nav;