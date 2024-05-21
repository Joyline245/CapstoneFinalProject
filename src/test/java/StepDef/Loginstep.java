package StepDef;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.WebDriver;

import Pages.Loginpage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Loginstep {
	WebDriver driver = Hooks.driver;
	Loginpage lp;
	
	@Given("the user is on login page {string}")
	public void the_user_is_on_login_page(String url) {
	driver.get(url);
	}

	@When("the user enter username as {string} and passwrod as {string}")
	public void the_user_enter_username_as_and_passwrod_as(String username, String pwd) {
	    lp = new Loginpage(driver);
	    lp.setEmail(username);
	    lp.setPwd(pwd);
	}

	@When("click on login button")
	public void click_on_login_button() {
		lp = new Loginpage(driver);
		lp.clickLoginBtn();
	}

	@Then("user should be successfully logged in")
	public void user_should_be_successfully_logged_in() {
	    lp = new Loginpage(driver);
	    String actualUrl = driver.getCurrentUrl();
	    String expectedUrl = "http://localhost:8080/FlyAway/dashboard";
	    assertEquals(expectedUrl, actualUrl);
	
	}
}
