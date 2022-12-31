const pageLocators = {
    productTitle: '.success > :nth-child(2)',
    deleteButton: '.success > :nth-child(4) > a'
}

class CartPage {
    // Web elemets
    productTitle() {
        return cy.get(pageLocators.productTitle);
    }

    deleteButton() {
        return cy.get(pageLocators.deleteButton);
    }
