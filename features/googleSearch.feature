Feature: To search cucumber-js in google

  @GoogleScenario
  Scenario: Cucumber Google
    Given I am on google search page
    When I type "cucumberjs"
    And I click search button
    Then I should see results for cucumberjs
