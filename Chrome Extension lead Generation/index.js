//  chrome://extensions/
const inputEl=document.querySelector("#input_el");
let myLeads=[];
const inputBtn=document.querySelector("#input-btn");
const ulEl=document.querySelector("#ul_el");

const storage=JSON.parse(localStorage.getItem("myLeads"));

if(storage)
{
    myLeads=storage;
    renderLeads();
}

// error in commented part

// const tabBtn=document.querySelector("#tb_btn");

// tabBtn.addEventListener("click",function(){
//   // api called for current tab
//     chrome.tabs.query({active:true , currentWindow : true},function(tabs){
          
//         myLeads.push(tabs[0].url);
//         localStorage.setItem("myLeads", JSON.stringify(myLeads));
//         renderLeads();
//     });
// });

const deleteStorage=document.querySelector("#delete");

deleteStorage.addEventListener("click",function(){
    
      localStorage.clear();
      myLeads=[];
      renderLeads();
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads();
})

function renderLeads()
{
   let listItems="";
   for(let i=0;i<myLeads.length;i++)
  {
    // template strings
    listItems+=`
    <li>
      <a target='_blank' href='${myLeads[i]}'>
      ${myLeads[i]}
      </a>
    </li>  `
  }
    ulEl.innerHTML=listItems;
    
}


