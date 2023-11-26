var deleteBtn;
function openPostPage(){
    console.log("siiga")
    window.location.href = '../html/post.html';
}

function onClickTrash(deleteButton) {
    deleteBtn = deleteButton;
    displayYesNoModal();
    // document.body.style.backgroundColor = 'rgb(165,165,165)'
    // document.getElementById('trashModal').style.display = 'block';
   
    
}

function dismissYesNoModel(){
    var overlay = document.getElementById('overlay');
    var modal = document.getElementById('modal');
    // Toggle the active class on both overlay and modal
            overlay.classList.toggle('active');
            modal.classList.toggle('active');            
}

function displayYesNoModal(){
    var overlay = document.getElementById('overlay');
    var modal = document.getElementById('modal');
    // Toggle the active class on both overlay and modal
            overlay.classList.toggle('active');
            modal.classList.toggle('active');
}

function onClickYes(){
    
    var card = deleteBtn.closest('.card');
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.removeChild(card);
    dismissYesNoModel();
}

function onClickNo(){
    dismissYesNoModel();
}