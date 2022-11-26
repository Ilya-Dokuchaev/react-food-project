import {Link, useRouteError} from "react-router-dom";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)

    return(
        <>
            <Header/>
            <main className='main-content container'>
                <div id={'error-page'} className={'center-align'}>
                    <h1>Oops !</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.status} {error.statusText||error.message}</i>
                    </p>
                    <Link to="/">
                        This is a link to Homepage
                    </Link>
                </div>

            </main>
            <Footer/>
        </>

    )
}