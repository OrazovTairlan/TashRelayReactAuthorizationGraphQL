import {RootStore} from "./rootStore";
import {action, makeAutoObservable, observable} from "mobx";
import {AuthError} from "../types/User/auth";

export default class UserStore {
    rootStore: RootStore;

    @observable hasToken: Boolean = false;
    @observable authError: string = "";


    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    @action changeStatusToken = (value: boolean) => {
        this.hasToken = value;
    }

    @action changeAuthError = (value: string) => {
        this.authError = value;
    }
}
