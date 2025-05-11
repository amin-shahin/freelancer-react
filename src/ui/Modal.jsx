import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ children, open, onClose, title }) {
  const ref = useOutsideClick(onClose,true);

  return (
    open && (
      <div className="fixed top-0 left-0 backdrop-blur-md w-full h-screen bg-secondary-100/50 z-50">
        <div
          ref={ref}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md bg-secondary-0 transition-all duration-300
        w-[calc(100vw-2rem)] sm:max-w-sm lg:msx-w-md"
        >
          <div className="flex justify-between items-center border-b border-secondary-300 pb-2 mb-4">
            <p className="font-bold text-secondary-700">{title}</p>
            <button onClick={onClose} className="bg-secondary-100 rounded-md  ">
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
