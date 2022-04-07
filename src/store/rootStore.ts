import {createContext} from 'react';
import CommonStore from "./commonStore";
import UserStore from "./UserStore";

export class RootStore {
    commonStore: CommonStore;
    UserStore: UserStore;

    constructor() {
        this.commonStore = new CommonStore(this);
        this.UserStore = new UserStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());

