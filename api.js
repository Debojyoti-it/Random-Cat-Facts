let url="https://catfact.ninja/fact";
async function getFact(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
        
    }catch{
        return "NO fact found";
    }
}

let button=document.querySelector("button");

button.addEventListener("click",async()=>{
    let p=document.querySelector("p");
    let data=await getFact();
    p.innerText=data;
});
