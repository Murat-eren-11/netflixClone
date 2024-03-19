const Categorie = ({ category }) => {
  return (
    <div className="container" key={category.category}>
      <p className="title">{category.category}</p>
      <div className="movies">
        {category.images.map((image, index) => (
          <img src={image} alt={`Image ${index}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Categorie;
