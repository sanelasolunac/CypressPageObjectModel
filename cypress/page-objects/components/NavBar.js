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
}
