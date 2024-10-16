import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleCaptcha = () => {
    setCaptchaChecked(!captchaChecked);
  };

  const onSubmit = async (data) => {
    if (!captchaChecked) {
      toast.error("Please check the CAPTCHA box.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to Getform.io using Axios
      const response = await axios.post("https://getform.io/f/amdpqplb", data, {
        headers: {
          Accept: "application/json", // Expecting a JSON response
        },
      });

      // Log the response to check if the submission is successful
      console.log(response);

      // Display a success toast notification
      toast.success("Submission successful! Thank you for your message.");

      // Reset the form fields after successful submission
      reset();
      setCaptchaChecked(false); // Reset CAPTCHA checkbox
    } catch (error) {
      // Log the error for debugging
      console.error("Submission failed:", error);

      // Display an error toast notification
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className="max-w-full" id="contact">
      <h1 className="font-semibold text-3xl text-center pb-3">CONTACT US</h1>
      <div className="w-full flex justify-center">
        <div className="bg-pink-100 w-[600px] p-8 rounded-lg shadow-lg space-y-6 transform transition-all duration-300 hover:shadow-2xl h-[550px]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold text-black">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="border-2 border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                required
              />
              {errors.name && <p className="text-red-500">Name is required.</p>}
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-black">Mobile Number</label>
              <input
                type="tel"
                {...register("mobile", { required: true })}
                className="border-2 border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                required
              />
              {errors.mobile && <p className="text-red-500">Mobile number is required.</p>}
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-black">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="border-2 border-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                required
              />
              {errors.email && <p className="text-red-500">Email is required.</p>}
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-black">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="border-2 border-black rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                required
              ></textarea>
              {errors.message && <p className="text-red-500">Message is required.</p>}
            </div>

            {/* CAPTCHA */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="captcha"
                onChange={handleCaptcha}
                className="cursor-pointer"
                checked={captchaChecked}
              />
              <label htmlFor="captcha" className="text-black font-semibold">
                I am not a robot
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className={`px-6 py-2 rounded-lg text-white font-semibold bg-black hover:bg-gray-800 focus:ring-4 focus:ring-black transition duration-300 transform hover:scale-105 ${
                  captchaChecked ? "cursor-pointer" : "cursor-not-allowed"
                }`}
                disabled={isSubmitting || !captchaChecked}
                style={{
                  opacity: isSubmitting ? 0.5 : 1,
                  transition: "opacity 0.3s ease",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr className="my-8 mx-auto w-[90%] border-gray-400" />
    </>
  );
}

export default Contact;
