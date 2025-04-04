import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Huntlee | Тарифы',
  description: 'Ваша система найма под любые задачи',
};

export default function AboutPage() {
  return <div className="container-full mx-auto">Тарифы</div>;
}
