@smoke
Feature: User Registration Test Scenario

  Background: 
    Given user navigated to signup url "http://localhost:8080/FlyAway/signup"
  
  Scenario: Successfully Registration
    When user enter required details as following below
      | email_id        | password | confirm_pwd | name   | address | city   |
      | user01@user01.com | user01   | user01      | user01 | user01  | user01 |
    And user click on submit button
    Then validate user registration is successful 