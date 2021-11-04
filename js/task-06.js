const inputEl = document.querySelector("#validation-input");

const inputValidatiom = () => {
    inputEl.value.length !== +inputEl.dataset.length
        ? (inputEl.classList.add("invalid"), inputEl.classList.remove("valid"))
        : (inputEl.classList.add("valid"), inputEl.classList.remove("invalid"));
};

inputEl.addEventListener("blur", inputValidatiom);