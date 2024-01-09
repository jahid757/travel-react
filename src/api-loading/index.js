// home page data
export const  getHome = async () =>{
    const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/home')
    const result = await apiUrl.json();
    // console.log(result.data)
    return await result
}

//about page data
export const  getAbout = async() =>{
    const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/about')
    const result = await apiUrl.json();
    console.log(result.data)
}

//blog page data
export const  getBlog = async() =>{
    const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/blog')
    const result = await apiUrl.json();
    console.log(result.data)
}

//
export const  getSingleBlog = async() =>{
    const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/blog/1')
    const result = await apiUrl.json();
    console.log(result.data)
}

// holidays page data
export const  getHolidays = async() =>{
    const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/holidays')
    const result = await apiUrl.json();
    console.log(result.data)
}

//tour page data
export const  getTour = async() =>{
    const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/tours')
    const result = await apiUrl.json();
    console.log(result.data)
}

// single tour page
export const  getSingleTour = async() =>{
    const apiUrl = await fetch('https://trawelfreeby.jdinfotech.net/api/tours/1')
    const result = await apiUrl.json();
    console.log(result.data)
}

