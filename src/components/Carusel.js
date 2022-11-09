import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://gepig.com/game_cover_bg_1190w/7338.jpg",
    altText: "Call of Duty: Modern Warfare II",
    caption: "Скоро",
    key: 1,
  },
  {
    src: "https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_god_of_war_ragnarok_02_2560x1080.jpg&height=506&sharpen",
    altText: "God Of War Ragnarek",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_assassins_creed_valhalla_02_2560x1080.jpg&height=506&sharpen",
    altText: "Assassin's Creed Вальгалла",
    caption: "Slide 3",
    key: 3,
  },
];

function Carusel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.key}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          className="pict"
          src={item.src}
          alt={item.altText}
          width="100%"
          height="100%"
        />

        <CarouselCaption
          key={item.key}
          // className="text-danger"
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="carusel-block">
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Carusel;
