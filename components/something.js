const url = "https://moviesdatabase.p.rapidapi.com/titles";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "940bb49d46mshf1dd8e84b90e73bp1717d1jsnea4842fa51ac",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const getAllMovies = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getAllMovies();
