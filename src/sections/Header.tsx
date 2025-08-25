import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
export const Header = () => {
  return (
    <header className="p-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 rounded-xl p-2.5 max-w-2xl mx-auto ">
          <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
            <LogoIcon className="w-8 h-8 cursor-pointer" />
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm text-white/70">
              <a href="#" className="hover:text-white transition">Features</a>
              <a href="#" className="hover:text-white transition">Developers</a>
              <a href="#" className="hover:text-white transition">Pricing</a>
              <a href="#" className="hover:text-white transition">Changelog</a>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="cursor-pointer md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
