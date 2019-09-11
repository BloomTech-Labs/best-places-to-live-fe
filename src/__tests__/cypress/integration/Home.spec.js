describe('Directs to Site',() => {
    it('vists site stagefe.letsmovehomie.com', () => {
        cy.visit("/")
    })
})


describe("Homepage input field test", () => {
    it('Selects search field ', () => {
        cy.get("#outlined-search")
            .click()
            .type("Hello")
    });
});

describe('check for certain words', () => {
    it('input field should contain', () => {
        cy.contains("Enter an Address, City, or Zip Code")
    })
})
