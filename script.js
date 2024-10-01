let ram = 'ram';

function SA(){
    const s = document.getElementById("S").value;
    const S = document.getElementById("S")
    console.log(typeof s);
    console.log(s);
    if(s==="S")
        {
        alert('SA.......');
        
        ram = 'seete';
        
    S.innerHTML = `<audio style="display:none;"  id="music5" controls>
    <source src="m1.mp3" type="audio/mpeg"> 
  </audio> `;
    music5.play();

    // music5.play();
// music5.volume = 0.5; // Set the volume to 50%
setTimeout(() => {
    music5.pause();
    window.location.reload();
}, 6000);


    }

    if(ram === 'ram'){
        alert("not present drum key");
    }
}


// SA();




function RE(){
    const R = document.getElementById("R").value;
    const r = document.getElementById("R");
    console.log(typeof R);
    console.log(R);
    if(R ==="R"){
        alert('RE.......');
        ram = 'seete';

         
    r.innerHTML = `<audio style="display:none;"  id="music5" controls>
    <source src="m2.mp3" type="audio/mpeg"> 
  </audio> `;
    music5.play();

    setTimeout(()=>{
        music5.pause();
        window.location.reload();

    },1000);

    }

    if(ram === 'ram'){
        alert("not present drum key");
    }

}


function GA(){
    const g = document.getElementById("G").value;
    const G = document.getElementById("G");
    console.log(typeof g);
    console.log(g);
    if(g ==="G"){
        alert('GA.......');
        ram = 'seete';


        G.innerHTML = `<audio style="display:none;"  id="music5" controls>
        <source src="m3.mp3" type="audio/mpeg"> 
      </audio> `;
        music5.play();

        setTimeout(()=>{
            music5.pause()
            window.location.reload()
        },2000)

    }

    if(ram === 'ram'){
        alert("not present drum key");
    }
}




function MA(){
    const m = document.getElementById("M").value;
    const M = document.getElementById("M");
    console.log(typeof m);
    console.log(m);
    if(m ==="M"){
        alert('MA.......');
        ram = 'seete';

        M.innerHTML = `<audio style="display:none;"  id="music5" controls>
        <source src="m4.mp3" type="audio/mpeg"> 
      </audio> `;
        music5.play();

setTimeout(()=>{
    music5.pause();
    window.location.reload();
},1000)

    }

    if(ram === 'ram'){
        alert("not present drum key");
    }
}



function PA(){
    const p = document.getElementById("P").value;
    const P = document.getElementById("P");
    console.log(typeof p);
    console.log(p);
    if(p ==="P"){
        alert('PA.......');
        ram = 'seete';


        P.innerHTML = `<audio style="display:none;"  id="music5" controls>
        <source src="m5.mp3" type="audio/mpeg"> 
      </audio> `;
        music5.play();
        setTimeout(()=>{
            music5.pause();
            window.location.reload();
        },1000)

    }

    if(ram === 'ram'){
        alert("not present drum key");
    }
}




function DA(){
    const d = document.getElementById("D").value;
    const D = document.getElementById("D");
    console.log(typeof d);
    console.log(d);
    if(d ==="D"){
        alert('DA.......');
        ram = 'seete';


        D.innerHTML = `<audio style="display:none;"  id="music5" controls>
        <source src="m2.mp3" type="audio/mpeg"> 
      </audio> `;
        music5.play();

        setTimeout(()=>{
            music5.pause();
            window.location.reload();
        },1000)

    }

    if(ram === 'ram'){
        alert("not present drum key");
    }
}




function NI(){
    const n = document.getElementById("N").value;
    const N = document.getElementById("N");
    console.log(typeof n);
    console.log(n);
    if(n ==="N"){
        alert('NI.......');
        ram = 'seete';

        N.innerHTML = `<audio style="display:none;"  id="music5" controls>
        <source src="m3.mp3" type="audio/mpeg"> 
      </audio> `;
        music5.play();

        setTimeout(()=>{
            music5.pause();
            window.location.reload();
        },1000)
        
    }

    if(ram === 'ram'){
        alert("not present drum key");
    }
}








//..........this line is the keyup for like a when i am press keydwon after few milliseconds that key up so known as 'keyup'  
//........this below codes by keybord throuth press key

// step-1
document.body.addEventListener("keyup",(ev)=>{
    console.log("You pressed down..");
    // document.write("You press first   ",ev.key)
console.log(ev);
console.log(ev.key.toLocaleLowerCase());

if(ev.key.toLocaleLowerCase() === "s"){
    const S = document.getElementById("S")


        S.innerHTML = `<audio style="display:none;"  id="music5" controls>
        <source src="m1.mp3" type="audio/mpeg"> 
      </audio> `;
        music5.play();

        setTimeout(()=>{
            music5.pause();
            window.location.reload();
        },5000)

}else if(ev.key.toLocaleLowerCase() === ev.key.toLocaleLowerCase() ){
    music5.pause();

}    

})


//step-2

document.body.addEventListener("keyup",(ev)=>{
    console.log("You pressed down..");
    // document.write("You press first   ",ev.key)
console.log(ev);
if(ev.key.toLocaleLowerCase() === "r"){
    const S = document.getElementById("R")


        S.innerHTML = `<audio style="display:none;"  id="music5" controls>
        <source src="m3.mp3" type="audio/mpeg"> 
      </audio> `;
        music5.play();

        setTimeout(()=>{
            music5.pause();
            window.location.reload();
        },5000)

}else if(ev.key.toLocaleLowerCase() === ev.key.toLocaleLowerCase() ){
    music5.pause();

}    

})





