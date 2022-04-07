import React, {FC} from 'react';
import {ViewerViewsQuery$data} from "../../graphql/Sites/queries/__generated__/ViewerViewsQuery.graphql";
import 'swiper/css';
import {WithoutNullableKeys} from "../../types/common/common";
import SitesList from "./SitesList";

interface IProps {
    data: ViewerViewsQuery$data;
}

const SitesView: FC<IProps> = ({data}) => {
    return (
        <div className="mt-24">
            <SitesList data={(data as WithoutNullableKeys<ViewerViewsQuery$data>).viewer.sites}/>
        </div>
    );
};

export default SitesView;
