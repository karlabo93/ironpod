import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';

const BookingPage = ({ onViewAccount }) => {
  const [bookingStatus, setBookingStatus] = useState('form'); // 'form' or 'confirmed'
  const [bookingData, setBookingData] = useState(null);

  const handleBookingComplete = (data) => {
    setBookingData(data);
    setBookingStatus('confirmed');
  };

  const handleBookAnother = () => {
    setBookingStatus('form');
    setBookingData(null);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-3">
            BOOKING
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Private Gym Session</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Reserve your exclusive workout space with just a few clicks.
            Choose your preferred date, time, and package.
          </p>
        </div>
        
        {bookingStatus === 'form' ? (
          <BookingForm onBookingComplete={handleBookingComplete} />
        ) : (
          <BookingConfirmation 
            bookingData={bookingData} 
            onViewAccount={onViewAccount}
            onBookAnother={handleBookAnother}
          />
        )}
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-inner">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-indigo-600 mb-2">What's included in my booking?</h4>
              <p className="text-gray-600">
                Your booking includes exclusive access to our entire facility, including all equipment, 
                changing rooms, and amenities during your reserved time slot.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-indigo-600 mb-2">Can I cancel or reschedule?</h4>
              <p className="text-gray-600">
                Yes, you can cancel or reschedule up to 24 hours before your session for a full refund. 
                Changes within 24 hours are subject to our cancellation policy.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-indigo-600 mb-2">How early should I arrive?</h4>
              <p className="text-gray-600">
                We recommend arriving 5-10 minutes before your scheduled time. You'll receive an 
                access code in your confirmation email to enter the facility.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-indigo-600 mb-2">What if I stay longer than my booking?</h4>
              <p className="text-gray-600">
                Sessions are booked in 1-hour blocks. If you stay beyond your booked time and the next 
                slot is reserved, you'll need to vacate the gym. Additional fees may apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;