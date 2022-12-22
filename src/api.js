export const searchTitle = async (results) => {
  try {
    let url = `https://api.mercadolibre.com/sites/MLB/search?q=${results}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("error:", error);
  }
};

export const getResults = async (limit = 11, offset = 0) => {
  try {
    let url = `https://api.mercadolibre.com/sites/MLB/search?q=results?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("error:", error);
  }
};
