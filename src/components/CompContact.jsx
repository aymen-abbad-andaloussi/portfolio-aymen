import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function CompContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w7p6g36",
        "template_vx6p5ms",
        form.current,
        "PrvD-j1-ywc0GdgW6"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK",
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[50vw] h-[75vh] border border-white/30 rounded-4xl bg-white/5 p-15 flex flex-col gap-6"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
      >
        <div className="w-full flex flex-col gap-1.5">
          <label className="float-left font-semibold text-white text-2xl pl-3 italic">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="bg-[#eeeeee] py-3 px-5 text-xl rounded-full outline-0"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1.5">
          <label className="float-left font-semibold text-white text-2xl pl-3 italic">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="bg-[#eeeeee] py-3 px-5 text-xl rounded-full outline-0"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1.5">
          <label className="float-left font-semibold text-white text-2xl pl-3 italic">
            Message:
          </label>
          <textarea
            name="message"
            className="bg-[#eeeeee] py-3 px-5 text-xl rounded-4xl outline-0 w-full h-[20vh]"
            placeholder="Enter Your Message"
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="text-3xl text-white font-semibold py-3 px-5 rounded-full cursor-pointer mt-5 bg-white/15 active:bg-white/50 active:text-black/60 w-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
