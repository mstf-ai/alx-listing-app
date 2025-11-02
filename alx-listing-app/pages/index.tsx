import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { APP_TITLE } from '../constants';

export default function Home() {
  return (
    <div className="p-8">
      <Head>
        <title>{APP_TITLE}</title>
      </Head>

      <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to {APP_TITLE}</h1>
      <p className="text-gray-700 mb-8">Your Airbnb clone listing page built with Next.js and Tailwind CSS.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Beach House"
          image="/assets/house1.jpg"
          description="A cozy beach house with a sea view."
        />
        <Card
          title="Mountain Cabin"
          image="/assets/house2.jpg"
          description="Peaceful cabin surrounded by nature."
        />
        <Card
          title="City Apartment"
          image="/assets/house3.jpg"
          description="Modern apartment in the city center."
        />
      </div>

      <div className="mt-8">
        <Button label="Book Now" onClick={() => alert('Booking...')} />
      </div>
    </div>
  );
}
