package com.nexudus.pages;

import com.nexudus.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class ProductsPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductsPage.class.getName());

    //Declaring WebElement type variable
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Add product')]")
    WebElement addProductButton;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Manual entry')]")
    WebElement manualEntry;

    @CacheLookup
    @FindBy(xpath = "//input[@data-test-subj='product_Name']")
    WebElement productName;

    @CacheLookup
    @FindBy(xpath = "//textarea[@class='euiTextArea euiTextArea--resizeVertical euiTextArea--fullWidth soft-error']")
    WebElement productDescription;

    @CacheLookup
    @FindBy(xpath = "//input[@data-test-subj='product_Price']")
    WebElement unitPrice;

    @CacheLookup
    @FindBy(xpath = "//input[@class='euiFieldNumber euiFieldNumber--fullWidth euiFieldNumber--inGroup']")
    WebElement unitPrice2;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Save changes')]")
    WebElement saveChangesButton;

    @CacheLookup
    @FindBy(xpath = "//input[@class='euiFieldSearch euiFieldSearch--fullWidth']")
    WebElement searchBar;

    @CacheLookup
    @FindBy(xpath = "//strong[contains(text(),'Test Product')]")
    WebElement product;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Delete')]")
    WebElement deleteButton;
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Yes, do it')]")
    WebElement confirmDeleteButton;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'No items found')]")
    WebElement productList;

    public void clickOnAddProductButton() {
        clickOnElement(addProductButton);
        clickOnElement(manualEntry);
        log.info("Clicked on " + addProductButton.getText());
    }

    public void enterProductName(String name) {
        sendTextToElement(productName, name);
        log.info("Sent name is  " + name);
    }

    public void enterProductDescription(String desc) {
        sendTextToElement(productDescription, desc);
        log.info("Sent description is " + desc);
    }


    public void enterUnitPrice(String price) {
        try {
            clickOnElement(unitPrice);
            Thread.sleep(1000);
            sendTextToElement(unitPrice2, price);
            log.info("Sent price is " + price);
        } catch (InterruptedException e) {
            log.error("InterruptedException occurred: " + e.getMessage());
        }
    }



    public void clickOnSaveChangesButton() {
        clickOnElement(saveChangesButton);
        log.info("clicked on " + saveChangesButton.getText());

    }

    public void enterProductNameInSearchBar(String product) {
        try {
            Thread.sleep(1000);
            sendTextToElement(searchBar, product);
            log.info("Sent text to search bar is " + product);
        } catch (InterruptedException e) {
            log.error("Interrupted Exception occurred: " + e.getMessage());
        }
    }


    public void clickOnSearchResult() {
            try {
                Thread.sleep(2000);
                clickOnElement(product);
                log.info("Clicked on " + product.getText());
            } catch (InterruptedException e) {
                log.error("Error occurred while clicking on the search result: " + e.getMessage());
            }
    }

    public void clickOnDeleteButton() {
        clickOnElement(deleteButton);
        log.info("Clicked on " + deleteButton.getText());

    }

    public void clickOnYesDoItButton() {
        clickOnElement(confirmDeleteButton);
        log.info("Clicked on Yes, do it");
    }

    public boolean noItemFound() {
        log.info("Confirmed the product is no longer available");
        return productList.isDisplayed();
    }
}
