
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let totalPrice = 0;
  priceUnit = document.querySelectorAll('price-unit');
  quantProduct = document.querySelectorAll('quant-product');
  totalPrice = priceUnit * quantProduct;
  document.querySelectorAll('total-price').innerHTML = totalPrice;
  console.log('passou pelo getTotalPrice');
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice) {
  newHtml = `
  <div><span class="name-product">Nome $itemName </span></div>
  <div><span class="price-unit">Preço $itemUnitPrice </span></div>
  <div><label><input type="number" class="quant-product"></label></div>
  <div><span class="total-price"></span></div>
  <div><button id="btn-delete"></button></div>
  `;
  // eslint-disable-next-line no-undef
  return newHtml;
}

function createNewItem(){
  productNewName = document.querySelector('.name-product').value;
  newPrice = document.querySelector('.price-product').value;
  return createNewItemRow(productNewName, newPrice);

}

window.onload = function() {
  
  const products = [];
  const productList = document.getElementById('printer-products');
  console.log(productList)
  console.log(typeof(createNewItemRow()))
  //var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  createItemButton.onclick = function() {
    products.push(createNewItem());
    console.log(products);
    productList.innerHTML = '';
    products.map((element) => {
    productList += element;
    })
  }

  // eslint-disable-next-line func-names
  // calculatePriceButton.onclick = function() {
  //   getTotalPrice();
  // };

  //createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
}
