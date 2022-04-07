import React, {FC} from 'react';
import SiteItem from "./SiteItem";
import {WithoutNullableKeys} from "../../types/common/common";
import {ViewerViewsQuery$data} from "../../graphql/Sites/queries/__generated__/ViewerViewsQuery.graphql";

interface IProps {
    data: readonly WithoutNullableKeys<{readonly id: string, readonly host: string | null}>[]
}

const SitesList: FC<IProps> = ({data}) => {
    return (
        <ul>{data.map((item) => {
            return <SiteItem site={item} key = {item.id}/>
        })}
        </ul>
    );
}
;

export default SitesList;
