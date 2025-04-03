
import React from 'react';
import { Button } from '@/components/ui/button';
import { UserIcon } from 'lucide-react';

interface SocialLoginButtonProps {
  onLogin: () => void;
}

const SocialLoginButton = ({ onLogin }: SocialLoginButtonProps) => {
  return (
    <Button 
      variant="outline" 
      className="w-full mb-4 flex gap-2 items-center justify-center" 
      onClick={onLogin}
    >
      <UserIcon className="h-4 w-4" />
      Sign in with Google
    </Button>
  );
};

export default SocialLoginButton;
