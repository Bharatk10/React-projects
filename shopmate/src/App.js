import './App.css';
import { Header } from './components/base/Header';
import { AllRoutes } from './components/routes/AllRoutes';
import { Footer } from './components/base/Footer';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <div>
       <Provider store={store}>
        <Header/>
        <AllRoutes/>
        <Footer/> 
        </Provider>
    </div>
  );
}

export default App;
