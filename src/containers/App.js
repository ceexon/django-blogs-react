
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../hoc/Layout';
import Blogs from '../components/blogs/Blogs';
import Login from '../components/users/Login';
import Signup from '../components/users/Signup';
import Navbar from '../components/Navbar/Navbar';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Layout className="container">
                        <Navbar />
                        <Route exact path="/" component={Blogs} />
                        <Route path='/login' component={Login}></Route>
                        <Route path='/signup' component={Signup}></Route>
                    </Layout>
                </Switch >
            </Router >
        );
    }
}

export default App;