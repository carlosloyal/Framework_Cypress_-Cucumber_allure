
Feature: Manage DEMOBLAZE cart

 
    As a user
    I want to add products to cart, see the buying cart option, and 
removing elements from cart
    So that I always be aware about my items selected in the cart
 
    Scenario: Login

        Given I open the home page DEMOBLAZE and I see the Login buttom

        When I click in the Login 
        And I am logged in 
        Then the home page  DEMOBLAZE is diplayed

    Scenario: Add  products 
        Given I am logged in and visit the DEMOBLAZE homepage
        When I click in the mobile 
        And I confirm the purchase a new mobile
        Then the mobile is included in the cart

    Scenario: Visualice carrousel
        Given I am logged in and visit the DEMOBLAZE homepage
        When I click in the arrow of the carrousel
        And I can see images displaying
        Then The information is shown up in the carrousel

     Scenario: Visualice productos
        Given I am logged in and visit the DEMOBLAZE homepage
        When I click on any product
        And I can see images and products informations displaying
        Then The information is shown up in the cart

        Scenario: Access to Sign up 
        When I click on  Sign up option of the navigation bar
        Then The Sign up button should be shown up

    Scenario: Verify mobiles in stock
        When I click on mobile category
        Then Only mobiles are displayed
