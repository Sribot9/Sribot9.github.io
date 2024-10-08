const button = document.getElementById("SealButton");
const currentseals = document.getElementById("currentseals");
const u1 = document.getElementById("U1");
const save = document.getElementById("SAVE");
let seal = "🦭";
let sealcount = 1;
let yea = 1;
let deconfirm = false
function SAVE() {
localStorage.setItem("seal", seal)
localStorage.setItem("sealcount", sealcount)
console.log("saved", seal, sealcount)
};
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
  let test = localStorage.getItem("seal")
  if (localStorage.getItem("seal")) { //save found :]
    sealcount = localStorage.getItem("sealcount");
    seal = localStorage.getItem("seal");
    console.log("loaded", seal, sealcount)
    yea = "btw you have ";
    yea += sealcount;
    yea  += " seals";
    button.textContent = seal;
    currentseals.textContent = yea;
  } else { //no save, hi new player!
  }
} else {
  //no local storage D:
  console.log("didnt work.")
}




console.log(u1.classList);
button.addEventListener("click", function(){
  sealcount++;
  seal += "🦭";
  button.textContent = seal;
  yea = "btw you have ";
  yea += sealcount;
  yea  += " seals";
  u1.classList.add("visible");
  currentseals.textContent = yea;
  console.log(u1.classList);
});
u1.addEventListener("click", function(){
  u1.textContent = "POOr."
  setTimeout(() => {
  u1.textContent = "Buy another seal";
}, 1000);

});
save.addEventListener("click", function(){
 if(save.classList.contains("DELETE")) {
   if(save.classList.contains("DELCONFIRM")) {
     localStorage.clear();
   } else {
     save.classList.add("DELCONFIRM");
   }
 } else {
   SAVE()
 };
});
document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Control") {

      save.textContent = "DELETE"
    save.classList.add("DELETE")  
    }
  });

document.addEventListener(
  "keyup",
  (event) => {
    const keyName = event.key;

    if (keyName === "Control") {
    save.classList.remove("DELCONFIRM")
    save.textContent = "SAVE"
    save.classList.remove("DELETE")  
    }
  },
);