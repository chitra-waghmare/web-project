const CONVENIENCE_FEES =99;

let bagItemObjects;
onLoad();

function onLoad() {
  loadBagItemObjects();
    displayBagItems();
   
  displayBagSummary();
  

}
 function displayBagSummary(){
  let bagSummaryElement = document.querySelector('.bag-summary');
  
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  
   
  bagItemObjects.forEach(bagItem =>{
    totalMRP +=bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;

  })
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;



  bagSummaryElement.innerHTML =`
  <div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
   <span class="price-item-value"> ₹${totalMRP}</span>
    </div>
    <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
     <span class="price-item-value priceDetail-base-discount">-  ₹${totalDiscount}</span>
     </div>
       <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value"> ₹ 99</span>
         </div>
          <hr>
          <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value"> ₹ ${finalPayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>
        
  `};
 
function loadBagItemObjects(){
  console.log(bagItems);

 bagItemObjects = bagItems.map(itemId => {
    for (let i = 0; i < items.length; i++){
      if (itemId == items[i].id){
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);

}
function displayBagItems() {
  let ContainerElement = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(element => { 
 
    innerHTML += generateItemHTML(element);
 });
 ContainerElement.innerHTML = innerHTML;
}
function removeFromBag(itemId){
  bagItems = bagItems.filter(bagItemId => bagItemId !== itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects(); 
  displayBagIcon();
  displayBagItems();
  displayBagSummary();

 }
function generateItemHTML(item){
  return `<div class="bag-items-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item. item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item. current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">${item. discount_percentage}</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period}</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>
            <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
          </div>`;
}



  





//  let bagItems = JSON.parse(localStorage.getItem('bagItems')) || []; // Ensure bagItems is defined
//  let bagItemObjects = [];

// onLoad();

// function onLoad() {
//   loadBagItemObjects();
//   displayBagItems();
//   displayBagSummary();
// }

// function loadBagItemObjects() {
//   console.log("Loading bag items...");
  
//   // Ensure Items array exists
//   if (!Items || !Array.isArray(Items)) {
//     console.error("Error: Items is not defined or is not an array.");
//     return;
//   }

//   bagItemObjects = bagItems.map(itemId => {
//     let foundItem = Items.find(item => item.id === itemId);
//     if (!foundItem) {
//       console.warn(`Warning: No item found with ID ${itemId}`);
//     }
//     return foundItem;
//   }).filter(item => item); // Remove `undefined` values

//   console.log("Loaded bag item objects:", bagItemObjects);
// }

// function displayBagItems() {
//   let ContainerElement = document.querySelector('.bag-items-container');
  
//   // Ensure the container exists
//   if (!ContainerElement) {
//     console.error("Error: .bag-items-container not found in DOM.");
//     return;
//   }

//   let innerHTML = '';
//   bagItemObjects.forEach(item => {
//     innerHTML += generateItemHTML(item); // Fix variable name
//   });

//   ContainerElement.innerHTML = innerHTML;
// }

// function displayBagSummary() {
//   let bagSummaryElement = document.querySelector('.bag-summary');
  
//   if (!bagItemObjects || bagItemObjects.length === 0) {
//     bagSummaryElement.innerHTML = `<p>Your bag is empty.</p>`;
//     return;
//   }

//   let totalMRP = 0;
//   let totalDiscount = 0;
  
//   bagItemObjects.forEach(item => {
//     totalMRP += item.original_price;
//     totalDiscount += item.original_price - item.current_price;
//   });

//   let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

//   bagSummaryElement.innerHTML = `
//     <div class="bag-details-container">
//       <div class="price-header">PRICE DETAILS (${bagItemObjects.length} Items)</div>
//       <div class="price-item">
//         <span class="price-item-tag">Total MRP</span>
//         <span class="price-item-value"> ₹${totalMRP}</span>
//       </div>
//       <div class="price-item">
//         <span class="price-item-tag">Discount on MRP</span>
//         <span class="price-item-value priceDetail-base-discount">- ₹${totalDiscount}</span>
//       </div>
//       <div class="price-item">
//         <span class="price-item-tag">Convenience Fee</span>
//         <span class="price-item-value"> ₹99</span>
//       </div>
//       <hr>
//       <div class="price-footer">
//         <span class="price-item-tag">Total Amount</span>
//         <span class="price-item-value"> ₹${finalPayment}</span>
//       </div>
//     </div>
//     <button class="btn-place-order">
//       <div class="css-xjhrni">PLACE ORDER</div>
//     </button>
//   `;
// }

// function removeFromBag(itemId) {
//   bagItems = bagItems.filter(bagItemId => bagItemId !== itemId); // Update `bagItems`
//   localStorage.setItem('bagItems', JSON.stringify(bagItems));
//   loadBagItemObjects(); 
//   displayBagItems();
//   displayBagSummary();
// }

// function generateItemHTML(item) {
//   return `
//     <div class="bag-item-container">
//       <div class="item-left-part">
//         <img class="bag-item-img" src="../pages/images/${item.image}" alt="${item.item_name}">
//       </div>
//       <div class="item-right-part">
//         <div class="company">${item.company}</div>
//         <div class="item-name">${item.item_name}</div>
//         <div class="price-container">
//           <span class="current-price">Rs ${item.current_price}</span>
//           <span class="original-price">Rs ${item.original_price}</span>
//           <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
//         </div>
//         <div class="return-period">
//           <span class="return-period-days">${item.return_period}</span> return available
//         </div>
//         <div class="delivery-details">
//           Delivery by <span class="delivery-details-days">${item.delivery_date}</span>
//         </div>
//       </div>
//       <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
//     </div>
//   `;
// }
