let popup = document.querySelector('.no-con-popup')
let popupUpperLine = document.querySelector('.no-con-popup > span')
let popupCountdown = document.querySelector('.popup-texts > p > b')

let count = 1
let popupHeading = document.querySelector('.popup-texts > h2')
let popupPara = document.querySelector('.popup-texts > p')
let popupIcn = document.querySelector('.popup-message > .icn > i')
function checkConnection() {
    if(!window.navigator.onLine) {
        setTimeout(() => popup.style.top = '0', 2000)
        count = 0
        popupUpperLine.style.backgroundColor = '#E54E65'
        popupIcn.style.backgroundColor = `#E54E65`
        popupHeading.innerHTML = `Lost Connection`
        popupPara.innerHTML = `Your network is unavailable. Please check your Internet Connectivity`
    }

    else if(window.navigator.onLine) {
        count++;
        if(count == 1) {
            popupHeading.innerHTML = 'Connection Restored!'
            popupPara.innerHTML = 'Your Device is now Successfully Connected to the Internet'
            popupIcn.style.backgroundColor = '#61b75b'
            popupUpperLine.style.backgroundColor = '#61b75b'

            setTimeout(() => popup.style.top = '-50%', 3000)
        }
    }
}

setInterval(checkConnection, 3000)
