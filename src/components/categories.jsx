import films from "../assets/movies_rnexgr.json";

const Categories = () => {
  return (
    <>
      {films.map((categorie) => (
        <div className="container" key={categorie.category}>
          <h2>{categorie.category}</h2>
          <div className="movies">
            {categorie.images.map((image, index) => (
              <img src={image} alt={`Image ${index}`} key={index} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Categories;
