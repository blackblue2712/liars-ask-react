export const getNotifications = (uid, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/notify/get-own-notifications?uid=${uid}`, {
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
        return { message: "ERROR GET NOTIFICATION" };
    });
}