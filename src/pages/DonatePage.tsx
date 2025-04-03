
import Layout from '@/components/layout/Layout';
import DonationForm from '@/components/donations/DonationForm';
import { Separator } from '@/components/ui/separator';

const DonatePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Support a Cause</h1>
          <p className="mt-2 text-gray-600">Your generosity helps create positive change in the world.</p>
        </div>
        
        <Separator className="my-8" />
        
        <DonationForm />
      </div>
    </Layout>
  );
};

export default DonatePage;
