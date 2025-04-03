
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import UserDonationStats from '@/components/donations/UserDonationStats';
import DonationHistory from '@/components/donations/DonationHistory';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Share } from 'lucide-react';

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
            <p className="text-gray-600">Manage your donations and track your impact</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => navigate('/donate')}
            >
              <Heart className="h-4 w-4" />
              Make a Donation
            </Button>
            <Button
              variant="ghost"
              className="flex items-center gap-2"
            >
              <Share className="h-4 w-4" />
              Share Impact
            </Button>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="mb-10">
          <UserDonationStats />
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="history">Donation History</TabsTrigger>
            <TabsTrigger value="recurring">Recurring Donations</TabsTrigger>
          </TabsList>
          <TabsContent value="history">
            <DonationHistory />
          </TabsContent>
          <TabsContent value="recurring">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Recurring Donations</h3>
              <p className="text-gray-600">
                You don't have any active recurring donations. Start making a difference by setting up a monthly or annual donation.
              </p>
              <Button
                className="mt-4"
                onClick={() => navigate('/donate')}
              >
                Set Up Recurring Donation
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProfilePage;
