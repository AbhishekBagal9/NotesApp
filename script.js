const container = document.querySelector('.container');
const createbtn = document.querySelector('button');
let notescontainer = document.querySelector('.notescontainer');
let notes = document.querySelectorAll('.input-box')

function updateStorage(){
    localStorage.setItem("notes",notescontainer.innerHTML)
}
function getData(){
    // localStorage.clear()
    notescontainer.innerHTML= localStorage.getItem("notes")

}
getData()
createbtn.addEventListener('click',function(){
   let inputbox = document.createElement('p');
   let img  =  document.createElement('img')
   inputbox.className  =  "input-box"
   inputbox.setAttribute('contenteditable','true')
   img.src  = "images/delete.png";
   notescontainer.appendChild(inputbox).appendChild(img);
   
})
notescontainer.addEventListener('click',function(e){
    if(e.target.tagName === "IMG" ){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.input-box')
        notes.forEach(note => {
            note.onkeyup  = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key === "Enter" ){
       document.execCommand("insertLineBreak");
        event.preventDefault();
    }
     })

