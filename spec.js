describe('Protractor Test', function() {
	
  var adduser = element(by.id('Add User'));
  var firstName = element(by.id('firstName'));
  var lastName = element(by.id('LastName'));
  var userName = element(by.id('UserName'));
  var pwd = element(by.id('Password'));
  var email = element(by.id('Email'));
  var cellphone = element(by.binding('MobilePhone'));
  var savebtn = element(by.id('Save'));

  beforeEach(function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
  });

  
  it('should add new user', function() {
	  
	  adduser.click();
	  
    firstName.sendKeys("Test first name");
    lastName.sendKeys("Test last name");
	userName.sendKeys("TestUser");
    pwd.sendKeys("Testpwd");
	email.sendKeys("test@test.com");
	cellphone.sendKeys("12345534");
	element.all(by.id('CompanyAAA')).get(0).click();
	ptor.findElement(protractor.By.css('select option:1')).click();
	
	savebtn.click();
    

    expect(latestResult.getText()).toEqual('Test first name');
  });

  it('verify last name', function() {
    // Fill this in.
    expect(latestResult.getText()).toEqual('Test last name');
	 expect(latestResult.getText()).toEqual('TestUser');
	 expect(latestResult.getText()).toEqual('test@test.com');
	 
  });

  
});