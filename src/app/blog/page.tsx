import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Huntlee | Блог',
  description: 'Ваша система найма под любые задачи',
};

export default function AboutPage() {
  return <div className="container-full mx-auto">Блог</div>;
}
