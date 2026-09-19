'use client';
import { motion } from 'framer-motion';
const clients = [
  'NILE INDUSTRIES',
  'DELTA GROUP',
  'ORBIT DEVELOPMENT',
  'CAIRO LOGISTICS',
  'SUMMIT FACILITIES',
];
export function Clients() {
  return (
    <section className="border-y bg-white py-12">
      <div className="container-site overflow-hidden">
        <p className="text-muted text-center text-xs font-extrabold tracking-[.18em]">
          TRUSTED BY FORWARD-THINKING CLIENTS
        </p>
        <motion.div
          className="mt-8 flex w-max gap-4"
          animate={{ x: ['0%', '-30%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              className="rounded-card grid h-16 w-52 place-items-center border bg-slate-50 text-xs font-extrabold tracking-wider text-slate-500"
              key={`${client}-${index}`}
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
