
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Navbar from './myCmp/Navbar';
import Footer from './myCmp/Footer';
import Home from "./myCmp/Home";
import Problem from "./myCmp/Problem";
import Contact from "./myCmp/Contact";
import Courses from "./myCmp/Courses";
import Pricing from "./myCmp/Pricing";
import Login from "./myCmp/Login";
import Register from "./myCmp/Register";
import CompilerUi from "./myCmp/CompilerUi";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/problems" Component={Problem}></Route>
          <Route path="/courses" Component={Courses}></Route>
          <Route path="/pricing" Component={Pricing}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/compiler" Component={CompilerUi}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
