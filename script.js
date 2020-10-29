

let submit= document.querySelector("#submit");
submit.addEventListener("click",function(event){
    event.preventDefault();})



submit.addEventListener("click", function (){

    // collect information from the form 
    let form= document.querySelector('form');
    let url= document.querySelector('form #url').value;
    let top= document.querySelector('form #top').value
    let bottom=document.querySelector('form #bottom').value;

    // create new div for the image 
    let img= document.createElement('img');
    img.src=url; 
    let memes= document.createElement('div')
    memes.class='meme';
    let allMemes= document.querySelector('#memes');
    allMemes.appendChild(memes);
    memes.appendChild(img);


    // top text
    let toptext= document.createElement('div');
    toptext.id= 'toptext';
    let topText= document.createTextNode(top.toUpperCase());
    memes.appendChild(toptext);
    toptext.appendChild(topText);
    //bottom text
    let bottomtext= document.createElement('div');
    bottomtext.id= 'bottomtext';
    let bottomText= document.createTextNode(bottom.toUpperCase());
    memes.appendChild(bottomtext);
    bottomtext.appendChild(bottomText);
    //close button 
    let closeBtn= document.createElement('button');
    closeBtn.innerHTML='x';
    closeBtn.id='close';
    memes.appendChild(closeBtn);
    // add close button event 
    closeBtn.addEventListener('click', function (){
        let parentdiv=closeBtn.parentElement;
        parentdiv.remove();
    });
    form.reset();
});






