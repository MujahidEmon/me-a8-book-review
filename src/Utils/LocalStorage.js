import toast from "react-hot-toast"
export const getItem = () =>{
    let Item = []
    const storedItems = localStorage.getItem('Items')
    if(storedItems) {
        Item = JSON.parse(storedItems)
    }
    return Item;
}

// Function  for save
export const saveItems = (Item) =>{
     let Items = getItem();
    //  Checking is Exist
    const isExist = Items.find(b => b.id === Item.id)
    if(isExist){
      return toast.error('Already Bookmarked')
    }
    Items.push(Item)
    localStorage.setItem('blogs', JSON.stringify(Items))
    toast.success('Bookmark saved')
}

// Function to Delete

export const deleteItem = id =>{
    let Items = getItem();
    const remaining = Items.filter(b => b.id !== id) 
    localStorage.setItem('Items', JSON.stringify(remaining))
    toast.success('Deleted Successfully')
}   