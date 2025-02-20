const NavBar = (props) => {
  const links = [
    { id: 1, text: "Characters", url: "#" },
    { id: 2, text: "Movies", url: "#" },
    { id: 3, text: "Tv", url: "#" },
    { id: 4, text: "Games", url: "#" },
    { id: 5, text: "Videos", url: "#" },
    { id: 6, text: "Fans", url: "#" },
    { id: 7, text: "News", url: "#" },
    { id: 8, text: "Shop", url: "#" },
  ];

  // const {id, text, url} = props;

  return (
    <ul className="d-flex flex-col gap-3 list-unstyled">
      {
        links.map((element) => {
          return (
            <li key={element.id}>
              <a
                className="fw-bold text-dark text-uppercase text-decoration-none"
                href={element.url}
              >
                {element.text}
              </a>
            </li>
          )
        }
       )
      }
    </ul>
  )
};

export default NavBar;
// <header className="container p-3">
//   <div className="row align-items-center justify-content-between">
//     <figure className="col-4">
//       <img width={50} src="./src/assets/img/dc-logo.png" alt="" />
//     </figure>

//     <nav className="col-8">
//       <ul className="d-flex flex-col gap-3 list-unstyled">
//         <li className="">
//           <a
//             className="fw-bold text-dark text-uppercase text-decoration-none"
//             href="#"
//           >
//             Characters
//           </a>
//         </li>
//         <li className="">
//           <a
//             className="fw-bold text-dark text-uppercase text-decoration-none"
//             href="#"
//           >
//             Movies
//           </a>
//         </li>
//         <li className="">
//           <a
//             className="fw-bold text-dark text-uppercase text-decoration-none"
//             href="#"
//           >
//             Tv
//           </a>
//         </li>
//         <li className="">
//           <a
//             className="fw-bold text-dark text-uppercase text-decoration-none"
//             href="#"
//           >
//             Games
//           </a>
//         </li>
//         <li className="">
//           <a
//             className="fw-bold text-dark text-uppercase text-decoration-none"
//             href="#"
//           >
//             Collectibles
//           </a>
//         </li>
//         <li className="">
//           <a
//             className="fw-bold text-dark text-uppercase text-decoration-none"
//             href="#"
//           >
//             videos
//           </a>
//         </li>
//         <li className="">
//           <a
//             className="fw-bold text-dark text-uppercase text-decoration-none"
//             href="#"
//           >
//             fans
//           </a>
//         </li>
//         <li className="">
//           <a
//             className="fw-bold text-dark text-uppercase text-decoration-none"
//             href="#"
//           >
//             news
//           </a>
//         </li>
//         <li className="">
//           <a
//             className="fw-bold text-dark text-uppercase text-decoration-none"
//             href="#"
//           >
//             shop
//           </a>
//         </li>
//       </ul>
//     </nav>
//   </div>
// </header>;
