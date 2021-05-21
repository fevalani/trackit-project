import axios from "axios";

export default function DeleteTask(user, item, setLoading) {
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const request = axios.delete(
    `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${item}`,
    config
  );

  request.then(() => {
    setLoading(true);
  });
  request.catch(() => {
    console.log("deu ruim");
  });
}
