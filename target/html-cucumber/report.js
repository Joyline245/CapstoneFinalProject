$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/01Register.feature");
formatter.feature({
  "name": "User Registration Test Scenario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigated to signup url \"http://localhost:8080/FlyAway/signup\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.Register.user_navigated_to_signup_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully Registration",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter required details as following below",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.Register.user_enter_required_details_as_following_below(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.Register.user_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate user registration is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.Register.validate_user_registration_is_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/02Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:8080/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.Loginstep.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.Loginstep.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.Loginstep.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.Loginstep.user_should_be_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/03SearchAndBookflight.feature");
formatter.feature({
  "name": "Flight Booking",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:8080/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.Loginstep.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.Loginstep.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.Loginstep.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.Loginstep.user_should_be_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for available flights",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on  the flight booking page \"http://localhost:8080/FlyAway/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.the_user_is_on_the_flight_booking_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the departure as \"Bangalore\" and destination as \"Hyderabad\" cities",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.user_enter_the_departure_as_and_destination_as_cities(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.the_user_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a list of available flights",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.user_should_see_a_list_of_available_flights()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:8080/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.Loginstep.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.Loginstep.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.Loginstep.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.Loginstep.user_should_be_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Select and book flight",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on  the flight booking page \"http://localhost:8080/FlyAway/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.the_user_is_on_the_flight_booking_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the departure as \"Bangalore\" and destination as \"Hyderabad\" cities",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.user_enter_the_departure_as_and_destination_as_cities(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.the_user_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on book flight button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.the_user_click_on_book_flight_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigated to confirm booking details page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.user_should_navigated_to_confirm_booking_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on login page \"http://localhost:8080/FlyAway/login\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.Loginstep.the_user_is_on_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter username as \"user01@user01.com\" and passwrod as \"user01\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.Loginstep.the_user_enter_username_as_and_passwrod_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.Loginstep.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.Loginstep.user_should_be_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "complete flight booking",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user is on  the flight booking page \"http://localhost:8080/FlyAway/home\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.the_user_is_on_the_flight_booking_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the departure as \"Bangalore\" and destination as \"Hyderabad\" cities",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.user_enter_the_departure_as_and_destination_as_cities(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.the_user_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on book flight button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.the_user_click_on_book_flight_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on complete flight booking button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.the_user_click_on_complete_flight_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigated to complete purchase page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.SearchAndBookflightstep.user_should_navigated_to_complete_purchase_page()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});