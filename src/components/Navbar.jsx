import React from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <button aria-label="Open menu" className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <a href="#" className="font-semibold tracking-tight text-neutral-900">
            cleanmart
          </a>
        </div>

        {/* Center: Nav links */}
        <nav className="hidden items-center gap-8 text-sm text-neutral-600 lg:flex">
          <a href="#new" className="hover:text-neutral-900">New</a>
          <a href="#men" className="hover:text-neutral-900">Men</a>
          <a href="#women" className="hover:text-neutral-900">Women</a>
          <a href="#home" className="hover:text-neutral-900">Home</a>
        </nav>

        {/* Right: Search + Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden items-center sm:flex">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search products"
              className="w-48 rounded-md border border-neutral-200 bg-white py-2 pl-9 pr-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200/60 md:w-64"
            />
          </div>
          <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </button>
          <button className="relative inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-500 px-1 text-xs font-medium text-white">2</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
