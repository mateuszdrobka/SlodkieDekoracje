"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  qty?: number;
};

type Category = "Figurki" | "Ozdoby" | "Zestawy";

export default function ShopPage() {
  const [category, setCategory] = useState<Category>("Figurki");
  const [cart, setCart] = useState<Product[]>([]);
  const [openCart, setOpenCart] = useState(false);

  const products: Record<Category, Product[]> = {
    Figurki: [
      { id: "f1", name: "Miś czekoladowy", price: 33, img: "/img/mis2.jpg" },
      { id: "f2", name: "Miś z prezentami", price: 22, img: "/img/mis3.jpg" },
      { id: "f3", name: "Króliczek", price: 39, img: "/img/mis4.jpg" },
    ],
    Ozdoby: [
      { id: "o1", name: "Kwiaty z masy cukrowej", price: 15, img: "/img/ozd1.jpg" },
      { id: "o2", name: "Listki dekoracyjne", price: 10, img: "/img/ozd2.jpg" },
      { id: "o3", name: "Perełki cukrowe", price: 12, img: "/img/ozd3.jpg" },
    ],
    Zestawy: [
      { id: "z1", name: "Zestaw urodzinowy", price: 69, img: "/img/zest1.jpg" },
      { id: "z2", name: "Zestaw ślubny", price: 99, img: "/img/zest2.jpg" },
      { id: "z3", name: "Zestaw mini mix", price: 49, img: "/img/zest3.jpg" },
    ],
  };

  const addToCart = (p: Product) =>
    setCart((c) => {
      const exists = c.find((i) => i.id === p.id);
      if (exists) return c.map((i) => (i.id === p.id ? { ...i, qty: (i.qty || 1) + 1 } : i));
      return [...c, { ...p, qty: 1 }];
    });

  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.id !== id));
  const changeQty = (id: string, d: number) =>
    setCart((c) => c.map((i) => (i.id === id ? { ...i, qty: Math.max(1, (i.qty || 1) + d) } : i)));

  const total = useMemo(() => cart.reduce((s, i) => s + i.price * (i.qty || 1), 0), [cart]);
  const tabs: Category[] = Object.keys(products) as Category[];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-amber-200" />
            <span className="font-semibold tracking-wide">Słodkie Dekoracje</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setCategory(t)}
                className={`px-4 py-2 rounded-xl transition border ${
                  category === t
                    ? "bg-amber-50 border-amber-200 text-stone-900"
                    : "bg-white border-stone-200 hover:bg-stone-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button onClick={() => setOpenCart(true)} className="relative px-4 py-2 rounded-xl border border-stone-300 bg-white hover:bg-stone-100">
            Koszyk
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-amber-500 text-white rounded-full px-2 py-0.5">
                {cart.reduce((s, i) => s + (i.qty || 1), 0)}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Figurki czekoladowe i ozdoby z masy cukrowej</h1>
            <p className="mt-4 text-stone-600">
              Ręcznie robione dekoracje na torty – idealne na urodziny, śluby i każdą słodką okazję. <br />
              W 100% online, bezpieczna wysyłka.
            </p>
            <div className="mt-6 flex gap-3">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setCategory(t)}
                  className={`px-4 py-2 rounded-xl border text-sm ${category === t ? "bg-amber-100 border-amber-300" : "bg-white border-stone-300 hover:bg-stone-100"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:justify-self-end"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-white to-amber-50 border border-amber-100 shadow-inner overflow-hidden">
              <img src="/img/logo.png" alt="Logo My Cake Factory" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">{category}</h2>
          <p className="text-sm text-stone-500">Wszystkie produkty są ręcznie wykonane. Kolory mogą się delikatnie różnić.</p>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products[category].map((p) => (
              <motion.div key={p.id} layout className="group rounded-3xl border border-stone-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{p.name}</h3>
                    <span className="font-semibold">{p.price} zł</span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button onClick={() => addToCart(p)} className="flex-1 px-4 py-2 rounded-xl bg-amber-200 hover:bg-amber-300 text-stone-900 font-medium">
                      Dodaj
                    </button>
                    <button className="px-4 py-2 rounded-xl border border-stone-300 hover:bg-stone-100">Szczegóły</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ... reszta kodu pozostaje bez zmian ... */}
    </div>
  );
}

function InfoItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-amber-100 bg-white/70 p-4">
      <p className="font-medium">{title}</p>
      <p className="text-stone-600 text-sm mt-1">{text}</p>
    </div>
  );
}
