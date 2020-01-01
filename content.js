// @ts-nocheck
window.addEventListener("load", (e) => {
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver((mutations, observer) => {
        mutations.forEach((mutation) => {
            let mutatedHTML = mutation.target.innerHTML;
            mutatedHTML = mutatedHTML.replace("Chapati", "Ruti");
            mutatedHTML = mutatedHTML.replace("Veg", "");
            mutatedHTML = mutatedHTML.replace("veg", "");

            mutation.target.innerHTML = mutatedHTML;
        });
    });

    // define what element should be observed by the observer
    // and what types of mutations trigger the callback
    observer.observe(document, {
        subtree: true,
        attributes: true
        //...
    });

    setTimeout(() => {
        var nodeIterator = document.createNodeIterator(
            document.body,
            NodeFilter.SHOW_ELEMENT,
            (node) => {
                return node.nodeName.toLowerCase() === 'p' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        );
        var pars = [];
        var currentNode;

        while (currentNode = nodeIterator.nextNode()) {
            pars.push(currentNode);
        }
        console.log(pars);
        // document.getElementsByTagName("*").forEach((element) => {
        //     console.log(element);
        // });
        //     let lunchList = document.querySelector("#lunchList");
        //     if (lunchList) {
        //         let lunchPara = lunchList.getElementsByTagName("p")[0];
        //         console.log(lunchPara);
        //         lunchPara.innerText = lunchPara.innerText.replace("veg", "");
        //     }

        //     let snacksList = document.querySelector("#snacksList");
        //     if (snacksList) {
        //         let snacksPara = snacksList.getElementsByTagName("p")[0];
        //         snacksPara.innerText = snacksPara.innerText.replace("veg", "");
        //     }
    }, 1000);
}, false);
