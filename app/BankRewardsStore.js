import AppDispatcher from './AppDispatcher';
import BankStore from './BankStoreV3'
import bankConstants from './constants';
import { ReduceStore } from 'flux/utils';

class BankRewardsStore extends ReduceStore {
    getInitialState() {
        return 'Basic';
    }

    reduce(state, action) {
        this.getDispatcher().waitFor([BankStore.getDispatchToken()]);

        if (action.type === bankConstants.DEPOSITED_INTO_ACCOUNT ||
            action.type === bankConstants.WITHDREW_FROM_ACCOUNT) {

            let balance = BankStore.getState();
            if (balance < 5000)
                return 'Basic';
            else if (balance < 10000)
                return 'Silver';
            else if (balance < 50000)
                return 'Gold';
            else
                return 'Platinum';
        }
        return state;
    }
}

export default new BankRewardsStore(AppDispatcher);
