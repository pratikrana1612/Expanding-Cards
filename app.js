const div1 = document.querySelector('.container div');
const firstDiv = document.querySelector('.container div');
const secondDiv = firstDiv.nextElementSibling;
const thirdDiv = secondDiv.nextElementSibling;
const fourDiv = thirdDiv.nextElementSibling;
const fifthDiv = fourDiv.nextElementSibling;


const removeActive = () =>{
    const activeDiv = document.querySelector('.active');
    activeDiv.classList.remove('active');
}
// const textRemover = () => {
//     const divs = document.querySelectorAll('.panel');
//     for(const i of divs)
//     {
//         i.firstElementChild.innerText = '';
//     }
// }
const activeFunction = (div) =>{
    removeActive(); 
    // textRemover();
    div.classList.add('active');
    // div.firstElementChild.innerText = "This is an image";
}   
firstDiv.addEventListener('click',activeFunction.bind(null,firstDiv));
secondDiv.addEventListener('click',activeFunction.bind(null,secondDiv));
thirdDiv.addEventListener('click',activeFunction.bind(null,thirdDiv));
fourDiv.addEventListener('click',activeFunction.bind(null,fourDiv));
fifthDiv.addEventListener('click',activeFunction.bind(null,fifthDiv));

