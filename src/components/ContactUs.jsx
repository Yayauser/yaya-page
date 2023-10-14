/** @format */

import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0e3lhj9",
        "template_4ec1832",
        form.current,
        "dmlHij8sysJ_NenzX"
      )
      .then(
        result => {
          console.log(result.text);
          form.current.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='bg-[#f2f2f2] md:pt-32 xsm:pt-20 pb-3'>
      <div className='px-5 max-w-[1260px] w-full mx-auto h-[100vh]'>
        <div className='flex md:flex-row justify-center items-start xsm:flex-col gap-5'>
          <div className='max-w-[630px] w-full '>
            <h2 className='text-black m-0 text-2xl font-semibold leading-8 mb-8'>
              To Karima:)
            </h2>
            <p className='mb-10'></p>
            <div>
              <form
                autoComplete='off'
                action=''
                ref={form}
                method='send'
                onSubmit={sendEmail}>
                <input
                  type='text'
                  name='from_name'
                  required
                  placeholder='Your Name'
                  className='w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block outline-gray-700 border border-[#e6e7e8]'
                />
                <textarea
                  name='message'
                  type='text'
                  maxLength={5000}
                  required
                  placeholder='Message ....'
                  className='w-full h-[auto] min-h-[200px] text-gray-700 bg-white rounded mb-4 px-2 py-3 text-base leading-7 block outline-gray-700 border border-[#e6e7e8]'></textarea>
                <input
                  className='w-24 rounded py-3 text-black border border-black hover:bg-black hover:text-white transition duration-500 mt-4'
                  type='submit'
                  value='Send'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;