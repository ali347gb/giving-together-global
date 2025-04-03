
// Types for donations
export interface Donation {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  date: Date;
  frequency: 'one-time' | 'monthly' | 'annual';
  cause: string;
}

// Mock data for donations
const mockDonations: Donation[] = [
  {
    id: '1',
    userId: '1',
    amount: 50,
    currency: 'USD',
    date: new Date('2023-10-15'),
    frequency: 'one-time',
    cause: 'Education'
  },
  {
    id: '2',
    userId: '1',
    amount: 25,
    currency: 'USD',
    date: new Date('2023-11-15'),
    frequency: 'monthly',
    cause: 'Healthcare'
  },
  {
    id: '3',
    userId: '1',
    amount: 300,
    currency: 'USD',
    date: new Date('2023-12-01'),
    frequency: 'annual',
    cause: 'Climate Change'
  },
  {
    id: '4',
    userId: '2',
    amount: 100,
    currency: 'USD',
    date: new Date('2023-11-20'),
    frequency: 'one-time',
    cause: 'Disaster Relief'
  },
  {
    id: '5',
    userId: '3',
    amount: 20,
    currency: 'USD',
    date: new Date('2023-12-05'),
    frequency: 'monthly',
    cause: 'Food Security'
  },
  {
    id: '6',
    userId: '4',
    amount: 500,
    currency: 'USD',
    date: new Date('2023-09-15'),
    frequency: 'annual',
    cause: 'Animal Welfare'
  },
  {
    id: '7',
    userId: '5',
    amount: 75,
    currency: 'USD',
    date: new Date('2023-11-01'),
    frequency: 'one-time',
    cause: 'Water Sanitation'
  },
  {
    id: '8',
    userId: '6',
    amount: 30,
    currency: 'USD',
    date: new Date('2023-10-20'),
    frequency: 'monthly',
    cause: 'Education'
  },
];

// Get all donations
export const getAllDonations = (): Donation[] => {
  return mockDonations;
};

// Get donations by user ID
export const getDonationsByUserId = (userId: string): Donation[] => {
  return mockDonations.filter(donation => donation.userId === userId);
};

// Add a new donation
export const addDonation = (donation: Omit<Donation, 'id'>): Donation => {
  const newDonation = {
    ...donation,
    id: Math.random().toString(36).substring(2, 9)
  };
  mockDonations.push(newDonation);
  return newDonation;
};

// Get donation statistics
export const getDonationStats = () => {
  const today = new Date();
  const dayStart = new Date(today.setHours(0, 0, 0, 0));
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const yearStart = new Date(today.getFullYear(), 0, 1);
  
  const dailyDonations = mockDonations.filter(d => new Date(d.date) >= dayStart);
  const monthlyDonations = mockDonations.filter(d => new Date(d.date) >= monthStart);
  const yearlyDonations = mockDonations.filter(d => new Date(d.date) >= yearStart);
  const allDonations = mockDonations;
  
  return {
    daily: {
      count: dailyDonations.length,
      total: dailyDonations.reduce((sum, d) => sum + d.amount, 0)
    },
    monthly: {
      count: monthlyDonations.length,
      total: monthlyDonations.reduce((sum, d) => sum + d.amount, 0)
    },
    yearly: {
      count: yearlyDonations.length,
      total: yearlyDonations.reduce((sum, d) => sum + d.amount, 0)
    },
    total: {
      count: allDonations.length,
      total: allDonations.reduce((sum, d) => sum + d.amount, 0)
    }
  };
};

// Get user donation statistics
export const getUserDonationStats = (userId: string) => {
  const userDonations = getDonationsByUserId(userId);
  
  const onetime = userDonations.filter(d => d.frequency === 'one-time');
  const monthly = userDonations.filter(d => d.frequency === 'monthly');
  const annual = userDonations.filter(d => d.frequency === 'annual');
  
  return {
    onetime: {
      count: onetime.length,
      total: onetime.reduce((sum, d) => sum + d.amount, 0)
    },
    monthly: {
      count: monthly.length,
      total: monthly.reduce((sum, d) => sum + d.amount, 0),
      annual: monthly.reduce((sum, d) => sum + d.amount * 12, 0)
    },
    annual: {
      count: annual.length,
      total: annual.reduce((sum, d) => sum + d.amount, 0)
    },
    all: {
      count: userDonations.length,
      total: userDonations.reduce((sum, d) => sum + d.amount, 0)
    }
  };
};
