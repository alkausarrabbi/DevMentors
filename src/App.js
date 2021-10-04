// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderNav from './components/HeaderNav/HeaderNav';
import Home from './components/Home/Home';
import OurCourses from './components/OurCourses/OurCourses';
import About from './components/About/About';
import FindUs from './components/FindUs/FindUs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Enroll from './components/Enroll/Enroll';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <HeaderNav></HeaderNav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/ourcourses">
            <OurCourses></OurCourses>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/findus">
            <FindUs></FindUs>
          </Route>
          <Route exact path="/enroll">
           <Enroll></Enroll>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
