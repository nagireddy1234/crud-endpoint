getEvents = async () => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://cors-anywhere.herokuapp.com/https://strive-school-testing-apis.herokuapp.com/api/product/"; // site that doesn’t send Access-Control-*
  var username ="user5";
  var password="9UVmQDaSPgxSuAds";
  var atob ={ 
    authenticated: true,
    user: "user"
  }
  var digest= btoa(username + ":" + password);
  var response = await fetch ( url, {
    headers: new Headers({
      "Authorization": `Basic ${digest} `
  })
})
  return response.json();
}

