export const postRequestUpgrade = (data, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/users/upgrade-account`, {
        method: "POST",
        headers: {
            Accept: "Application/json",
            Authorization: `Bearer ${token}`
        },
        body: data
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        console.log("POST REQUEST UPGRADE ACCOUNT");
    })
}

export const getRequestUpgradeToSpecialAccount = (token) => {   
    return fetch(`${process.env.REACT_APP_API_URL}/request/upgrade-account-to-special`, {
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
        console.log("GET REQUEST UPGRADE TO SPECIAL ACCOUNT");
    })
}

export const postAcceptRequestUpgradeToSpecialAccount = (data, token) => {
    console.log(`${process.env.REACT_APP_API_URL}/request/upgrade-account-to-special/accept/${data.rid}`)
    return fetch(`${process.env.REACT_APP_API_URL}/request/upgrade-account-to-special/accept/${data.rid}`, {
        method: "POST",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        console.log("POST ACCEPT REQUEST UPGRADE TO SPECIAL ACCOUNT");
    })
}

export const postRejectRequestUpgradeToSpecialAccount = (data, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/request/upgrade-account-to-special/reject/${data.rid}`, {
        method: "POST",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        console.log("POST REJECT REQUEST UPGRADE TO SPECIAL ACCOUNT");
    })
}

export const getVerifyRequestUpgradeToSpecialAccount = (vfc) => {
    return fetch(`${process.env.REACT_APP_API_URL}/request/upgrade-account-to-special/verify?vfc=${vfc}`, {
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
        console.log("GET VERIFY REQUEST UPGRADE TO SPECIAL ACCOUNT");
    });
}