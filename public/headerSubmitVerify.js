var options
var optionsCounter
var optionsCounterButtons
var button = document.querySelector("button#handleSearch")
button.disabled = true

var checkSubmit1 = () => {
    const loca = document.querySelector(".headerSearchInput")

    const date = document.querySelector(".headerSearchDate")

    var options = document.querySelectorAll(".optionCounterNumber")
    var buttonsplus = document.querySelectorAll("button.optionCounterButton")

    var optionsText = document.querySelector(".headerSearchText.headerSearchRoom")

    var reg = new RegExp(/[0-9] adult|[0-9] children/)
    //console.log(reg.test(optionsText.textContent))
    //console.log(optionsText.textContent)
    //console.log("funz chiamata")
    //console.log(loca, date, options)


    let tot = 0
    options.forEach(e => {
        tot += parseInt(e.innerText)
        console.log(e)
    })
    console.log("tot vale ", tot)

    let tot2 = 0
    options.forEach(e => {
        tot2 += parseInt(e.textContent)
    })
    console.log("tot2 vale ", tot2)

    var dateText = document.querySelector(".headerSearchDate2Date").innerText


    //button = document.querySelector("button#handleSearch")
    button.disabled = true
    /*
    console.log(loca.value)
    console.log(dateText)
    console.log(tot)
    console.log(tot2)
    console.log(reg.test(optionsText.textContent))
    */
    try {
        if (loca.value.trim() != "" && dateText.trim() != "" && reg.test(optionsText.textContent)) {
            button.disabled = false
            console.log("enable")
        }
    } catch {
        button.disable = true
        console.log("disable")
    }
}


window.addEventListener('load', (event) => {
    //button = document.querySelector("button#handleSearch")
    //button.disabled = true
    var buttonsOpened = false
    const loca = document.querySelector(".headerSearchInput")
    /*
    const date = document.querySelector(".headerSearchDate")

    var options = document.querySelectorAll(".optionCounterNumber")
    var buttonsplus = document.querySelectorAll("button.optionCounterButton")
    */
    options = document.querySelector(".options")
    optionsCounter = document.querySelectorAll(".optionCounter")
    optionsCounterButtons = document.querySelectorAll("button.optionCounterButton")
    var optionsText = document.querySelector(".headerSearchText.headerSearchRoom")

    try {
        let d = document, [inputs, button] = [
            [loca, optionsText],
            d.querySelector("button#handleSearch")
        ]
        console.log(inputs)

        button.disabled = true;
        for (i = 0; i < inputs.length; i++) {
            function addMultipleEventListener(el, events_list) {
                events_list.split(" ").forEach(function (ev) {
                    el.addEventListener(ev, checkSubmit1)
                    console.log(el, ev)
                })
            }
            addMultipleEventListener(inputs[i], "input change keypress focusout")
        }
    } catch {

    }

    console.log('page is fully loaded');
});
