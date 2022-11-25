

const Header = () => {
    return(
        <nav>
            <div className="nav-wrapper green darken-1 ">
                <a href="/" className="brand-logo left">ILDOK</a>
                <ul id="nav-mobile" className="right ">
                    <li className=''><a target='_blank' href="https://github.com/Ilya-Dokuchaev/react-food-project">Repo</a></li>
                    <li className=''><a href="#contacts">Contacts</a></li>
                </ul>
            </div>
        </nav>
    )
}
export {Header}