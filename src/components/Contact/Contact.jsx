"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit1, setSubmit1] = useState(false);
  const [submit2, setSubmit2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://contactform-fq4a.onrender.com/api/contact",
        {
          name,email,message
        }
        )
      .then((res) => {
        console.log(res);
        setSubmit1(true);
      })
      .catch((err) => {
        console.log(err.message);
        setSubmit2(true);
      });
  };

  useEffect(()=>{
    if(submit1 || submit2){
      setTimeout(() => {
        setSubmit1(false)
        setSubmit2(false)
      }, 1500);
    }

    setEmail("");
    setMessage("");
    setName("");

  },[submit1,submit2])

  return (
    <div className="max-w-md mx-auto my-9 ">
      <h2 className="text-2xl font-bold mb-4 ">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message:
          </label>
          <textarea
            name="message"
            value={message}
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {submit1 && (  // This is not working
        <div className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">
          Form submitted successfully
        </div>
      )}
      {submit2 && (  // This is not working
        <div className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md">
          Something went wrong
        </div>
      )}
    </div>
  );
};

export default Contact;
