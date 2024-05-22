let popup = document.querySelector('.no-con-popup')
let popupUpperLine = document.querySelector('.no-con-popup > span')
let popupCountdown = document.querySelector('.popup-texts > p > b')
let frontMessageH1 = document.querySelector('.no-con-front-message > h1')
let frontMessageH2 = document.querySelector('.no-con-front-message > h2')
let count = 1
let popupHeading = document.querySelector('.popup-texts > h2')
let popupPara = document.querySelector('.popup-texts > p')
let popupIcn = document.querySelector('.popup-message > .icn > i')
function checkConnection() {
    if(!window.navigator.onLine) {
        popup.style.top = '0%'
        count = 0
        
        popupUpperLine.style.backgroundColor = '#E54E65'
        popupIcn.style.backgroundColor = `#E54E65`
        popupHeading.innerHTML = `Lost Connection`
        popupPara.innerHTML = `Your network is unavailable. We will attempt to reconnect you in <b>10</b> seconds.`
        frontMessageH1.innerHTML = `Internet Connection is Restored!`
        frontMessageH2.innerHTML = `...`
        // setInterval(() => {
        //     if(popupCountdown.innerText == 0) {
        //         popupCountdown.innerHTML = 11
        //     }
        //     popupCountdown.innerText--
        // }, 1000)
    }

    else if(window.navigator.onLine) {
        count++;
        if(count == 1) {
            popupHeading.innerHTML = 'Connection Restored!'
            popupPara.innerHTML = 'Your Device is now Successfully Connected to the Internet'
            popupIcn.style.backgroundColor = '#61b75b'
            popupUpperLine.style.backgroundColor = '#61b75b'
            frontMessageH1.innerHTML = `Check Your Internet Connection`
            frontMessageH2.innerHTML = `Try Rebooting your Internet Device...`
            setTimeout(() => popup.style.top = '-50%', 3000)
        }
    }
}

setInterval(checkConnection, 3000)