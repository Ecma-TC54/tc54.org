export default function Footer() {
  return (
    <footer className="py-16 text-sm leading-6 bg-stone-200">
      <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
        <div className="flex flex-col md:flex-row justify-between text-center">
          <div className="pt-10 mx-auto md:mx-0">
            <a href="https://ecma-international.org/"><img src="/images/ecma.svg" alt="Ecma Logo" width="200" /></a>
          </div>
          <div className="pt-10 mb-auto mt-auto md:mx-0">
            &copy; Ecma International
          </div>
        </div>
      </div>
    </footer>
  );
}
