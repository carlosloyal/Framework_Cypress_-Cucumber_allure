const pageLocators = {
    productTitle: '.name',
    addToCartButton: '.btn-success',
    cartLink: '#cartur'
}

class ProductPage {
    // Web elemets
    productTitle() {
        return cy.get(pageLocators.productTitle);
    }

    addToCartButton() {
        return cy.get(pageLocators.addToCartButton);
    }
