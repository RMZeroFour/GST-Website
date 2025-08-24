import { NavLink } from 'react-router';
import CustomCarousel from '../components/CustomCarousel.jsx';
import ProductCard from '../components/ProductCard.jsx';
import carousel1 from '../assets/carousel/carousel_1.webp';
import carousel2 from '../assets/carousel/carousel_2.webp';
import oemLivserv from '../assets/oem/oem_livserv.webp';
import oemApollo from '../assets/oem/oem_apollo.webp';
import oemInaSolar from '../assets/oem/oem_inasolar.webp';
import oemLivfast from '../assets/oem/oem_livfast.webp';
import oemLivguard from '../assets/oem/oem_livguard.webp';
import productEvCharger from '../assets/products/product_evcharger.webp';
import productInvSq350VA from '../assets/products/product_invsq350va.webp';
import productInvSq900VA from '../assets/products/product_invsq900va.webp';
import productCharger15A from '../assets/products/product_charger15a.webp';
import productScc20A from '../assets/products/product_scc20a.webp';
import productDcDcConv from '../assets/products/product_dcdcconv.webp';

const carouselImages = [carousel1, carousel2];

const categories = [
  { name: 'EV Chargers', image: productEvCharger, link: '/products?category=ev-charger' },
  { name: 'Inverters', image: productInvSq350VA, link: '/products?category=inverter' },
  { name: 'Home UPS', image: productInvSq900VA, link: '/products?category=home-ups' },
  { name: 'Battery Chargers', image: productCharger15A, link: '/products?category=battery-charger' },
  { name: 'Solar Charge Controllers', image: productScc20A, link: '/products?category=solar-charge-controller' },
  { name: 'DC-DC Converters', image: productDcDcConv, link: '/products?category=dc-dc-converter' },
];

const oemPartners = [
  { name: 'LivServ', image: oemLivserv, link: '' },
  { name: 'Apollo', image: oemApollo, link: 'https://apollotw.com/home.html' },
  { name: 'INA Solar', image: oemInaSolar, link: 'https://insolationenergy.in/' },
  { name: 'LivFast', image: oemLivfast, link: 'https://www.livfast.in/' },
  { name: 'LivGuard', image: oemLivguard, link: 'https://www.livguard.com/' },
];

function HomeRoute() {
  return (
    <>
      {/* Main Carousel */}
      <CustomCarousel interval={4000} duration={1000} counts={{ desktop: 1, tablet: 1, mobile: 1 }}>
        {carouselImages.map((src, index) => (
          <div key={index} className="w-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </CustomCarousel>

      <div className='my-16'>
        {/* Hero Title */}
        <h1 className="text-center text-3xl sm:text-5xl font-bold mx-8 mb-8 text-gray-900 dark:text-white">
          Your Trusted Brand For Power Solutions
        </h1>

        {/* Our Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Our Products</h2>

          <div className="relative w-full mx-auto overflow-hidden">
            <CustomCarousel interval={3500} duration={1000} counts={{ desktop: 3, tablet: 2, mobile: 1 }}>
              {categories.map((product) => (
                <ProductCard key={product.name} title={product.name} image={product.image} link={product.link} />
              ))}
            </CustomCarousel>

          </div>
        </section>

        {/* OEM Partners */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Our OEM Partners</h2>

          <div className="mx-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {oemPartners.map((partner) => (
              <NavLink
                key={partner.name}
                to={partner.link}
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="h-20 object-contain rounded-md"
                />
              </NavLink>
            ))}
          </div>
        </section>

        {/* Enquire Now */}
        <section className="mx-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Enquire Now</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-900 dark:text-white">
            Get more info about our products and services by {' '}
            <NavLink
              to='/contact'
              className='text-lg hover:text-blue-700 dark:hover:text-blue-500'
            >
              reaching out
            </NavLink>
            .
          </p>
        </section>
      </div>
    </>
  );
}

export default HomeRoute;