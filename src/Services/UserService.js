export const postModel = async (form) => {
    let url = "https://localhost:44368/api/models";
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(form), // Assumes data is in an object called form 
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            "Content-Type": "application/json"
        })
      });
  
      if (response.ok) {
        return true;
      } else {
        alert("Server returned: " + response.statusText);
      }
    } catch (err) {
      alert("Error: " + err);
    }
    return false;
  }