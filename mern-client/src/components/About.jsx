// import { FaBook, FaUsers } from 'react-icons/fa'; // Importing icons from react-icons

// const About = () => {
//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//       <h2 className='text-5xl font-bold text-center mb-8 text-sky-600 flex justify-center items-center'>
//         <FaBook className='mr-4' /> About Us
//       </h2>
//       <p className='text-lg mb-4 font-serif'>
//         Welcome to our Book Store! We are dedicated to providing a wide range of books across various genres to cater to all kinds of readers. Whether you are looking for fiction, non-fiction, mystery, programming, science fiction, fantasy, horror, or any other genre, we have something for everyone.
//       </p>
//       <p className='text-lg mb-4 font-serif'>
//         Our mission is to promote the love of reading by offering a diverse selection of books at affordable prices. We believe that books have the power to educate, inspire, and entertain, and we are committed to making them accessible to everyone.
//       </p>
//       <p className='text-lg mb-4 font-serif'>
//         Our team is passionate about books and is always on the lookout for the latest releases and timeless classics. We strive to provide excellent customer service and ensure that your shopping experience is smooth and enjoyable.
//       </p>
//       <p className='text-lg mb-4 font-serif'>
//         Thank you for choosing our Book Store. We hope you find the perfect book to add to your collection!
//       </p>
//       <h3 className='text-3xl font-bold mt-8 text-sky-600 flex items-center'>
//         <FaUsers className='mr-4 ' /> Our Team
//       </h3>
//       <p className='text-lg mb-4 font-serif'>
//         Our team consists of avid readers and book enthusiasts who are dedicated to bringing you the best selection of books. We work tirelessly to curate a diverse collection and ensure that our customers have access to the latest and greatest in the world of literature.
//       </p>
//       <p className='text-lg mb-4 font-serif' >
//         If you have any questions or need assistance, please do not hesitate to reach out to us. We are here to help!
//       </p>
//     </div>
//   );
// };

// export default About;




import { teamMembers } from './teamData';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 w-[90%]">
      {/* About Us Section */}
      <section className="mb-12 text-center mt-16 md:w-[70%] m-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900/70">About Us</h2>
        <p className="text-lg text-gray-700">
          Welcome to [<span className='font-semibold'>Maha BookStor</span>], your one-stop destination for all things books! Whether you're an avid reader, a casual book lover, or someone looking for that perfect gift, we have something for everyone. Our mission is to bring the joy of reading to people of all ages, backgrounds, and interests.
        </p>
      </section>

      {/* Meet Our Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900/70">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{member.title}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;