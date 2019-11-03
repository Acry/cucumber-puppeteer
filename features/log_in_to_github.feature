Feature: Log in to GitHub
  Automated Login to GitHub

  Scenario: Logged in succesful or not.
    Given I am on GitHib.
    When I fill in my name,
    And I fill in my password,
    And I press the login button,
    Then I should be logged in.
