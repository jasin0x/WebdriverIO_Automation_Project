class Utility {
    // async getCurrentTimeInSeconds() {
    //   return Math.floor(new Date().getTime() / 1000);
    // }
  
    async takeScreenShotAsProof(result) {
      //console.log("========== ", result);
      let currentTime = Math.floor(Math.random() * 10);
      browser.saveScreenshot(`./screenshots/${currentTime}-bug-image.png`);
    }
  }
  
  export default new Utility();
  