import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Videos from './component/Videos';
import Upload from './component/Upload';
import SignUp from './component/SignUp';
import LogIn from './component/LogIn';



function App() {
  return (
    <Router>
        <Header/>
      <Routes>

          <Route path='/' element= {<Home />} />
          <Route path='/videos' element= {<Videos />} />
          <Route path='/video?catagory=free' element ={<Videos /> } />
          <Route path='/upload' element= {<Upload />} />
          <Route path='/signup' element= {<SignUp />} />
          <Route path='/login' element= {<LogIn />} />


      </Routes>

      <Footer />
      
    </Router>
    
  );
}
export default App;
