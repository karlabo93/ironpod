import React from 'react';

const BookingConfirmation = ({ bookingData, onViewAccount, onBookAnother }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 max-w-3xl mx-auto">
      <div className="bg-green-600 px-6 py-4">
        <h2 className="text-white text-xl font-bold">Booking Confirmed!</h2>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Your gym session has been booked!</h3>
          <p className="text-gray-600">
            Booking ID: <span className="font-medium">{bookingData.bookingId}</span>
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h4 className="font-medium text-gray-800 mb-4">Booking Details</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            <div>
              <h5 className="text-sm font-medium text-gray-500">Date</h5>
              <p className="font-medium">{new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-500">Time</h5>
              <p className="font-medium">{bookingData.time}</p>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-500">Package</h5>
              <p className="font-medium capitalize">{bookingData.package} Package</p>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-500">People</h5>
              <p className="font-medium">{bookingData.people} {bookingData.people > 1 ? 'people' : 'person'}</p>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-500">Status</h5>
              <p className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {bookingData.status}
              </p>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-500">Total Price</h5>
              <p className="font-medium">RM {bookingData.pricing.total.toFixed(2)}</p>
            </div>
          </div>
          
          {bookingData.notes && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h5 className="text-sm font-medium text-gray-500">Additional Notes</h5>
              <p className="text-gray-600">{bookingData.notes}</p>
            </div>
          )}
        </div>
        
        <div className="mb-6 bg-indigo-50 rounded-lg p-4 border border-indigo-100">
          <h4 className="font-medium text-indigo-800 mb-2">What's Next</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>A confirmation email has been sent to your registered email address.</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Arrive 5-10 minutes before your scheduled time. The access code will be provided in your email.</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Need to make changes? You can reschedule or cancel up to 24 hours before your session.</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onViewAccount}
            className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            View My Account
          </button>
          <button
            onClick={onBookAnother}
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            Book Another Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;