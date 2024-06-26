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
      <div className="text-center mb-6 leading-relaxed">
        <main className="flex-1 container mx-auto px-4 py-8">
          <img
            src="images/white.png"
            className="object-cover h-1/4 w-full border rounded-lg shadow-lg"
          />
          <div className="w-11/12 md:w-10/12 lg:w-1/2 mx-auto mb-6 leading-relaxed">
            <div className="bg-blue-100 inline-block py-1 px-4 rounded-xl mb-6">
              <p className="text-blue-500 font-bold ">Update</p>
            </div>

            <h1 className="text-3xl md:text-5xl text-ui-secondary font-semibold">
              TailwindTemplates v2 is here
            </h1>
            <p className="text-ui-secondary leading-8"> 1 min read</p>
          </div>
          <div className="break-words text-3xll mb-6 leading-relaxed center">
            TailwindTemplates V2 is finally here! Our focus for open-source
          </div>
          <div className="break-words text-3xll mb-6 leading-relaxed center">
            design systems to Tailwindcss. Each design system has a guideline to
          </div>
          <div className="break-words text-3xll mb-6 leading-relaxed center">
            provide consistency and coherence within a user
          </div>
          <h1>What to expect?</h1>
          <p className="whitespace-nowrap ">
            Over the coming months, we will expand the design systems that are
            currently available at launch. In addition to that, we are planning
            to create several tailwind configurations to easily get started with
            the proper colors and variants that belong to each design system.
          </p>
        </main>
      </div>

      {/* フッター */}
      {/* -------------------------footer---------------------------------- */}
      <div className="bg-blue-700 ">
        <div className="mx-auto max-w-5xl  pt-1 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap  mt-20 ustifjy-between">
            {/* <!-- 列 1 --> */}
            <div className=" w-full  sm:w-1/2 md:w-1/3">
              <h4 className="text-gray-100">About</h4>
              <p className="text-gray-100">Me</p>
              <p className="text-gray-100">Contact</p>
              <p className="text-gray-100">Disclaimer</p>
            </div>
            {/* <!-- 列 2 --> */}
            <div className=" w-full  sm:w-1/2 md:w-1/3">
              <h4 className="text-gray-100">About</h4>
              <p className="text-gray-100">frsfwrg</p>
              <p className="text-gray-100">talleded</p>
            </div>
            {/* <!-- 列 3 --> */}
            <div className=" w-full  sm:w-1/2 md:w-1/3">
              <button className="bg-red-500 text-white px-20 py-2 rounded">
                ボタン
              </button>
            </div>
          </div>
        </div>

        <p></p>
        <br />
        <p></p>
        <br />
        <br />
        <br />
        <div className="text-gray-100 text-center">
          <button className="bg-red-500 text-white px-20 py-2 rounded">
            ボタン
          </button>
        </div>
        <br />
        <p className="text-gray-100 text-center">
          Built copylight with offey @ by Jucyhiz
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default HomePage;
