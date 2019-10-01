
export const postAnnouncement = (announInfo, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/announcements/new`, {
        method: "POST",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(announInfo)
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        console.log("ERROR POST ANNOUNCEMENT");
    })
}