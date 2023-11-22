import "./CatalogPage.scss";

type CatalogPageProps = {
  clicksCount: number;
};

export function CatalogPage(props: CatalogPageProps) {
  return (
    <section className="catalog-page">
      <div>CatalogPage works! o_O</div>
      <h1>Clicks count: {props.clicksCount}</h1>
      <button>CatalogPage press me</button>
    </section>
  );
}
