const Header = () => {
  return (
    <header className="container p-3">
      <div className="row align-items-center justify-content-between">
        <figure className="col-6">
          <img width={50} src="./src/assets/img/dc-logo.png" alt="" />
        </figure>

        <nav className="col-6">
          <ul className="d-flex flex-col gap-4 list-unstyled">
            <li className="">
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href="#"
              >
                Characters
              </a>
            </li>
            <li className="">
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href="#"
              >
                Movies
              </a>
            </li>
            <li className="">
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href="#"
              >
                Tv
              </a>
            </li>
            <li className="">
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href="#"
              >
                Games
              </a>
            </li>
            <li className="">
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href="#"
              >
                Collectibles
              </a>
            </li>
            <li className="">
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href="#"
              >
                videos
              </a>
            </li>
            <li className="">
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href="#"
              >
                fans
              </a>
            </li>
            <li className="">
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href="#"
              >
                news
              </a>
            </li>
            <li className="">
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href="#"
              >
                shop
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header