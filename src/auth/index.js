export const signup = user => {

  return fetch(`http://localhost:8000/user/${user.email}`, {
    method: "POST",
    body: JSON.stringify(user)
  })
};

export const signin = user => {
  return fetch(`http://localhost:8000/user/${user.email}`, {
    method: "GET"
  })
  .then(response => {
    console.log(response.data);
    if(response.password===user.password){
      return true;
    }else{
      return false
    }
  })
    .catch(err => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("email", JSON.stringify(data));
    next();
  }
};

export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("email");
    next();

    return fetch(`${API}/signout`, {
      method: "GET"
    })
      .then(response => console.log("signout success"))
      .catch(err => console.log(err));
  }
};

export const isAutheticated = () => {
  if(localStorage.getItem("email") === null){

    return false;
  }else{
    return true;
  }
}; 
