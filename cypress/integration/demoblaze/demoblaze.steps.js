import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit the DEMOBLAZE homepage', () => {
    cy.visit('/');
});



describe ("Login the demoblaze appplication", () => {
    it ("Launch the application", () {
        cy.visit("https://www.demoblaze.com/")
    });

    it("Login the application with the correct user and valid password", () {
        cy.get("#login2").click()
        .get("#loginusername", {timeout = 6000}).type("cypressDemo") 
        .get("#loginpassword", {timeout = 6000}).type("test") 
        .get(".btn-primary").contains("Log in").click()
    })
})


