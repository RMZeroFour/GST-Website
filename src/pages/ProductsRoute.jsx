import { useSearchParams } from 'react-router';
import ProductCard from '../components/ProductCard.jsx';
import productEvCharger from '../assets/products/product_evcharger.webp';
import productInvSine from '../assets/products/product_evcharger.webp';//'../assets/products/product_invsine.webp';
import productInvSq350VA from '../assets/products/product_invsq350va.webp';
import productInvSqSolar from '../assets/products/product_invsq350va.webp';//'../assets/products/product_invsqsolar.webp';
import productCharger15A from '../assets/products/product_charger15a.webp';
import productCharger20A from '../assets/products/product_charger15a.webp';//'../assets/products/product_charger20a.webp';
import productChargerDouble from '../assets/products/product_charger15a.webp';//'../assets/products/product_chargerdouble.webp';
import productScc6A from '../assets/products/product_scc20a.webp';//'../assets/products/product_scc6a.webp';
import productScc10A from '../assets/products/product_scc20a.webp';//'../assets/products/product_scc10a.webp';
import productScc20A from '../assets/products/product_scc20a.webp';
import productDcDc from '../assets/products/product_dcdcconv.webp';
import productDcDcUsb from '../assets/products/product_dcdcconv.webp';//'../assets/products/product_dcdcusb.webp';

const allCategories = [
  { id: '', name: 'All Products' },
  { id: 'ev-charger', name: 'EV Chargers' },
  { id: 'inverter', name: 'Inverters' },
  { id: 'home-ups', name: 'Home UPS' },
  { id: 'battery-charger', name: 'Battery Chargers' },
  { id: 'solar-charge-controller', name: 'Solar Charge Controllers' },
  { id: 'dc-dc-converter', name: 'DC-DC Converters' },
];

const allProducts = [
  { name: '6A Solar Charge Controller', category: 'solar-charge-controller', image: productScc6A, link: '/products/solar-charge-controller-6a' },
  { name: '10A Solar Charge Controller', category: 'solar-charge-controller', image: productScc10A, link: '/products/solar-charge-controller-10a' },
  { name: '20A Solar Charge Controller', category: 'solar-charge-controller', image: productScc20A, link: '/products/solar-charge-controller-20a' },
  { name: 'Sine Wave Inverter', category: 'inverter', image: productInvSine, link: '/products/sine-wave-inverter' },
  { name: 'Square Wave Inverter', category: 'inverter', image: productInvSq350VA, link: '/products/square-wave-inverter' },
  { name: '350VA Square Wave Inverter', category: 'inverter', image: productInvSq350VA, link: '/products/square-wave-inverter-350va' },
  { name: '350VA Square Wave Inverter (Solar)', category: 'inverter', image: productInvSqSolar, link: '/products/square-wave-inverter-350va-solar' },
  { name: 'DC-DC Converter', category: 'dc-dc-converter', image: productDcDc, link: '/products/dc-dc-converter' },
  { name: 'DC-DC Converter (USB)', category: 'dc-dc-converter', image: productDcDcUsb, link: '/products/dc-dc-converter-usb' },
  { name: 'Electric Vehicle Charger', category: 'ev-charger', image: productEvCharger, link: '/products/electric-vehicle-charger' },
  { name: '15A Single Battery Charger', category: 'battery-charger', image: productCharger15A, link: '/products/battery-charger-15a' },
  { name: '20A Single Battery Charger', category: 'battery-charger', image: productCharger20A, link: '/products/battery-charger-20a' },
  { name: '15A Intelligent Double Battery Charger', category: 'battery-charger', image: productChargerDouble, link: '/products/double-battery-charger-15a' },
];

function ProductsRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';

  function setCategory(c) {
    setSearchParams({ category: c });
  }

  function getProductsByCategoryId(id) {
    return id === '' ? allProducts : allProducts.filter(p => p.category === id);
  }
  function getCategoryByCategoryId(id) {
    return allCategories.find(c => c.id === id);
  }

  return (
    <div className='my-8 px-4'>
      <h1 className="text-center text-xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Our Product Range
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            {allCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({getProductsByCategoryId(c.id).length})
              </option>
            ))}
          </select>
        </div>

        {/* Sidebar Categories */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5">
          <ul className="space-y-2">
            {allCategories.map(c => (
              <li
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`cursor-pointer py-2 px-3 rounded-sm transition-colors ${category === c.id
                  ? 'text-blue-700 dark:text-blue-500'
                  : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500'}`}
              >
                {c.name} ({getProductsByCategoryId(c.id).length})
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <main className="md:w-3/4 lg:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getProductsByCategoryId(category).map(p => (
              <ProductCard
                key={p.name}
                title={p.name} image={p.image} link={p.link}
                subtitle={getCategoryByCategoryId(p.category).name} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductsRoute;
