async function CheckUserAuthorization(token) {
  // const IsLoggedin = localStorage.getItem("auth");
  const res = await fetch("http://localhost:5000/api/verifyuser", {
    headers: {
      authorization: `bearer ${token}`,
    },
  });
  return res.data;
}
export default CheckUserAuthorization;
