Feature: Nexudus Login Test
  As a user I should be able to login

  Background:
    Given I am on login page

    Scenario: I shouldn't be able to login with invalid credentials and page shows error message
      When I confirm login page is available
      And I enter "bad@example.com" as email
      And I enter "badpassword" as password
      And I click on the Login button
      Then I should see a clear error message on the screen

  Scenario: I should be able to login with valid credentials
    When I confirm login page is available
    And I enter "adrian+1004930927@nexudus.com" as email
    And I enter "A8Pd6m16YfJt" as password
    And I click on the Login button
    Then I should be redirected to the dashboard home page