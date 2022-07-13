function conditionCheck() {

    let temp = +document.querySelector("#temp").value;

    if (temp >= 30) {
        document.querySelector("#result").innerHTML = "its too hot";

    } else if (temp >= 25) {
        document.querySelector("#result").innerHTML = "Its plesent outside";

    } else if (temp >= 20) {
        document.querySelector("#result").innerHTML = "if you are riding a bike please carry jacket"

    } else if (temp >= 10) {
        document.querySelector("#result").innerHTML = "probably you would need a jacket"

    } else if (temp >= 1) {
        document.querySelector("#result").innerHTML = "probably you would need a double jacket"

    } else {
        document.querySelector("#result").innerHTML = "its freezing outside"
    }

}