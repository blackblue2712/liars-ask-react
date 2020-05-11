
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

export const putEditAnnouncement = (announInfo, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/announcements/edit/${announInfo.id}`, {
        method: "PUT",
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

export const deleteAcm = (id, token) => {
    return fetch(`${process.env.REACT_APP_API_URL}/announcements/delete/${id}`, {
        method: "DELETE",
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
        console.log("ERROR DELETE ANNOUNCEMENT");
    })
}

export const  getAnnouncements = (userId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/announcements/your-acm/${userId}`, {
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

export const  getAllAnnouncements = () => {
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

export const getSingleAnnouncement = (id, userId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/announcements/${id}?uid=${userId}`, {
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