
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CourseCard from './CourseCard';



const CourseSlider = () => {
  const courses = [
    {
      id: 1,
      title: "Art of Conflict Management (ব্যক্তিগত ও পারিবারিক দ্বন্দ্ব নিরসন)",
      instructor: "Muhammad Elias Khan",
      price: "200.00",
      originalPrice: "1,500.00",
      image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
    },
    {
      id: 2,
      title: "Diploma in Arabic language (Level - 1) (আরবী ভাষা শিক্ষা)",
      instructor: "Shaykh Muhammad Elias Khan",
      price: "300.00",
      originalPrice: "1,500.00",
      image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
    },
    {
      id: 3,
      title: "Diploma in Arabic language (Level - 2) (আরবী ভাষা কোর্স)",
      instructor: "Shaykh Muhammad Elias Khan",
      price: "300.00",
      originalPrice: "1,500.00",
      image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
    },
    {
      id: 4,
      title: "1 year Diploma in Arabic Language (১ বছর মেয়াদী আরবী ভাষা কোর্স)",
      instructor: "Shaykh Muhammad Elias Khan",
      price: "3,000.00",
      originalPrice: "6,000.00",
      image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
    },
    {
        id: 4,
        title: "1 year Diploma in Arabic Language (১ বছর মেয়াদী আরবী ভাষা কোর্স)",
        instructor: "Shaykh Muhammad Elias Khan",
        price: "3,000.00",
        originalPrice: "6,000.00",
        image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
      },
      {
        id: 4,
        title: "1 year Diploma in Arabic Language (১ বছর মেয়াদী আরবী ভাষা কোর্স)",
        instructor: "Shaykh Muhammad Elias Khan",
        price: "3,000.00",
        originalPrice: "6,000.00",
        image: "https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
      }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-600 mb-8">
        জনপ্রিয় কোর্সসমূহ
      </h2>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard
              title={course.title}
              instructor={course.instructor}
              price={course.price}
              originalPrice={course.originalPrice}
              image={course.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="flex justify-center mt-8">
        <button className="bg-purple-100 text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-purple-200 transition-colors">
          সকল কোর্স দেখুন
        </button>
      </div>
    </div>
  );
};

export default CourseSlider;