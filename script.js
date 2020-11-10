const showDiv = document.getElementsByClassName("show")[0];
const img = document.getElementsByClassName("img");

const btn = document.querySelectorAll(".button");

let i = 0;

var intervalId = null;

function intervalManager(settingInterval) { 
   if(settingInterval)
     intervalId =  setInterval(changeImages, 3000); 
   else
     clearInterval(intervalId); 
}

intervalManager(true); 
 
function changeImages() { 
    if (i >= img.length) {
        i = 0; 
    }
    showDiv.src = img[i].src;
    i++;
};

btn.forEach((el, index) => { 
    el.addEventListener("click", function() {
        showDiv.src = img[index].src;
        i = index;
    })    
});

showDiv.addEventListener("mouseover", function() {
    clearInterval(intervalManager(false));
})

showDiv.addEventListener("mouseout", function() {
    intervalManager(true);
})
