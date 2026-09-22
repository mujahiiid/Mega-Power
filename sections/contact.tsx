'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/constants/site';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function Contact() {
  const t = useTranslations('Contact');
  const schema = z.object({
    name: z.string().min(2, t('validation.name')),
    email: z.string().email(t('validation.email')),
    phone: z.string().min(7, t('validation.phone')),
    message: z.string().min(10, t('validation.message')),
  });
  const details = [
    { icon: Phone, text: contactInfo.phone, direction: 'ltr' },
    { icon: Mail, text: contactInfo.email, direction: 'ltr' },
    { icon: MapPin, text: t('address'), direction: 'auto' },
    { icon: Clock3, text: t('hours'), direction: 'auto' },
  ] as const;
  const fields = [
    { name: 'name', placeholder: t('name'), type: 'text' },
    { name: 'email', placeholder: t('email'), type: 'email' },
    { name: 'phone', placeholder: t('phone'), type: 'text' },
  ] as const;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <section id="contact" className="section-space">
      <div className="container-site rounded-card shadow-card overflow-hidden lg:grid lg:grid-cols-[.95fr_1.05fr]">
        <div className="bg-primary p-8 text-white md:p-11">
          <p className="text-xs font-extrabold tracking-[.18em] text-red-300">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold">{t('title')}</h2>
          <p className="mt-5 leading-7 text-blue-100">{t('intro')}</p>
          <div className="mt-8 grid gap-4">
            {details.map(({ icon: Icon, text, direction }) => (
              <p className="flex items-start gap-3 text-sm" key={text}>
                <Icon className="mt-0.5 shrink-0 text-red-300" size={18} />
                <span dir={direction}>{text}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="grid bg-white md:grid-cols-2">
          <form
            className="grid gap-3 p-7 md:p-9"
            onSubmit={handleSubmit(() => undefined)}
            noValidate
          >
            <h3 className="text-heading font-extrabold md:col-span-2">
              {t('formTitle')}
            </h3>
            {fields.map(({ name, placeholder, type }) => (
              <label
                key={name}
                className={name === 'phone' ? 'md:col-span-2' : ''}
              >
                <span className="sr-only">{placeholder}</span>
                <input
                  className="focus:border-primary w-full rounded-lg border px-3 py-2.5 text-sm transition outline-none"
                  placeholder={placeholder}
                  type={type}
                  dir={
                    name === 'email' || name === 'phone' ? 'auto' : undefined
                  }
                  {...register(name)}
                />
                {errors[name] && (
                  <span className="text-error mt-1 block text-xs">
                    {errors[name]?.message}
                  </span>
                )}
              </label>
            ))}
            <label className="md:col-span-2">
              <span className="sr-only">{t('message')}</span>
              <textarea
                className="focus:border-primary min-h-24 w-full rounded-lg border px-3 py-2.5 text-sm transition outline-none"
                placeholder={t('messagePlaceholder')}
                {...register('message')}
              />
              {errors.message && (
                <span className="text-error mt-1 block text-xs">
                  {errors.message.message}
                </span>
              )}
            </label>
            <Button className="md:col-span-2" variant="secondary" type="submit">
              {t('submit')}
            </Button>
            {isSubmitSuccessful && (
              <p className="text-success text-sm md:col-span-2">
                {t('success')}
              </p>
            )}
          </form>
          <div className="min-h-64 bg-[linear-gradient(135deg,rgba(13,71,161,.14),rgba(255,255,255,.7)),url('https://www.istockphoto.com/photo/map-of-egypt-gm530575066-93475061?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fegypt-map&utm_term=egypt+map%3A%3Asearch-affiliate%3Acontrol%3A24e12d02-96eb-4331-b807-e22ae23fc799')] bg-cover bg-center p-6">
            <div className="flex h-full items-center justify-center">
              <div className="rounded-card shadow-card bg-white p-4 text-center">
                <MapPin className="text-accent mx-auto" />
                <p className="text-heading mt-2 text-xs font-extrabold">
                  <span dir="ltr">Mega Power</span>
                  <br />
                  <span className="text-body font-medium">
                    {t('engineeringSolutions')}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
