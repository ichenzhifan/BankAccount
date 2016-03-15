import React, { Component } from 'react';
import { render } from 'react-dom';
import BankStore from './BankStoreV3';
import BankActions from './BankActions';

class App extends Component {
    constructor() {
        super(...arguments);
        BankActions.createAccount();

        this.state = {
            balance: BankStore.getState()
        };
    }

    componentDidMount() {
        this.storeSubscription = BankStore.addListener(data => this.handleStoreChange(data));
    }

    componentWillUnmount() {
        this.storeSubscription.remove();
    }

    handleStoreChange() {
        this.setState({
            balance: BankStore.getState()
        });
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
				<header>FluxTrust Bank</header>
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

render(<App />, document.getElementById('root'));
