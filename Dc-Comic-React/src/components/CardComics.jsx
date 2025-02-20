import comics from "../data/comics";

const CardComics = () => {
  return (
    <div id="strow-main" className="row bg-dark p-3">
      {comics.map((element) => (
        <div key={element.id} className="col-md-3 mb-4">
          <div id="cardComic" className="card text-light h-100 shadow-lg border-0">
            <div
              className="card-img-top d-flex align-items-center justify-content-center overflow-hidden"
              style={{ height: "200px" }}
            >
              <img
                src={element.thumb}
                className="w-100 h-100 object-fit-cover"
                alt={element.title}
              />
            </div>
            <div className="d-flex flex-column">
              <p className="card-title text-center">{element.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComics;
