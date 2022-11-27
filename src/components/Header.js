import {Link} from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper green lighten-1 ">
                <Link to='/homepage' className="brand-logo ">ILDOK</Link>
                <ul id="nav-mobile" className="right ">
                    <li className=''><a target='_blank'
                                        rel={'noreferrer noopener'}
                                        href="https://github.com/Ilya-Dokuchaev/react-food-project">Repo</a></li>
                    <li className=''><a href="#contacts">Contacts</a></li>
                </ul>
            </div>
        </nav>
    )
}
export {Header}