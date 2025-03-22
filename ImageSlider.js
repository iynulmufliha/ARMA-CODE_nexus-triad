import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../mgSlider.css';
const ImageSlider = () => {
  const images = [
    "https://i.pinimg.com/736x/47/97/6e/47976e2cd6ffa0e55be0b2089b5056ce.jpg",
    "https://i.pinimg.com/736x/59/e5/96/59e596bd81977ff8e6441bf1060a953e.jpg",
    "https://i.pinimg.com/736x/36/d9/28/36d928064bf0f84030d2124d34f65ff4.jpg",
    "https://i.pinimg.com/736x/1b/cc/95/1bcc9557737ba7fa688232fdcb2e034c.jpg",
    "https://i.pinimg.com/736x/60/f4/28/60f428084e2849f47a032b9a2a569542.jpg",
    "https://i.pinimg.com/736x/a6/45/ad/a645adee140a214edb9a244e17cf98ae.jpg",
    "https://i.pinimg.com/736x/87/aa/53/87aa53623df6961fece99bccb5385a21.jpg",
    "https://plus.unsplash.com/premium_photo-1681841703443-53de247ce32b?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?w=600&auto=format&fit=crop&q=60",
    "https://i.pinimg.com/736x/2a/98/a6/2a98a6a8a2eea85e643b164562d56aac.jpg",
    "https://i.pinimg.com/736x/16/40/61/164061317386ebf2f64e3325f54cb60d.jpg", "https://cdn.pixabay.com/photo/2020/02/25/15/46/parade-4879243_1280.jpg",
    "https://images.pexels.com/photos/7249341/pexels-photo-7249341.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8995823/pexels-photo-8995823.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://cdn.pixabay.com/photo/2019/07/14/22/14/running-4338238_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/20/17/catwalk-1840941_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/08/04/07/22/people-8168554_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/03/18/12/28/bonfire-7860562_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/07/14/22/14/running-4338238_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/06/25/beard-1867788_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/07/14/22/14/running-4338238_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/09/08/05/12/bridesmaid-9031152_1280.jpg"
  ];

  const repeatedImages = [...images, ...images, ...images]; // Ensure 30 images

  return (
    <div className="slider-wrapper">
      {[0, 1, 2].map((row) => (
        <div key={row} className="slider-container">
          <div className={`slider ${row % 2 === 1 ? "reverse" : ""}`}>
            {repeatedImages.slice(row * 10, row * 10 + 10).map((src, index) => (
              <img key={index} src={src} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
