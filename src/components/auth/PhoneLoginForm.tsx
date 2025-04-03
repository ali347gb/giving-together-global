
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PhoneLoginFormProps {
  phoneNumber: string;
  countryCode: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PhoneLoginForm = ({
  phoneNumber,
  countryCode,
  onChange,
  onSubmit
}: PhoneLoginFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <div className="flex">
            <Input
              id="countryCode"
              name="countryCode"
              type="text"
              placeholder="+1"
              value={countryCode}
              onChange={onChange}
              className="w-20 mr-2"
            />
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="555-123-4567"
              value={phoneNumber}
              onChange={onChange}
              className="flex-1"
              required
            />
          </div>
        </div>
        <Button type="submit" className="w-full">Sign In with Phone</Button>
      </div>
    </form>
  );
};

export default PhoneLoginForm;
