import './Slider.css';

function Slider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQv3QgklHGfjwCVGAP4vEIlvBnT5geEm64Q&s" className="d-block w-100 height-400" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg" className="d-block w-100 height-400" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://techmatrix18.com/articles/imgs/1703121210_e-commerce.png" className="d-block w-100 height-400" alt="..." />
          </div> 
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
