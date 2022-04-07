import {RootStore} from "./rootStore";
import {action, makeAutoObservable, observable, toJS} from "mobx";
import axios from "axios";

export default class CommonStore {
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }
}
