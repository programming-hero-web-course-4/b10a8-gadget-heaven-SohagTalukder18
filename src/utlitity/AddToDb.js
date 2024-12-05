const getStoreAddToCart =()=>{
    const storedListStr = localStorage.getItem('cart-list');

    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}
const addToStoreAddToCart=(id)=>{
    
    const storedList = getStoreAddToCart();
    if (storedList.includes(id)) {
        alert("allrady added");
        
    }else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list',storedListStr);
        alert("added");
    }
}


const removeFromLS = (idx) => {
    const cart = getStoreAddToCart();
    
    const remaining = cart.filter((itemId) => itemId !== idx); 
    const updatedCartStr = JSON.stringify(remaining);
    
    localStorage.setItem('cart-list', updatedCartStr); 
  
    
};
const removeFromWishLS = (idx) => {
    const cart = getStoreWishList();
    
    const remaining = cart.filter((itemId) => itemId !== idx); 
    const updatedCartStr = JSON.stringify(remaining);
    
    localStorage.setItem('wish-list', updatedCartStr); 
   
    
};

const getStoreWishList =()=>{
    const storedWishListStr = localStorage.getItem('wish-list');

    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    } else {
        return [];
    }
}
const addToStoredWishList=(id)=>{
    const storedWishList = getStoreWishList();
    if (storedWishList.includes(id)) {
        alert("allrady added")
        
        
    }else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list',storedWishListStr);
        alert("added");
    }
}
export {addToStoreAddToCart,addToStoredWishList,getStoreAddToCart,getStoreWishList,removeFromLS,removeFromWishLS}
