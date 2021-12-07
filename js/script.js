// let button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log("Button clicked");
// });

// console.log(window);

// console.log(window.document.getElementById("test"));

// console.log("innerWidth-" + window.innerWidth);
// console.log("innerHeight-" + window.innerHeight);
// console.log("***********************");
// console.log("width-" + window.screen.width);
// console.log("height-" + window.screen.height);
// console.log("availWidth-" + window.screen.availWidth);
// console.log("availHeight-" + window.screen.availHeight);

// console.log(window.location.href);
// console.log(window.location.host);
// console.log(window.location.hostname);
// console.log(window.location.origin);
// console.log(window.location.port);
// console.log(window.location.protocol);
// console.log(window.location.pathname);

// window.location.replace("")

// document.getElementsByTagName("a")[0].addEventListener("click", function(e) {
//     window.location.replace("https://www.w3schools.com/js/js_window_location.asp");
// });

// console.log(window.navigator.userAgent);
// console.log(window.navigator.geolocation);
// console.log(window.navigator.language);
// console.log(window.navigator.storage);
// console.log(window.navigator.vendor);

// (function() {
//     let counter = document.getElementById("counter");
//     let number = 0;
//     let maxamount = Number(counter.dataset.maxamount);
//     let step = maxamount >= 1000 ? 10 : 5;

//     function CountUp() {
//         number += step;
//         counter.textContent = number;

//         if (number >= maxamount) {
//             clearInterval(myCounter);

//             if (number > maxamount) {
//                 counter.textContent = maxamount;
//             }
//         }
//     }


//     let myCounter = setInterval(CountUp, 10);
// })();

let allowDrop = (e) => {
    e.preventDefault();
}

let dragElement = (e) => {
    let id = e.target.id;
    e.dataTransfer.setData("id", id);
}

let dropElement = (e) => {
    let id = e.dataTransfer.getData("id");
    let dragElement = document.getElementById(id);
    e.target.append(dragElement);
}

let dropElementOS = (e) => {
    e.preventDefault();
    let rawFiles = e.dataTransfer.files;
    let files = [...rawFiles];

    files.forEach(file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            let img = document.createElement("img");
            img.src = reader.result;
            img.classList.add("dragElement");
            img.id = "dragElement";
            img.setAttribute("draggable", "true");
            img.setAttribute("ondragstart", "dragElement(event)");
            document.querySelector(".dropElementContainerOS").append(img);
        }
    })
}

// let Image=document.forms


document.querySelector("#Image").addEventListener("change", function(e) {
    e.preventDefault();

    let files = [...document.forms[0].elements[0].files];

    files.forEach(file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            let img = document.createElement("img");
            img.src = reader.result;
            document.querySelector("#imageWrapper").append(img);
        }
    })
})