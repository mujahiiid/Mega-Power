import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cable,
  Clock3,
  Flame,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Truck,
  UsersRound,
  UtensilsCrossed,
  Zap,
} from 'lucide-react';
import fire from '../src/assets/fire-alarm.png';
import hse from '../src/assets/servieses/HSE.png';
import procurement from '../src/assets/servieses/Procrutment.png';
import teamOne from '../src/assets/team/1.jpg';
import teamTwo from '../src/assets/team/2.jpg';
import teamThree from '../src/assets/team/3.jpg';

export interface Service {
  id: string;
  image: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'electrical',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85',
    icon: Zap,
  },
  { id: 'fireAlarm', image: fire.src, icon: RadioTower },
  {
    id: 'fireFighting',
    image:
      'https://images.unsplash.com/photo-1576707995936-a6cffe26ef7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    icon: Flame,
  },
  { id: 'hse', image: hse.src, icon: ShieldCheck },
  {
    id: 'facility',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85',
    icon: Building2,
  },
  { id: 'procurement', image: procurement.src, icon: Truck },
  {
    id: 'supplies',
    image:
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85',
    icon: Cable,
  },
  {
    id: 'catering',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85',
    icon: UtensilsCrossed,
  },
];

export const features = [
  { id: 'team', icon: UsersRound },
  { id: 'quality', icon: BadgeCheck },
  { id: 'safety', icon: ShieldCheck },
  { id: 'delivery', icon: Clock3 },
  { id: 'response', icon: Sparkles },
  { id: 'pricing', icon: BriefcaseBusiness },
];

export const team = [
  { id: 'mohamed', image: teamOne.src },
  { id: 'abdallah', image: teamTwo.src },
  { id: 'mostafa', image: teamThree.src },
];
