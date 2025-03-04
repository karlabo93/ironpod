import React, { useState, useEffect } from 'react';

const MyAccount = ({ userData, onBookNow }) => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [pastSessions, setPastSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in a real application, you would fetch this from your API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockUpcomingSessions = [
        {
          id: 1,
          date: '2025-03-10',
          time: '07:00 - 08:00',
          package: 'Solo',
          price: 'RM 75.00',
          status: 'Confirmed'
        },
        {
          id: 2,
          date: '2025-03-15',
          time: '18:30 - 19:30',
          package: 'Duo',
          price: 'RM 120.00',
          status: 'Pending'
        }
      ];
      
      const mockPastSessions = [
        {
          id: 3,
          date: '2025-02-28',
          time: '16:00 - 17:00',
          package: 'Solo',
          price: 'RM 75.00',
          status: 'Completed'
        },
        {
          id: 4,
          date: '2025-02-20',
          time: '08:30 - 09:30',
          package: 'Trio',
          price: 'RM 150.00',
          status: 'Completed'
        },
        {
          id: 5,
          date: '2025-02-10',
          time: '20:00 - 21:00',
          package: 'Solo',
          price: 'RM 75.00',
          status: 'Completed'
        }
      ];
      
      setUpcomingSessions(mockUpcomingSessions);
      setPastSessions(mockPastSessions);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-3">
            MY ACCOUNT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome, {userData?.name || 'User'}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Manage your profile and view your gym session bookings
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* User Profile Card */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-indigo-600 px-6 py-8 text-center">
                <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white text-indigo-600 text-2xl font-bold">
                  {(userData?.name || 'U').charAt(0)}
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{userData?.name || 'User'}</h3>
                <p className="text-indigo-200">{userData?.email || 'user@example.com'}</p>
              </div>
              
              <div className="px-6 py-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Account Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Membership:</span>
                    <span className="font-medium text-gray-800">Standard</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Member Since:</span>
                    <span className="font-medium text-gray-800">March 2025</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-600">Total Bookings:</span>
                    <span className="font-medium text-gray-800">{upcomingSessions.length + pastSessions.length}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button 
                    onClick={onBookNow}
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300"
                  >
                    Book New Session
                  </button>
                </div>
                
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button className="py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors duration-300 text-sm">
                    Edit Profile
                  </button>
                  <button className="py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors duration-300 text-sm">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sessions List */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="flex border-b border-gray-200">
                <button 
                  className={`flex-1 px-4 py-4 text-center font-medium text-sm transition-colors duration-300 ${activeTab === 'upcoming' ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming Sessions
                </button>
                <button 
                  className={`flex-1 px-4 py-4 text-center font-medium text-sm transition-colors duration-300 ${activeTab === 'past' ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('past')}
                >
                  Past Sessions
                </button>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {activeTab === 'upcoming' ? 'Upcoming Gym Sessions' : 'Past Gym Sessions'}
                </h4>
                
                {isLoading ? (
                  <div className="py-10 text-center">
                    <svg className="animate-spin h-8 w-8 text-indigo-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="mt-2 text-gray-600">Loading sessions...</p>
                  </div>
                ) : (
                  <>
                    {activeTab === 'upcoming' && (
                      upcomingSessions.length > 0 ? (
                        <div className="space-y-4">
                          {upcomingSessions.map(session => (
                            <div key={session.id} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                              <div>
                                <div className="flex items-center mb-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <span className="font-medium text-gray-800">{new Date(session.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center mb-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-gray-600">{session.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                  </svg>
                                  <span className="text-gray-600">{session.package} Package - {session.price}</span>
                                </div>
                              </div>
                              
                              <div className="mt-4 md:mt-0 flex items-center">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-3 ${
                                  session.status === 'Confirmed' 
                                    ? 'bg-green-100 text-green-800' 
                                    : session.status === 'Pending' 
                                    ? 'bg-yellow-100 text-yellow-800' 
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {session.status}
                                </span>
                                <div className="flex space-x-2">
                                  <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                  </button>
                                  <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-10 bg-gray-50 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <h3 className="text-lg font-medium text-gray-800 mb-2">No upcoming sessions</h3>
                          <p className="text-gray-600 mb-4">You don't have any upcoming gym sessions scheduled.</p>
                          <button 
                            onClick={onBookNow}
                            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 text-sm"
                          >
                            Book Your First Session
                          </button>
                        </div>
                      )
                    )}
                    
                    {activeTab === 'past' && (
                      pastSessions.length > 0 ? (
                        <div className="space-y-4">
                          {pastSessions.map(session => (
                            <div key={session.id} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                              <div>
                                <div className="flex items-center mb-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <span className="font-medium text-gray-800">{new Date(session.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center mb-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-gray-600">{session.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                  </svg>
                                  <span className="text-gray-600">{session.package} Package - {session.price}</span>
                                </div>
                              </div>
                              
                              <div className="mt-4 md:mt-0 flex items-center">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-3 bg-gray-100 text-gray-800">
                                  {session.status}
                                </span>
                                <button className="py-1 px-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded text-sm transition-colors duration-300">
                                  Book Again
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-10 bg-gray-50 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h3 className="text-lg font-medium text-gray-800 mb-2">No past sessions</h3>
                          <p className="text-gray-600 mb-4">You don't have any completed gym sessions yet.</p>
                          <button 
                            onClick={onBookNow}
                            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 text-sm"
                          >
                            Book Your First Session
                          </button>
                        </div>
                      )
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;