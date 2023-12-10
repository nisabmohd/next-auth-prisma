"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
export default function Home() {
  const { data: session, status } = useSession();
  if (status == "loading") return null;
  console.log(session?.user.image);
  return (
    <div className="px-8 py-16">
      <Button onClick={() => signIn("google")}>Login with google</Button>
    </div>
  );
}
