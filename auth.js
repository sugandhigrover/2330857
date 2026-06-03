const fetch = global.fetch;

async function getToken() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/auth",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "groversugandhi@gmail.com",
        name: "Sugandhi Grover",
        rollNo: "2330857",
        accessCode: "nwwsKx",
        clientID: "7718db2e-8b2d-4bbb-8bb5-3c4ea8f54023",
        clientSecret: "wuMzBPzNnfuCFaKj"
      })
    }
  );

  const data = await response.json();
  console.log(data);
}

getToken();