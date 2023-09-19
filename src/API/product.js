
// add a new product
export const addProduct = async productData => {
    const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(productData),
    })

    const data = await response.json()
    return data
}

// get loggedin users product
export const getProduct = async email => {
    const response = await fetch(`http://localhost:5000/products?email=${email}`)
    const product = await response.json()  
    return product
  }