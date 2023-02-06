Feature: Get secondary title in eurostep

  Scenario: Title is in the page
    When I called the secondary title
    Then I should see "Secure Collaboration for Product Lifecycle Management"
