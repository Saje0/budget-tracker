import { IoIosCloseCircle } from "react-icons/io";

const Modal = ({ show, onClose, children, width, bgColor = "bg-white" }) => {
  return (
    <div
      style={{
        zIndex: 1000000000,
      }}
      className={`${
        show ? "" : "hidden"
      } fixed top-0 bottom-0 left-0 bg-[#00000082] right-0 w-full h-full overflow-hidden`}
    >
      <div
        className={`relative flex items-center justify-center w-full h-full `}
      >
        <div
          className={`fixed py-3 bg-white px-9 rounded-md  max-h-106  ${bgColor} ${
            width ? width : "w-96"
          }`}
        >
          <div
            style={{ maxHeight: "25rem" }}
            className={`flex flex-col w-full overflow-y-scroll `}
          >
            <div className={`absolute z-[1000] top-3 right-2`}>
              <IoIosCloseCircle
                onClick={() => {
                  onClose(!show);
                }}
                size="1.8rem"
                className="text-gray-500 transition duration-300 transform cursor-pointer hover:text-main hover:rotate-180"
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
