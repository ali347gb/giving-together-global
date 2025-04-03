
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Google, Mail, Phone } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

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

    // Simulate successful login
    login({
      id: '2',
      name: "Phone User",
      phoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
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
        <Button 
          variant="outline" 
          className="w-full mb-4 flex gap-2 items-center justify-center" 
          onClick={handleGoogleLogin}
        >
          <Google className="h-4 w-4" />
          Sign in with Google
        </Button>

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
            <form onSubmit={handleEmailLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Sign In with Email</Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="phone">
            <form onSubmit={handlePhoneLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <div className="flex">
                    <Input
                      id="countryCode"
                      name="countryCode"
                      type="text"
                      placeholder="+1"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-20 mr-2"
                    />
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="555-123-4567"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="flex-1"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">Sign In with Phone</Button>
              </div>
            </form>
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
