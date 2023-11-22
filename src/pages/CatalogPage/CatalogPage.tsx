import "./CatalogPage.scss";

type CatalogPageProps = {
  clicksCount: number;
};

export function CatalogPage(props: CatalogPageProps) {
  return (
    <section className="catalog-page">
      <div className="movies-grid">
        movie 1 <br />
        movie 2 <br />
        movie 3 <br />
      </div>
      <h1>Clicks count: {props.clicksCount}</h1>
      <button>CatalogPage press me</button>
    </section>
  );
}
