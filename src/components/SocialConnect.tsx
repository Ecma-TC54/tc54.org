import { CalendarDaysIcon, HandRaisedIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function SocialConnect() {

  function btnClickGetInvite() {
    window.open('https://cyclonedx.org/slack/invite');
  }

  function btnClickConnect() {
    window.open('https://cyclonedx.org/slack');
  }

  return (
    <div
      className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"
      id="newsletter"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Connect on Slack
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Join ongoing discussions and connect with the largest community of SBOM adopters, supporters, and enthusiasts.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 py-2.5 px-12 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  onClick={btnClickConnect} >
                Connect
              </button>
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 py-2.5 px-12 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={btnClickGetInvite} >
                Get Invite
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-1 lg:pt-2">
            <div className="flex flex-col items-start mx-auto hidden lg:block">
              <img src="/images/connectivity.svg" alt="Connectivity Abstract Image" width="200"/>
            </div>
          </dl>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9089FC" />
            <stop offset={1} stopColor="#FF80B5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
