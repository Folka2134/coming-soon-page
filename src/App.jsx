import "./App.css";

import desktopImage from "./assets/hero-desktop.jpg";

function App() {
  return (
    <div className="App">
      <div className="bg-white h-screen w-screen flex justify-between ">
        <main className="flex flex-col justify-evenly p-48 mr-48">
          <div className="">logo</div>
          <article className="">
            <h1 className="text-9xl my-12">We're coming soon</h1>
            <p className="text-lg">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </article>
          <form className="border-2 border-pink-300 rounded-full p-2 ">
            <input
              className="ml-6 w-10/12 !outline-none
              "
              type="text"
              placeholder="Email Address"
            />
            <input
              className="bg-pink-300 text-white text-xl w-24 rounded-full p-4 cursor-pointer "
              type="submit"
              value=">"
            />
          </form>
        </main>
        <div className="h-screen w-[1000px] bg-cover bg-no-repeat  bg-[url('./assets/hero-desktop.jpg')]"></div>
      </div>
    </div>
  );
}

export default App;
