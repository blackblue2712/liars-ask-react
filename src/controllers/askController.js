
export const postAsk = (askInfo, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/asks/new`, {
        method: "POST",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(askInfo)
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        return {message: "ERROR POST ASK"}
    });
}