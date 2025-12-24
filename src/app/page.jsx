import { PostCard } from "@/components"; // Import the component
import { dummyPosts } from "@/data/post"; // Import the data

export default function HomePage(){
  return (
    <div className="min-h-screen text-white p-1 space-y-4 max-w-2xl mx-auto">
      
      {/* Map through the data and render a PostCard for each item */}
      {dummyPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

    </div>
  );
}