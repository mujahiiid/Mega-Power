import {
  Activity,
  Boxes,
  Building2,
  Cable,
  Factory,
  Flame,
  Gauge,
  HardHat,
  Hotel,
  Settings2,
  ShieldCheck,
  Warehouse,
  Wrench,
  Zap,
} from 'lucide-react';

export const navItems = [
  'about',
  'services',
  'sectors',
  'work',
  'contact',
] as const;

export const services = [
  { id: 'electrical', icon: Zap, image: '/images/electrical.jpg' },
  { id: 'fire', icon: Flame, image: '/images/valves.jpg' },
  { id: 'mechanical', icon: Settings2, image: '/images/mechanical.jpg' },
  { id: 'maintenance', icon: Wrench, image: '/images/factory.jpg' },
  { id: 'procurement', icon: Boxes, image: '/images/warehouse.jpg' },
  { id: 'hse', icon: HardHat, image: '/images/engineer.jpg' },
] as const;

export const sectors = [
  { id: 'industry', icon: Factory },
  { id: 'logistics', icon: Warehouse },
  { id: 'commercial', icon: Building2 },
  { id: 'hospitality', icon: Hotel },
  { id: 'utilities', icon: Gauge },
] as const;

export const capabilities = [
  { id: 'coordination', icon: Cable },
  { id: 'safety', icon: ShieldCheck },
  { id: 'continuity', icon: Activity },
] as const;

export const engagements = ['factory', 'warehouse', 'facility'] as const;

export const imageCredits = [
  ['Mostafa Mahmoudi', 'https://unsplash.com/photos/47jO5Y8nsYo'],
  ['Markus Spiske', 'https://unsplash.com/photos/kK7uPfb2YWU'],
  ['Ruchindra Gunasekara', 'https://unsplash.com/photos/GK8x_XCcDZg'],
  ['Simon Kadula', 'https://unsplash.com/photos/8gr6bObQLOI'],
  ['Daniel Miksha', 'https://unsplash.com/photos/3JUg2NLkMfc'],
  ['Peter Herrmann', 'https://unsplash.com/photos/IukQrXhSvPY'],
  ['Ricardo Gomez Angel', 'https://unsplash.com/photos/WfeKQT3Wf0A'],
] as const;
