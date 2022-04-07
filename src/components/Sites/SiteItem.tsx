import React, {FC} from 'react';
import {ViewerViewsQuery$data} from "../../graphql/Sites/queries/__generated__/ViewerViewsQuery.graphql";

interface IProps {
    site: {
        id: string;
        host: string | null;
    }
}
const SiteItem:FC<IProps> = ({site}) => {
    return (
        <li
            className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4"
               href={`https://${site.host}`}><h2
                className="text-2xl md:text-3xl">Хост сайта {site.host}</h2><p
                className="mt-3 text-lg opacity-60">Нажмите на меня чтобы перейти</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                     className="mt-4">
                    <path className="stroke-current text-primary" strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2" d="M5 12h14M12 19l7-7-7-7"></path>
                </svg>
            </a></li>
    );
};

export default SiteItem;
