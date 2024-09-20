const button = document.getElementById("SealButton");
let seal = "🦭"
let sealcount = 1;
let test = true;
console.log(test);
button.addEventListener("click", function(){
  sealcount++;
  seal += "🦭";
  button.textContent = seal;
   console.log(seal);
  console.log(sealcount);
});