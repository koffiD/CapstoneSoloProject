import{BasePage} from './basePage'
import{By} from 'selenium-webdriver'

export class soloPage extends BasePage{

    username: By = By.className('input')
    password: By = By.xpath('//input[@name="password"]')
    //Fiding selctors for login is kinda confusing
    //it has 2 part of the button
    submitlogin: By = By.xpath('(//input[@class="button"])[1]')
    //submitlogin: By = By.css('submit')
    loginerror: By = By.className('error')
    customercare: By = By.className('contact')
    aboutus: By = By.className('aboutus')
    homepage: By = By.className('home')
    name: By =By.id('name')
    email: By = By.id('email')
    phonenumber: By = By.id('phone')
    inputmessage: By = By.id('message')
    sendtocustomercare: By=By.xpath('(//input[@class="button"])[2]')
    //forgot login info.Error clickin that
    recoverlogin: By = By.xpath('//a[text()="Forgot login info?"]')
    signUp: By = By.xpath('')
    latestnews: By = By.xpath('')

     //Recovering login
    firstName:	By = By.id('firstName')
    lastName: By = By.id('lastName')
    address: By = By.id('address.street')
    city:	By = By.id('address.city')
    state:	By = By.id('address.state')
    zipCode: By = By.id('address.zipCode')
    SSN: By = By.id('ssn')
    findLoginInfo: By = By.xpath('(//input[@class="button"])[2]')











    constructor() {
        super({url: 'https://parabank.parasoft.com/parabank/index.htm'})
    }

}