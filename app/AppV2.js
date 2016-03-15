/**
 * You will change the app component to automatically subscribe to the
 * BankAccountStore and update its state whenever it changes. You start by removing what won’t be
 * needed anymore: you won’t need to declare the component’s initial state on the constructor. The
 * componentDidMount and componentWillUnmount lifecycle methods can also be removed because the
 * higher order component will take care of subscribing to and unsubscribing from the stores for you. For
 * the same reason, you get rid of the handleStoreChange method. To use this higher order function, your
 * container component must implement two class methods: calculateState (which maps store state to local
 * component’s state) and getStores (which returns an array with all the stores the component listens to).
 * Mind that the container higher order function only works with stores that extend Flux Util’s Stores
 */
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import BankStore from './BankStoreV3';
import BankActions from './BankActions';

class App extends Component {
    constructor() {
        super(...arguments);
        BankActions.createAccount();
    }

    deposit() {
        BankActions.depositIntoAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }

    withdraw() {
        BankActions.withdrawFromAccount(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }

    render() {
        return (
        	<div>
				<header>FluxTrust Bank v2</header>
				<h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
				<div className="atm">
					<input type="text" placeholder="Enter Ammount" ref="ammount" />

					<br />
					<button onClick={this.withdraw.bind(this)}>Withdraw</button>
					<button onClick={this.deposit.bind(this)}>Deposit</button>
				</div>
			</div>
        );
    }
}

App.getStores = () => ([BankStore]);
App.calculateState = (prevState) =>({balance: BankStore.getState()});

const AppContainer = Container.create(App);

render(<AppContainer />, document.getElementById('root'));
