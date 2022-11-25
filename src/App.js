import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home";
import ErrorPage from "./pages/error-page";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        errorElement:<ErrorPage/>,
    },
    {
        path:'/about',
        element:<About/>,
    },
    {
        path:'/contact',
        element:<Contact/>,
    },
])

function App() {
  return (
    <>
      <Header/>
        <main className='container main-content'>
            <RouterProvider router={router}/>
        </main>
      <Footer/>
    </>
  );
}

export default App;
