const insertion = {
    insrtEL: document.querySelector("#name-input"),
    outName: document.querySelector("#name-output"),
};
insertion.insrtEL.addEventListener("input", addPhrases);

function addPhrases(event) {
    insertion.outName.textContent = event.currentTarget.value;
    if (insertion.outName.textContent === "") {
        insertion.outName.textContent = "Anonymous";
    }
};