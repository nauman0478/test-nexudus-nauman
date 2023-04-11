package com.nexudus.pages;

import com.nexudus.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class DashboardPage extends Utility {
    private static final Logger log = LogManager.getLogger(DashboardPage.class.getName());

    //Declaring WebElement type variable
    @CacheLookup
    @FindBy(xpath = "//a[@title='Dashboard']")
    WebElement title;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Inventory')]")
    WebElement inventoryButton;

    @CacheLookup
    @FindBy(xpath = "//strong[contains(text(),'Products')]")
    WebElement productButton;


//This method will return if page title is displayed or not
    public Boolean dashboardTitle() {
        log.info("Title of page is " + title.getText());
        return title.isDisplayed();
    }

    //This method will navigate WebDriver to Product page
    public void navigateToProductsPage() {
        log.info("Navigated to product page");
        clickOnElement(inventoryButton);
        clickOnElement(productButton);
    }
}
