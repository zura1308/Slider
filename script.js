const showDiv = document.getElementsByClassName("show")[0];
const img = document.getElementsByClassName("img");

const btn = document.querySelectorAll(".button");

let i = 0;

var intervalID = null;

function intervalManager(settingInterval) { // ფუნქციას ვაძლევთ სახლეს და გა
   if(settingInterval)
     intervalID =  setInterval(changeImages, 3000); // თუ ინტევალID უდრის სეთინრვალს შეჩვალოს Image 3 წამში
   else
     clearInterval(intervalID); // ან ქლეარი გაუკეთოს
}

intervalManager(true); 
 
function changeImages() { 
    if (i >= img.length) {
        i = 0; 
    }
    showDiv.src = img[i].src;
    i++;
};

btn.forEach((el, index) => { // forEach გადაყვება btn-ის ყველა ელემენტს და გვაძლევს ინდექს
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
