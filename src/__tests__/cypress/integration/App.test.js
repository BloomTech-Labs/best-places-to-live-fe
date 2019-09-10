describe ('Testing Cypress', () => {
    it ('is working', () => {
        expect (true).to.equal (true);
    });
});

describe('Directs to Site',() => {
    it('vists site stagefe.letsmovehomie.com', () => {
        cy.visit("/")
        cy.url().should('include','/')
    });
});

describe('check for certain words', () => {
    it('input field should contain', () => {
        cy.contains("Enter an Address, City, or Zip Code")
    });
});

describe("Homepage input field test", () => {
    it('click on search field ', () => {
        cy.get("#outlined-search")
            .click()
            .type("Hello")
    });
});

describe("Click on navbar", () => {
    it('clicks top10 link', () => {
        cy.get('#top10Button')
            .click()
            cy.url().should('include', '/Topten')
            cy.request('GET','http://162.243.168.251/city/topten-cost-of-living/')
    });
});

describe("Moving to Register page", () => {
    it('clicks Sign UP link', () => {
        cy.get('#registerButton')
            .click()
    })
})

describe("Test form inputs", () =>{
    it('clicks on each input field on register form', () => {
        cy.get('#name').click()
        cy.contains("name")
        cy.get('#email').click()
        cy.contains("Email")
        cy.get('#password').click()
        cy.contains("password")
        cy.get('#password2').click()
        cy.contains("Confirm password")
        cy.get('.MuiButton-label').click()
    })
})

describe("Navigation to Login componemt from SignUp component", () => {
    it('clicks on Login Link', () => {
        cy.get('.MuiLink-root').click()
        cy.get(':nth-child(2) > .MuiTypography-root').click()
    })
})

describe("inputs info in form", () => {
    it('Fills out Form', () => {
        cy.server()
        cy.route('POST', 'http://162.243.168.251/users/register' , {
        });

        const name = "cypress";
        const email = "cypress1@test.com";
        const password = ";lkjasdf";
        const password2 = ';lkjasdf';
        cy.get('#name').click().type(name)
        cy.get('#email').click().type(email);
        cy.get('#password').click().type(password);
        cy.get('#password2').click().type(password2);
        cy.get('.MuiButton-label').click()
    });
});

describe("Directs to login page", () => {
    it('clicks on Already hav an account link', () => {
        cy.get('.MuiLink-root').click()
    })
})

describe("Tests clicks on login page", () => {
    it('clicks on all clickable objects', () => {
        cy.get('#email').click()
        cy.get('#password').click()
        cy.get('.makeStyles-submit-4 > .MuiButton-label').click()
        //  vvvv Google Auth test but doesnt work vvvv
        // cy.get('[href="http://stagebe.letsmovehomie.com/auth/login"] > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get(':nth-child(2) > .MuiTypography-root').click()
        cy.get('.MuiLink-root').click()
    })
})

describe("Test login proccess", () => {
    it('fills login form and submits', () => {
        cy.get('#email')
            .click()
            .type('test@test.com')
        cy.get('#password')
            .click()
            .type(';lkjasdf')
        cy.get('.makeStyles-submit-4 > .MuiButton-label').click()
    })
})



