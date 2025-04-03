
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { getUserDonationStats } from '@/services/donationService';

const UserDonationStats = () => {
  const { user } = useAuth();
  
  if (!user) {
    return <div>Please log in to view your donation statistics</div>;
  }
  
  const stats = getUserDonationStats(user.id);

  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Your Impact</h2>
      <p className="text-muted-foreground">Track the difference you're making through your generous donations.</p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="stats-card">
          <CardHeader className="pb-2">
            <CardDescription className="stat-label">Total Donations</CardDescription>
            <CardTitle className="donation-amount">${stats.all.total.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">From {stats.all.count} contributions</p>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardHeader className="pb-2">
            <CardDescription className="stat-label">Monthly Giving</CardDescription>
            <CardTitle className="donation-amount">${stats.monthly.total.toLocaleString()}/month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">${stats.monthly.annual.toLocaleString()} yearly impact</p>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardHeader className="pb-2">
            <CardDescription className="stat-label">Annual Giving</CardDescription>
            <CardTitle className="donation-amount">${stats.annual.total.toLocaleString()}/year</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">From {stats.annual.count} annual gifts</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDonationStats;
