import { useState } from "react";
const ModalForm = () => {
  const [email, setEmail] = useState("");
  console.log(email);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Your email here"
        onChange={handleChange}
        name="email"
        value={email}
        className="input w-full max-w-xs input-bordered rounded-full font-light input-secondary mr-2"
      />
      <label htmlFor="my-modal" className="btn rounded-full btn-secondary">
        Submit
      </label>
    </form>
  );
};

export default ModalForm;
