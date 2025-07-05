import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from './ui/home.module.css'
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import desktopImage from '../public/hero-desktop.png'
import mobileImage from "../public/hero-mobile.png";


export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6">
          <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
              <AcmeLogo />
          </div>
          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
              <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                  <div className={styles.shape} />
                  <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                      <strong>Welcome to Acme.</strong> This is the example for the{" "}
                      <a href="https://nextjs.org/learn/" className="text-blue-500">
                          Next.js Learn Course
                      </a>
                      , brought to you by Vercel.
                  </p>
                  <p className={``}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                  </p>
                  <Link href="/login" className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
                      <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                  </Link>
              </div>
              <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                  <Image src={desktopImage} width={1000} height={760} className="hidden lg:block" alt="Screenshots of the dashboard project showing desktop version" />
                  <Image src={mobileImage} width={560} height={620} className="md:hidden" alt="Screenshots of the dashboard project showing desktop version" />
              </div>
          </div>
      </main>
  );
}
