import { Inter } from "@next/font/google";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="flex bg-blue-300 items-center">
            <div className="w-3/12">
              <Logo />
            </div>
            <div className="w-6/12">
              <Nav />
            </div>
            <div className="w-3/12 text-right">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
