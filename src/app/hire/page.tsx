import Link from 'next/link';

export const metadata = {
  title: 'Hire Designers - D2C Connect',
  description: 'Find and hire talented freelance designers for your D2C brand. Browse portfolios, connect with designers, and start your project.',
};

export default function HirePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Designer</h1>
            <p className="text-xl text-gray-600">Connect with talented designers specialized in D2C brands</p>
          </div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                placeholder="Search designers..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option value="">All Categories</option>
                <option value="branding">Branding</option>
                <option value="packaging">Packaging</option>
                <option value="web">Web Design</option>
                <option value="social">Social Media</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Designers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Designer Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-gray-600 mb-4">Branding & Packaging Specialist</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-gray-600">(4.9)</span>
                </div>
                <Link href="/hire/sarah" className="block text-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  View Profile
                </Link>
              </div>
            </div>

            {/* Designer Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mike Chen</h3>
                <p className="text-gray-600 mb-4">Web & UI/UX Designer</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-gray-600">(4.8)</span>
                </div>
                <Link href="/hire/mike" className="block text-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  View Profile
                </Link>
              </div>
            </div>

            {/* Designer Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Emma Davis</h3>
                <p className="text-gray-600 mb-4">Social Media & Content Designer</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-gray-600">(4.7)</span>
                </div>
                <Link href="/hire/emma" className="block text-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-xl text-gray-600 mb-8">Post your project and let designers come to you</p>
          <Link href="/post-project" className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition">
            Post a Project
          </Link>
        </div>
      </section>
    </div>
  );
} 