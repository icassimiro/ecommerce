export const searchTitle = async (title) => {
  try {
    let url = `https://api.mercadolibre.com/sites/MLB/search?q=title/${title}`;
    const response = await fetch(url);
    return response.json;
  } catch (error) {
    console.log("error:", error);
  }
};
