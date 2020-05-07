export const onAdvanceSearch = queryObj => {
    return fetch(`${process.env.REACT_APP_API_URL}/search${queryObj}`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json"
        }
    })
    .then( res => {
        return res.json();
    })
    .catch( error => {
        console.log("ERROR ADVANCE SEARCH", error);
    })
}