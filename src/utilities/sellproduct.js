export const sellProductValidate = (name,category,price,location)=>{
    const validName =  /^[a-zA-Z ]{2,30}\d*$/.test(name)
    const validcategory = /^[a-zA-Z ]{2,30}$/.test(category)
    const validPrice = /^0$|^[1-9]\d*$/.test(price)
   const validLocation = /^[a-zA-Z ]{2,30}$/.test(location)

   return null
}

