export default class NavBar {
	static clickOnLogo() {
		cy.get('.brand').click()
	}

	static searchBox(text) {
		cy.get('#searchTerm').type(text)
	}

	static clickOnSignInButton() {
		cy.get('#signin_button').click()
	}

	static clickOnSettingsButton() {
		cy.get(':nth-child(2) > .dropdown-toggle').click()
	}

	static clickOnLogoutButton() {
		cy.contains('username').click()
		cy.get('#logout_link').click()
	}

	static displaySignInButton() {
		cy.isVisible('#signin_button')
	}
}
