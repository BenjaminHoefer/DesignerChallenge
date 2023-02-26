function emailConfirmation(event) {

    // /* Create a document fragment */
    // const docFRag = document.createDocumentFragment();

    // /* Create new form element */
    // const newForm = document.createElement("form");

    // /* Create a new element for an image */
    // const newImage = document.createElement("img");
    // newImage.setAttribute("src", "../img/party.svg");
    // newForm.appendChild(newImage);

    // /* Create two new headline elements inclusive text */
    // const newHeadline1 = document.createElement("h2");
    // const newContH1 = document.createTextNode("YOUR EMAIL HAS BEEN CONFIRMED.");
    // newHeadline1.appendChild(newContH1);
    // newForm.appendChild(newHeadline1);

    // const newHeadline2 = document.createElement("h2");
    // const newContH2 = document.createTextNode("THANKS FOR YOUR SUBSCRIPTION!");
    // newHeadline2.appendChild(newContH2);
    // newForm.appendChild(newHeadline2);

    // /* Create new paragraph inclusive text */
    // const newParagraph = document.createElement("p");
    // const newContP = document.createTextNode("Your email-address has been added to our newsletter. If you don't want to receive our emails anymore just click on unsubscribe in one of our newsletter emails. To get back to the main page click the button underneath.");
    // newParagraph.appendChild(newContP);
    // newForm.appendChild(newContP);

    // /* Create new button inclusive text */
    // const newButton = document.createElement("button");
    // const newContBtn = document.createTextNode("Click me to get back!");
    // newButton.appendChild(newContBtn);
    // newForm.appendChild(newButton);

    // /* Get parent container and the child element which will be replaced */
    // const parent = document.getElementsByClassName("main")[0];
    // const child = document.getElementsByClassName("newsletter")[0];
    // parent.replaceChild(newForm, child);

    /* Prevent the onsubmit-event to refresh the page which is set up by default by using the event parameter */
    event.preventDefault();

    /* Remove the attribute "onsubmit" from the form element to prevent to fire the event again after clicking the button again */
    document.getElementsByClassName("newsletter")[0].removeAttribute("onsubmit");

    /* Add the attribute "onclick" to the button to fire the function "getBack" after clicking */
    document.getElementsByClassName("newsletter__btn")[0].setAttribute("onclick", "getBack(event)");

    /* Change content of headline and paragraph */
    document.getElementsByClassName("newsletter__headline")[0].textContent = "YOUR EMAIL HAS BEEN CONFIRMED. THANKS FOR YOUR SUBSCRIPTION!";
    document.getElementsByClassName("newsletter__headline")[0].style.fontSize = "3rem";
    document.getElementsByClassName("newsletter__text")[0].textContent = "Your email-address has been successfully added to our newsletter.";
    document.getElementsByClassName("newsletter__text")[0].style.fontSize = "1.5rem";

    /* Remove label and associated email input element */
    document.getElementsByClassName("newsletter__label")[0].remove();
    document.getElementsByClassName("newsletter__input")[0].remove();

    /* Add border to form element */
    document.getElementsByClassName("newsletter")[0].style.border = "5px solid rgba(221, 221, 221, 0.25)";
    document.getElementsByClassName("newsletter")[0].style.padding = "5%";

    /* Change content and font-size of the button */
    document.getElementsByClassName("newsletter__btn")[0].textContent = "Get back";
    document.getElementsByClassName("newsletter__btn")[0].style.fontSize = "1rem";
}

function getBack(event) {


    /* Prevent the onsubmit-event to refresh the page which is set up by default by using the event parameter */
    event.preventDefault();

    document.getElementsByClassName("newsletter")[0].setAttribute("onsubmit", "emailConfirmation()");

    /* Add the attribute "onclick" to the button to fire the function "getBack" after clicking */
    document.getElementsByClassName("newsletter__btn")[0].removeAttribute("onclick");

    /* Change content of headline and paragraph */
    document.getElementsByClassName("newsletter__headline")[0].textContent = "Do you like this challenge?";
    document.getElementsByClassName("newsletter__text")[0].textContent = "Subscribe to be the first to hear about updates, tips and recommendations!";

    /* Change content and font-size of the button */
    document.getElementsByClassName("newsletter__btn")[0].textContent = "Subscribe";


}

