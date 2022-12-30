import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit the DEMOBLAZE homepage', () => {
    cy.visit('/');
});



