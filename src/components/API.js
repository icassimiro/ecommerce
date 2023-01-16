export const searchTitle = async (results, limit = 50, offset = 0) => {
  try {
    let url = `https://api.mercadolibre.com/sites/MLB/search?q=${results}&limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("error:", error);
  }
};
