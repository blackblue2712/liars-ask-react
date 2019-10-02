
export const  getAnnouncements = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/announcements`, {
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
        console.log("ERROR GET ANNOUNCEMENTS");
    })
}

export const getSingleAnnouncement = (id) => {
    return fetch(`${process.env.REACT_APP_API_URL}/announcements/${id}`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
        }
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        console.log("ERROR GET SINGLE ACM");
    })
}