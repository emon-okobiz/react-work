
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-teal-100 rounded-full -translate-x-16 -translate-y-16" />
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-purple-100 rounded-full translate-x-14 translate-y-16" />
      
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4  md:space-y-6 max-w-xl mx-auto lg:mx-0">
          <div className="inline-block bg-blue-100 text-blue-600 md:px-6 px-4 md:py-1 py-2 rounded-full text-sm md:text-base font-medium mt-8 flex items-center justify-center">
  100% Satisfaction Guarantee
</div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Learn <span className="text-blue-600">Skills</span> From
              <br className="hidden md:block" />
              Our Top Instructors
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg">
              Transform your future with expert-led courses designed to help you master new skills and achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto text-center">
                EXPLORE COURSES
              </button>
              
              <div className='flex flex-col items-center justify-center '>
                {/* <div className="flex flex-col items-center justify-center"> */}
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <Phone className="h-5 w-5 text-blue-600 " />
                </div>
                <div className=''>
                  <div className="text-sm text-gray-600 text-center">Have any Question?</div>
                  <div className="font-medium">993-00-67777</div>
                </div>
              </div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative mt-8 lg:mt-0">
            {/* Stats Cards */}
            <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg z-10 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Students</div>
                  <div className="text-xl font-bold">15K</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg z-10 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Complete Graduation</div>
                  <div className="text-xl font-bold">34K</div>
                </div>
              </div>
            </div>
            
            {/* Main Image Container */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="Instructor"
                className="w-full h-auto object-cover rounded-lg"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-yellow-400 rounded-full -z-10" />
              <div className="absolute -right-2 top-1/2 w-8 h-8 bg-blue-400 rounded-full -z-10" />
              <div className="absolute left-1/3 -top-4 w-12 h-12 bg-green-200 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Icons */}
      <div className="hidden lg:block absolute left-4 top-1/4">
        <div className="text-blue-500">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;