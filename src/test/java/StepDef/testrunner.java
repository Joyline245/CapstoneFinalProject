package StepDef;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		dryRun=false,
		monochrome=false,
		features="src/test/java/features",
		plugin ={"pretty","html:target/html-cucumber"},
		glue="StepDef",
		tags= {"@smoke"}
		
		)
public class testrunner {

}
