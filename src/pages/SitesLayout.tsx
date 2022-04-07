import React, {useContext, useState} from 'react';
import SitesView from "../components/Sites/SitesView";
import {loadQuery, usePreloadedQuery} from "react-relay/hooks";
import {VIEWS} from "../graphql/Sites/queries/Viewer";
import RelayEnvironment from "../RelayEnvironment";
import {ViewerViewsQuery} from "../graphql/Sites/queries/__generated__/ViewerViewsQuery.graphql";
import {Helmet} from "react-helmet";
import Header from "../components/Header/Header";
import UserService from "../services/User/UserService";
import history from "../utils/history";
import {RootStoreContext} from "../store/rootStore";
import Modal from "../components/Modal/Modal";

const preloadedQuery = loadQuery<ViewerViewsQuery>(RelayEnvironment, VIEWS, {
    /* query variables */
});
const SitesLayout = () => {
    const data = usePreloadedQuery<ViewerViewsQuery>(VIEWS, preloadedQuery);
    const rootStore = useContext(RootStoreContext);
    const [open, setOpen] = useState(false);
    const handleButton = () => {
        setOpen(true);
    }
    const handleConfirm = async () => {
        setOpen(true);
        await UserService.logout(() => {
            rootStore.UserStore.changeStatusToken(false);
            history.replace("/login");
        }).catch((e) => {
            console.log(e, "error here");
        });
    }
    const handleOnClose = () => {
        setOpen(false)
    }
    return (
        <div className="p-12 p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
            <Header handleButton={handleButton}/>
            <Modal open={open}
                     onConfirm={handleConfirm}
                     onClose={handleOnClose}
            />
            <SitesView data={data}/>
            <Helmet>
                <html lang="en"/>
                <title>List of web-sites page</title>
                <meta name="description" content="List of web-sites page"/>
            </Helmet>
        </div>
    );
};

export default SitesLayout;
