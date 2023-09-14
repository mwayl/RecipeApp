(async function (){
    let response=await fetch("./recipes.json");
    let recipe=await response.json();
   
  
   const searchValue=document.getElementById("searchInput");
  // const searchValueSmall=document.getElementById("searchInputSmall");
   const searchValueContainer=document.getElementsByClassName("searchInputss");
   const searchBtn=document.getElementById("searchBtn")
   const searchBtnSmallScreen=document.getElementById("searchBtnSmallScreen");
   const displayList=document.getElementById("recipe-list")
   const displayDetails=document.getElementById("recipeDetailsContainer");
   const divOfDisplayDetailsVerySmallScreen=document.getElementById("recipeDetailsSmallScreen")
   const displayDetailsSmallcreen=document.getElementById("recipeDetailsContainerSmallScreen")
   const notFoundRecipeMessage=document.getElementById("notFoundRecipeShowMessage")
   const buttonOfCancelRecipeDetailContainer=document.getElementById("cancelRecipeDetails")
   const notFoundRecipeShowMessageDiv=document.getElementById("notFoundRecipeShowMessage");
   
   
   function displayDetail(recipes){
    const detail=`<h2>${recipes.title}</h2>
          <p>${recipes.description}</p>
          <ul>
          ${recipes.ingredients.map(function(ingredients){
           return "<li>"+ingredients+"</li>"
          }).join(" ")}
          </ul>
              
          
    `
    //when button of smallScren is clicked it will show
          displayDetails.innerHTML=detail
          if(window.innerWidth > 650){                      
            const detail=`<h2>${recipes.title}</h2>
                  <p>${recipes.description}</p>
                  <ul>
                  ${recipes.ingredients.map(function(ingredients){
                   return "<li>"+ingredients+"</li>"
                  }).join(" ")}
                  </ul>
                         
            `
                  displayDetails.innerHTML=detail
                  divOfDisplayDetailsVerySmallScreen.style.display="none"
                }
                //when button of verySmallScren is clicked it will show
                else{
                    const detail=`<h2>${recipes.title}</h2>
                  <p>${recipes.description}</p>
                  <ul>
                  ${recipes.ingredients.map(function(ingredients){
                   return "<li>"+ingredients+"</li>"
                  }).join(" ")}
                  </ul>
                         
            `
            divOfDisplayDetailsVerySmallScreen.style.display="block"
            displayDetailsSmallcreen.innerHTML=detail
           
                }
                
    function displayStyle(){    
       
     //when screen resize and screen is less than 650px and large than 420px it will show
        if(window.innerWidth > 650){                      
    const detail=`<h2>${recipes.title}</h2>
          <p>${recipes.description}</p>
          <ul>
          ${recipes.ingredients.map(function(ingredients){
           return "<li>"+ingredients+"</li>"
          }).join(" ")}
          </ul>
                 
    `
          displayDetails.innerHTML=detail
          divOfDisplayDetailsVerySmallScreen.style.display="none"
        }

        //when screen resize and screen is less than 420px it will show
        else{
            const detail=`<h2>${recipes.title}</h2>
          <p>${recipes.description}</p>
          <ul>
          ${recipes.ingredients.map(function(ingredients){
           return "<li>"+ingredients+"</li>"
          }).join(" ")}
          </ul>
                 
    `
    divOfDisplayDetailsVerySmallScreen.style.display="block"
    displayDetailsSmallcreen.innerHTML=detail
   
        }
        }
        //Call display style function and its run when screen is resize
        window.addEventListener("resize",displayStyle )
   }
   
   //In displayResult function the result is displayed which is come from search function

   function displayResult(result){
    
          displayList.innerHTML="";
    result.forEach(function(recipes){
        const li=document.createElement("li")
        const listItem=`<p>${recipes.title}</p>
        <p>${recipes.description}</p>
        `
        li.innerHTML=listItem;
        li.addEventListener("click",function(){
            displayDetail(recipes)
        })
        displayList.appendChild(li)
          
    })

    

   }
   
   function search(){
    
    let valueOfSearch=searchValue.value.toLowerCase();

    //ifsearch filed is empty 
//     if(valueOfSearch === ""){
//     console.log("not found");
//     notFoundRecipeMessage.style.display="block"
//     console.log("not found")
//     const notRecipeShowMessage=document.createElement("p")
//    const result=`<p class="notFoundMessage">Input Field is Empty.</p>`
//    notRecipeShowMessage.innerHTML=result
//    notFoundRecipeMessage.appendChild(notRecipeShowMessage)

//    setTimeout(()=>{
//     notFoundRecipeMessage.style.display="none"

//    },3000)
//     }
//     else{
    let searchResult;
    //check valueOfSearch is found in the recipe
     let valueSearchFoundOrNot = recipe.some(recipes => recipes.title.toLowerCase().includes(valueOfSearch) || recipes.ingredients.join(" ").toLowerCase().includes(valueOfSearch))
       console.log(valueSearchFoundOrNot)
     if(!valueSearchFoundOrNot){
        // displayList.innerHTML="";
        // displayResult(recipe);
        // notFoundRecipeMessage.style.display="block"
        //     console.log("not found")
        //     const notRecipeShowMessage=document.createElement("p")
        //    const result=`<p class="notFoundMessage">Not Found item.</p>`
        //    notRecipeShowMessage.innerHTML=result
        //    notFoundRecipeMessage.appendChild(notRecipeShowMessage)
        notFoundRecipeShowMessageDiv.style.display="block"
           setTimeout(()=>{
            notFoundRecipeShowMessageDiv.style.display="none"

           },3000)

           
       
      
     }

     else{
       searchResult=recipe.filter(function(recipes){
                  
                 return (recipes.title.toLowerCase().includes(valueOfSearch) || recipes.ingredients.join(" ").toLowerCase().includes(valueOfSearch))
        })
     }
    


    displayResult(searchResult);
    // console.log(recipes)
   }
   searchBtn.addEventListener("click",search)
   searchBtnSmallScreen.addEventListener("click",search)


//    let buttonValue=true;
//    let counter =0;

   // ... (Your existing code)

// The click event handler for the small screen search button
// searchBtnVerySmallScreenDom.addEventListener("click", (event) => {
//     if (buttonValue) {
//         // Move the search input field outside the visible area
//         searchValue.style.position = "absolute";
//        // searchValue.style.left = "-9999px";

//         // Focus on the search input field immediately
//         searchValue.focus();

//         // Update button styles
//         searchBtnVerySmallScreenDom.style.marginTop = "-38px";
//         searchBtnVerySmallScreenDom.style.marginRight = "5px";

//         // Set buttonValue to false to indicate the search input is focused
//         buttonValue = false;

//         // Prevent the default click behavior
//         event.preventDefault();
//     }
// });

// ... (Your existing code)

//    searchBtn.addEventListener("click",(event)=>{
   
//     if((buttonValue && counter=== 0) || (buttonValue && searchValueSmall === "") ||(searchValueSmall==="")) {
//         // console.log("wayl is a leader");
//         // searchValue.style.width="15px"
//         searchValueSmall.style.display="block";
        
//         searchBtn.style.marginTop="-38px"
//         searchBtn.style.marginRight="5px"
//         searchValueSmall.focus();
        
        
       
//         buttonValue=false
//         counter = counter + 1;
//     }
   
//    else if(buttonValue){
//         //console.log("sahi");
                
//         // searchBtnVerySmallScreenDom.style.marginRight="38px"
//        searchValueSmall.style.display="block";
//         searchBtn.style.marginTop="-38px"
//         searchBtn.style.marginright="-26px"
//         searchValueSmall.focus();
        
//        console.log("Please select")
//        counter = counter + 1;
//        buttonValue=false
      
//     }
//     else{
//         searchValueSmall.style.display="none";
//         searchBtn.style.marginTop="0px"
//         //searchBtnVerySmallScreenDom.style.position="relative"
//         // searchBtnVerySmallScreenDom.style.marginRight="40px"
//         // counter = counter + 1;
//         console.log("hello ")
//         buttonValue=true
        
//     }
//     event.preventDefault();
//     searchBtn.addEventListener("click",search)
//    })



// const searchValueDesign =()=>{
//     if(window.innerWidth > 421){
//         searchValue.style.display="block";
//     }
//     if(window.innerWidth<=421){
//         searchValue.style.display="none";
//     }
// }
// window.addEventListener("resize",searchValueDesign)

buttonOfCancelRecipeDetailContainer.addEventListener("click",()=>{
    divOfDisplayDetailsVerySmallScreen.style.display="none";
})
// if(window.innerWidth <= 421){
//     searchValue.style.display="block";
// }
 

})();

