// QUESTION 1

//Changing the background color of Body
function colorChange() {
  //function use in arrayTopicHtml file
  let colorArray = ["redColor", "blueColor", "yellowColor"];
  let setValue = colorArray.indexOf(document.body.classList[0]);
  setValue = setValue + 1;
  if (setValue == 3) {
    setValue = 0;
  }
  if (setValue < 3) {
    document.body.className = "";
    document.body.classList.add(colorArray[setValue]);
    setValue = 1 + setValue;
  }
}

//  Another Ways

// function colorChange() {
//   let colorArray = ["redColor", "blueColor", "yellowColor"];
//   if (colorArray.find((color) => color == document.body.classList[0])) {
//     let currentIndex = colorArray.findIndex(
//       (val) => val == document.body.classList[0]
//     );
//     let nextIndex = currentIndex + 1 ?? 0;
//     document.body.className = "";
//     if (nextIndex === colorArray.length) {
//       nextIndex = 0;
//     }
//     document.body.classList.add(colorArray[nextIndex]);
//     return;
//   }
//   document.body.classList.add(colorArray[0]);
// }

// QUESTION 2

//letter count change
function letterCount() {
  let value = document.querySelector(`input[type="text"].letterInput`).value
    .length;
  document.querySelector(`p.letterCount span`).innerHTML = value;
}

//another method

// QUESTION 3
//counter with increment and Decrement
function countUp() {
  const counterValue = document.querySelector(`h3.counterValue`);
  let value = counterValue.getAttribute("data-count");
  value++;
  counterValue.setAttribute("data-count", value);
  counterValue.innerHTML = value;
}

function countDown() {
  const counterValue = document.querySelector(`h3.counterValue`);
  let value = counterValue.getAttribute("data-count");
  value--;
  counterValue.setAttribute("data-count", value);
  counterValue.innerHTML = value;
}

//another method

// QUESTION 4
// to do list
function toDoList(){
    const toDoListValue = document.querySelector(`input[type="text"].toDoList`);
    if(toDoListValue.value.length > 0){
        const toAppendVariable = document.querySelector(`.toDoListContainer ul`);
        toAppendVariable.innerHTML = `<li> ${toDoListValue.value} </li>`;
        toDoListValue.value = '';
    }
}