import {Router} from 'react-router-dom';
import React from "react";

const CustomRouter = ({
                          basename,
                          children,
                          history,
                      }: any) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            basename={basename}
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
};
