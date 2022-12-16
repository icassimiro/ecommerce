import { useEffect, useState } from "react";
import axios from "axios";

const Section = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.mercadolibre.com/sites/MLB/categories"
      );
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="allcategories">
      {categories.map((categorie) => (
        <div className="categories" key={categorie.id}>
          <h2>{categorie.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Section;
