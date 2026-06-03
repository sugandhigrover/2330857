const fetch = global.fetch;

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJncm92ZXJzdWdhbmRoaUBnbWFpbC5jb20iLCJleHAiOjE3ODA0Nzk5NzcsImlhdCI6MTc4MDQ3OTA3NywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNmMjRhY2Q5LTE2NDEtNDdjMy1hZTVlLTJhODlhNGM0MzE5MSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InN1Z2FuZGhpIGdyb3ZlciIsInN1YiI6Ijc3MThkYjJlLThiMmQtNGJiYi04YmI1LTNjNGVhOGY1NDAyMyJ9LCJlbWFpbCI6Imdyb3ZlcnN1Z2FuZGhpQGdtYWlsLmNvbSIsIm5hbWUiOiJzdWdhbmRoaSBncm92ZXIiLCJyb2xsTm8iOiIyMzMwODU3IiwiYWNjZXNzQ29kZSI6Im53d3NLeCIsImNsaWVudElEIjoiNzcxOGRiMmUtOGIyZC00YmJiLThiYjUtM2M0ZWE4ZjU0MDIzIiwiY2xpZW50U2VjcmV0Ijoid3VNekJQek5uZnVDRmFLaiJ9.fa5yvApSeTiqWldLe3ELzc2oA8PyklvxeyxP7zy_2dM";

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

async function getTopNotifications() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    }
  );

  const data = await response.json();

  const top10 = data.notifications
    .sort((a, b) => {
      const weightDiff =
        weights[b.Type] - weights[a.Type];

      if (weightDiff !== 0) return weightDiff;

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    })
    .slice(0, 10);

  console.log(top10);
}

getTopNotifications();