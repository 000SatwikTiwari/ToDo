    let mp = new Map();
          let add=document.querySelector("#add");

       add.addEventListener("click", ()=>{
        document.body.insertAdjacentHTML("beforeend", `<div class="form">
     <input class="Title" type="text" placeholder="Title">
        
     <textarea  class="note" type="text" placeholder="Write Notes here">
        
     </textarea  >
     <div class="save">
        <button id="save">Save</button>
     </div>
      <button class="cut">
        <img src="cut.svg" alt="">
     </button>
    </div>`)
        
    //save data and store it in a hash map  
     
    let save=document.querySelector("#save");
    save.addEventListener("click", (event)=>{
        let f=document.querySelector(".form");
        let tc=f.children[0].value;
        let nc=f.children[1].value;
        let dtc= new Date();
         
        mp.set(tc,nc);

        let cont=document.querySelector(".container");
        cont.insertAdjacentHTML("beforeend", ` <div class="i">
            <div class="del">
                <button id="del"><img src="delete.svg" alt=""></button>
            </div>
            <div class="T"><h1>${tc}</h1></div>
            <div class="datetime">${dtc}</div>
        </div>`)

        //op
        // open note on card click

let cards = document.querySelectorAll(".T");

cards.forEach((card) => {
    card.addEventListener("click", (event) => {

        let i = event.target.closest(".i");

        let to = i.querySelector(".T").innerText;
        let noteo = mp.get(to);

        document.body.insertAdjacentHTML("beforeend", `
            <div class="form">
                <input class="Title" type="text" placeholder="Title" value="${to}">
                <textarea class="note">${noteo}</textarea>

                <div class="save">
                    <button id="save">Save</button>
                </div>

                <button class="cut">
                    <img src="cut.svg" alt="">
                </button>
            </div>
        `);

        let form = document.querySelector(".form");

        let sav = form.querySelector("#save");

        sav.addEventListener("click", () => {

            let updated_t = form.querySelector(".Title").value;
            let updated_n = form.querySelector(".note").value;
            let updated_time = new Date();

            // Original card update  
            i.querySelector(".T").children[0].innerText = updated_t;
            i.querySelector(".datetime").innerText = updated_time;

            // Map update
            mp.delete(to);
            mp.set(updated_t, updated_n);

            form.remove();
        });

        let ct = form.querySelector(".cut");

        ct.addEventListener("click", () => {
            form.remove();
        });

    });
});


        
   


        //delete
        let del=document.querySelectorAll("#del");

        del.forEach((e)=>{
            e.addEventListener("click", (event)=>{
             let card=event.target.closest(".i");
             let title = card.querySelector(".T").innerText;
             mp.delete(title);//map se bhi hatao
             card.remove();
            })
        })
       
         let note=event.target.closest(".form");
            note.remove();

    }) 
   
   
   



    


    //cut in form

    let cut=document.querySelectorAll(".cut");
    cut.forEach((e)=>{
        e.addEventListener("click",(event)=>{
            
            let note=event.target.closest(".form");
            note.remove();
        })
    })
       })


    //work on search bar  
    function search(val) {

    let suggestions = document.querySelector(".suggestions");

    suggestions.innerHTML = "";

    for (let [key, value] of mp) {

        if (key.toLowerCase().startsWith(val.toLowerCase()) && val !== "") {

            suggestions.insertAdjacentHTML("beforeend", `
                  <div class="item"><h3>${key}</h3></div>
            `);

        }
    }
}


let sbar = document.querySelector("#sbar");

sbar.addEventListener("input", () => {
    document.body.insertAdjacentHTML("beforeend",` <div class="suggestions">

    </div>`)
    search(sbar.value);
    let list=document.querySelectorAll(".item");
    list.forEach((e)=>{
        e.addEventListener("click", (event)=>{
            let d=event.target.closest(".item");
            
        })
    })



    document.body.addEventListener("click", ()=>{
       document.querySelector(".suggestions").remove();
    })
});


       