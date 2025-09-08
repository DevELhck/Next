import Image from "next/image";
import BoltCard from "@/components/BoltCard";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#010232] text-white">
      {/* Navbar */}
      <header className="w-full border-b border-[#010232]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">Bolt</div>

          {/* Right-side nav items */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-white hover:underline">
              Login
            </a>
            <a href="#" className="text-white hover:underline">
              Contact Sales
            </a>
            <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-blue-300 transition">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row  items-center mt-20 md:mt-40 max-w-7xl mx-auto px-6">
        {/* Left - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Checkout 2.0 is one click away
          </h1>
          <p className="text-lg mb-2">
            Experience lightning-fast checkout with our seamless solution.
          </p>
          <p className="text-lg mb-9">Updating the payments experience.</p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-blue-300 rounded-full text-black px-6 py-3 text-lg hover:bg-white transition">
              Get Started
            </button>
            <button className="border border-black bg-white text-[#32012F] rounded-full px-6 py-3 text-lg hover:bg-blue-300 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right - Image */}
       <div
  className="w-full md:w-1/2 flex items-center justify-center"
  style={{ backgroundImage: "url('/image/blue.svg')" }}
>
  <Image
    src="/image/slight.webp"
    alt="Checkout 2.0"
    className="w-full h-auto max-w-2xl rounded-lg shadow-lg" 
    width={800} 
    height={1200}
    
  />
</div>

      </main>

      {/* AI Section */}
      <section className="bg-[#010232] text-white pt-16 pb-16 mt-20 relative overflow-hidden">
        <h1 className="text-center text-4xl font-extrabold">BOLT</h1>

        

        {/* Foreground Image at top center */}
        <div className="relative z-10 flex justify-center">
          <Image
            src="/image/checkout.png"
            alt="Checkout 2.0"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
            width={500}
            height={800}
            
          />
        </div>

        {/* Text Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-8">
          <h2 className="text-4xl font-bold mb-4">
            Built on self-learning user profiles.
          </h2>
          <p className="text-sm">
            Checkout 2.0 leverages leading AI to create dynamic profiles that
          </p>
          <p>
            capture preferences, behaviors, and purchase history—forming the
          </p>
          <p>intelligence layer that powers every personalized experience.</p>
          <button className="bg-purple-400 text-black font-bold px-5 py-2 rounded-full hover:bg-gray-200 mt-6">
            Explore Checkout 2.0
          </button>
        </div>
      </section>

      {/* Business Cards */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-blue-400">Supercharge</span> your business
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Card 1 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md md:w-1/3 flex flex-col md:flex-row items-center">
            {/* Left: Text */}
            <div className="flex-1 text-left md:order-1">
              <p className="text-sm text-gray-500 mb-40">The Bolt Network</p>

              <h1 className="text-2xl font-bold leading-tight">
                Connect to over 80 million shoppers
              </h1>

              <p className="mt-3">
                Recognize over 40% of your shoppers instantly—even if they’ve
                never been to your site.
              </p>

              <h3 className="mt-4 text-black font-semibold cursor-pointer">
                More about the Bolt Network
              </h3>
            </div>

            {/* Right: Image */}
            <div className="flex-1 flex justify-center mb-4 md:mb-0 md:order-2">
              <Image
                src="/image/Millions.svg"
                alt="Millions shoppers"
                className="w-full max-w-[250px] h-auto"
                width={250}
                height={250}
                priority
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md md:w-1/3 flex flex-col md:flex-row items-center">
            {/* Left: Text */}
            <div className="flex-1 text-left md:order-1">
              <p className="text-sm text-gray-500 mb-40">The Bolt Network</p>

              <h1 className="text-2xl font-bold leading-tight">
                Let shoppers buy where they browse
              </h1>

              <p className="mt-3">
                Recognize over 40% of your shoppers instantly—even if they’ve
                never been to your site.
              </p>

              <h3 className="mt-4 text-black font-semibold cursor-pointer">
                More about the Bolt Network
              </h3>
            </div>

            {/* Right: Image */}
            <div className="flex-1 flex justify-center mb-4 md:mb-0 md:order-2">
              <Image
                src="/image/anywhere.svg"
                alt="Anywhere shoppers"
                className="w-full max-w-[250px] h-auto"
                width={250}
                height={250}
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="mt-20 text-4xl font-bold text-center space-y-2 px-6">
        <h2>Create lifetime customers,</h2>
        <h2>One checkout at a time</h2>
      </section>
      <div className="text-center px-6 py-3 mt-10">
        <h1 className="text-4xl font-bold mb-5">Bolt Checkout</h1>
        <p>Meet the only solution that helps you identify</p>
        <p>shoppers, power passwordless login, and convert</p>
        <p>customers—all within your existing tech stack.</p>
        <p>More about Bolt Checkout </p>
      </div>

      <div className="flex bg-gray-300 text-black min-h-screen flex-col items-center justify-center gap-8 p-10">
        {/* First section: Image card + Text card side-by-side */}
        <section className="mt-20 px-6 w-full max-w-5xl">
          {/* This flex makes the image and text separate cards with a gap */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left card (Image) */}
            <div className="rounded-lg shadow-lg overflow-hidden flex-1 flex items-center justify-center p-4">
              <Image
                src="/image/revolve.webp"
                alt="revolve"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                
              />
            </div>

            {/* Right card (Words) */}
            <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden flex-1 p-6 flex flex-col justify-center">
              <h3 className="text-gray-700 text-2xl font-semibold mt-7 mb-4 leading-relaxed">
                Integrating bolt was remarkably smooth and swift endeavour
                requiring minimal efforts and allowing us to priotize our
                ongoing initiatives without skipping a beat
              </h3>

              <p>Jon stam</p>
              <p>VP of operational revolve</p>
             
            </div>
          </div>
        </section>

        {/* Second section: Bolt cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
          <BoltCard
            title="Bloomberg"
            descriptions="Bolt raises $100M in latest funding round."
            date="Aug 8, 2025"
            image="/images/bloomberg.jpg"
          />
          <BoltCard
            title="TechCrunch"
            descriptions="Bolt expands into new European markets."
            date="Aug 7, 2025"
            image="/images/techcrunch.jpg"
          />
          <BoltCard
            title="Forbes"
            descriptions="Why Bolt is the fastest-growing mobility platform."
            date="Aug 5, 2025"
            image="/images/forbes.jpg"
          />
        </div>
        <button className="bg-blue-600 text-black font-bold px-5 py-2 rounded-full hover:bg-teal-200 mt-6 mb-20">
          View more
        </button>

        <Image
          src="/image/hometiger.svg"
          alt="hometiger"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
          
        />
        <div className="text-4xl font-extrabold">
          <h1>The best checkout</h1>
          <h1>for your brand</h1>
        </div>

        <p>
          Learn more about how Bolt can empower your business, whether by
          augmenting <br />
          your existing shopping experiences or handling end-to-end checkout for
          you.
        </p>

        <button className="bg-blue-600 text-black font-bold px-5 py-2 rounded-full hover:bg-teal-200 mt-6 mb-20">
          Get started
        </button>
      </div>
      <footer className="bg-gray-800 text-white py-6 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p> 2025 Bolt. All rights reserved.</p>
          <p>
            Follow us on{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Twitter
            </a>
            ,{" "}
            <a href="#" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
            , and{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Facebook
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
