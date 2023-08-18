import { get } from "@vercel/edge-config";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export const Intro = async () => {
  const available = await get("availableForHire");
  return (
    <section id="intro" className="max-width my-12">
      {available && (
        <div className="mb-4 flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-200 px-2 py-1 text-xs text-black dark:bg-green-800 dark:text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
            </span>
            <span>Available for hire</span>
          </div>
        </div>
      )}
      <p className="max-w-[58ch] text-xl leading-snug">
        I&apos;m Joe, a creative software engineer and resident of{" "}
        <span className="italic">Austin, Texas </span>with over{" "}
        <span className="font-semibold">six years</span> of experience building
        for the{" "}
        <span className="group inline-flex items-center gap-2">
          web{" "}
          <GlobeAltIcon className="inline h-7 w-7 group-hover:text-green-400" />
        </span>{" "}
        &mdash; Dedicated to making the internet a more{" "}
        <span className="group inline-flex items-center gap-2">
          beautiful{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-6 w-6 fill-current group-hover:text-yellow-400 "
          >
            <path d="M448 168c0 33.6-12.2 64.3-32.3 88c20.1 23.7 32.3 54.4 32.3 88c0 75.1-60.9 136-136 136c-33.6 0-64.3-12.2-88-32.3c-23.7 20.1-54.4 32.3-88 32.3C60.9 480 0 419.1 0 344c0-33.6 12.2-64.3 32.3-88C12.2 232.3 0 201.6 0 168C0 92.9 60.9 32 136 32c33.6 0 64.3 12.2 88 32.3C247.7 44.2 278.4 32 312 32c75.1 0 136 60.9 136 136zM203.3 88.7C185.1 73.3 161.7 64 136 64C78.6 64 32 110.6 32 168c0 25.7 9.3 49.1 24.7 67.3c10.1 11.9 10.1 29.5 0 41.4C41.3 294.9 32 318.3 32 344c0 57.4 46.6 104 104 104c25.7 0 49.1-9.3 67.3-24.7c11.9-10.1 29.5-10.1 41.4 0C262.9 438.7 286.3 448 312 448c57.4 0 104-46.6 104-104c0-25.7-9.3-49.1-24.7-67.3c-10.1-11.9-10.1-29.5 0-41.4C406.7 217.1 416 193.7 416 168c0-57.4-46.6-104-104-104c-25.7 0-49.1 9.3-67.3 24.7c-11.9 10.1-29.5 10.1-41.4 0zM272 256a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-128 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
          </svg>
        </span>{" "}
        and{" "}
        <span className="group inline-flex items-center gap-2">
          accessible{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-6 w-6 fill-current group-hover:text-blue-400"
          >
            <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM129.7 200.8c-4 7.9-.7 17.5 7.2 21.5l21.1 10.5c16 8 32.8 14 50.1 17.8v67.7l-15.7 78.4c-1.7 8.7 3.9 17.1 12.6 18.8s17.1-3.9 18.8-12.6L237.1 336h37.8l13.4 67.1c1.7 8.7 10.2 14.3 18.8 12.6s14.3-10.2 12.6-18.8L304 318.4V250.7c17.3-3.9 34.1-9.9 50.1-17.8l21.1-10.5c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-21.1 10.5c-26 13-54.7 19.8-83.8 19.8s-57.8-6.8-83.8-19.8l-21.1-10.5c-7.9-4-17.5-.7-21.5 7.2zM240 255.4c5.3 .4 10.7 .6 16 .6s10.7-.2 16-.6V304H240V255.4z" />
          </svg>
        </span>{" "}
        space. Seeking to work with a team of good people making interesting
        things.
      </p>
    </section>
  );
};
