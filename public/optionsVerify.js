var options
var optionsCounter
var optionsCounterButtons
var button = document.querySelector("button#handleSearch")
button.disabled = true

var checkSubmit = (delta) => {
    console.log("target is ", delta)
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


    let tot = delta
    options.forEach(e => {
        tot += parseInt(e.innerText)
        //console.log(e)
    })
    //console.log("tot vale ", tot)


    var dateText = document.querySelector(".headerSearchDate2Date").innerText


    //button = document.querySelector("button#handleSearch")
    button.disabled = true

    try {
        if (loca.value.trim() != "" && dateText.trim() != "" &&
            (tot > 0 || tot2 > 0 || reg.test(optionsText.textContent))) {
            button.disabled = false
            console.log("enable")
        }
    } catch {
        button.disable = true
        console.log("disable")
    }
}


//button = document.querySelector("button#handleSearch")
//button.disabled = true

var loca2 = document.querySelector(".headerSearchInput")
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
        [optionsText],
        d.querySelector("button#handleSearch")
    ]
    //console.log(inputs)

    button.disabled = true;
    for (i = 0; i < inputs.length; i++) {
        function addMultipleEventListener(el, events_list) {
            events_list.split(" ").forEach(function (ev) {
                el.addEventListener(ev, checkSubmit)
                //console.log(el, ev)
            })
        }
        addMultipleEventListener(inputs[i], "input change keypress focusout")
    }

    //var optionsText = document.querySelector(".headerSearchText.headerSearchRoom")
    //console.log(optionsText)
    //console.log("wwwww")
    //optionsText.addEventListener("click", () => {
    optionsCounterButtons = document.querySelectorAll("button.optionCounterButton")
    for (i = 0; i < optionsCounterButtons.length; i++) {

        function addMultipleEventListener(el, events_list) {
            events_list.split(" ").forEach(function (ev) {
                var delta = el.className.indexOf("Plus") > -1 ? 1 : -1
                el.addEventListener(ev, checkSubmit.bind(null, delta))
                //console.log(el, ev)
            })

        }
        //console.log(i, optionsCounterButtons[i])
        addMultipleEventListener(optionsCounterButtons[i], "click change")

    }
    //})
} catch {

}

console.log('page2 is fully loaded');
