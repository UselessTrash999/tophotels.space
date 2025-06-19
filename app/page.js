import Link from 'next/link';
import { getHotels, getPosts } from '../lib/data';

export default function HomePage() {
  const featuredHotels = getHotels().slice(0, 3);
  const latestPosts = getPosts().slice(0, 3); // Increased to show more posts

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-800 text-white">
        {/* Using a specific hotel image for the hero gives it more character */}
        <img src="/rosewood-hongkong.jpg" alt="Luxury hotel with a view" className="absolute inset-0 w-full h-full object-cover opacity-50"/>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Discover the World's Finest Hotels
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Your expert guide to the best luxury, design, and boutique hotels worldwide.
          </p>
        </div>
      </section>

      {/* Featured Hotels Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Hotels</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel) => (
              <Link href={`/hotel/${hotel.id}`} key={hotel.id} className="group block">
                <div className="overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300 bg-white">
                  <img src={hotel.image_url} alt={hotel.name} className="w-full h-56 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <p className="text-gray-600 mt-1">{hotel.city}, {hotel.country}</p>
                    <p className="mt-2 text-sm font-mono">{hotel.price_level}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
          <div className="space-y-8">
            {latestPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group block">
                 <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold group-hover:text-indigo-600">{post.title}</h3>
                    <p className="text-gray-600 mt-2 line-clamp-2">
                      {post.content_markdown.split('\n').find(line => !line.startsWith('#') && line.trim() !== '')}
                    </p>
                    <span className="text-indigo-500 font-semibold mt-4 inline-block">Read more &rarr;</span>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
