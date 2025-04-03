
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/context/AuthContext';
import { getDonationsByUserId, Donation } from '@/services/donationService';

const DonationHistory = () => {
  const { user } = useAuth();
  const [donations, setDonations] = useState<Donation[]>(() => 
    user ? getDonationsByUserId(user.id) : []
  );
  
  if (!user) {
    return <div>Please log in to view your donation history</div>;
  }
  
  if (donations.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Donation History</CardTitle>
          <CardDescription>You haven't made any donations yet.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Donation History</CardTitle>
        <CardDescription>Your past contributions</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Frequency</TableHead>
              <TableHead>Cause</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell>{new Date(donation.date).toLocaleDateString()}</TableCell>
                <TableCell>${donation.amount.toLocaleString()}</TableCell>
                <TableCell className="capitalize">{donation.frequency}</TableCell>
                <TableCell>{donation.cause}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DonationHistory;
