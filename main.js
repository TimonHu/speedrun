
const vragen = [
    [
        "vraag-1","w1",
        "w1","w2"
    ],
    ["vraag-2","w2","w1","w2"]
]

const div = document.getElementById("vragen")

function makenNewButton(i){
    let newButton = document.createElement("button")
    newButton.innerText = vragen[0][i]
    newButton.addEventListener("click",()=>{
        if(vragen[0][1]==vragen[0][i]){
            vragen.shift()
            displayVraag();
        }else{
            
        }
    })
    div.appendChild(newButton)
}

function displayVraag(){
    div.innerHTML = ""
    
    if(vragen[0] === undefined){ div.innerText="klaar"; return}

    for(let i=0;i<vragen[0].length;i++){
        if(i<=1){
            div.innerText= vragen[0][0]
        }else{
            makenNewButton(i)
        }
    }


}

displayVraag()
