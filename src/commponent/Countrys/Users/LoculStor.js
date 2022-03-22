function addToDb(id) {
// get the shopping cart
const storedCart = localStorage.getItem('shopping-cart');
let shoppingCart;

if(storedCart){
shoppingCart=JSON.parse(storedCart);
}

else{
shoppingCart = {}; 
}
// add quantity
   const quantity= shoppingCart[id];
   if(quantity){
       const newQuantity = quantity + 1;
       shoppingCart[id] = newQuantity
    //    localStorage.setItem(id, newQuantity);
   }

   else{
       shoppingCart[id] = 1;
    //    localStorage.setItem(id, 1);
   }
   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// ডাটা remove পার্ট
const removeFormDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
             delete shoppingCart[id];
             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export {
    addToDb,removeFormDb
};