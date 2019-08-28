describe('Cypress', () => {
    it('is working', () => {
        expect(true).to.equal(true)
    })
})


describe('first Test', () => {
    it('loads page', () => {
        cy.visit('')
        cy.request('GET', 'http://167.71.246.202:3001/')
            .should((response) => {
                expect(response.body).to.have.string('welcome to our backend api')
                expect(response.status).to.eq(200)
            })
        cy.request('http://167.71.246.202:3001/all')
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.length(39)

            })
        })
    })


describe ('second Test', () => {
    it ('Focus on the input', () => {
        cy.visit ('http://localhost:3000');
        cy.focused().should ('have.class', 'nameInput');
    });
});


describe ("third Test", () =>{
    it('accepts input', () =>{
        const input ="We really need a delete button"
        cy.get('.nameInput')
            .type(input)
        cy.get('[data-cy=submit]').click()
    })
});