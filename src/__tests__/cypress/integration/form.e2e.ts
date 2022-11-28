describe('Create an user', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('should have a form', () => {
		cy.get('form').should('exist');
	});

	it('should have the words "Cadastrar"', () => {
		cy.contains('Cadastrar').should('exist');
	});

	it('should user be able to change value from field', () => {
		cy.get('input[name="firstName"]').type('John');
		cy.get('input[name="lastName"]').type('Doe');
		cy.get('input[name="email"]').type('johndoe@gmail.com');
		cy.get('input[name="birthday"]').type('1999-08-31');
		cy.get('input[name="password"]').type('password');
		cy.get('select[name="country"]').select('Algeria');
		cy.get('textarea[name="bio"]').type('Bio');
		cy.get('input[type="checkbox"]').check();
		const button = cy.get('button');
		button.should('be.enabled');
		button.click();
		cy.location('pathname').should('contain', '/users');
		cy.contains('Bem vindo John Doe').should('exist');
		cy.contains('Você nasceu no dia 31 de agosto de 1999').should('exist');
		cy.contains('JD').should('exist');
	});

	it('should not be able to submit with input values are in default value', () => {
		const button = cy.get('button');
		button.should('be.disabled');
	});
});
