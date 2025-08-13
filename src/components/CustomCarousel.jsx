import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CustomLeftArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 dark:bg-gray-900/20 dark:hover:bg-gray-900/40 rounded-md cursor-pointer shadow"
      aria-label="Previous Slide"
    >
      <svg
        className="w-4 h-4 text-gray-900 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 6 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 1 1 5l4 4" />
      </svg>
    </button>
  );
}

function CustomRightArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/40 dark:bg-gray-900/20 dark:hover:bg-gray-900/40 rounded-md cursor-pointer shadow"
      aria-label="Next Slide"
    >
      <svg
        className="w-4 h-4 text-gray-900 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 6 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4" />
      </svg>
    </button>
  );
}

function CustomCarousel({ interval, duration, count, children }) {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: count,
    },
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        pauseOnHover={false}
        arrows={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        autoPlaySpeed={interval}
        transitionDuration={duration}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {children}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
