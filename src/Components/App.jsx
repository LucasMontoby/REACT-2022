import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Index from './Index';
import Contact from './Contact';
import Error from './Error';
import '../Styles/app.css';
import '../Styles/general.css';

const App = () => {

    return(
        
        <BrowserRouter>
            <Routes>

                <Route exact={ true } path='/' element={ <Index /> } />
                <Route path='/contact' element={ <Contact /> } />
                <Route path='*' element={ <Error /> }/>

            </Routes>
        </BrowserRouter>

    );

}

export default App;