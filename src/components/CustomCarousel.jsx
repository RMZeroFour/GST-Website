import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CustomCarousel({ children }) {
  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        swipeable={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={onClickHandler}
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
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={onClickHandler}
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
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          )
        }
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
