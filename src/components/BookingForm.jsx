import React, { useState } from 'react';

const BookingForm = ({ onBookingComplete }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('solo');
  const [people, setPeople] = useState(1);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  // Generate available time slots
  const timeSlots = [
    '07:00 - 08:00', '08:30 - 09:30', '10:00 - 11:00', '11:30 - 12:30',
    '13:00 - 14:00', '14:30 - 15:30', '16:00 - 17:00', '17:30 - 18:30',
    '19:00 - 20:00', '20:30 - 21:30', '22:00 - 23:00'
  ];

  // Calculate pricing based on package
  const getPricing = () => {
    switch (selectedPackage) {
      case 'solo':
        return { perPerson: 75, total: 75 };
      case 'duo':
        return { perPerson: 60, total: 120 };
      case 'trio':
        return { perPerson: 50, total: 150 };
      default:
        return { perPerson: 0, total: 0 };
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handlePackageChange = (e) => {
    const pkg = e.target.value;
    setSelectedPackage(pkg);
    
    // Set default number of people based on package
    switch (pkg) {
      case 'solo':
        setPeople(1);
        break;
      case 'duo':
        setPeople(2);
        break;
      case 'trio':
        setPeople(3);
        break;
      default:
        setPeople(1);
    }
  };

  const handlePeopleChange = (e) => {
    setPeople(parseInt(e.target.value));
  };

  const handleNotesChange = (e) => {
    setAdditionalNotes(e.target.value);
  };

  const nextStep = () => {
    if (step === 1 && (!selectedDate || !selectedTime)) {
      setError('Please select both date and time');
      return;
    }
    
    setError('');
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // In a real application, you would send this data to your API
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      // Create booking confirmation object
      const bookingData = {
        date: selectedDate,
        time: selectedTime,
        package: selectedPackage,
        people: people,
        pricing: getPricing(),
        notes: additionalNotes,
        status: 'Confirmed',
        bookingId: 'BK' + Math.floor(Math.random() * 10000)
      };
      
      console.log('Booking submitted:', bookingData);
      
      // Call the onBookingComplete callback with the booking data
      onBookingComplete(bookingData);
    } catch (err) {
      setError('Failed to complete booking. Please try again.');
      console.error('Booking error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Get min date (tomorrow)
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Calculate price based on selected package
  const pricing = getPricing();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 max-w-3xl mx-auto">
      <div className="bg-indigo-600 px-6 py-4">
        <h2 className="text-white text-xl font-bold">Book Your Private Gym Session</h2>
      </div>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 m-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="p-6">
        {/* Step 1: Select Date & Time */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Date & Time</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={getTomorrowDate()}
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  Choose your preferred date and time for your private gym session. All bookings are subject to availability.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Next
              </button>
            </div>
          </div>
        )}
        
        {/* Step 2: Select Package */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Package</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className={`border rounded-lg p-4 cursor-pointer ${selectedPackage === 'solo' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                     onClick={() => { setSelectedPackage('solo'); setPeople(1); }}
                >
                  <input
                    type="radio"
                    id="package-solo"
                    name="package"
                    value="solo"
                    checked={selectedPackage === 'solo'}
                    onChange={handlePackageChange}
                    className="sr-only"
                  />
                  <label htmlFor="package-solo" className="cursor-pointer block">
                    <div className="font-semibold text-lg mb-1">Solo</div>
                    <div className="text-2xl font-bold text-indigo-600 mb-2">RM 75</div>
                    <div className="text-sm text-gray-600">Private session for 1 person</div>
                  </label>
                </div>
                
                <div className={`border rounded-lg p-4 cursor-pointer ${selectedPackage === 'duo' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                     onClick={() => { setSelectedPackage('duo'); setPeople(2); }}
                >
                  <input
                    type="radio"
                    id="package-duo"
                    name="package"
                    value="duo"
                    checked={selectedPackage === 'duo'}
                    onChange={handlePackageChange}
                    className="sr-only"
                  />
                  <label htmlFor="package-duo" className="cursor-pointer block">
                    <div className="font-semibold text-lg mb-1">Duo</div>
                    <div className="text-2xl font-bold text-indigo-600 mb-2">RM 120</div>
                    <div className="text-sm text-gray-600">Bring a friend (RM 60/person)</div>
                  </label>
                </div>
                
                <div className={`border rounded-lg p-4 cursor-pointer ${selectedPackage === 'trio' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                     onClick={() => { setSelectedPackage('trio'); setPeople(3); }}
                >
                  <input
                    type="radio"
                    id="package-trio"
                    name="package"
                    value="trio"
                    checked={selectedPackage === 'trio'}
                    onChange={handlePackageChange}
                    className="sr-only"
                  />
                  <label htmlFor="package-trio" className="cursor-pointer block">
                    <div className="font-semibold text-lg mb-1">Trio</div>
                    <div className="text-2xl font-bold text-indigo-600 mb-2">RM 150</div>
                    <div className="text-sm text-gray-600">Group of 3 (RM 50/person)</div>
                  </label>
                </div>
              </div>
              
              {(selectedPackage === 'duo' || selectedPackage === 'trio') && (
                <div className="mt-4">
                  <label htmlFor="people" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of People
                  </label>
                  <select
                    id="people"
                    name="people"
                    value={people}
                    onChange={handlePeopleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    {selectedPackage === 'duo' ? (
                      <>
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                      </>
                    ) : (
                      <>
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                      </>
                    )}
                  </select>
                  <p className="mt-1 text-sm text-gray-500">
                    Select the number of people who will be attending. If you're booking for multiple people but coming alone, we'll keep the full session reserved for your group.
                  </p>
                </div>
              )}
              
              <div className="mt-6">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  value={additionalNotes}
                  onChange={handleNotesChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Any special requests or requirements?"
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-300 transition-colors duration-300"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              >
                Review Booking
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Review and Confirm */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Your Booking</h3>
              
              <div className="bg-gray-50 rounded-md p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Date & Time</h4>
                    <p className="font-medium">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    <p className="font-medium">{selectedTime}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Package</h4>
                    <p className="font-medium capitalize">{selectedPackage} Package</p>
                    <p className="text-sm text-gray-600">{people} {people > 1 ? 'people' : 'person'}</p>
                  </div>
                </div>
                
                {additionalNotes && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-500">Additional Notes</h4>
                    <p className="text-sm text-gray-600">{additionalNotes}</p>
                  </div>
                )}
              </div>
              
              <div className="bg-indigo-50 rounded-md p-4 border border-indigo-100">
                <h4 className="font-medium text-indigo-800 mb-2">Price Summary</h4>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">{selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1)} Package</span>
                  <span className="font-medium">RM {pricing.total.toFixed(2)}</span>
                </div>
                {people > 1 && (
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Price per person</span>
                    <span>RM {pricing.perPerson.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-indigo-200 my-2 pt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span>RM {pricing.total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>
                  By confirming this booking, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-indigo-600 hover:underline">Cancellation Policy</a>.
                </p>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-300 transition-colors duration-300"
              >
                Previous
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin inline-block h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Confirm Booking'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;