import {Link, useRouteError} from "react-router-dom";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {useEffect} from "react";

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Header/>
            <main className='main-content container'>
                <div id={'error-page'} className={'center-align error-content'}>
                    <h1>Oops !</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.status} {error.statusText || error.message}</i>
                    </p>
                    <Link to="/homepage">
                        This is a link to Homepage
                    </Link>
                </div>
            </main>
            <Footer/>
        </>

    )
}