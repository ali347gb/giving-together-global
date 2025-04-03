
import Layout from '@/components/layout/Layout';
import LoginForm from '@/components/auth/LoginForm';

const LoginPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-md">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
