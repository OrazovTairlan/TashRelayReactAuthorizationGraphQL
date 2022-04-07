import React, {PropsWithChildren, Suspense} from "react";
import Loader from "../Loader/Loader";

const Loadable = (Component: React.ElementType) => (props: PropsWithChildren<any>) => {
    return (
        <Suspense fallback={<Loader/>}>
            <Component {...props} />
        </Suspense>
    );
};

export default Loadable;
