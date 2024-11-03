const CourseCard = ({ title, instructor, price, originalPrice, image }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 left-2">
            
          </div>
        </div>
        
        <div className="p-4">
          <div className="mb-2 text-green-600 text-sm">ডিন ও দক্ষতা</div>
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">
            BY - {instructor}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">{price}৳</span>
              {originalPrice && (
                <span className="text-gray-400 line-through text-sm">{originalPrice}৳</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CourseCard;