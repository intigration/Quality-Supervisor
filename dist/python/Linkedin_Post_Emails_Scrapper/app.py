from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import selenium
import time
import re
import pandas as pd
import os
import sys

from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
def scroll_down(driver):
    last_height = driver.execute_script("return document.body.scrollHeight")

    while True:

        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(2)
        new_height = driver.execute_script("return document.body.scrollHeight")

        if new_height == last_height:
            break

        last_height = new_height

def read_creds(filename):   

    """This function reads username and password from creddentials.json

    Arguments:
    filename: name of the file which stores the credentials

    :return: returns the credentials
    """
    with open(filename) as f:
        credentials = json.load(f)
    return credentials

def login_and_npage():
    """This function login to the linkedin page return the number of pages of connection


    :return: number of pages
    """
    creds = read_creds("credentials.json")

    # open login page
    browser.get(pageurl)
    elementID = browser.find_element_by_id("username")
    elementID.send_keys(creds["username"])
    elementID = browser.find_element_by_id("password")
    elementID.send_keys(creds["password"])
    elementID.submit()
    url = browser.current_url

    browser.get(url)

    connectionclass = "mn-connection-card__details"

    numberofpages = 0

    time.sleep(2)
    last_height = browser.execute_script("return document.body.scrollHeight")

    while True:
        # Scroll down to bottom
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")

        elements = browser.find_elements_by_class_name(
            "artdeco-pagination__indicator--number"
        )

        if len(elements) > 0:
            numberofpages = int(elements[-1].text)
            return numberofpages

        # Wait to load page
        time.sleep(2)

        # Calculate new scroll height and compare with last scroll height
        new_height = browser.execute_script("return document.body.scrollHeight")

        if new_height == last_height:
            break
        last_height = new_height
    return 0


def extract(username_send, password_send, url):
    main_url = f"https://www.linkedin.com/login?session_redirect={url}&trk=public_post_share-update-sign-in"
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get(main_url)

    username = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable(
            (By.XPATH, "/html/body/div/main/div[2]/form/div[1]/input")
        )
    )
    username.send_keys(username_send)
    time.sleep(0.5)

    password = WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable(
            (By.XPATH, "/html/body/div/main/div[2]/form/div[2]/input")
        )
    )
    password.send_keys(password_send)
    time.sleep(0.5)

    try:
        login = WebDriverWait(driver, 5).until(
            EC.element_to_be_clickable(
                (By.XPATH, "/html/body/div/main/div[2]/form/div[3]/button")
            )
        )
    except selenium.common.exceptions.TimeoutException:
        login = WebDriverWait(driver, 5).until(
            EC.element_to_be_clickable(
                (By.XPATH, "/html/body/div/main/div[2]/form/div[4]/button")
            )
        )

    login.click()

    time.sleep(3)

    try:
        try:
            test = driver.find_element_by_xpath(
                "/html/body/div[7]/div[3]/div/div/div/div/section/div/div[4]/div/div[3]/div[3]/article[1]"
            )
            num_div1 = 7
            num_div2 = 3
        except:
            test = driver.find_element_by_xpath(
                "/html/body/div[7]/div[3]/div/div/div/div/section/div/div[4]/div/div[4]/div[3]/article[1]"
            )
            num_div1 = 7
            num_div2 = 4
    except selenium.common.exceptions.NoSuchElementException:
        try:
            test = driver.find_element_by_xpath(
                "/html/body/div[8]/div[3]/div/div/div/div/section/div/div[4]/div/div[3]/div[3]/article[1]"
            )
            num_div1 = 8
            num_div2 = 3
        except:
            test = driver.find_element_by_xpath(
                "/html/body/div[8]/div[3]/div/div/div/div/section/div/div[4]/div/div[4]/div[3]/article[1]"
            )
            num_div1 = 8
            num_div2 = 4

    start = 1
    f = open("data.txt", "a")

    while True:
        try:
            try:
                f.write(
                    driver.find_element_by_xpath(
                        f"/html/body/div[{num_div1}]/div[3]/div/div/div/div/section/div/div[4]/div/div[{num_div2}]/div[3]/article[{start}]"
                    ).text
                )
                f.write("\n")
                time.sleep(0.3)
            except:
                more = WebDriverWait(driver, 10).until(
                    EC.element_to_be_clickable(
                        (
                            By.XPATH,
                            f"/html/body/div[{num_div1}]/div[3]/div/div/div/div/section/div/div[4]/div/div[3]/div[3]/div/button",
                        )
                    )
                )
                more.click()
                time.sleep(2)
                scroll_down(driver)
            start += 1
        except:
            break

    f.close()
    emails = []
    file_open = open("data.txt", "r")

    for i in file_open:
        email = re.findall(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+", i)
        if len(email) != 0:
            emails.append(email[0])

    file_open.close()
    df = pd.DataFrame(emails)
    df.to_csv("Data.csv")
    os.remove("data.txt")
    driver.close()


if __name__ == "__main__":
    extract(sys.argv[1], sys.argv[2], sys.argv[3])
