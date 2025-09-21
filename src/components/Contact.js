import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 m-4">Contact Us</h1>
      <form>
        <input
          className="border border-black m-2 p-2"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="border border-black m-2 p-2"
          type="email"
          placeholder="Your Email"
        />
        <input
          className="border border-black m-2 p-2"
          type="text"
          placeholder="Your Message"
        />
        <button className="bg-blue-500 text-white m-2 p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
