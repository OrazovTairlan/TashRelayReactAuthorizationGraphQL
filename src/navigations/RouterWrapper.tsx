import React, {lazy, useContext} from 'react';
import {Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import {RootStoreContext} from "../store/rootStore";
import {observer} from "mobx-react";
import Loadable from "../components/Loadable/Loadable";
import {history} from "../utils/history";
import UserService from "../services/User/UserService";
import Error from "../pages/Error";
import PageNotFound from "../pages/PageNotFound";
import {URLS} from "../utils/common";

const SitesLayout = Loadable(lazy(() => import('../pages/SitesLayout')));
const LoginLayout = Loadable(lazy(() => import('../pages/LoginLayout')));

const RouterWrapper = () => {
    const rootStore = useContext(RootStoreContext);
    const {changeStatusToken} = rootStore.UserStore;
    if (UserService.getToken("accessToken")) {
        changeStatusToken(true);
    }
    return (
        <HistoryRouter history={history}>
            <div className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen p-0 min-h-screen">
                <Routes>
                    <Route path={URLS.main}
                           element={rootStore.UserStore.hasToken ? <Navigate to={"/views"}/> : <LoginLayout/>}/>
                    <Route path={URLS.login}
                           element={rootStore.UserStore.hasToken ? <Navigate to={"/views"}/> : <LoginLayout/>}/>
                    <Route path={URLS.error}
                           element={<Error/>}/>
                    <Route path={URLS.views}
                           element={rootStore.UserStore.hasToken ? <SitesLayout/> : <Navigate to={"/login"}/>}/>
                    <Route path={URLS.pageNotFound}
                           element={<PageNotFound/>}/>
                </Routes>
            </div>
        </HistoryRouter>
    );
};

export default observer(RouterWrapper);
