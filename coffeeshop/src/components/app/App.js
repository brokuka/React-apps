/* React */
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

/* Components */
import Footer from '../footer/footer';

/* Pages */
import {MainPage, OurCoffee, Page404} from '../pages'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/coffee/*" element={<OurCoffee/>}/>
          <Route path="*" element={<Page404/>}/>
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;