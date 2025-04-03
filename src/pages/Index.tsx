
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import DonationStats from '@/components/donations/DonationStats';
import { Heart, Users, ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Making a difference, <span className="text-primary">together</span>
              </h1>
              <p className="text-lg text-gray-600">
                Join our global community of donors working to make the world a better place.
                Track your impact and see how collective giving creates meaningful change.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => navigate('/donate')}
                  className="flex items-center gap-2"
                  size="lg"
                >
                  <Heart className="h-5 w-5" />
                  Make a Donation
                </Button>
                <Button
                  onClick={() => navigate('/login')}
                  variant="outline"
                  size="lg"
                >
                  Join our Community
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="People making a difference together" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <DonationStats />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to track your giving and see your impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
              <p className="text-gray-600">
                Create an account and become part of our global giving community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Make Donations</h3>
              <p className="text-gray-600">
                Choose a cause and make one-time, monthly, or annual donations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Your Impact</h3>
              <p className="text-gray-600">
                See your personal impact and how it contributes to our collective giving.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={() => navigate('/donate')}
              variant="outline"
              className="group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to make a difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of donors who are tracking their giving and creating positive change around the world.
          </p>
          <Button 
            onClick={() => navigate('/donate')}
            variant="secondary"
            size="lg"
          >
            Make Your First Donation
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
