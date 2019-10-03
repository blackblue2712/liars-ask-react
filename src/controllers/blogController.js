
export const postWriteBlog = (blogInfo, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/blogs/write`, {
        method: "POST",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(blogInfo)
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        return {message: "ERROR POST WRITE BLOG"}
    });
}

export const getBlogs = (number = 5) => {
    return fetch(`${process.env.REACT_APP_API_URL}/blogs?limit=${number}`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json"
        }
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        return {message: "ERROR GET BLOGS"}
    })
}