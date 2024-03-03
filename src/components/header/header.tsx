import { Status } from "./status";

export async function Header() {
  return (
    <div>
      <div className="flex justify-between mb-6 items-center">
        <h1 className="font-medium text-lg">Joe Sanchez Jr.</h1>
        <Status />
      </div>
      <p className="max-w-[65ch]">
        <span className="font-serif italic text-lg">
          Software Engineer &mdash;
        </span>{" "}
        Creative developer with seven years of building for the web. Dedicated
        to making the internet a more beautiful and accessible space.
      </p>
    </div>
  );
}
