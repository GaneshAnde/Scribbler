function openPostPage(){
    console.log("siiga")
    window.location.href = '../html/post.html';
}

function onClickTrash(deleteButton) {
    var card = deleteButton.closest('.card');
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.removeChild(card);
}