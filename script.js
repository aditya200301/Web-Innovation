"use strict";
// Inputs
const newInventory = document.querySelector(".new");
const soldInventory = document.querySelector(".sold");

///////////////////////// Display box

//Saree data
const newSareeData = document.querySelector(".saree-new-data");
const soldSareeData = document.querySelector(".saree-sold-data");
const remainingSareeData = document.querySelector(".saree-remaining-data");

// t-shirt data
const newtshirtData = document.querySelector(".tshirt-new-data");
const soldtshirtData = document.querySelector(".tshirt-sold-data");
const remainingtshirtData = document.querySelector(".tshirt-remaining-data");

// jeans data
const newJeansData = document.querySelector(".jeans-new-data");
const soldJeansData = document.querySelector(".jeans-sold-data");
const remainingJeansData = document.querySelector(".jeans-remaining-data");

/////////////////// BUTTONS
const addNew = document.querySelector(".add-new");
const lessSold = document.querySelector(".less-sold");

// Select
const newSelect = document.querySelector("#Newproduct");
const SoldSelect = document.querySelector("#Soldproduct");

console.log(newSelect.value);

let sareeInventory = 0;
let tshirtInventory = 0;
let jeansInventory = 0;

addNew.addEventListener("click", function () {
  if (newSelect.value === "Saree") {
    newSareeData.textContent =
      Number(newSareeData.textContent) + Number(newInventory.value);

    sareeInventory = sareeInventory + Number(newInventory.value);
  }

  if (newSelect.value === "T-Shirt") {
    newtshirtData.textContent =
      Number(newtshirtData.textContent) + Number(newInventory.value);

    tshirtInventory = tshirtInventory + Number(newInventory.value);
  }
  if (newSelect.value === "Jeans") {
    newJeansData.textContent =
      Number(newJeansData.textContent) + Number(newInventory.value);

    jeansInventory = jeansInventory + Number(newInventory.value);
  }

  //   newData.textContent =
  //     Number(newData.textContent) + Number(newInventory.value);

  //   inventory = inventory + Number(newInventory.value);
  //   console.log(inventory);
});

lessSold.addEventListener("click", function () {
  if (SoldSelect.value === "Saree") {
    soldSareeData.textContent =
      Number(soldSareeData.textContent) + Number(soldInventory.value);

    remainingSareeData.textContent =
      sareeInventory - Number(soldSareeData.textContent);
  }

  if (SoldSelect.value === "T-Shirt") {
    soldtshirtData.textContent =
      Number(soldtshirtData.textContent) + Number(soldInventory.value);

    remainingtshirtData.textContent =
      tshirtInventory - Number(soldtshirtData.textContent);
  }

  if (SoldSelect.value === "Jeans") {
    soldJeansData.textContent =
      Number(soldJeansData.textContent) + Number(soldInventory.value);

    remainingJeansData.textContent =
      jeansInventory - Number(soldJeansData.textContent);
  }
  //   soldData.textContent =
  //     Number(soldData.textContent) + Number(soldInventory.value);

  //   remainingData.textContent = inventory - Number(soldData.textContent);
});
