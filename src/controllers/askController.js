
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

export const getQuestions = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/asks/questions`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json"
        },
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        return {message: "ERROR GET QUESTIONS"}
    });
}

export const getSingleQuestion = (id) => {
    return fetch(`${process.env.REACT_APP_API_URL}/asks/questions/${id}`, {
        method: "GET",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json"
        },
    })
    .then( res => {
        return res.json();
    })
    .catch( err => {
        return {message: "ERROR GET SINGLE QUESTION"}
    });
}