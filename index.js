var i=0 , text ;
text = "Welcome to the website"

const typing = () =>{
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i)
        i++;
        setTimeout(typing,50)
    }
}
typing()


// Multiple 

const texts = ["accordingly","simplycity","interactive"]
         let count = 0 ;
         let index = 0 ;
         let currenttext = ""
         let letter = "";
         
         const type = ()=>{
             if (count === text.length) {
                 count = 0
             }
             currenttext = texts[count]
             letter = currenttext.slice(0,++index);

             document.querySelector("#text").textContent = letter;
             if (letter.length === currenttext.length){
                 count++
                 index = 0;
                 
             }
             setTimeout(type,350)


         }
         type()