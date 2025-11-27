// --- Question 10 ----------

let items = document.querySelectorAll('#showList li');

items.forEach(li => {
  li.onclick = function () {

    items.forEach(item => {
      item.style.backgroundColor = '';
    });

    this.style.backgroundColor = 'yellow';
  };
});

// --- Question 9 ----------

// function changeColor() {
//   document.getElementById('colorChange').style.color = "green";
// }

// --- Question 8 ----------
// fontSize = 16;
// function increaseFont() {
//   fontSize++;
//   document.getElementById('textSize').style.fontSize = fontSize + "px";
// }
// function decreaseFont() {
//   fontSize--;
//   document.getElementById('textSize').style.fontSize = fontSize + "px";
// }

// --- Question 7 ----------
// function textFun() {
//   const anyValue = document.getElementById('anyValue').value;
//   // alert(anyValue);
//   document.getElementById('showText').textContent = anyValue;
// }

// --- Question 6 ----------

// let count = 0;

// // Increment function
// function Increment() {
//   count++;
//   document.getElementById("startNum").textContent = count;
// }

// // Decrement function
// function Decrement() {
//   count--;
//   document.getElementById("startNum").textContent = count;
// }

// --- Question 5 ----------

// stuResults = [];

// function stuRecord() {

//   console.log("stuRecord");
//   const stuResult = {};

//   const math = document.getElementById('math').value;
//   const eng = document.getElementById('eng').value;
//   const hindi = document.getElementById('hindi').value;
//   const ss = document.getElementById('ss').value;
//   const sci = document.getElementById('sci').value;


//   stuResult.math = math;
//   stuResult.eng = eng;
//   stuResult.hindi = hindi;
//   stuResult.ss = ss;
//   stuResult.sci = sci;

//   document.getElementById('math').value
//     = " ";
//   document.getElementById('eng').value = " ";
//   document.getElementById('hindi').value = " ";
//   document.getElementById('ss').value = " ";
//   document.getElementById('sci').value = " ";

//   stuResults.push(stuResult);
//   // console.log("stuResults");

//   getStudentList();
// }

// function getStudentList() {
//   let stuListHtml = " ";
//   stuListHtml +=
//     `<table style="border-collapse: collapse;
//     width: 70%;
//     margin: 10px auto;
//     margin-left:0;
//     font-family: Arial, sans-serif;
//     text-align:center"
//     border = "2"
//     id="stuTable">
//   <tr style="background-color:lightblue">
//     <th>Sr No</th>
//     <th>Math</th>
//     <th>English</th>
//     <th>Hindi</th>
//     <th>Social Studies</th>
//     <th>Science</th>
//     <th>Total</th>
//   </tr>`
//   for (let i = 0; i < stuResults.length; i++) {

//     const total = (parseInt(stuResults[i].math) + parseInt(stuResults[i].eng) + parseInt(stuResults[i].hindi) + parseInt(stuResults[i].ss) + parseInt(stuResults[i].sci));
//     stuListHtml += `  <tr>
//       <td style='background-color:gray'>${i + 1}</td>
//       <td style='background-color:${stuResults[i].math >= 70 ? 'green' : stuResults[i].math >= 50 ? 'pink' : 'red'}'>${stuResults[i].math}</td>
//       <td style='background-color:${stuResults[i].eng >= 70 ? 'green' : stuResults[i].eng >= 50 ? 'pink' : 'red'}'>${stuResults[i].eng}</td>
//       <td style='background-color:${stuResults[i].hindi >= 70 ? 'green' : stuResults[i].hindi >= 50 ? 'pink' : 'red'}'>${stuResults[i].hindi}</td>
//       <td style='background-color:${stuResults[i].ss >= 70 ? 'green' : stuResults[i].ss >= 50 ? 'pink' : 'red'}'>${stuResults[i].ss}</td>
//       <td style='background-color:${stuResults[i].sci >= 70 ? 'green' : stuResults[i].sci >= 50 ? 'pink' : 'red'}'>${stuResults[i].sci}</td>
//       <td style='background-color:${total >= 350 ? 'green' : total >= 349 ? 'pink' : 'red'}'>${total}</td>
//     </tr>`
//   }
//   stuListHtml += ` </table > `
//   document.getElementById('stuList').innerHTML = stuListHtml;
// }


// --- Question 4 ----------
// const textChange = document.getElementById('hoverBox');

// textChange.onmouseover = () => {
//   textChange.textContent = "Mouse on Hover!"
//   textChange.style.backgroundColor = "yellow"
//   textChange.style.color = "darkblue"
// }
// textChange.onmouseout = () => {
//   textChange.textContent = "Mouse is out !"
//   textChange.style.backgroundColor = "lightpink"
//   textChange.style.color = "brown";
// }


// --- Question 3 ----------
// const textLine = document.getElementById('textLine');
// const showHide = document.getElementById('showHide');

// function toggleBtn() {
//   if (textLine.style.display === "none") {
//     textLine.style.display = "block";
//     showHide.textContent = "Hide Text"
//   } else {
//     textLine.style.display = "none";
//     showHide.textContent = "Show Text"
//   }
// }

// --- Question 2 ----------
// function changeColor() {
//   // const color1 = Math.floor(Math.random() * 256);
//   // const color2 = Math.floor(Math.random() * 256);
//   // const color3 = Math.floor(Math.random() * 256);
//   // const bgColor = `rgb(${color1},${color2},${color3})`
//   // document.body.style.background = bgColor;
//   // console.log(bgColor);

// }

// --- Question 1 ----------
// empList = [];

// function onSubmit() {
//   const empData = {};

//   const name = document.getElementById('name').value;
//   const salary = BigInt(document.getElementById('salary').value);

//   document.getElementById('name').value = " ";
//   document.getElementById('salary').value = " ";

//   empData.name = name;
//   empData.salary = salary;

//   empList.push(empData);

//   getEmpList();
// }

// function getEmpList() {
//   let listBuilderHtml = " ";
//   listBuilderHtml +=
//     `<table style="border-collapse: collapse;
//       width: 50%;
//       margin: 10px auto;
//       margin-left:0;
//       font-family: Arial, sans-serif;
//       text-align:center"
//       border = "2"
//       id="salaryTable">
//     <tr>
//       <th>Sr No</th>
//       <th>Employee</th>
//       <th>Salary</th>
//     </tr>`

//   for (let i = 0; i < empList.length; i++) {

//     listBuilderHtml += `  <tr style='color:${empList[i].salary >= 50000 ? 'green' : empList[i].salary >= 35000 ? 'orange' : 'red'}'>
//         <td>${i + 1}</td>
//         <td>${empList[i].name}</td>
//         <td>
//          ${empList[i].salary}
//         </td>
//       </tr>`
//   }

//   listBuilderHtml += ` </table > `
//   document.getElementById('list').innerHTML = listBuilderHtml;
// }

