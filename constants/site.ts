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
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: 'Electrical Works',
    description:
      'Design, installation and maintenance of dependable electrical systems.',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Engineer working on electrical equipment',
    icon: Zap,
  },
  {
    title: 'Fire Alarm Systems',
    description:
      'Commissioning and maintenance for complete fire alarm protection.',
    image: fire.src,
    imageAlt: 'Fire alarm safety equipment',
    icon: RadioTower,
  },
  {
    title: 'Fire Fighting Systems',
    description:
      'Engineered suppression systems that protect people and property.',
    image:
      'https://images.unsplash.com/photo-1576707995936-a6cffe26ef7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    imageAlt: 'Fire protection equipment',
    icon: Flame,
  },
  {
    title: 'HSE Services',
    description:
      'Health, safety and environmental services for a compliant workplace.',
    image: hse.src,
    imageAlt: 'Industrial worker wearing safety equipment',
    icon: ShieldCheck,
  },
  {
    title: 'Facility Management',
    description:
      'Professional services that keep critical operations performing.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Modern commercial facility exterior',
    icon: Building2,
  },
  {
    title: 'Procurement',
    description:
      'Reliable sourcing and supply for technical project requirements.',
    image: procurement.src,
    imageAlt: 'Warehouse storage and procurement supplies',
    icon: Truck,
  },
  {
    title: 'General Supplies',
    description:
      'Quality materials, consumables and industrial supply solutions.',
    image:
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Organized industrial materials',
    icon: Cable,
  },
  {
    title: 'Catering Services',
    description: 'Consistent catering solutions for teams and project sites.',
    image:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Professional food service preparation',
    icon: UtensilsCrossed,
  },
];

export const features = [
  { title: 'Experienced Team', icon: UsersRound },
  { title: 'Quality Assurance', icon: BadgeCheck },
  { title: 'Safety First', icon: ShieldCheck },
  { title: 'On-Time Delivery', icon: Clock3 },
  { title: 'Fast Response', icon: Sparkles },
  { title: 'Competitive Pricing', icon: BriefcaseBusiness },
];
export const team = [
  {
    name: 'Mohamed Abbas',
    role: 'Chairman of the Board',
    image: teamOne.src,
  },
  {
    name: 'Abdallah Wael',
    role: 'Managing Director',
    image: teamTwo.src,
  },
  {
    name: 'Mostafa Waleed',
    role: 'Operations Manager',
    image: teamThree.src,
  },
];
