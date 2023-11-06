// let table = document.querySelectorAll("#sampleTable")
// let btn = document.querySelectorAll("#btn");
// function insert_Row() {
//     //Write your code here
//  let newRow = document.createElement("tr");
// 	let cell1 = document.createElement("td");
// 	cell1.innerText(NewCell1);
// 	let cell2 = document.createElement("td");
// 	cell2.innerText(NewCell2);
//   table.insertBefore(tr,table[0]);
// 	newRow.append(cell1,cell2);
// }
// document.addEventListener('DOMContentLoaded', function() {
//     var insertButton = document.getElementById('btn');
//     insertButton.addEventListener('click', function() {
//         insert_Row();
//     });
// });


// // btn.addEventListner("click", onClickInsertBtn);
document.addEventListener('DOMContentLoaded', function() {
    var insertButton = document.getElementById('insertButton');
    insertButton.addEventListener('click', function() {
        insert_Row();
    });
});

function insert_Row() {
    var table = document.getElementById('sampleTable');
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = 'New Cell1';
    cell2.innerHTML = 'New Cell2';
}