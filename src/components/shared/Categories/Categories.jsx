import Category from "./Category";

const Categories = () => {
  const categories = ["headphones", "speakers", "earphones"];

  return (
    <section>
      <div className="container-center">
        <ul className="grid gap-16 tablet:grid-cols-3 tablet:gap-4 desktop:gap-8">
          {categories.map((category, index) => (
            <Category name={category} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
