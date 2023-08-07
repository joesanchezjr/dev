"use client";

import { Fragment, use, useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

export function AppNotification() {
  const ref = useRef(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("DEBUG+", { show, current: ref.current });
    if (!show && !ref.current) {
      const turnOn = setTimeout(() => {
        setShow(true);
        ref.current = true;
      }, 2000);
      return () => clearTimeout(turnOn);
    }

    if (show && ref.current) {
      const turnOff = setTimeout(() => {
        setShow(false);
      }, 20000);
      return () => clearTimeout(turnOff);
    }
  }, [show]);

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-start px-4 py-6 sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="absolute top-0 h-2 animate-disappear bg-slate-400 transition-all"></div>
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span role="img" aria-label="contruction emoji">
                      🚧
                    </span>
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5 text-sm">
                    <p className=" font-medium text-slate-900">
                      Under construction
                    </p>
                    <p className="mt-1">
                      Welcome! This site is currently under active development.
                      Feel free to look around, but please excuse the mess.
                    </p>
                    <p className="mt-1">
                      If you're interested, you can view the{" "}
                      <a
                        href="https://www.github.com/joesanchezjr/dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 underline hover:text-slate-400"
                      >
                        source code
                      </a>{" "}
                      for this site on GitHub.
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
