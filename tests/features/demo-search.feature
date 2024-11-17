@demo
Feature: The Holiday Extras Website

  Scenario Outline: As a user, I can search Airport Parking
    Given I am at the home page
    When I search the airport parking with <iata>
    Then I should be able to see the search result
    And The heading should be <heading>
    Examples:
      | iata | heading            |
      | LGW  | Gatwick Parking    |
      | LPL  | Liverpool Parking  |