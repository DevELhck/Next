export interface Product {
	category: string
	price: number
	description: string
	image: string
	id: number
	title: string
	rating: {
		count: number
		rate: number
	}
}

export interface User {
  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  address: {
    city: string
    street: string
    number: number
    zipcode: string
  
  }
  phone: string
  image?: string 
}



export interface UpdateProduct {
	title?: string,
	description?: string,
	price?: number,
	id?: string
}

