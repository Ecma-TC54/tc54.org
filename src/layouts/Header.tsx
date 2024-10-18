import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import GlobalStyles from '../components/GlobalStyles.astro';
import {
  ArrowPathIcon,
  Bars3Icon,
  CubeTransparentIcon,
  FingerPrintIcon,
  QueueListIcon,
  RectangleGroupIcon,
  RectangleStackIcon,
  ShareIcon,
  SquaresPlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';
import CycloneDXIcon from "@/icons/CycloneDXIcon";
import classNames from 'classnames';

const specifications = [
  {
    name: 'CycloneDX',
    standard: "ECMA-424",
    description: 'Bill of Materials (BOM) Standard',
    href: '/cyclonedx',
    icon: CycloneDXIcon,
  },
  {
    name: 'Package-URL',
    description: 'Identify and locate software packages',
    href: '/purl',
    icon: FingerPrintIcon,
  },
  {
    name: 'Vers',
    description: 'Universal version range specification',
    href: '/vers',
    icon: RectangleStackIcon,
  },
  {
    name: 'Transparency Exchange API',
    description: 'Share supply chain artifacts and intelligence',
    href: '/tea',
    icon: ShareIcon,
  },
  {
    name: 'Common Lifecycle Enumeration',
    description: 'Track product lifecycle events and milestones',
    href: '/cle',
    icon: QueueListIcon,
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white z-50">
      <nav
          className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
          aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ecma TC54</span>
            <img
                src="/images/logo.svg"
                alt=""
                width="90px"
                height="90px"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 mr-6" aria-hidden="true"/>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <div className="dropdown inline-block relative">
            <button className="inline-flex items-center">
              <span className="text-md font-semibold text-gray-900">Specifications</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </button>
            <div
                className="p-4 dropdown-menu absolute hidden absolute -left-8 top-full z-10 w-screen max-w-md rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
              {specifications.map((item) => (
                  <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div
                        className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-orange-500"
                          aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                          href={item.href}
                          className="no-underline block font-semibold text-gray-900"
                      >
                        <div className="flex justify-between">
                          <span>{item.name}</span>
                          {item.standard && <span className="font-normal text-gray-600 group-hover:text-orange-500">{item.standard}</span>}
                        </div>
                        <span className="absolute inset-0"/>
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <a href="/contribute" className="no-underline text-md font-semibold leading-6 text-gray-900">Contribute</a>
          <a href="/history" className="no-underline text-md font-semibold leading-6 text-gray-900">History</a>
        </div>


        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://twitter.com/EcmaTC54" className="mr-3">
            <svg viewBox="0 0 30 30" width="30" height="30" aria-hidden="true" className="h-6 w-6 fill-slate-900">
              <path
                  d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/>
            </svg>
          </a>
          <a href="https://github.com/Ecma-TC54">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-slate-900">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10"/>
        <Dialog.Panel
            className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ecma TC54</span>
              <img
                  className="h-8 w-auto"
                  src="/images/logo.svg"
                  alt=""
              />
            </a>
            <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({open}) => (
                      <>
                        <Disclosure.Button
                            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                          Specifications
                          <ChevronDownIcon
                              className={classNames(
                                  open ? 'rotate-180' : '',
                                  'h-5 w-5 flex-none',
                              )}
                              aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {[...specifications].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/contribute"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contribute
                </a>
                <a
                  href="/history"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  History
                </a>
              </div>
              <div className="py-6">
                <a href="https://twitter.com/EcmaTC54" className="mr-3"><svg viewBox="0 0 30 30" width="30" height="30" aria-hidden="true" className="h-6 w-6 fill-slate-900"><path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg></a>
                <a href="https://github.com/Ecma-TC54"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-slate-900"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg></a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
