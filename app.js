var total = []


//inkomst div vi måste läsa den med queryselector
//uppdatera användarens inmatade data med hjälp av text



function add(event){
    event.preventDefault()

    //refererar till värdet i elementet med id:t "selectOption"
    var selectValue = document.querySelector("#selectOption").value

    //referera till värdet i inputfältet
    var inputDescription = document.querySelector("#description").value
    var inputValue = document.querySelector("#value").value


    //om plus
    if(selectValue === "+"){
        // skapar en p-tagg
        var p = document.createElement("P")
        // anger innehållet i p-taggen
        p.innerHTML = inputDescription + " " + inputValue

        //Refererar till elementet med id "incomeaaa"
        var incomeElement = document.querySelector("#income")

        // anger vart p-taggen ska vara
        incomeElement.appendChild(p)

        // pushar värdet till total listan
        total.push(Number(inputValue))

    }

    //om minus
    else if(selectValue === "-"){

        // skapar en p tag
        var p = document.createElement("p")

        // anger innehållet i p-taggen
        p.innerHTML = inputDescription + " " + inputValue

        var incomeElement = document.querySelector("#expenses")
           
        // anger vart p-taggen ska vara
        incomeElement.appendChild(p)    

        // pushar minusvärdet till totala listan
        total.push(Number(-inputValue))
            
    }


         // [100, 1323, 132424, 4232]
       // start index
       // 0, 1, 2, 3
       // length = 4
       


    //utgångsvärde för totalen
    var totalValue = 0

    for (let index = 0; index < total.length; index++){
        totalValue = totalValue + total[index]
        //totalValue += total[index]
    }

    console.log(totalValue)

    var totalElement = document.querySelector("#total")
    totalElement.textContent = totalValue
}
       
function clear(event){
    event.preventDefault()
    location.reload()
}

    
    

     


//refererar till add-knappen
var addButton = document.querySelector("#add-button")

var clearButton = document.querySelector("#clear-button")
//console.log(addButton)


// 1 lägger till en eventlyssnare på addButton
// 2 anger vilket typ av event vi vill lyssna efter
// 3 anger vilken funktion som ska köras 
//          1                  2     3   
addButton.addEventListener("click", add)
clearButton.addEventListener("click", clear)


//kalla på en function
// add()



Lägg in i if / if else och pusha totalen som tidigare!
Han nämnde nåt om loop också

+ incomeTotal
- expensesTotal


ÄNDRING