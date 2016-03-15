import AppDispatcher from './AppDispatcher';
import constants from './constants';

let BankActions = {
	/**
	 * Create a new account with empty value.
	 */
	createAccount(){
		AppDispatcher.dispatch({
			type: constants.CREATED_ACCOUNT,
			ammount: 0
		});
	},

	/**	  
	 * @param  {number} ammount to desposit
	 */	
	depositIntoAccount(ammount){
		AppDispatcher.dispatch({
			type: constants.DEPOSITED_INTO_ACCOUNT,
			ammount: ammount
		});
	},

	/**
	 * @param  {number} ammount to withdraw
	 */
	withdrawFromAccount(ammount){
		AppDispatcher.dispatch({
			type: constants.WITHDREW_FROM_ACCOUNT,
			ammount: ammount
		});
	}
};

export default BankActions;