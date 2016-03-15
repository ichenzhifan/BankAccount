/**
 * this time using ReduceStore.
 * To extend ReduceStore, your class needs to implement two methods: getInitialState and reduce. In 
 * getInitialState you define the initial state of your store, and in reduce you modify this state as result of
 * actions. A default getState method is already defined, so you don’t need to override unless you don’t want
 * to treat the ReduceStore state as immutable.
 */
import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';
import { ReduceStore } from 'flux/utils';

class BankStore extends ReduceStore {
    getInitialState() {
        return 0;
    }

    reduce(state, action) {
        switch (action.type) {
            case bankConstants.CREATED_ACCOUNT:
                return 0;
                break;
            case bankConstants.WITHDREW_FROM_ACCOUNT:
                return state - action.ammount;
                break;
            case bankConstants.DEPOSITED_INTO_ACCOUNT:
                return state + action.ammount;
                break;
            default:
                return state;
                break;
        }
    }
}


export default new BankStore(AppDispatcher);
