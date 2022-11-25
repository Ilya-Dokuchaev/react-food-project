import {useRouteError} from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)

    return(
        <div id={'error-page'} className={'center-align'}>
            <h1>Oops !</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status} {error.statusText||error.message}</i>
            </p>
            <a href="/">
                This is a link to Homepage
            </a>
        </div>
    )
}