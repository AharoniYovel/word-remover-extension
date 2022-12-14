replaceText(document.body);

function replaceText(elem) {

    if (elem.hasChildNodes()) {
        elem.childNodes.forEach(replaceText);
    }

    else if (elem.nodeType === Text.TEXT_NODE) {
        if (elem.textContent.match(/the word you want to blackline/gi)) {
            const newElem = document.createElement("span");
            newElem.innerHTML = elem.textContent.replace(/(the word you want to blackline)/gi,
                '<span style="background-color:black;color:black;">$1</span>')

            elem.replaceWith(newElem);
        }
    }
}