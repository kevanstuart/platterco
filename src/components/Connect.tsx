"use client";

import { useRouter } from "next/navigation";

export default function Connect() {
  const router = useRouter();

  function onClickHandler() {
    router.push('?show=contact');
  }

  return (
    <button
      className="button-alternate w-full text-sm py-2 border-gray-300"
      onClick={onClickHandler}
    >
      Connect
    </button>
  );
}