document.addEventListener("DOMContentLoaded",function () {

//4.1 elements id#########################################

var recipeName=document.querySelector(".formRecipe input");
var recipeDescription=document.querySelector(".formRecipe textarea");
var recipeInstrouction=document.querySelector("div.instructionsRecipe > div.instructions > textarea");
var recipeIngr=document.querySelector("div.ingridientRecipe > div.instructions > input");
var recipeInstrouctionButton=document.querySelector(".instructionsRecipe button");
var recipeIngrButton=document.querySelector(".ingridientRecipe button");
var recipeSave=document.querySelector(".headerRecipe > button");

var instructionList= document.querySelector(".instructionsRecipe ol");
var IngrList= document.querySelector(".ingridientRecipe ol");


//instruction
recipeInstrouctionButton.addEventListener("click", function () {
    var newLi=document.createElement("li");
    newLi.innerText=recipeInstrouction.value;
    var newaddbutton2=document.createElement("button");
    var newaddbutton=document.createElement("button");
    if(recipeInstrouction.value!=0) {
        instructionList.appendChild(newLi);
        newLi.appendChild(newaddbutton);
        newLi.appendChild(newaddbutton2);
        newaddbutton.classList.add("edit");
        newaddbutton2.classList.add("bin");
        newaddbutton2.innerHTML='<i class="fa fa-trash-alt" aria-hidden="true"></i>';
        newaddbutton.innerHTML='<i class="fa fa-edit" aria-hidden="true"></i>'
        newaddbutton.setAttribute("type", "button")
    }
    recipeInstrouction.value="";
    var listButton=document.querySelectorAll("div.instructionsRecipe > div.description >ol > li  button.edit");
    var listButton2=document.querySelectorAll("div.instructionsRecipe > div.description >ol > li  button.bin");
    var listInstr=document.querySelectorAll("div.instructionsRecipe > div.description >ol > li ");
    for(var i=0;i<listButton.length;i++) {
        listButton[i].addEventListener("click", function () {

            for(var i=0;i<listInstr.length;i++){
                this.parentElement.setAttribute("contenteditable", "true");
            }
        });
    }
    for(var i=0;i<listButton2.length;i++) {
        listButton2[i].addEventListener("click", function () {
            for(var i=0;i<listInstr.length;i++){
                this.parentElement.remove(listInstr[i]);
            }
        });
    }
});
//ingridients
recipeIngrButton.addEventListener("click", function () {
    var index=[]
    var newLi=document.createElement("li");
    newLi.innerText=recipeIngr.value;
    var newaddbuttonI=document.createElement("button");
    var newaddbutton2I=document.createElement("button");
    if(recipeIngr.value!=0) {
        IngrList.appendChild(newLi);
        newLi.appendChild(newaddbuttonI);
        newLi.appendChild(newaddbutton2I);
        newaddbuttonI.classList.add("edit");
        newaddbutton2I.classList.add("bin");
        newaddbutton2I.innerHTML='<i class="fa fa-trash-alt" aria-hidden="true"></i>';
        newaddbuttonI.innerHTML='<i class="fa fa-edit" aria-hidden="true"></i>';
        newaddbuttonI.setAttribute("type", "button")

    }
    recipeIngr.value="";
    var listButton=document.querySelectorAll("div.ingridientRecipe > div.description >ol > li  button.edit");
    var listButton2=document.querySelectorAll("div.ingridientRecipe > div.description >ol > li  button.bin");
    var listIngr=document.querySelectorAll("div.ingridientRecipe > div.description >ol > li ");


    for(var i=0;i<listButton.length;i++) {
        listButton[i].addEventListener("click", function () {
            for(var i=0;i<listIngr.length;i++){
                this.parentElement.setAttribute("contenteditable", "true");
            }
        });
    }
    for(var i=0;i<listButton2.length;i++) {
        listButton2[i].addEventListener("click", function () {
            for(var i=0;i<listIngr.length;i++){
                this.parentElement.remove(listIngr[i]);
            }
        });
    }
});

//save recipe
    var formRecipe=document.querySelector("form")


/*recipeSave*/formRecipe.addEventListener("submit",function(e){

    if(recipeName.value==0||recipeDescription.value==0){
        alert("uzupełnij nazwę i opis przepisu !!!")
    }
    else {
        var newRecipe = {
            id: 0,
            title: null,
            description: null,
            ingredients: [],
            instructions: []
        }


        Recipe();
        saveRecipe(newRecipe);
        console.log(newRecipe);

        function Recipe() {
            newRecipe.id = 0;
            newRecipe.title = recipeName.value;
            newRecipe.description = recipeDescription.value;
            newRecipe.ingredients.push(IngrList.innerText);
            newRecipe.instructions.push(instructionList.innerText);
        }

        function saveRecipe(newRecipe) {
            var recipes = null;
            if (!localStorage.getItem("recipes")) {
                recipes = [];
                recipes.push(newRecipe);
                newRecipe.id = recipes.length;
            } else {
                recipes = JSON.parse(localStorage.getItem("recipes"));
                recipes.push(newRecipe);
                newRecipe.id = recipes.length;
            }
            localStorage.setItem('recipes', JSON.stringify(recipes));
        }

        alert("Przepis Zapisany !")
        e.preventDefault();
        formRecipe.reset();
        window.location = 'app.html'
    }
});


});
