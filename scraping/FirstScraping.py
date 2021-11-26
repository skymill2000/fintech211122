from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
driver.get("https://www.etnews.com/20211125000143?mc=ns_001_00001")
# title = driver.find_element_by_xpath(
#     '//*[@id="container"]/div[1]/div[1]/div[1]/div[2]/p[1]')
# description = driver.find_element_by_xpath(
#     '//*[@id="container"]/div[1]/div[1]/div[1]/div[2]/p[2]')
# print(title.text)
# print(description.text)
