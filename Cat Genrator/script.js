let genrateBtn = document.getElementById("btn-generate");
genrateBtn.addEventListener("click", generateCats);

function generateCats(){
    let image = document.createElement("img");
    image.src = "https://www.abc.com";
    let div = document.getElementById("cat-container");
    div.appendChild(image);
    
}