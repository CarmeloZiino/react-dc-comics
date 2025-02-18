const Main = () => {
  return (
    <main className="container-fluid">
      <div id="strow-main" className="row bg-dark p-3">
        <article>
            <p className="text-light fs-2"> Content goes here </p>
        </article>

      </div>

      <div id="ndrow-main" className="row bg-primary p-3">
        <ul className=" d-flex justify-content-center gap-3">
          <li className="d-flex align-items-center gap-1">
            <img width={35} src="./src/assets/img/buy-comics-digital-comics.png" alt="" />
            <a id="main-list" className="fw-bold text-light text-decoration-none text-uppercase" href="">DIGITAL COMICS</a>
          </li>
          <li className="d-flex align-items-center gap-1">
            <img width={35} src="./src/assets/img/buy-comics-merchandise.png" alt="" />
            <a id="main-list" className="fw-bold text-light text-decoration-none text-uppercase" href="">DC MERCHANDISE</a>
          </li>
          <li className="d-flex align-items-center gap-1">
            <img width={35} src="./src/assets/img/buy-comics-subscriptions.png" alt="" />
            <a id="main-list" className="fw-bold text-light text-decoration-none text-uppercase" href="">SUBSCRIPTION</a>
          </li>
          <li className="d-flex align-items-center gap-1">
            <img width={35} src="./src/assets/img/buy-comics-shop-locator.png" alt="" />
            <a id="main-list" className="fw-bold text-light text-decoration-none text-uppercase" href="">COMIC SHOP LOCATION</a>
          </li>
          <li className="d-flex align-items-center gap-1">
            <img width={35} src="./src/assets/img/buy-dc-power-visa.svg" alt="" />
            <a id="main-list" className="fw-bold text-light text-decoration-none text-uppercase" href="">DC POWER VISA</a>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Main;
