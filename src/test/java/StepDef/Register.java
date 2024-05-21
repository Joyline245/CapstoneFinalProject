package StepDef;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class Register {
	WebDriver driver = Hooks.driver;
	Pages.Register rp;

	// *************Successfully Registration******************//
	@Given("user navigated to signup url {string}")
	public void user_navigated_to_signup_url(String url) {
		driver.get(url);
	}

	@When("user enter required details as following below")
	public void user_enter_required_details_as_following_below(io.cucumber.datatable.DataTable table) {
		List<Map<String, String>> data = table.asMaps(String.class, String.class);

		String email = data.get(0).get("email_id");
		String password = data.get(0).get("password");
		String confirm_pwd = data.get(0).get("confirm_pwd");
		String name = data.get(0).get("name");
		String address = data.get(0).get("address");
		String city = data.get(0).get("city");
		rp = new Pages.Register(driver);
		rp.setEmailInput(email);
		rp.setPwdInput(password);
		rp.setConfirmPwdInput(confirm_pwd);
		rp.setNameInput(name);
		rp.setAddressInput(address);
		rp.setCityInput(city);

	}

	@When("user click on submit button")
	public void user_click_on_submit_button() {
		rp = new Pages.Register(driver);
		rp.clickSignUpBtn();

	}

	@Then("validate user registration is successful")
	public void validate_user_registration_is_successful() {
		rp = new Pages.Register(driver);
		rp.verifySignUp();

	}

}
