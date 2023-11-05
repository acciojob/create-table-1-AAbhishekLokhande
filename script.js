let table = document.querySelectorAll("#sampleTable")
let btn = document.querySelectorAll("#btn");
function insert_Row() {
    //Write your code here
 let newRow = document.createElement("tr");
	let cell1 = document.createElement("td");
	cell1.innerText(NewCell1);
	let cell2 = document.createElement("td");
	cell2.innerText(NewCell2);
  table.insertBefore(tr,table);
	newRow.append(cell1,cell2);
}
function OnClickInsertBtn(){
	
}

btn.addEventListner("click", onClickInsertBtn);