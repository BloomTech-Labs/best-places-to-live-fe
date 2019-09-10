describe('Navigation stress test', () => {
    it('Clicks on all navbar links', () => {
        cy.visit('/')
        cy.get('#top10Button')
            .click()
        cy.get('#homeButton')
            .click()
        cy.get('#registerButton')
            .click()
        cy.go('back')
        cy.get('#loginButton')
            .click()
        cy.go('back')
    });
})

describe('Individual navbar button test', () => {
    it('Clicks on top10 link on navbar', () => {
    cy.get('#top10Button')
        .click()
     cy.request('GET','http://162.243.168.251/city/topten-cost-of-living/')
    });
});

describe('Individual navbar button test', () => {
    it('Clicks on Home link on navbar', () => {
        cy.get('#homeButton')
            .click( expect('/'))
            expect('/')
    });
});

describe('Individual navbar button test', () => {
    it('Clicks on login link on navbar', () => {
        cy.get('#loginButton')
            .click()
            .go('back')
    });
});

describe('Individual navbar button test', () => {
    it('Clicks on register link on navbar', () => {
        cy.get('#registerButton')
            .click()
            .go('back')
    });
});


