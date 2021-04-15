let plusbtn = Array.from(document.getElementsByClassName("plus-btn"));

for (let pbtn of plusbtn) {
    pbtn.addEventListener("click", function () {
    pbtn.nextElementSibling.innerHTML++;
    TotalePrice()
    });
  }

  let minusbtn = Array.from(document.getElementsByClassName("minus-btn"));

for (let i = 0; i < minusbtn.length; i++) {
    minusbtn[i].addEventListener("click", function () {
    if (minusbtn[i].previousElementSibling.innerHTML > 0)
    minusbtn[i].previousElementSibling.innerHTML--;
    TotalePrice()
  });
}

function TotalePrice() {
    let prices = document.getElementsByClassName("total-price");
    let qtes = document.getElementsByClassName("qte");
    let s = 0;
  
    console.log(prices[0].innerHTML);
    console.log(qtes[0].innerHTML);
    for (let i = 0; i < prices.length; i++) {
      s += prices[i].innerHTML * qtes[i].innerHTML;
    }
  
    return (document.getElementById("title").innerText = "$ " + s);
  }

  let deletebtn = document.getElementsByClassName("delete-btn");

for (let delbtn of deletebtn) {
    delbtn.addEventListener("click", function () {
    delbtn.parentNode.parentNode.remove();
    TotalePrice();
  });
}

let likebutton = document.getElementsByClassName("fa-heart");


for (let likebtn of likebutton) {
    likebtn.addEventListener("click", function () {

        if (likebtn.style.color === "grey") {
            likebtn.style.color = "red";
          } else {
            likebtn.style.color = "grey";
          }
        });
}