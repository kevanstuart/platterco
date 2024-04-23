export default function Contact() {
  return (
    <form className="grid p-8 gap-x-10 gap-y-5 border-b grid-cols-2">
      <div>
        <label htmlFor="firstname" className="sr-only">Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          className="w-full border border-gray-300 block flex-1 p-2.5 text-gray-900 placeholder:text-gray-400"
          placeholder="Your first name"
        />
      </div>
      <div>
        <label htmlFor="lastname" className="sr-only">Name</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="w-full border border-gray-300 block flex-1 p-2.5 text-gray-900 placeholder:text-gray-400"
          placeholder="Your last name"
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="email" className="sr-only">Name</label>
        <input
          type="text"
          name="email"
          id="email"
          className="w-full border border-gray-300 block flex-1 p-2.5 text-gray-900 placeholder:text-gray-400"
          placeholder="Email address"
        />
      </div>
      <div>
        <textarea
          className="w-full border border-gray-300 block flex-1 p-2.5 text-gray-900 placeholder:text-gray-400"
          placeholder="Would you like to leave a message"
        ></textarea>
      </div>
    </form>
  );
}