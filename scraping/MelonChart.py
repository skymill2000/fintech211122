from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
driver.get("https://www.melon.com/chart/index.htm")

tableBody = driver.find_element_by_xpath('//*[@id="frm"]/div/table/tbody')
tableRows = tableBody.find_elements_by_tag_name('tr')
for index, value in enumerate(tableRows):
    if index != 0:
        chartNum = value.find_elements_by_tag_name('td')[1]
        title = value.find_elements_by_tag_name('td')[5]
        print(chartNum.text)
        print(title.text)
