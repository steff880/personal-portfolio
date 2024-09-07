import { forwardRef, useRef, useState } from "react";
import HalfCircles from "../../ui/HalfCircles";
import emailjs from "@emailjs/browser";
import { formRocket } from "../../assets";
import Dot from "../../ui/Dot";
import toast from "react-hot-toast";

const Contact = forwardRef(function Contact(_, ref) {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;

    emailjs
      .send(
        `${serviceID}`,
        `${templateID}`,
        {
          from_name: form.name,
          to_name: "Stefan",
          from_email: form.email,
          to_email: "stefan.d.yordanov@gmail.com",
          message: form.message,
        },
        `${publicKey}`,
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you! I will get back to you as soon as possible.",
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong. Please try again.");
          console.error(error);
        },
      );
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="paddingX relative isolate flex min-h-screen flex-col items-center justify-evenly overflow-hidden bg-[var(--dark-blue)] py-2 text-white md:py-16"
    >
      <div className="text-center">
        <h3 className="tertiaryHeading mb-3  font-bold">Get in touch</h3>
        <h2 className="secondaryHeading mb-16 font-extrabold">
          Contact <span className="text-[var(--purple)]">Me</span>
        </h2>
      </div>
      <div className="round-gradient-border relative w-full px-4 py-10 text-[12px] text-white sm:w-[70%] md:w-[65%] md:px-16 md:py-16 lg:w-[55%] lg:text-[14px] xl:w-[50%] ">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="inputStules"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="inputStules"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="inputStules"
              required
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-full bg-[var(--purple)] px-8 py-2 font-medium text-white shadow-md outline-none"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <div className="absolute hidden sm:right-[-3rem] sm:top-[-3rem] sm:block lg:right-[-5rem] lg:top-[-5rem]">
          <img
            src={formRocket}
            alt="rocket"
            className="sm:h-[5rem] sm:w-[5rem] lg:h-[7.5rem] lg:w-[7.5rem]"
          />
        </div>
      </div>

      <HalfCircles
        size="lg:size-[300px]"
        position="lg:top-[50px] lg:left-[100px] xl:left-[220px]"
        rotation="rotate-[880deg]"
      />
      <HalfCircles
        size="lg:size-[300px]"
        position=" lg:bottom-[320px] lg:right-[250px] xl:right-[350px]"
        rotation="rotate-[880deg]"
      />

      <Dot
        size="size-[8px]"
        position="top-[20%] left-[20%]"
        bg="bg-violet-200"
        visibility="hidden lg:inline-block"
      />
      <Dot
        size="size-[10px]"
        position="top-[10%] left-[13%]"
        bg="bg-violet-200"
        visibility="hidden lg:inline-block"
      />
      <Dot
        size="size-[10px]"
        position="bottom-[20%] right-[10%]"
        bg="bg-violet-200"
        visibility="hidden lg:inline-block"
      />
      <Dot
        size="size-[8px]"
        position="bottom-[10%] right-[13%]"
        bg="bg-violet-200"
        visibility="hidden lg:inline-block"
      />
    </section>
  );
});

export default Contact;
