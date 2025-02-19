import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="container p-3">
      <div className="row align-items-center justify-content-between">
        <figure className="col-4">
          <img width={50} src="./src/assets/img/dc-logo.png" alt="" />
        </figure>

        <nav className="col-8">
            
          <NavBar/>
          
        </nav>
      </div>
    </header>
  );
};
export default Header