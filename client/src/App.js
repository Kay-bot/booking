import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './booking/Home';
import Login from './auth/Login';
import Regisrter from './auth/Register';
import TopNav from './components/TopNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Regisrter} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
