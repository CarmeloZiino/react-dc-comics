const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container-fluid">
        <div className="row p-4">
          <ul className="col-2">
            <li>
              <a className="text-light fw-bold" href="">
                DC COMICS
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Characters
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Comics
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Tv
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Games
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Videos
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                New
              </a>
            </li>

            <li>
              <a className="text-light fw-bold" href="">
                SHOP
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Shop DC
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Shop DC Collectibles
              </a>
            </li>
          </ul>

          <ul className="col-2">
            <li>
              <a className="text-light fw-bold" href="">
                DC
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Terms Of Use
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Privacy policy (New)
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Ad Choices
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Advertising
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Jobs
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Subscriptions
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Talent Workshop
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                CPSC Certificates
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Ratings
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Shop Help
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                Contact US
              </a>
            </li>
          </ul>

          <ul className="col-2">
            <li>
              <a className="text-light fw-bold" href="">
                SITES
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                DC
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                MAD Magazine
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                DC Kids
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                DC Univers
              </a>
            </li>
            <li>
              <a className="text-secondary" href="">
                DC Power Visa
              </a>
            </li>
          </ul>

          <div className="col-6 dc-logo-strabico"></div>
        </div>

        <div className="row p-4 bg-dark">
          <div className="col-6">
            <button type="button" class=" text-light btn btn-outline-primary">
              SIGN-UP NOW
            </button>
          </div>

          <div className="col-6">
            <ul className="row">
              <li className="col-4">
                <a className="text-primary" href="">
                  FOLLOW US
                </a>
              </li>
              <li className="col-1">
                <img
                  width={20}
                  src="./src/assets/img/footer-facebook.png"
                  alt=""
                />
              </li>

              <li className="col-1">
                <img
                  width={20}
                  src="./src/assets/img/footer-periscope.png"
                  alt=""
                />
              </li>

              <li className="col-1">
                <img
                  width={20}
                  src="./src/assets/img/footer-pinterest.png"
                  alt=""
                />
              </li>

              <li className="col-1">
                <img
                  width={20}
                  src="./src/assets/img/footer-twitter.png"
                  alt=""
                />
              </li>

              <li className="col-1">
                <img
                  width={20}
                  src="./src/assets/img/footer-youtube.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
