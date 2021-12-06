import jwt_decode from "jwt-decode";

export const login = async (form) => {
  let url = "https://localhost:44368/api/account/login";
  try {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(form), // Assumes data is in an object called form 
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });

    if (response.ok) {
      let token = await response.json();
      localStorage.setItem("token", token.jwt);
      return true;
    } else {
      alert("Server returned: " + response.statusText);
    }
  } catch (err) {
    alert("Error: " + err);
  }
  return false;
}

function changeKeyName(object, oldKey, newKey) {
  Object.defineProperty(
    object,
    newKey,
    Object.getOwnPropertyDescriptor(object, oldKey)
  );
  delete object[oldKey];
}

export const getUser = () => {
  const user = jwt_decode(localStorage.getItem("token"));
  changeKeyName(
    user,
    "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
    "emailaddress"
  );
  changeKeyName(
    user,
    "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    "role"
  );
  return user;
}