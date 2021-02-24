import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Carousel from '../components/Carousel';
import Mainpage from '../components/Mainpage';
import Listview from '../components/Listview';
import Signup from '../components/Signup'
import Homepage from '../components/Home_Page';
import Profile from '../components/Profile';
import Description from '../components/Description';
import Welcome from '../components/Welcome';
import Worldwide from '../components/Worldwide';
export default function Routes() {
    return (
        <Switch>
            <Route path ="/" exact component = {Carousel} />
             <Route path ="/signin" exact component = {Mainpage} />
             <Route path ="/list" exact component = {Listview} />
            <Route path ="/signup" exact component = {Signup} />
             <Route path="/home" exact component={Homepage} />
             <Route path="/profile" exact component ={Profile}/>
             <Route path="/desc" exact component={Description}/>
             <Route path="/wel" exact component={Welcome}/>
             <Route path="/maps" exact component={Worldwide}/>
              <Route component={Carousel} />
        </Switch>
    )
}


