import React, { useMemo, useState } from 'react';
import { Star, Filter, SlidersHorizontal } from 'lucide-react';

const productsSeed = [
  {
    id: 1,
    name: 'Everyday Leather Sneakers',
    price: 129,
    rating: 4.6,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Linen Overshirt',
    price: 89,
    rating: 4.4,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1666358085449-a10a39f33942?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaW5lbiUyME92ZXJzaGlydHxlbnwwfDB8fHwxNzYyMzYzMTg3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Minimal Ceramic Vase',
    price: 39,
    rating: 4.8,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1725169412537-acd1cd15e10f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwQ2VyYW1pYyUyMFZhc2V8ZW58MHwwfHx8MTc2MjM2MzE4N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Everyday Tote Bag',
    price: 59,
    rating: 4.3,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Stonewashed T-Shirt',
    price: 35,
    rating: 4.5,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Walnut Desk Lamp',
    price: 120,
    rating: 4.7,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-2xl border border-neutral-200/70 bg-white p-3 transition-shadow hover:shadow-lg">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="line-clamp-1 text-sm font-medium text-neutral-900">{product.name}</h3>
          <div className="mt-1 flex items-center gap-1 text-xs text-neutral-500">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            <span>{product.rating}</span>
            <span className="mx-1">·</span>
            <span className="text-neutral-400">{product.category}</span>
          </div>
        </div>
        <div className="rounded-md bg-neutral-100 px-2 py-1 text-sm font-semibold text-neutral-900">${product.price}</div>
      </div>
      <button className="mt-3 w-full rounded-md bg-neutral-900 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
        Add to cart
      </button>
    </div>
  );
};

const ProductGrid = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Men', 'Women', 'Home'];

  const filtered = useMemo(() => {
    return productsSeed.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Featured products
        </h2>
        <div className="flex flex-1 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                  category === c
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search"
                className="w-48 rounded-md border border-neutral-200 bg-white py-2 pl-3 pr-10 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200/60 md:w-64"
              />
              <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-xl border border-neutral-200 bg-white p-10 text-center text-neutral-600">
          No products match your search.
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
