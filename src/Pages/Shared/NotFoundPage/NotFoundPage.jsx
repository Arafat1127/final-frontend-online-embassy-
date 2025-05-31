import React from 'react';
import { Link, } from 'react-router-dom';
import notFound from '../../../assets/images/404.gif'
const NotFoundPage = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg max-w-md w-full">
                <img
                    src={notFound}
                    alt="Not Found"
                    className="w-full rounded-lg mb-6"
                />
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                    Page Not Found
                </h1>
                <Link to='/'> <button className="cursor-pointer px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                    Return to Home </button></Link>
            </div>
        </div>
    );
};

export default NotFoundPage;


// import React from 'react';
// import { useHistory } from 'react-router-dom'; // Assuming you're using React Router

// const NotFoundPage = () => {
//     const history = useHistory();

//     const handleHomeClick = () => {
//         history.push('/');
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg max-w-md w-full">
//                 {/* Image */}
//                 <img
//                     src="https://via.placeholder.com/300x200.png?text=404+Not+Found"
//                     alt="Not Found"
//                     className="w-full rounded-lg mb-6"
//                 />

//                 {/* Heading */}
//                 <h1 className="text-3xl font-semibold text-gray-800 mb-4">
//                     Page Not Found
//                 </h1>

//                 {/* Button */}
//                 <button
//                     onClick={handleHomeClick}
//                     className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
//                 >
//                     Return to Home
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NotFoundPage;
