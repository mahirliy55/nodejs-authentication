var api = document.getElementById("api");

const fetchData = async () => {
  const response = await fetch("http://localhost:5000/");
  const data = await response.json();
  console.log("====================================");
  console.log(data);
  console.log("====================================");

    api.innerText = data.message

};

fetchData();
