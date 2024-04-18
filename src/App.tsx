function App() {
  return (
    <>
      <div className="flex h-screen ">
        <div className="w-1/2 min-w-80 m-auto font-mono ring-1 ring-slate-200 dark:ring-0 text-center rounded-lg shadow-xl p-6  dark:text-white text-slate-800 dark:bg-white dark:bg-opacity-5">
          <picture>
            <source
              srcSet="/logo-whiteout.png"
              media="(prefers-color-scheme:dark)"
            />
            <img className="w-1/2 mx-auto" src="/logo.png" />
          </picture>
          <h1 className="text-xl m-5">Website coming soon</h1>
          <p className="m-2">
            <a
              className="underline dark:hover:text-blue-500 hover:text-green-500"
              href="mailto:hello@xtg.global"
            >
              hello@xtg.global
            </a>
          </p>
          <p className="m-2">
            <a
              className="underline dark:hover:text-blue-500 hover:text-green-500"
              href="tel:+441613991787"
            >
              +44-161-399-1787
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
