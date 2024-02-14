"use client";

import { useState, useRef, Fragment } from "react";
import type { StaticImageData } from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  youtubeId: string;
  videoWidth?: number;
  videoHeight?: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  youtubeId,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // Construct the YouTube embed URL
  const youtubeEmbedUrl = `https://www.youtube.com/embed/9gWSwguYCHg?si=Ehho1-fdgunpZgG2`;

  return (
    <div>
      {/* Video thumbnail */}
      <div
        className="relative flex justify-center mb-8"
        data-aos="zoom-y-out"
        data-aos-delay="450"
      >
        <div className="flex flex-col justify-center">
          <Image
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            alt={thumbAlt}
          />
        </div>
        <button
          className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
          onClick={() => setModalOpen(true)}
        >
          <svg
            className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
            <path d="M10 17l6-5-6-5z" />
          </svg>
          <span className="ml-3">See the All-New 2024 Santa Fe</span>
        </button>
      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              className="max-w-6xl mx-auto flex items-center"
              style={{ maxWidth: "100%", maxHeight: "80%" }}
            >
              <Dialog.Panel className="aspect-w-16 aspect-h-9 bg-black overflow-hidden">
                {/* The iframe embed */}
                <iframe
                  className="aspect-video"
                  src={youtubeEmbedUrl}
                  style={{ width: "100%", height: "100%" }}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </div>
  );
}
