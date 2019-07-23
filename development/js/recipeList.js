document.addEventListener("DOMContentLoaded",function () {

if(localStorage.getItem("recipes")!=null){
    var recipe =localStorage.getItem("recipes").split(",")
    console.log(recipe)
}





    var counter=0;
    function AllRecipes() {
        var recipes = JSON.parse(localStorage.getItem("recipes"));
       recipes.forEach(function(singeRecipe){
           var newrow=document.createElement("div");
           newrow.classList.add("newSavedRecipes");
            var newId=document.createElement("div");
            //newId.innerText=singeRecipe.id;
            newId.classList.add("recipeID");
            counter=counter+1;
           newId.innerText=counter;
            var newName=document.createElement("div");
            newName.innerText=singeRecipe.title;
            newName.classList.add("recipeName");
            var newDescription=document.createElement("div");
            newDescription.innerText=singeRecipe.description;
            newDescription.classList.add("recipeDescription");
            var newAction=document.createElement("div");
           var newaddbuttonI=document.createElement("button");
           var newaddbutton2I=document.createElement("button");
           newAction.appendChild(newaddbuttonI);
           newAction.appendChild(newaddbutton2I);
           newAction.classList.add("recipeAction");
           var recipeContainer=document.querySelector("body > div > section > div > div.recipeTable > div.savedRecipes")
recipeContainer.appendChild(newrow);
    newrow.appendChild(newId);
    newrow.appendChild(newName);
    newrow.appendChild(newDescription);
  newrow.appendChild(newAction);
           newaddbutton2I.innerHTML='<i class="fa fa-trash-alt" aria-hidden="true"></i>';
           newaddbuttonI.innerHTML='<i class="fa fa-edit" aria-hidden="true"></i>';

           newaddbutton2I.addEventListener("click",function () {
               var index= recipes.indexOf(this.parentElement.parentElement);
               removed = recipes.splice(index, 1);
               console.log(index);

                  localStorage.setItem('recipes', JSON.stringify(recipes));

                  location.reload();

           });
           newaddbuttonI.addEventListener("click",function () {

           })

       });


    }
    AllRecipes();



    });


