import { ReactElement, useState } from "react";

type propsType = {
  children: ReactElement | null;
  setShowModal: (bool: boolean) => void;
  small?: boolean;
};

function Modal({ children, small = true, setShowModal }: propsType) {
  const [animation, setAnimation] = useState("animate-fade-in-down");

  const closeWithAnimation = () => {
    setAnimation("animate-fade-in-out");
    setTimeout(() => {
      setShowModal(false);
    }, 400);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-20 flex h-screen w-full items-center justify-center backdrop-blur-sm backdrop-brightness-50"
      onClick={closeWithAnimation}
    >
      <div
        className={`h-4/6 w-11/12 ${
          small ? "md:w-1/3" : "md:w-10/12"
        } flex flex-col items-center rounded-md bg-white shadow-xl md:h-3/4 ${animation} relative overflow-scroll`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute right-5 top-5 z-50 cursor-pointer"
          onClick={closeWithAnimation}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="red"
            className="h-6 w-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
