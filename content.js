// @ts-nocheck
window.addEventListener("load", (e) => {
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver((mutations, observer) => {
        mutations.forEach((mutation) => {
            let mutatedHTML = mutation.target.innerHTML;
            mutatedHTML = mutatedHTML
                .replace("Chapati", "Ruti")
                .replace("Veg", "")
                .replace("veg", "");

            if (mutation.target.innerHTML !== mutatedHTML) {
                mutation.target.innerHTML = mutatedHTML;
            }
        });
    });

    // define what element should be observed by the observer
    // and what types of mutations trigger the callback
    observer.observe(document, {
        subtree: true,
        attributes: true
    });

    setTimeout(() => {
        let tags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5'];
        var nodeIterator = document.createNodeIterator(
            document.body,
            NodeFilter.SHOW_ELEMENT,
            (node) => {
                return tags.includes(node.nodeName.toLowerCase()) ?
                    NodeFilter.FILTER_ACCEPT
                    : NodeFilter.FILTER_REJECT;
                // return node.nodeName.toLowerCase() === 'h2'
                //     ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        );

        var currentNode;
        while (currentNode = nodeIterator.nextNode()) {
            let text = currentNode.innerHTML;
            text = text
                .replace("veg", "")
                .replace("Veg", "")
                .replace("Chapati", "Ruti");

            if (currentNode.innerHTML !== text) {
                currentNode.innerHTML = text;
            }
        }
    }, 500);
}, false);
