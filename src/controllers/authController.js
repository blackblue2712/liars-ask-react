export const isAdmin = (token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/auth/isAdmin`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        return { message: "ERROR IS ADMIN" }
    });
}