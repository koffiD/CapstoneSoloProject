import { soloPage } from "./soloPageObjects";
const koffi = new soloPage
const fs = require('fs')


test('ScreenShot of Error page', async()=> {
    await koffi.navigate()
    await koffi.setInput(koffi.username,'koffi')
    await koffi.setInput(koffi.password,'reset')
    await koffi.click(koffi.submitlogin)
    let erroroMessage = await koffi.getText (koffi.loginerror)
    expect(erroroMessage).toContain('An internal error has occurred and has been logged')




    await fs.writeFile(`${__dirname}/ErrorPicture.png`,
    await koffi.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')})
       
   await koffi.driver.sleep(3000)
   await koffi.driver.quit()
   




})