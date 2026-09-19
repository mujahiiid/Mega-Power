'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  phone: z.string().min(7, 'Please enter a phone number.'),
  message: z.string().min(10, 'Tell us a little more about your project.'),
});
type FormData = z.infer<typeof schema>;
const details = [
  [Phone, '010 2780 2400'],
  [Mail, 'megapow.co1@gmail.com'],
  [MapPin, '129 Industrial Zone, 6th of October City'],
  [Clock3, 'Sat–Thu: 8:00 AM – 6:00 PM'],
];
export function Contact() {
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
            GET IN TOUCH
          </p>
          <h2 className="mt-3 text-3xl font-extrabold">
            Let&apos;s Work Together
          </h2>
          <p className="mt-5 leading-7 text-blue-100">
            Have a project in mind? Contact us today and our team will get back
            to you as soon as possible.
          </p>
          <div className="mt-8 grid gap-4">
            {details.map(([Icon, text]) => {
              const I = Icon as typeof Phone;
              return (
                <p className="flex items-start gap-3 text-sm" key={text}>
                  <I className="mt-0.5 shrink-0 text-red-300" size={18} />
                  {text}
                </p>
              );
            })}
          </div>
        </div>
        <div className="grid bg-white md:grid-cols-2">
          <form
            className="grid gap-3 p-7 md:p-9"
            onSubmit={handleSubmit(() => undefined)}
            noValidate
          >
            <h3 className="text-heading font-extrabold md:col-span-2">
              Start a conversation
            </h3>
            {[
              ['name', 'Your name'],
              ['email', 'Your email'],
              ['phone', 'Your phone'],
            ].map(([name, placeholder]) => (
              <label
                key={name}
                className={name === 'phone' ? 'md:col-span-2' : ''}
              >
                <span className="sr-only">{placeholder}</span>
                <input
                  className="focus:border-primary w-full rounded-lg border px-3 py-2.5 text-sm transition outline-none"
                  placeholder={placeholder}
                  type={name === 'email' ? 'email' : 'text'}
                  {...register(name as keyof FormData)}
                />
                {errors[name as keyof FormData] && (
                  <span className="text-error mt-1 block text-xs">
                    {errors[name as keyof FormData]?.message}
                  </span>
                )}
              </label>
            ))}
            <label className="md:col-span-2">
              <span className="sr-only">Project details</span>
              <textarea
                className="focus:border-primary min-h-24 w-full rounded-lg border px-3 py-2.5 text-sm transition outline-none"
                placeholder="Write your message here..."
                {...register('message')}
              />
              {errors.message && (
                <span className="text-error mt-1 block text-xs">
                  {errors.message.message}
                </span>
              )}
            </label>
            <Button className="md:col-span-2" variant="secondary" type="submit">
              Send Message
            </Button>
            {isSubmitSuccessful && (
              <p className="text-success text-sm md:col-span-2">
                Thank you. We&apos;ll be in touch shortly.
              </p>
            )}
          </form>
          <div className="min-h-64 bg-[linear-gradient(135deg,rgba(13,71,161,.14),rgba(255,255,255,.7)),url('https://www.istockphoto.com/photo/map-of-egypt-gm530575066-93475061?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fegypt-map&utm_term=egypt+map%3A%3Asearch-affiliate%3Acontrol%3A24e12d02-96eb-4331-b807-e22ae23fc799')] bg-cover bg-center p-6">
            <div className="flex h-full items-center justify-center">
              <div className="rounded-card shadow-card bg-white p-4 text-center">
                <MapPin className="text-accent mx-auto" />
                <p className="text-heading mt-2 text-xs font-extrabold">
                  Mega Power
                  <br />
                  <span className="text-body font-medium">
                    Engineering Solutions
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
