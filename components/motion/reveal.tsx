'use client';
import {motion} from 'framer-motion';
import type {ReactNode} from 'react';
export function Reveal({children, delay = 0}: {children: ReactNode; delay?: number}) { return <motion.div initial={{opacity: 0, y: 24}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: .2}} transition={{duration: .55, delay}}>{children}</motion.div>; }
