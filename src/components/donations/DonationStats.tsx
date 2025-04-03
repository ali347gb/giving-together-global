
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getDonationStats } from '@/services/donationService';

const DonationStats = () => {
  const stats = getDonationStats();

  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Global Impact</h2>
      <p className="text-muted-foreground">Together we're making a difference around the world.</p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="stats-card">
          <CardHeader className="pb-2">
            <CardDescription className="stat-label">Today</CardDescription>
            <CardTitle className="donation-amount">${stats.daily.total.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">From {stats.daily.count} donations</p>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardHeader className="pb-2">
            <CardDescription className="stat-label">This Month</CardDescription>
            <CardTitle className="donation-amount">${stats.monthly.total.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">From {stats.monthly.count} donations</p>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardHeader className="pb-2">
            <CardDescription className="stat-label">This Year</CardDescription>
            <CardTitle className="donation-amount">${stats.yearly.total.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">From {stats.yearly.count} donations</p>
          </CardContent>
        </Card>
        
        <Card className="stats-card">
          <CardHeader className="pb-2">
            <CardDescription className="stat-label">All Time</CardDescription>
            <CardTitle className="donation-amount">${stats.total.total.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">From {stats.total.count} donations</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonationStats;
