let bagItems;
onLoad();

function onLoad(){
   let bagItemsStr = localStorage.getItem('bagItems');
   bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
 displayBagIcon();
 }

function addToBag(itemID){
    bagItems.push(itemID);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();

}
function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    let bagItems = JSON.parse(localStorage.getItem("bagItems")) ||[];
    if (bagItems.length > 0){
        
        bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }

}
document.addEventListener("DOMContentLoaded",displayBagIcon);

 function displayItemsOnHomePage(){
    document.addEventListener("DOMContentLoaded", () => {
        let itemsContainerElement = document.querySelector(".items-container");
        if (!itemsContainerElement) {
            
            return;
        }
    
        let innerHtml = "";
        items.forEach((item) => {
            innerHtml += `
            <div class="item-container">
                <img class="item-image" src="${item.image}" alt="item image" >
                <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">RS ${item.current_price}</span>
                    <span class="original-price">RS ${item.original_price}</span>
                    <span class="discount">${item.discount_percentage}% OFF</span>
                </div>
                <button class="btn-add-bag" onclick="addToBag(${item.id})
                ">Add to Bag</button>
            </div>`; 
        });
    
        itemsContainerElement.innerHTML = innerHtml;
    });
    
    
 }
