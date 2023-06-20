import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Errorpage from './components/Errorpage'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import Home from './components/Home'
import WishList from './components/Wishlist'
const router=createBrowserRouter([
  {
    path:'/',
    errorElement:<Errorpage/>,
    children:[

      {path:'/',element:<Landing/>},
      {path:'/home',element:<Home/>},
      {path:'/login',element:<Login/>},
      {path:'/register',element:<Register/>},
      {path:'/home/wishlist',element:<WishList/>}

    ]
  }
])
function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
