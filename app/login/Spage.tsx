export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-6 flex flex-col md:flex-row gap-8 items-center">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center ">
          <div className="backdrop-blur- text-black 
           rounded-lg p-6 max-w-md space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Fast and secure checkout
              </h2>
              <p className="text-sm opacity-90">
                With Bolt’s checkout, you get a one click, passwordless
                experience that allows you to effortlessly complete your
                purchase.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                One account for a whole network
              </h2>
              <p className="text-sm opacity-90">
                No more managing separate accounts for every online store. You
                can use your Bolt account across all 500+ stores in Bolt’s
                Network.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Shop with peace of mind
              </h2>
              <p className="text-sm ">
                We encrypt and store your information in compliance with PCI
                regulations. Shop easy knowing that retailers do not have access
                to sensitive information.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <header className="mb-6">
              <div className="flex items-center gap-3">
                <h1 className="text- text-gray-900 font-semibold">
                  Login or Sign Up
                </h1>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                Enter your email and password to continue. Don’t have an
                account?{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Create one
                </a>
              </p>
            </header>

            <div className="space-y-4">
              {/* Social Login Buttons */}
              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-200 flex-1" />
                <div className="text-xs text-gray-400">
                  or sign in with email
                </div>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
              <form className="space-y-4">
                <label className="block">
                  <span className="text-sm text-gray-600">Email</span>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="block relative">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Password</span>
                    <a
                      href="#"
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      Forgot?
                    </a>
                  </div>
                  <input
                    type="password"
                    className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2"
                    placeholder="Enter your password"
                  />
                </label>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300"
                    />{" "}
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Need help?
                  </a>
                </div>

                <button
                  type="button"
                  className="w- text-gray-800 border border-gray-200 rounded-lg py-2.5 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
                >
                  Coninue with Google
                </button>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                >
                  Sign in
                </button>
              </form>
              <footer className="mt-4 text-xs text-gray-400">
                By continuing you agree to our{" "}
                <a className="underline">Terms</a> and{" "}
                <a className="underline">Privacy Policy</a>.
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
