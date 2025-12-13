import Header from '@/components/layout/Header';

export default function Posts() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <p>This is the posts page.</p>
      </div>
    </div>
  );
}