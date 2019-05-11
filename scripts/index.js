function stockItem(options){
    var options = options || {};
    this.name = options.name || "Default";
    this.amount = options.amount || 100;
    this.decrease = options.decrease || 1;
    this.sold = function(){
        this.amount -= this.decrease;
        if (this.amount < 0){
            console.log("Stock Empty");
        }
    }
}

function printItem(imageP,nameP,priceP,amountP){
    document.getElementById('item').innerHTML=`<img src="${imageP}" width="100"> <br> <h3> ${nameP}</h3><h3>Price =${priceP}</h3>`;
}

const alienware = new stockItem('Pics/desktop', 'alienware');
const aoc = new stockItem('Pics/desktop1', 'aoc');
const lenovo = new stockItem('Pics/laptop', 'lenovo');
const razor = new stockItem('Pics/laptop1', 'razor');

let computers = ['alienware', 'aoc', 'lenovo', 'razor'];

var i = 1;

var desktop = new stockItem({
    name:"alienware",
    amount:20,
    decrease:1,

    out:function(){
        return 'We are sorry, but this item is out of stock!'
    }
});

var desktop2 = new stockItem({
    name:"aoc",
    amount:20,
    decrease:1,

    out:function(){
        return 'We are sorry, but this item is out of stock!'
    }
});

var laptop = new stockItem({
    name:"lenovo",
    amount:20,
    decrease:1,

    out:function(){
        return 'We are sorry, but this item is out of stock!'
    }
});

var laptop2 = new stockItem({
    name:"razor",
    amount:20,
    decrease:1,

    out:function(){
        return 'We are sorry, but this item is out of stock!'
    }
});

let options = prompt("Select your product: \n alienware \n aoc \n lenovo \n razor ");
let number = prompt("Number of products: ")
let count,total,t;


switch (options){

    case 'alienware':
    count=0;
    printItem('Pics/desktop.png', 'alienware','$1500', 20);
    t=stock();
    break;

    case 'aoc':
    count=1;
    printItem('Pics/desktop1.png', 'aoc','$700', 20);
    t=stock();
    break;

    case 'lenovo':
    count=2;
    printItem('Pics/laptop.png', 'lenovo', '$600', 20);
    t=stock();
    break;

    case 'razor':
    count=3;
    printItem('Pics/laptop1.png', 'razor', '$1200', 20);
    t=stock();
    break;

    default:
    alert('Please, select a valid option');
    break;



}



console.table(stockItem);