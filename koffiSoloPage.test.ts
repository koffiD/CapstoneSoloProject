import { soloPage } from "./soloPageObjects";
const koffi = new soloPage

test('feedback to customer care', async()=>{

    await koffi.navigate()
    await koffi.click(koffi.customercare)
    await koffi.setInput(koffi.name,'koffi')
    await koffi.setInput(koffi.email,"dev@gmail.com")
    await koffi.setInput(koffi.phonenumber,'1234567891')
    await koffi.setInput(koffi.inputmessage,'I really like how cool your website is but it needs improvement')
    await koffi.click(koffi.sendtocustomercare)
    //await koffi.click(koffi.sendtocustomercare)
    //await koffi.click(koffi.submitlogin)
    /*let errroMessage = await koffi.getText(koffi.loginerror)
    expect(errroMessage).toContain('An internal error has occurred and has been logged.')*/


})

test('Entering random username and password without signing up', async()=> {
    await koffi.navigate()
    await koffi.setInput(koffi.username,'koffi')
    await koffi.setInput(koffi.password,'reset')
    await koffi.click(koffi.submitlogin)
    let erroroMessage = await koffi.getText (koffi.loginerror)
    expect(erroroMessage).toContain('An internal error has occurred and has been logged')

   // await koffi.driver.sleep(3000) 
    //await koffi.driver.quit()
})


test('Recovering forgotten Log in',async()=>{
    await koffi.navigate()
    await koffi.click(koffi.recoverlogin)
    await koffi.setInput(koffi.firstName,'Larsen')
    await koffi.setInput(koffi.lastName,'Looser')
    await koffi.setInput(koffi.address,'1234 w Dr')
    await koffi.setInput(koffi.city,'sugarhouse')
    await koffi.setInput(koffi.state,'UT')
    await koffi.setInput(koffi.zipCode,'84106')
    await koffi.setInput(koffi.SSN,'987654321')
    await koffi.click(koffi.findLoginInfo)


    
     await koffi.driver.sleep(3000) 
     await koffi.driver.quit()




})