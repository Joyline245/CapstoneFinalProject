@smoke
Feature: Login Functionality

  Scenario: Successful Login
    Given the user is on login page "http://localhost:8080/FlyAway/login"
    When the user enter username as "user01@user01.com" and passwrod as "user01"
    And click on login button
    Then user should be successfully logged in
    