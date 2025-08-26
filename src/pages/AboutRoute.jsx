import aboutCEO from '../assets/about/about_ceo.webp';
import aboutFounder from '../assets/about/about_founder.webp';

function AboutRoute() {
  return (
    <div className="my-8 px-4 max-w-7xl mx-auto">
      <h1 className="text-center text-xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        About Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* About the CEO */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">The CEO</h2>

          <img
            src={aboutCEO}
            alt="Dr. Pratik Mukherjee"
            className="w-48 h-48 object-cover rounded-full shadow-md float-right ml-6 mb-4"
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The principal architect, <strong>Dr. Pratik Mukherjee</strong>, is a professional engineer in the field of power electronics for 30+ years. He served 14 years as Vice President of R&D at Luminous Power Technologies Pvt. Ltd., where he created the <strong>ECO WATT</strong> series (bridge-based square wave), the <strong>ECO VOLT</strong> series (sine wave), and <strong>HKVA (MOSFET & IGBT based)</strong> inverters—products that continue to lead Indian and international markets.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Post that, Dr. Mukherjee guided the development of two more renowned brands—<strong>LivGuard Energy</strong> and <strong>LivFast Inverters</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            A distinguished figure with over 25 years of industry experience, Dr. Mukherjee holds a Ph.D. in electronics and has received numerous awards for his groundbreaking work in R&D across multinational corporations based in NCR.
          </p>
        </section>


        {/* About the Founder */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">The Founder</h2>

          <img
            src={aboutFounder}
            alt="Mrs. Nibedita Mukherjee"
            className="w-48 h-48 object-cover rounded-full shadow-md float-right ml-6 mb-4"
          />

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Mrs. Nibedita Mukherjee</strong>, an independent MSME entrepreneur since 2019, has been active in the industry since 2016. Known for her effective customer interactions and commitment to delivering top-notch solutions, she has successfully closed numerous business deals and continues to ensure exceptional client satisfaction.
          </p>
        </section>

        {/* About the Company */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded shadow md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">The Company</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Our company comprises a dedicated team of over 15 full-time employees, including 3 full-time engineers and 2-3 Graduate Engineering Trainees (GETs) engaged in continuous R&D efforts. In addition, we collaborate with 4-5 specialized consultants to support innovation. Over the last three years, we have successfully developed and delivered five inverter models to OEMs across India and international markets. Our current partnerships span more than seven OEMs, and we maintain a healthy annual turnover of ₹2-3 crores. Our product portfolio includes a wide range of energy solutions such as inverter systems, solar charge controllers, battery revival chargers, and electric vehicle chargers—developed and refined over the past five years.
          </p>
        </section>

      </div>
    </div>
  );
}

export default AboutRoute;
