import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "../components/common/PostModal";
import { Post } from "../interfaces";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (title: string, content: string) => {
    const newPost: Post = {
      id: Date.now(),
      title,
      content,
      authorId: 1, // Assuming a default author
      publishedAt: new Date(),
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Post
      </button>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-300 p-4 rounded">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
            <small className="text-gray-500">
              Published at: {post.publishedAt.toLocaleString()}
            </small>
          </div>
        ))}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Home;
