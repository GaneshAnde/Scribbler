function openPostPage(){
    console.log("siiga")
    window.location.href = '../html/post.html';
}

function onClickTrash(deleteButton) {
    // Get the parent card element
    // var card = deleteButton.parentElement;

    // // Get the parent container of all cards
    // var cardListContainer = document.getElementById("cardContainer");

    // // Remove the card element from the container
    // cardListContainer.removeChild(card);

    
    var card = deleteButton.parentNode;

  //  Get the parent container of all cards
    var cardListContainer = document.getElementById("cardContainer");

    // Check if the card is a child of the container before removing
    if (cardListContainer.contains(card)) {
        // Remove the card element from the container
        cardListContainer.removeChild(card);
    } else {
        console.error("Error: Attempted to remove a non-existing card.");
    }

    // var card = deleteButton.parentNode;

    // // Remove the card element
    // card.parentNode.removeChild(card);
}