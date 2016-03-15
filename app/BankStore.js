import { EventEmitter } from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import constants from './constants';

const CHANGE_EVENT = 'change';
let _emitter = new EventEmitter();
let balance = 0;

let BankStore = {
    getState() {
        return balance;
    },

    addListener(callback) {
        return _emitter.addListener(CHANGE_EVENT, callback);
    }
};

BankStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.type) {
        case constants.CREATED_ACCOUNT:
            balance = 0;
            _emitter.emit(CHANGE_EVENT)
            break;
        case constants.WITHDREW_FROM_ACCOUNT:
            balance -= action.ammount;
            _emitter.emit(CHANGE_EVENT)
            break;
        case constants.DEPOSITED_INTO_ACCOUNT:
            balance += action.ammount;
            _emitter.emit(CHANGE_EVENT)
            break;
        default:
            break;
    }
});

export default BankStore;
