const cards = [ 
    { 
        title: 'Ad 1', 
        description: 'This is the first advertisement.', 
        image: 'https://placehold.co/150', 
        contact: 'contact1@example.com' 
    },
    { 
        title: 'Ad 2', 
        description: 'This is the second advertisement.', 
        image: 'https://placehold.co/150', 
        contact: 'contact2@example.com' 
    },
    { 
        title: 'Ad 3', 
        description: 'This is the third advertisement.', 
        image: 'https://placehold.co/150', 
        contact: 'contact3@example.com' 
    },
    { 
        title: 'Ad 4', 
        description: 'This is the fourth advertisement.', 
        image: 'https://placehold.co/150', 
        contact: 'contact4@example.com' 
    },
    { 
        title: 'Ad 5', 
        description: 'This is the fifth advertisement.', 
        image: 'https://placehold.co/150', 
        contact: 'contact5@example.com' 
    },
    { 
        title: 'Ad 6', 
        description: 'This is the sixth advertisement.', 
        image: 'https://placehold.co/150', 
        contact: 'contact6@example.com' 
    } 
];

const createElement = (elem, classNames = []) => {
    const element = document.createElement(elem)
    if (classNames.length > 0) element.classList.add(...classNames)
    return element
}

const createChild = (container, child) => {
    if (child.length > 0) {
        child.map(i => {
            return container.appendChild(i)
        })
    } else {
        return container.appendChild(child)
    }
}

const createCards = () => {
    const container = document.getElementById("advertisements")
    
    cards.map(card => {
        const cardContainer = createElement("div", ["card", "mb-4", "col-md-4"])
        const imgCard = createElement("img", ["card-img-top"])

        const cardBody = createElement("div", ["card-body"])
        const titleCard = createElement("h5", ["card-title"])
        const descriptionCard = createElement("p", ["card-text"])
        const contactCard = createElement("p", ["card-text", "hide"])
        const showButton = createElement("button", ["btn", "btn-info", "show-button"])
        
        const cardFooter = createElement("div", ["card-footer", "text-center"])
        const buttonCard = createElement("button", ["btn", "btn-info", "btn-block"])

        createChild(cardContainer, [imgCard, cardBody, cardFooter])
        createChild(cardBody, [titleCard, descriptionCard, contactCard, showButton])
        createChild(cardFooter, buttonCard)

        imgCard.src = card.image
        imgCard.alt = card.title

        titleCard.textContent = card.title
        descriptionCard.textContent = card.description
        contactCard.textContent = "***"
        showButton.textContent = "Show Contact"
        
        showButton.addEventListener("click", () => {
            if (contactCard.classList.contains("hide")) {
                contactCard.textContent = card.contact
                contactCard.classList.remove("hide")
                showButton.textContent = "Hide Contact"
            } else {
                contactCard.textContent = "***"
                contactCard.classList.add("hide")
                showButton.textContent = "Show Contact"
            }
        })

        buttonCard.textContent = "Details"
        buttonCard.addEventListener("click", () => alert(card.contact))
        

        container.appendChild(cardContainer)
    })
}

createCards();