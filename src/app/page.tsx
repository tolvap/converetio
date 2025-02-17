import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px] items-center content-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span>Here you will see a landing page at some point.</span>
      <Link href="/converters">
        <button className="inline-flex items-center justify-center rounded text-[15px] leading-none font-medium h-[35px] px-[15px] py-0 border">
          Go to converters
        </button>
      </Link>
    </div>
  );
}
