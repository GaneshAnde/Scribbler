var likeCont = 0;

var isSave = false;
var isUpdated = false;

function onClickOfLike(){
    console.log("like clcked + ", likeCont);
    likeCont = likeCont + 1;
    document.getElementById("post-like-label").innerHTML = '<i class="fa-regular fa-thumbs-up" id="like-ic"></i> Liked!'
    
    document.getElementById("like-count").innerHTML = likeCont + ' person likes this';
}

function onClickOfEdit(){
    if(!isSave){
        var iconTextContainer = document.getElementById("edit");

        var newIcon = document.createElement("i");
        newIcon.className = "fa-regular fa-floppy-disk";
        var title = document.getElementById("title-div");
        title.style.border = "1px solid rgb(232, 11, 136)"
        var editView = document.getElementById("post-content");
        editView.style.border = "1px solid rgb(232, 11, 136)"
        var textAreas = document.getElementById("content-post");
        // textAreas.setAttribute("readonly", false)
        textAreas.removeAttribute("disabled");
        title.setAttribute("contenteditable", "true");
        title.focus();
        
        

        var newText = document.createElement("span");
        newText.textContent = "Save ";
        iconTextContainer.innerHTML = '';
    
        iconTextContainer.appendChild(newText);
        iconTextContainer.appendChild(newIcon);
        isSave = true;
    }else{
        isSave =false;

        var iconTextContainer = document.getElementById("edit");
        var title = document.getElementById("title-div");
        title.style.border = "none"
        title.contentEditable = false
        var titleText = title.textContent;
        var updatedTitle = titleText;
        

        //var titleData = title.gette
        var iconTextContainer = document.getElementById("edit");
        var editView = document.getElementById("post-content");

        editView.style.border = "none"
        var textAreas = document.getElementById("content-post");
        var currentContent = textAreas.value;
        var updatedContent = currentContent;
        if(!isUpdated){
            updatedTitle = "UPDATED: " + titleText;
            updatedContent = "UPDATED: " + "\n" + updatedContent;
            isUpdated = true
        }
        title.innerHTML = updatedTitle;
        textAreas.value = updatedContent;

        //editView.setAttribute("readonly", true)
        textAreas.setAttribute("disabled", "disabled");
        


        var newIcon = document.createElement("i");
        newIcon.className = "fa-regular fa-pen-to-square";
        var newText = document.createElement("span");
        newText.textContent = "Edit ";
        iconTextContainer.innerHTML = '';
        
        iconTextContainer.appendChild(newText);
        iconTextContainer.appendChild(newIcon);

    }
}