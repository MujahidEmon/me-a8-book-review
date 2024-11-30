import toast from "react-hot-toast"
export const getItem = () =>{
    let Items = []
    const storedItems = localStorage.getItem('Items')
    if(storedItems) {
        Items = JSON.parse(storedItems)
    }
    return Items;
}

// Function  for save
export const saveItems = (Item) =>{
     let Items = getItem();
    //  Checking is Exist
    const isExist = Items.find(b => b.id === Item.id)
    if(isExist){
      return toast.error('Already added to Read List')
    }
    Items.push(Item)
    localStorage.setItem('Items', JSON.stringify(Items))
    toast.success('Added to Read List')
}

