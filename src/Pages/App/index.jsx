//Librerias
import {useRoutes,BrowserRouter} from 'react-router-dom';
//Componentes
import {Navbar} from '../../Components/Navbar'
//Paginas
import {Home} from '../Home';
import {MyAccount} from '../MyAccount';
import {MyOrder} from '../MyOrder';
import {MyOrders} from '../MyOrders';
import {NotFound} from '../NotFound';
import {SignIn} from '../SignIn';
//Hojas de estilo
import './App.css';

const AppRoutes = () => {

  let routes = useRoutes([
    {path:'/', element:<Home />},
    {path:'/my-account', element:<MyAccount />},
    {path:'/my-order', element:<MyOrder />},
    {path:'/my-orders', element:<MyOrders />},
    {path:'/sign-in', element:<SignIn />},
    {path:'/*', element:<NotFound />},
  ]);

  return routes;
}

function App() {



  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
