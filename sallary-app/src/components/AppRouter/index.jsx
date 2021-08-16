import React, { Suspense, } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import {publicRoutes , privateRoutes} from "../../routes";
import { LOGIN_ROUTE , user} from "../../utils/consts";

const AppRouter = () => {
    return user ?
        (
            <>
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {privateRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} component={Component} exact={true}/>
                    )}
                    <Redirect to={'/'}/>
                </Switch>
                </Suspense>
            </>
        )
        :
        (
           <>
               <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} component={Component} exact={true}/>
                    )}
                    <Redirect to={LOGIN_ROUTE}/>
                </Switch>
                </Suspense>
           </> 
        )
};

export default AppRouter;