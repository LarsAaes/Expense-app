const nameInput = document.getElementById("nameInput");
const dateInput = document.getElementById("dateInput");
const amountInput = document.getElementById("amountInput");
const expenseTable = document.getElementById("expenseTable");
const addExpenseButton = document.getElementById("addExpenseButton");
const clearAllButton = document.getElementById("clearAllButton");
const totalAmountCounter = document.getElementById("totalAmountCounter");
const tBody = document.getElementById("tBody");
const noExpensesMessageDef = document.getElementById("noExpenses");

let totalvalue = 0;

let id = 0;

let expenseArray = [];
let expenseArrayLenght = expenseArray.Length;

clearAllButton.onclick = clearAll;
addExpenseButton.onclick = addExpense;

function clearAll()
{
//tømmer Expensearray
expenseArray = [];

//tømmer expensetable
while(tBody.firstChild)
{
    tBody.removeChild(tBody.firstChild);
}
//sætter en No expenses added yet!-besked ind øverst i expensetable
addExpenseMessage()

// sætter amountCounter til 0
totalAmountCounter.innerHTML = "Total Amount: 0";
totalvalue = 0; 
}; 



function addExpense()
{   

    if(nameInput.value != "" && dateInput.value != "" && amountInput.value != "")
    {
    expenseArray.push({name: nameInput.value, date: dateInput.value, amount: amountInput.value, id: id})
    id++;
    addElement();
    updateTotalAmount();
    }
    else
    {alert("Du skal udfylde alle felter først")};
    nameInput.value = null;
    dateInput.value = null;
    amountInput.value = null;
}

function addElement ()
{
const noExpensesMessageDef = document.getElementById("noExpenses");
if(noExpensesMessageDef)
{
    noExpensesMessageDef.remove();
};

const listElementTR = document.createElement("tr")
const nameListElementTD = document.createElement("td")
const dateListElementTD = document.createElement("td")
const amountListElementTD = document.createElement("td")
const deleteListElementTD = document.createElement("td")
const deleteButtonListElementTD = document.createElement("button")

listElementTR.id = id; 
nameListElementTD.innerText = nameInput.value;
dateListElementTD.innerText = dateInput.value;
amountListElementTD.innerText = amountInput.value;
deleteButtonListElementTD.type = "button";
deleteButtonListElementTD.textContent = "Delete";

deleteButtonListElementTD.onclick = function () 
{          
    var index = expenseArray.indexOf(listElementTR.id);
     expenseArray.splice(index, 1);

    listElementTR.remove();
    updateTotalAmount();
    addExpenseMessage();

}
tBody.appendChild(listElementTR);

listElementTR.appendChild(nameListElementTD);
listElementTR.appendChild(dateListElementTD);
listElementTR.appendChild(amountListElementTD);
listElementTR.appendChild(deleteListElementTD);
deleteListElementTD.appendChild(deleteButtonListElementTD);
}

function updateTotalAmount() 
{   
    totalvalue = 0; 

    expenseArray.forEach(function (arrayItem) {
        let x = arrayItem.amount;
        totalvalue = totalvalue + Number(x);
    });

    totalAmountCounter.innerHTML = "Total value: " + totalvalue;
    console.log(expenseArray);
}

function addExpenseMessage()
{
    if(expenseArray.length === 0)
    {
        const noExpensesMessage = document.createElement("td")
        const noExpensesMessageText = document.createTextNode("No expenses added yet!")
        noExpensesMessage.colSpan = "4";
        noExpensesMessage.appendChild(noExpensesMessageText);
        tBody.appendChild(noExpensesMessage);
    }
    else{
        console.log("YY");
    }
}
