export const addNewExpense = async (form) => {
    let url = "https://localhost:44368/api/Expenses";
    await fetch(url, {
        method: "POST",
        body: JSON.stringify(form), // Assumes data is in an object called form 
        credentials: 'include',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json"
        }
    })
    .catch(error => alert("Something bad happened: " + error));   
}