
import './App.css'
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from './router/router';
function App() {

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
