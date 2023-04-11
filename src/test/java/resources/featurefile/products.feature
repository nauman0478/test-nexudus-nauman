Feature: Adding and deleting Products

  Scenario: As a User I should be able to add and delete a product
    Given I am on login page
    When I enter "adrian+1004930927@nexudus.com" as email
    And I enter "A8Pd6m16YfJt" as password
    And I click on the Login button
    Then I should be redirected to the dashboard home page
    And I navigate to product page
    And I click on Add Product button
    And I fill "name" as name
    And I fill "description" as description
    And I fill the "price" as price
    And I click on save changes
    And I search by the new product by name
    Then i should be able to see the new product name on top of list
    When I select the first item on the list
    And I click on Delete 1 record button
    And I confirm modal dialog by clicking on Yes do it
    Then I should be able to confirm that product is no longer available

