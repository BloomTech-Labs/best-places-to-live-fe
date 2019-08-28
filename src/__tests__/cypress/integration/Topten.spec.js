describe("GET Test for TopTen", ()=> {
    it('Grabs Top Ten', () => {
        cy.visit('http://localhost:3000/Topten')
        cy.request('GET', 'https://demo0969329.mockable.io/topten')
            .should((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).to.have.length(10)
            })
    })
})