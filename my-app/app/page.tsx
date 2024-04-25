import React from "react";

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* ヘッダー */}
      <header>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="https://tailwindtemplates.io/">
            <h1 className="text-xl font-semibol hover:opacity-75">
              TailwindTamplates
            </h1>
          </a>
          <nav>
            <ul className="flex space-x-32 letter">
              <li>
                <a
                  href="https://tailwindtemplates.io/templates"
                  className="hover:opacity-75"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="https://www.knowies.com/collections/77d247ce-14fd-11eb-91a4-5616ea45b6fe"
                  className="hover:opacity-75"
                >
                  Resouces
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindtemplates.io/blog"
                  className="hover:opacity-75"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindtemplates.io/about"
                  className="hover:opacity-75"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container mx-auto px-6 mt-16"></div>
      </header>

      {/* メインコンテンツ */}

      <main className="flex-1 container mx-auto px-4 py-8">
        <img
          src="images/white.png"
          className="object-cover h-1/4 w-full border rounded-lg shadow-lg"
        />

        <div className="w-11/12 md:w-10/12 lg:w-1/2 mx-auto">
          <div className="bg-blue-100 inline-block py-1 px-4 rounded-xl mb-6">
            <p className="text-blue-500 font-bold">Update</p>
          </div>

          <h1 className="text-3xl md:text-5xl text-ui-secondary font-semibold">
            TailwindTemplates v2 is here
          </h1>
          <p className="text-ui-secondary leading-8"> 1 min read</p>
        </div>
        <div className="mb-6 leading-relaxed">
          <p>
            TailwindTemplates V2 is finally here! Our focus for
          </p>
          <p>
            open-source design systems to Tailwindcss. Each design system has a
          </p>
          <p>
            guideline to provide consistency and coherence within a user
          </p>
        </div>
      </main>

      {/* フッター */}
      <footer className=" sm:hidden sticky bottom-0 bg-white py-2 border ">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600"></div>
      </footer>
    </div>
  );
}

export default HomePage;
