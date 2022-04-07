import React, {FC, useContext} from 'react';
import {RootStoreContext} from "../../store/rootStore";

interface IProps {
    handleButton: (...args: any) => void
}

const Header: FC<IProps> = ({handleButton}) => {
    const rootStore = useContext(RootStoreContext);
    return (
        <div>
            <nav className="flex items-center justify-between bg-transparent p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight ml-4">Навигация</span>
                </div>
                <div className="w-full block flex flex-grow items-center justify-end">
                    {rootStore.UserStore.hasToken ? <div>
                        <a href="#" onClick={handleButton}
                           className="inline-block justify-end text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-700 hover:bg-white lg:mt-0 ml-auto">Выйти
                            из аккаунта</a>
                    </div> : null}
                </div>
            </nav>
        </div>
    );
};

export default Header;
