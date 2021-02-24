import React from 'react';
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper ({
    component : Component,
    isPrivate, 
    ...rest
}) {
    const signed = false;

    //Route is private  and the user is not logged in

    if (isPrivate && !signed ) {
        return<Redirect to='/Mainpage' />
    }

    //Route is public  and the user is logged in
    if (!isPrivate && signed ){
        return <Redirect to = "/Carousel" />
    }

    return <Route {...rest} component={Component} />
}