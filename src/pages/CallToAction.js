import ModalForm from "./ModalForm";
const CallToAction = () => {
  return (
    <div className="flex flex-col mt-4 justify-center">
      <h3 style={{ fontFamily: "Domine" }} className="text-center">
        More details comming soon!{" "}
      </h3>
      <h2 className="text-4xl min-w-content font-extrabold text-center py-3">
        Want to save your spot?
      </h2>
      <h3 style={{ fontFamily: "Domine" }} className="text-center">
        Register now to let us know you'll be attending
      </h3>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal"
        className="btn btn-secondary mb-16 mx-auto mt-6 capitalize rounded-full"
      >
        Save my Spot!
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
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

export default CallToAction;
