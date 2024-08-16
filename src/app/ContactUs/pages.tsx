import React from "react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2] p-8">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Photo Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/nawal.jpg" 
            alt="Nawal Fatima"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left text-white">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg mb-2">Name: Nawal Fatima</p>
          <p className="text-lg mb-2">Email: nawaalfaatima@gmail.com</p>
          <p className="text-lg mb-2">Phone: (123) 456-7890</p>
          <p className="text-lg">Location: Lahore, Pakistan</p>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
