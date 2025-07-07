import dynamic from 'next/dynamic';

const ToiletMap = dynamic(() => import('../components/ToiletMap'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Public Toilet Finder</h1>
      <ToiletMap />
    </div>
  );
}