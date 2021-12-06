export const addNewExpense = async (form) => {
    let url = "https://localhost:44368/api/expenses";
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(form), // Assumes data is in an object called form 
        credentials: 'include',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json"
        }
    })
    .then(responseJSON => {
        this.response = responseJSON;
    })
    .catch(error => alert("Something bad happened: " + error));   
}