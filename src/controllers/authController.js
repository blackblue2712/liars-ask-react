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

export const forgotPassword = (email) => {
    return fetch(`${process.env.REACT_APP_API_URL}/auth/forgot-password?email=${email}`, {
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
        return { message: "ERROR FORGOT PASSWORD" }
    });
}

export const resestPassword = (resetCode, pwd) => {
    return fetch(`${process.env.REACT_APP_API_URL}/auth/reset-password`, {
        method: "POST",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json"
        },
        body: JSON.stringify( {resetCode, pwd} )
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        return { message: "ERROR RESET PASSWORD" }
    });
}