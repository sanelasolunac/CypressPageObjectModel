import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
	static login(username, password) {
		cy.login(username, password)
	}

	static clickForgotPassword() {
		cy.contain('Forgot your password ?').click()
	}

	static displayErrorMessage() {
		// cy.get('.alert-error').should('be.visible')
		cy.isVisible('.alert-error')
	}

	static displaySignInButton() {
		cy.get('#signin_button').should('be.visible')
	}
}
