import { NavItems } from "./Header";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FC, Fragment, useState } from "react";

const AltNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" inset-0 flex items-center justify-center">
        <button
          className="rounded-md px-2 py-1 text-sm font-medium hover:animate-ping focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          type="button"
          onClick={openModal}
        >
          <Bars3Icon className=" stroke-black" height={24} width={24} />
        </button>
      </div>
      <Transition appear as={Fragment} show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex mt-12 items-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[180px] transform overflow-hidden rounded-br-2xl rounded-bl-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <ul className="space-y-6">
                      <NavItems />
                    </ul>
                  </div>
                  <div className="mt-4">
                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      type="button"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AltNav;
