
export const Footer = () => {
    return(
        <footer className="page-footer  green darken-1">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <p className="grey-text text-lighten-4">You can find more of my projects at Git-Hub. <br/>Feel free to contact me if you want to</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 id='contacts' className="white-text">Contacts</h5>
                        <ul>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="https://t.me/pursimies"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >Telegram
                                </a>
                            </li>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="https://www.linkedin.com/in/ilya-dokuchaev-093aab10b/"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >LinkedIn
                                </a>
                            </li>
                            <li>
                                <a className="grey-text text-lighten-3"
                                   href="mailto:miamorokor@mail.ru"
                                   type='email'
                                   target='_blank'
                                   rel='noopener noreferrer'
                                >Email</
                                    a></
                                li>
                            <li>
                                <a className="grey-text text-lighten-3"
                                   href="https://github.com/Ilya-Dokuchaev"
                                   target='_blank'
                                   rel='noopener noreferrer'
                                >Git-Hub
                                </a>
                            </li>
                        </ul>
                        <a className="grey-text text-lighten-3" href="/404">404-page/Error page</a>

                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Copyright © {new Date().getFullYear()} ILDOK. All rights reserved.
                    <a target='_blank' className="grey-text repo text-lighten-4 right" href="https://github.com/Ilya-Dokuchaev/react-food-project">Repo</a>
                </div>
            </div>
        </footer>
    )
}