from selenium import webdriver
from selenium.webdriver.support.ui import Select
driver = webdriver.Chrome('./chromedriver')
driver.get("http://www.eum.go.kr/web/am/amMain.jsp")

sidoSelect = Select(driver.find_element_by_xpath('//*[@id="selSido"]'))
# //*[@id="selSido"]
gun = Select(driver.find_element_by_xpath('//*[@id="selSgg"]'))
# //*[@id="selSgg"]
dong = Select(driver.find_element_by_xpath('//*[@id="selUmd"]'))
ri = Select(driver.find_element_by_xpath('//*[@id="selRi"]'))
bobn = driver.find_element_by_xpath('//*[@id="bobn"]')
bubn = driver.find_element_by_xpath('//*[@id="bubn"]')
button = driver.find_element_by_xpath(
    '//*[@id="frm"]/fieldset/div[3]/p/span/a')

sidoSelect.select_by_visible_text('전라남도')
driver.implicitly_wait(1)

gun.select_by_visible_text('고흥군')
driver.implicitly_wait(1)

dong.select_by_visible_text('고흥읍')
driver.implicitly_wait(1)

ri.select_by_visible_text('남계리')

bobn.send_keys('45')
bubn.send_keys('1')

button.click()

price = driver.find_element_by_xpath(
    '//*[@id="appoint"]/div[2]/table/tbody/tr[3]/td')
print(price.text)
