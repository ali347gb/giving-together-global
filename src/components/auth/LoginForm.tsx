
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import SocialLoginButton from './SocialLoginButton';
import EmailLoginForm from './EmailLoginForm';
import PhoneLoginForm from './PhoneLoginForm';

interface FormData {
  email: string;
  password: string;
  phoneNumber: string;
  countryCode: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    phoneNumber: '',
    countryCode: '+1'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and authenticate with a backend
    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate successful login
    login({
      id: '1',
      name: formData.email.split('@')[0],
      email: formData.email,
    });
    
    toast({
      title: "Success",
      description: "You've been logged in successfully",
    });
    
    navigate('/profile');
  };

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate and authenticate with a backend
    if (!formData.phoneNumber) {
      toast({
        title: "Error",
        description: "Please enter your phone number",
        variant: "destructive"
      });
      return;
    }

    // Simulate successful login with email, as the User type requires email
    const phoneNumber = `${formData.countryCode}${formData.phoneNumber}`;
    login({
      id: '2',
      name: "Phone User",
      email: `phone-user-${phoneNumber}@example.com`, // Add dummy email to satisfy type
      phoneNumber: phoneNumber,
    });
    
    toast({
      title: "Success",
      description: "You've been logged in successfully",
    });
    
    navigate('/profile');
  };

  const handleGoogleLogin = () => {
    // In a real app, you would integrate with Google OAuth
    login({
      id: '3',
      name: "Google User",
      email: "googleuser@example.com",
      avatar: "https://i.pravatar.cc/150?img=3"
    });
    
    toast({
      title: "Success",
      description: "You've been logged in with Google successfully",
    });
    
    navigate('/profile');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-primary">Welcome Back</CardTitle>
        <CardDescription className="text-center">Sign in to continue your journey of giving</CardDescription>
      </CardHeader>
      <CardContent>
        <SocialLoginButton onLogin={handleGoogleLogin} />

        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </TabsTrigger>
            <TabsTrigger value="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email">
            <EmailLoginForm 
              email={formData.email}
              password={formData.password}
              onChange={handleChange}
              onSubmit={handleEmailLogin}
            />
          </TabsContent>

          <TabsContent value="phone">
            <PhoneLoginForm
              phoneNumber={formData.phoneNumber}
              countryCode={formData.countryCode}
              onChange={handleChange}
              onSubmit={handlePhoneLogin}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <p className="text-center text-sm text-muted-foreground w-full">
          Don't have an account?{" "}
          <a href="#" className="text-primary font-medium hover:underline">
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
