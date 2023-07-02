import Home from './routes/Home.component';
import { Routes,Route } from 'react-router-dom';
import Navigation from './routes/Navigation.component';
import Authentication from './routes/Authentication';
import Shop from './routes/Shop';
import Checkout from './routes/checkout/CheckOut';
function App() {
  return (
    <Routes>
      <Route path='/' element={ <Navigation/ > }>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
