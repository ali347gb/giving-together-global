
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { addDonation } from '@/services/donationService';

interface DonationFormData {
  amount: number;
  currency: string;
  frequency: 'one-time' | 'monthly' | 'annual';
  cause: string;
}

const DonationForm = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState<DonationFormData>({
    amount: 50,
    currency: 'USD',
    frequency: 'one-time',
    cause: 'Education'
  });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      amount: Number(e.target.value)
    });
  };

  const handleRadioChange = (value: 'one-time' | 'monthly' | 'annual') => {
    setFormData({
      ...formData,
      frequency: value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      cause: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to make a donation",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    // Add the donation
    addDonation({
      userId: user.id,
      amount: formData.amount,
      currency: formData.currency,
      date: new Date(),
      frequency: formData.frequency,
      cause: formData.cause
    });

    toast({
      title: "Donation Successful",
      description: `Thank you for your ${formData.frequency} donation of $${formData.amount}!`,
    });

    // Reset the form or navigate
    navigate('/profile');
  };

  const presetAmounts = [25, 50, 100, 250, 500];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-primary">Make a Donation</CardTitle>
        <CardDescription className="text-center">Your generosity makes a difference</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Select Amount</Label>
            <div className="grid grid-cols-5 gap-2">
              {presetAmounts.map(amount => (
                <Button
                  key={amount}
                  type="button"
                  variant={formData.amount === amount ? "default" : "outline"}
                  className="h-12"
                  onClick={() => setFormData({ ...formData, amount })}
                >
                  ${amount}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-amount">Or Enter Custom Amount</Label>
            <div className="flex items-center">
              <span className="mr-2 text-lg">$</span>
              <Input
                id="custom-amount"
                type="number"
                value={formData.amount}
                onChange={handleAmountChange}
                min={1}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Donation Frequency</Label>
            <RadioGroup 
              defaultValue={formData.frequency} 
              onValueChange={handleRadioChange as (value: string) => void}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time" className="cursor-pointer">One-time donation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly" className="cursor-pointer">Monthly donation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="annual" id="annual" />
                <Label htmlFor="annual" className="cursor-pointer">Annual donation</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cause">Select a Cause</Label>
            <Select defaultValue={formData.cause} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a cause" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Climate Change">Climate Change</SelectItem>
                <SelectItem value="Disaster Relief">Disaster Relief</SelectItem>
                <SelectItem value="Food Security">Food Security</SelectItem>
                <SelectItem value="Animal Welfare">Animal Welfare</SelectItem>
                <SelectItem value="Water Sanitation">Water Sanitation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">Complete Donation</Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center text-xs text-muted-foreground">
        All transactions are secure and encrypted
      </CardFooter>
    </Card>
  );
};

export default DonationForm;
