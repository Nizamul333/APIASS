

function connect() {
  
   // var searchText = document.getElementById('search').value ; 
   // console.log(searchText);
   
   var url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
   //console.log(url);
   
    fetch(url)
    .then(res => res.json() )
    .then(data => showData(data));
   
   // document.getElementById('search').value = ""; 
   
   }
   
   function showData(data){
   
          console.log("data from showData Function", data);
   
          var oldContent = document.getElementById('container');
          oldContent.textContent= "";
          
         



          for (var i=0; i<data.categories.length; i++){
           console.log("bal",data.categories[i]);
   
           var newDiv = document.createElement('div');
        //    newDiv.innerHTML = `<p>Category Title: <span class="title-style">${data.categories[i].strCategory}  </span> </p>
        //                        <img class='img-style' src="${data.categories[i].strCategoryThumb}" >`;
        //                        newDiv.classList.add("meal-style");
  
        
        newDiv.innerHTML=`
         <div class="card" style="width:18rem; margin-bottom:20px;margin:5px ;">
        <img src="${data.categories[i].strCategoryThumb}" class="card-img-top" alt="...">
        <div class="card-body" style="height:20rem">
          <h5 class="card-title">${data.categories[i].strCategory}</h5>
           <p class="card-text" id="card" style=" font-size: xx-small;font-weight: bolder">${data.categories[i].strCategoryDescription}</p>

  <button class="bg-secondary">Show Details</button>
        </div>
      </div>`
      newDiv.classList.add("meal-style");
   
              oldContent.appendChild(newDiv);
        
             
          }




 

      
          
   }
  




   function connect1() {
    
    var searchText = document.getElementById('search').value ; 
   // console.log(searchText);
   
   var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   //console.log(url);
   
    fetch(url)
    .then(res => res.json() )
    .then(data => showData1(data));
   
    document.getElementById('search').value = ""; 
   
   }
   
   function showData1(data){
   
          console.log("data from showData Function", data);
   
          var oldContent = document.getElementById('container');
          oldContent.textContent= "";

         
   
          for (var i=0; i<data.meals.length; i++){
           console.log(data.meals[i]);
   
           var newDiv = document.createElement('div');
          //  newDiv.innerHTML = `<p>Meal Title: <span class="title-style">${data.meals[i].strMeal}  </span> </p>
          //                      <img class='img-style' src="${data.meals[i].strMealThumb}" >`;
          //                      newDiv.classList.add("meal-style");
   
          //                      oldContent.appendChild(newDiv);


          newDiv.innerHTML=`
         <div class="card" style="width:18rem; margin-bottom:20px;margin:10px ;">
        <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.meals[i].strMeal} </h5>
        </div>
      </div>`
        
      newDiv.classList.add("meal-style");
   
      oldContent.appendChild(newDiv);
          }
      
         
   }