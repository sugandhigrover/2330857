const fetch = global.fetch;

async function register() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "groversugandhi@gmail.com",
        name: "Sugandhi Grover",
        mobileNo: "7404962182",
        githubUsername: "sugandhigrover",
        rollNo: "2330857",
        accessCode: "nwwsKx"
      })
    }
  );

  const data = await response.json();
  console.log(data);
}

register();