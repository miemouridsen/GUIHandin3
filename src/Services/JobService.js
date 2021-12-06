export const getJobs = async () => {
    let url = "https://localhost:44368/api/jobs";
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            "Content-Type": "application/json"
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        alert("Server returned: " + response.statusText);
      }
    } catch (err) {
      alert("Error: " + err);
    }
    return false;
  }

  export const postModelToJob = async (jobId, modelId) => {
    let url = "https://localhost:44368/api/jobs/" + jobId + "/model/" + modelId;
    try {
      let response = await fetch(url, {
        method: "POST", 
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