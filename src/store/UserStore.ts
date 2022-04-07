import {RootStore} from "./rootStore";
import {action, makeAutoObservable, observable} from "mobx";

export default class UserStore {
    rootStore: RootStore;

    @observable hasToken: Boolean = false;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    @action changeStatusToken = (value: boolean) => {
        this.hasToken = value;
    }
}
