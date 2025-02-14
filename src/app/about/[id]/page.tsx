"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const da = useParams();

  console.log(da);

  return (
    <Link className="w-full block" href="">
      Da
    </Link>
  );
}
