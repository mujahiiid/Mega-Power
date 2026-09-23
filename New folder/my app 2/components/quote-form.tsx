'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export function QuoteForm() {
  const t = useTranslations('Contact');
  const locale = useLocale();
  const schema = z.object({
    name: z.string().min(2, t('validation.name')),
    company: z.string().min(2, t('validation.company')),
    email: z.string().email(t('validation.email')),
    phone: z.string().min(7, t('validation.phone')),
    message: z.string().min(10, t('validation.message')),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const fields = [
    ['name', t('name'), 'text'],
    ['company', t('company'), 'text'],
    ['email', t('emailLabel'), 'email'],
    ['phone', t('phoneLabel'), 'tel'],
  ] as const;
  return (
    <form
      className="grid gap-4 rounded-[28px] bg-white p-6 shadow-[0_24px_70px_rgba(11,41,35,.12)] md:grid-cols-2 md:p-9"
      onSubmit={handleSubmit(() => undefined)}
      noValidate
    >
      <h3 className="text-ink text-xl font-extrabold md:col-span-2">
        {t('formTitle')}
      </h3>
      {fields.map(([name, label, type]) => (
        <label key={name} className="block">
          <span className="text-ink mb-1.5 block text-xs font-bold">
            {label}
          </span>
          <input
            className="focus:border-copper w-full rounded-xl border bg-[#fbfaf7] px-4 py-3 text-sm transition outline-none"
            type={type}
            dir={name === 'email' || name === 'phone' ? 'auto' : undefined}
            {...register(name)}
          />
          {errors[name] && (
            <span className="mt-1 block text-xs text-red-700">
              {errors[name]?.message}
            </span>
          )}
        </label>
      ))}
      <label className="md:col-span-2">
        <span className="text-ink mb-1.5 block text-xs font-bold">
          {t('message')}
        </span>
        <textarea
          className="focus:border-copper min-h-28 w-full rounded-xl border bg-[#fbfaf7] px-4 py-3 text-sm transition outline-none"
          {...register('message')}
        />
        {errors.message && (
          <span className="mt-1 block text-xs text-red-700">
            {errors.message.message}
          </span>
        )}
      </label>
      <button
        type="submit"
        className="bg-copper focus-ring flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-extrabold text-white md:col-span-2"
      >
        {t('submit')}{' '}
        <ArrowUpRight
          size={17}
          className={locale === 'ar' ? '-scale-x-100' : undefined}
        />
      </button>
      {isSubmitSuccessful && (
        <p className="text-forest text-sm font-bold md:col-span-2">
          {t('success')}
        </p>
      )}
    </form>
  );
}
