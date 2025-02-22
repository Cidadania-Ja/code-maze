import Transition from "@/components/utils/Transition";
import { useEffect, useRef } from "react";
import { BasicModalFooterProps } from "./types";

export function BasicModalFooter({
  children,
}: BasicModalFooterProps): JSX.Element {
  return (
    <div className="sticky bottom-0 px-5 py-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      {children}
    </div>
  );
}

function BasicModal({ children, id, title, modalOpen, setModalOpen }) {
  const modalContent: any = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = (e) => {
      if (!modalOpen || modalContent.current.contains(e.target)) return;
      setModalOpen(false);
    };

    document.addEventListener("mousedown", clickHandler);

    return () => document.removeEventListener("mousedown", clickHandler);
  }, [modalOpen]);

  // Close if the ESC key is pressed
  useEffect(() => {
    const keyHandler = (e) => {
      if (!modalOpen || e.keyCode !== 27) return;
      setModalOpen(false);
    };

    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [modalOpen]);

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white dark:bg-slate-800 rounded shadow-lg overflow-auto max-w-lg w-full max-h-full"
        >
          {/* Modal header */}
          <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-slate-800 dark:text-slate-100">
                {title}
              </div>
              <button
                className="text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalOpen(false);
                }}
              >
                <div className="sr-only">Close</div>

                <svg className="w-4 h-4 fill-current">
                  <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                </svg>
              </button>
            </div>
          </div>

          {children}
        </div>
      </Transition>
    </>
  );
}

export default BasicModal;
