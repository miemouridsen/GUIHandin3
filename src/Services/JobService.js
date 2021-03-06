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

export const getJobsForModel = async (id) => {
  let url = "https://localhost:44368/api/models/" + id + "/jobs";
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

export const getJob = async (id) => {
  let url = "https://localhost:44368/api/jobs/" + id;
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

export const removeModelToJob = async (jobId, modelId) => {
  let url = "https://localhost:44368/api/jobs/" + jobId + "/model/" + modelId;
  try {
    let response = await fetch(url, {
      method: "DELETE",
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

export const postJob = async (form) => {
  let url = "https://localhost:44368/api/jobs";
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