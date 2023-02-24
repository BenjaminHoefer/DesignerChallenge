function emailConfirmation() {

    /* Create new form element */
    const newForm = document.createElement("form");

    /* Create two new headline elements inclusive text */
    const newHeadline1 = document.createElement("h2");
    const newContH1 = document.createTextNode("YOUR EMAIL HAS BEEN CONFIRMED.");
    newHeadline1.appendChild(newContH1);
    newForm.appendChild(newHeadline1);

    const newHeadline2 = document.createElement("h2");
    const newContH2 = document.createTextNode("THANKS FOR YOUR SUBSCRIPTION!");
    newHeadline2.appendChild(newContH2);
    newForm.appendChild(newHeadline2);

    /* Create new paragraph inclusive text */
    const newParagraph = document.createElement("p");
    const newContP = document.createTextNode("Your email-address has been added to our newsletter. If you don't want to receive our emails anymore just click on unsubscribe in one of our newsletter emails. To get back to the main page click the button underneath.");
    newParagraph.appendChild(newContP);
    newForm.appendChild(newContP);

    /* Create new button inclusive text */
    const newButton = document.createElement("button");
    const newContBtn = document.createTextNode("Click me to get back!");
    newButton.appendChild(newContBtn);
    newForm.appendChild(newContBtn);

    /* Get parent container and the child element which will be replaced */
    const parent = document.getElementsByClassName("main")[0];
    const child = document.getElementsByClassName("form")[0];
    parent.replaceChild(newForm, child);
}


