
import { Carousel } from 'flowbite-react';

export default function Slider() {
  return (
    <div id='carousel-container' className="h-74 sm:h-64 xl:h-80 2xl:h-96 rounded-none">
      <Carousel leftControl="left" rightControl="right" id='carousel-content'>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}
