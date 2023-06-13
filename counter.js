const countersElement = document.querySelectorAll(".counter")

countersElement.forEach((counterEl) => {
    counterEl.innerText = "0"

    function updateCounter() {
        let firstNum = +counterEl.innerText
        const dataCounter = counterEl.getAttribute("data")

        const stepCounter = dataCounter / 21
        firstNum = Math.ceil(stepCounter + firstNum)


        console.log(stepCounter)
        if (firstNum < dataCounter) {
            counterEl.innerText = firstNum
            setTimeout(updateCounter, 60)
        } else {
            counterEl.innerText = dataCounter
        }
    }
    updateCounter()
})