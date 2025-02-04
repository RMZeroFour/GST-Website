import { ContactForm } from "./ContactForm.js";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
            Contact Us
          </h1>
          
          <p className="text-sm text-gray-600 mb-6 text-left">
            Please fill out the form below or reach out to us at
            {' '}
            <a
              className="underline text-red-500 hover:text-red-600"
              href="mailto:nibedita@gold-sterling.com"
            >
              nibedita@gold-sterling.com
            </a>
            .
          </p>
          
          <ContactForm />
        </div>

        <iframe
          allowFullScreen
          className="rounded-lg w-full h-full aspect-square border-red-500 border-t-4"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=28.542670,%2077.034740+(Gold%20Sterling%20Technologies)&t=k&z=19&ie=UTF8&iwloc=B&output=embed"
        />
      </section>
    </div>
  );
}
