export default class AccountLinks {
	static clickOnAccountSummuryButton() {
		cy.get('#account_summary_tab > a').click()
	}

	static clickOnAccountActivityButton() {
		cy.get('#account_activity_tab > a').click()
	}

	static clickOnTransferFundsButton() {
		cy.get('#transfer_funds_tab > a').click()
	}

	static clickOnPayBillsButton() {
		cy.get('#pay_bills_tab > a').click()
	}

	static clickOnMoneyMapButton() {
		cy.get('#money_map_tab > a').click()
	}

	static clickOnOnlineStatmentsButton() {
		cy.get('#online_statements_tab > a').click()
	}
}
