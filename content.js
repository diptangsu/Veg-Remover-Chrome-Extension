// @ts-nocheck
window.addEventListener("load", (e) => {
    setTimeout(() => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        var observer = new MutationObserver((mutations, observer) => {
            console.log(mutations, observer);
        });

        // define what element should be observed by the observer
        // and what types of mutations trigger the callback
        observer.observe(document, {
            subtree: true,
            attributes: true
            //...
        });

        // document.body.style.backgroundColor = "green";
        let lunchList = document.querySelector("#lunchList")
        if (lunchList) {
            let lunchPara = lunchList.getElementsByTagName("p")[0];
            console.log(lunchPara);
            lunchPara.innerText = lunchPara.innerText.replace("veg", "");
        }

        let snacksList = document.querySelector("#snacksList");
        if (snacksList) {
            let snacksPara = snacksList.getElementsByTagName("p")[0];
            snacksPara.innerText = snacksPara.innerText.replace("veg", "");
        }
    }, 1000);
}, false);
