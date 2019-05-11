var items = [
{ 
    title : "",
    description: "",
    price : "",
    category :"",
    image: ""

},

{ 
    title : "",
    description: "",
    price : "",
    category :"",
    image: ""

},

{ 
    title : "",
    description: "",
    price : "",
    category :"",
    image: ""

},

];

function displayCatalog(){

    var divContainer = $("catalog");
    for(var i = 0; i < items.length; i++){
        var item = items[i];
        displayProduct(item);

    }
}



function displayProduct(){
    var divContainer = $("#catalog");
    var syntax = 
    `<div class='item'>
        <img src="${item.image}">
        <h5>${item.title}</h5>
        <label>${ item.description }</label>
        <h6>${item.price}</h6>
        <button class="btn btn-sm btn-info">Add to Cart</button>
    </div>`
    divContainer.append(syntax);
}


function search(){
    var text = $("#txtSearch").val();
    console.log("Searching for: " + text);

    $("#catalog").html("");


    for(var i=0; i < items.length; i++){
        var item = items[i];
        
        if( item.title.indexOf(text) >=0 ){

            displayProduct(item);
        }
    }
}

function init(){

    $("#btnSearch").click(search);

    displayCatalog();

}



windows.onload = init;