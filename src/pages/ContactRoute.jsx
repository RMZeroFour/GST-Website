import { useSearchParams } from 'react-router';
import MapCard from '../components/MapCard';
import { useRef } from 'react';

const allTopics = [
  { label: 'General Enquiry', value: '' },
  { label: 'Inverters', value: 'inverter' },
  { label: 'Solar Charge Controllers', value: 'solar-charge-controller' },
  { label: 'DC-DC Converters', value: 'dc-dc-converter' },
  { label: 'Electric Vehicle Chargers', value: 'ev-charger' },
  { label: 'Battery Chargers', value: 'battery-charger' },
];

const formEndpoint = 'https://docs.google.com/forms/d/e/1FAIpQLSeiYhrpx5b2ZDNZ7VL7c04_Wi4T7_yx9-Lr2eZXIQaPoeyayQ/formResponse';
const nameField = 'entry.1783811293';
const phoneField = 'entry.179869777';
const emailField = 'entry.1462163054';
const topicField = 'entry.1097304269';
const messageField = 'entry.1818477730';

function ContactRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic') || '';

  const formRef = useRef();

  function setTopic(t) {
    setSearchParams({ topic: t });
  }

  function handleSubmit() {
    formRef.current.reset();
  };

  return (
    <div className="my-8 px-4 max-w-7xl mx-auto">
      <h1 className="text-center text-xl sm:text-3xl font-bold mb-10 text-gray-900 dark:text-white">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <section id="contact-form" className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Send Us a Message
          </h2>

          <form
            ref={formRef}
            action={formEndpoint}
            method='POST'
            target="hidden_iframe"
            className="space-y-5">

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name={nameField}
                required
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name={phoneField}
                required
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name={emailField}
                required
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Topic
              </label>
              <select
                id="topic"
                name={topicField}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                {allTopics.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name={messageField}
                rows="6"
                required
                className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors cursor-pointer"
            >
              Submit
            </button>

            {/* Hidden iframe to prevent redirection */}
            <iframe name="hidden_iframe" className="hidden" onLoad={handleSubmit} />
          </form>
        </section>

        {/* Contact Info */}
        <section id="contact-info" className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Contact Information
          </h2>

          <div className="space-y-3 text-gray-800 dark:text-gray-300">
            <p>
              <strong>Phone:</strong> <a href='tel:+91-8383948982'>+91-8383948982</a>
            </p>
            <p>
              <strong>Email:</strong> <a href='mailto:info@gold-sterling.com'>info@gold-sterling.com</a>
            </p>
            <p>
              <strong>Address:</strong> Gold Sterling Technologies, Khasra No. 252, Plot no. 51, Village Bamnoli, Sector-28, Dwarka, New Delhi, India - 110077
            </p>

            <div className="w-full h-64 md:h-100 mt-8">
              <MapCard />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactRoute;
