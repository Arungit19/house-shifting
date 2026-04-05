import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2979d4] border-t border-white/5 py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 relative">
                     <Image
                       src="/logo.png"
                       alt="logo"
                       fill
                       className="object-contain"
                       />
                </div>
                <span className="text-white font-bold">
                  Easy<span className="text-[#d6dade]"> To Go</span>
                </span>
              </div>
              <p className="text-white- text-xs text-center">
                © {new Date().getFullYear()} Easy To Go. All rights reserved. | House Shifting Made Simple.
              </p>
              <div className="flex gap-5 text-xs text-gray-500">
                <a href="#" className="text-white ">Privacy</a>
                <a href="#" className="text-white">Terms</a>
                <a href="#" className="text-white">Support</a>
              </div>
            </div>
          </footer>
  );
}