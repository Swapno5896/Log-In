import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from "../Footer/Footer";
import LogIn from "../LogIn/LogIn";
import Nvbar from "../Navbar/Nvbar";
import NotFound from "../NotFound/NotFound";
const Home = () => {
    return (
        <div>
        <Nvbar></Nvbar>
            <Router>
                <Switch>
                    <Route path='/'>
                        <LogIn></LogIn>
                    </Route>
                    <Route path='*'>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        <Footer></Footer>
        </div>
    );
};

export default Home;