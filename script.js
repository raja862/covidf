


//covid 19//

let div=document.createElement("div");
let h1=document.createElement("h1")

h1.innerHTML="Covid 19 Serch Box";
document.body.append(h1)
 let inp=document.createElement("input");
 inp.setAttribute("type","text");
 inp.setAttribute("id","country");

 let button=document.createElement("button");
 button.setAttribute("type","button");
 button.setAttribute("value","search");
 button.innerHTML="Search";
 button.addEventListener("click",foo)
 let activ=document.createElement("div");
 let pona=document.createElement("div");
pona.setAttribute("id","deaths")
 activ.setAttribute("id","active");
 div.append(h1,inp,button,activ,pona);
 document.body.append(div);
 async function foo(){
 let res=document.getElementById("country").value;
 let url=`https://api.covid19api.com/dayone/country/${res}`;
 let arri=await fetch(url);
 let india=await arri.json();
 var index=india.length-1;
 activ.innerHTML=`Total Active Cases:${india[index].Active}`;
 pona.innerHTML=`Taotal Ponathu cases:${india[index].Deaths}`;
 activ.innerHTML=`Total Damage cases:${india[index].Deaths}`;

  
 
 }