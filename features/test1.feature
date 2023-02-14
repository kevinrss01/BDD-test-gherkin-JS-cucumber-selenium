Feature: Login in ShareAspace

  Scenario: Successful login
    When I enter my login credentials and click on enter
    When I am redirected to the ShareAspace home page
    Then I should see "Spaces"

