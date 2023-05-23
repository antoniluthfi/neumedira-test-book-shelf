"use client";

import { useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AppContext } from "@/context/AppContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function ChildLayout({ children }) {
  const { auth } = useContext(AppContext);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!pathname) return;
    if (auth.isAuthenticated) {
      router.replace(pathname === "/login" ? "/" : pathname);
      return;
    } else {
      router.replace("/login");
      return;
    }
  }, [auth.isAuthenticated, pathname]);

  return (
    <div className="bg-[url('/images/login-bg.png')] bg-cover bg-no-repeat w-full h-full">
      {!!auth.isAuthenticated ? (
        <div className="p-10 flex">
          <Sidebar />

          <div className="basis-[80%] min-h-screen bg-[#F3F3F7] rounded-br-[10px] rounded-tr-[10px] p-10">
            <Navbar />
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
