import { MouseEventHandler } from "react";

const Contact = () => {
  const submitHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen gradient flex justify-center items-center lg:flex-row flex-col my-snap">
      <div className="bg-kaneki bg-left-top h-[30vh] lg:h-screen lg:w-1/2 w-screen bg-contain bg-no-repeat"></div>
      <div className="pt-10 mx-auto lg:w-1/3 h-1/2 lg:h-screen">
        <h1 className="text-center text-5xl mt-10">Connect w/ me</h1>
        <form method="post" className="py-10 px-2">
          <div className="w-[46%] inline-block mr-2">
            <label htmlFor="name">First Name</label>
            <br />
            <input type="text" name="name" id="name" required />
          </div>
          <div className="w-[46%] inline-block mx-2">
            <label htmlFor="name">Last Name</label>
            <br />
            <input type="text" name="name" id="name" required />
          </div>
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" id="email" required />
          <br />
          <br />
          <label htmlFor="feedback">Feedback or Message</label>
          <br />
          <textarea name="feedback" id="feedback" rows={5} required />
          <br />
          <button
            onClick={submitHandler}
            type="submit"
            className="bg-red-600 px-2 py-1 text-center w-1/3 text-white hover:bg-black hover:text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
