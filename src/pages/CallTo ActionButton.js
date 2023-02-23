import ModalForm from "./ModalForm";
const CallToActionButton = () => {
  return (
    <div className="z-50">
      {/* The button to open modal */}
      <label
        htmlFor="my-modal"
        className="btn btn-secondary mb-16 mx-auto mt-6 capitalize rounded-full"
      >
        Save my Spot!
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal z-50">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Register now to let us know you'll be attending
          </h3>
          <p style={{ fontFamily: "Domine" }} className="py-4 font-light">
            We'd love to see you at our upcoming event! To make sure you don't
            miss out on any important updates or changes, please enter your
            email to RSVP. We promise not to spam you - this is just our way of
            ensuring that you have the best possible experience.
          </p>
          <div className="modal-action">
            <ModalForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionButton;
