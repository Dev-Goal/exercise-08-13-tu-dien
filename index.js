let fruitEng = ["apple", "banana", "orange", "mango", "tomato", "pear"];
let fruitVie = [
  "quả táo",
  "quả chuối",
  "quả cam",
  "quả xoài",
  "quả cà chua",
  "quả lê",
];
let btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", getSearch);
function getSearch() {
  let value = document.getElementById("txtValue").value;
  let indexEng = 0;
  let message = "";
  for (let i = 0; i < fruitEng.length; i++) {
    if (value === fruitEng[i]) {
      indexEng = i;
      for (let j = 0; j < fruitVie.length; j++) {
        if (indexEng === j) {
          message = fruitVie[j];
        }
      }
    } else {
      message = "Không tìm thấy";
    }
  }
  document.getElementById("result").innerHTML = message;
}
