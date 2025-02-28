import React from 'react';

const PricingCard = ({ title, price, people, features, isPopular }) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${isPopular ? 'border-2 border-indigo-500 relative transform hover:-translate-y-1' : 'transform hover:-translate-y-1'}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-4xl font-extrabold text-indigo-600">RM{price}</span>
          <span className="text-gray-500 ml-2">per hour</span>
        </div>
        <p className="text-gray-600 mb-6">
          For {people} {people > 1 ? 'people' : 'person'}
        </p>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full py-3 px-4 rounded-lg font-semibold ${isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-indigo-600 hover:bg-gray-200'} transition-colors duration-300`}>
          Book Now
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Solo",
      price: 75,
      people: 1,
      features: [
        "Full gym access",
        "All equipment included",
        "Personalized music control",
        "Flexible scheduling",
        "24/7 availability"
      ],
      isPopular: false
    },
    {
      title: "Duo",
      price: 120,
      people: 2,
      features: [
        "Everything in Solo",
        "Split cost with a friend",
        "Train with a partner",
        "Partner workouts possible",
        "Better value per person (RM60/person)"
      ],
      isPopular: true
    },
    {
      title: "Trio",
      price: 150,
      people: 3,
      features: [
        "Everything in Duo",
        "Best value per person",
        "Group motivation",
        "Three-person workouts",
        "Only RM50 per person"
      ],
      isPopular: false
    }
  ];

  return (
    <section id = "pricing" className="py-16 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-3">
            FLEXIBLE PRICING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Gym Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Select the package that works best for you. All options include private access to our premium facility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <PricingCard 
              key={index}
              title={option.title}
              price={option.price}
              people={option.people}
              features={option.features}
              isPopular={option.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-indigo-50 rounded-lg shadow-inner text-center">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Need a custom package?</h3>
          <p className="text-gray-600 mb-4">For larger groups or extended bookings, contact us directly for special rates.</p>
          <a href="#contact" className="inline-block text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300">
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;