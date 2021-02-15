describe('buyflow', () => {
    it('should start the buflow', () => {
        cy.visit("http://localhost:3000/");
        cy.contains('a', 'Get started!').should('be.visible').click();
    });

    it('should fill firstname and lastname', () => {
        cy.contains('button', 'Next').should('be.disabled');
        cy.get('input[name="firstName"]').should('be.visible').clear().type('test');
        cy.get('input[name="lastName"]').should('be.visible').clear().type('test');
        cy.contains('button', 'Next').should('not.be.disabled').click();
    });

    it('should fill age', () => {
        cy.contains('button', 'Previous').should('not.be.disabled');
        cy.get('input[name="age"]').should('be.visible').clear().type('22');
        cy.contains('button', 'Next').should('not.be.disabled').click();
    });

    it('should fill email', () => {
        cy.contains('button', 'Next').should('be.disabled');
        cy.contains('button', 'Previous').should('not.be.disabled');
        // case wrong email
        cy.get('input[name="email"]').should('be.visible').clear().type('aaa');
        cy.contains('button', 'Next').should('be.disabled');
        // case correct email
        cy.get('input[name="email"]').should('be.visible').clear().type('test@test.com');
        cy.contains('button', 'Next').should('not.be.disabled').click();
    });

    it('should show review', () => {
        cy.contains('button', 'Next').should('not.exist');
        cy.contains('button', 'Previous').should('not.exist');
        // should show email and name and age
        cy.get('p').should('have.length', 3);
        cy.get('p').eq(0).should('contain', 'test');
        cy.get('p').eq(1).should('contain', '22');
        cy.get('p').eq(2).should('contain', 'test@test.com');
        cy.contains('button', 'Purchase').should('be.visible').click();
        // route to the welcome page
        cy.contains('a', 'Get started!').should('be.visible')
    });
});