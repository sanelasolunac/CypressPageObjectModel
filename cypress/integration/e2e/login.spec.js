import { url, login_username, login_password } from '../../../config'
import NavBar from '../../page-objects/components/NavBar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('Login Failed Tests', () => {
	before(function () {
		cy.visit(url)
		NavBar.clickOnSignInButton()
	})

	it('should try to login with invalod credentials', () => {
		LoginPage.login('invalid_username', 'invalid_password')
	})

	it('should display error message', () => {
		LoginPage.displayErrorMessage()
	})
})

describe('Login Success Test', () => {
	before(function () {
		cy.visit(url)
		NavBar.clickOnSignInButton()
	})

	it('should login into application', () => {
		LoginPage.login(login_username, login_password)
	})

	it('should log out from application', () => {
		NavBar.clickOnLogoutButton()
		NavBar.displaySignInButton()
	})
})
