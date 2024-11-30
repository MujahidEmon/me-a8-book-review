import toast from "react-hot-toast";
import { getItem } from "./LocalStorage";

export const getWishlistBook = () =>{
    let WishBooks = []
    const StoredBooks = localStorage.getItem('WishBooks')
    if(StoredBooks)
    {
        WishBooks = JSON.parse(StoredBooks)
    }
    return WishBooks;
}

export const saveWishBook = (book) =>{
    let WishBooks = getWishlistBook()
    let readBooks = getItem()

    const isExist = WishBooks.find(b => b.id === book.id)

    const isRead = readBooks.find(b => b.id === book.id)
    if(isExist){
        return toast.error('Already added to wishlist')
    }
    else if(isRead){
        return toast.error('Chief, you already read this book')
    }
    else{
        WishBooks.push(book)
        localStorage.setItem('WishBooks', JSON.stringify(WishBooks))
        toast.success('Added to wishlist')
    }
}

export const deleteItem = id =>{
    let WishBooks = getWishlistBook();
    const remaining = WishBooks.filter(b => b.id !== id) 
    localStorage.setItem('WishBooks', JSON.stringify(remaining))
    
}  