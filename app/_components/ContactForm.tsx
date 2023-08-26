import React from "react";
import Button from "./Button";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/fonts/SVN-BonVoyage-Regular.otf",
});

interface ContactFormProps {
  // Define any props you need here
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  // Todo hard code
  const imgUrl = "/img/bg-contact.png";

  return (
    <div className="bg-white relative">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="absolute top-0 h-[608px] w-full bg-[image:var(--image-url)] bg-cover"
      ></div>

      <div className="relative mx-auto max-w-screen-xl py-20 px-6 lg:flex lg:flex-col lg:items-center lg:justify-between">
        <span
          style={myFont.style}
          className="text-[56px]/[56px] font-normal text-white"
        >
          Make an Appointment Now!
        </span>
        <div className="mt-4 text-2xl leading-10 font-normal text-gray-400">
          Let us guide you on a journey of relaxation
        </div>

        <form
          action="#"
          method="POST"
          className="relative p-6 rounded-lg bg-white shadow-md lg:p-10 lg:mt-20 lg:max-w-[811px] lg:w-full"
        >
          <div className="mx-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="text-base font-medium text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-lg border-1 px-5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ContactForm:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="text-base font-medium text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-lg border-1 px-5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ContactForm:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-lg border-1 px-5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ContactForm:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone-number"
                  className="text-base font-medium text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-lg border-1 px-5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ContactForm:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-base font-medium text-gray-900"
                >
                  Your message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-lg border-1 px-5 py-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ContactForm:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="text-sm font-normal text-gray-500 mt-6">
              By submitting this form you agree to our terms and conditions and
              our Privacy Policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </div>

            <Button label="Send message" className="mt-6" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
