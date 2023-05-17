let fileArea = document.getElementById("file");
let submit = document.getElementById("submit");
let form = document.getElementById("form");

let fileReader = new FileReader();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fileReader.readAsDataURL(fileArea.files[0])
    fileReader.onload = () => {
        let img = new Image();
        img.src = fileReader.result
        form.appendChild(img)
        localStorage.setItem('img1',`${img.src}`);
        
    }
})