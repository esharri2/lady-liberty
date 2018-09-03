//This script is for any template where a show more / show less button is needed on a .content container.
//It appends the button to the container of the .content, and also toggles a fade out for the bottom of .content.

const maxContentHeight = 150;
const showMore = "Show more";
const showLess = "Show less"

function addButton(content){
    const button = document.createElement("button");
    button.setAttribute("class", "toggleShow off");
    button.innerText = showMore;
    content.closest(".post").appendChild(button);

}

function toggleFadeOutDiv(content, displayText){
   content.style.display = displayText;
}


document.querySelectorAll(".content").forEach(content => {
    content.style.maxHeight = `${maxContentHeight}px`;
    if (content.scrollHeight > maxContentHeight) {
        addButton(content);
        toggleFadeOutDiv(content.querySelector(".fadeOut"), "block");

        // addFadeOutDiv(content);        
    }
})

document.addEventListener("click", function (event) {
    const e = event.target;
    if (e.matches('.toggleShow')) {
        if (e.matches('.off')) {
            e.textContent = showLess;
            e.parentNode.querySelector('.content').removeAttribute("style");
            toggleFadeOutDiv(e.parentNode.querySelector('.fadeOut'), "none");
        } else {
            e.textContent = showMore;
            e.parentNode.querySelector('.content').style.maxHeight = `${maxContentHeight}px`;
            toggleFadeOutDiv(e.parentNode.querySelector('.fadeOut'), "block");
        }
        e.classList.toggle('off');
    }


})
