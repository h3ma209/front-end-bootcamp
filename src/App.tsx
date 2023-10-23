import exp from "constants";
import "./App.css";

function App() {
  return (
    <div
      className="App h-full w-full min-h-screen text-white"
      style={{ backgroundColor: "#09050F" }}
    >
      <div className="min-h-full w-full px-40  h-screen">
        <div className="w-full flex flex-row justify-between text-xl py-20 ">
          <div className="">Hema, Front-End</div>
          <div className="flex flex-row space-x-4">
            <a href="#">Present</a>
            <a href="#">Portfolio</a>
            <a href="#">Skills</a>
          </div>
        </div>
        <div className=" w-full flex flex-row space-x-7">
          <div className="w-11/12 ">
            <div
              className="h-full w-full p-12 rounded-tl-3xl rounded-tr-4xl rounded-bl-4xl space-y-10"
              style={{ backgroundColor: "#313849" }}
            >
              <div>
                <div className="w-full flex flex-row justify-between  place-items-center">
                  <div className="flex flex-row  place-items-center space-x-3">
                    <div className="">
                      <div
                        style={{
                          backgroundImage:
                            'url("https://necatikcl.dev/images/card-hello-memoji.png")',
                        }}
                        className="h-11 w-11 bg-cover bg-center rounded-full"
                      ></div>
                    </div>
                    <div className="flex flex-col place-items-start ">
                      <span className="text-xl">Hi, Im Hema</span>
                      <span className="text-gray-400">Front-end developer</span>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-6 place-items-center justify-between align-middle">
                    <a
                      href="#"
                      className="bg-slate-700 p-2 rounded shadow-slate-400 shadow-sm"
                    >
                      <img height={22} width={22} src="/svgs/twitter.svg" />
                    </a>
                    <a
                      className="bg-slate-700 p-2 rounded shadow-slate-400 shadow-sm"
                      href="#"
                    >
                      <img height={22} width={22} src="/svgs/github.svg" />
                    </a>
                    <a
                      className="bg-slate-700 p-2 rounded shadow-slate-400 shadow-sm"
                      href="#"
                    >
                      <img height={22} width={22} src="/svgs/linkedin.svg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-left flex flex-col space-y-6">
                <h1 className="text-6xl">
                  Passionate to pursue <br />
                  the technology.
                </h1>
                <p className="text-xl text-gray-400">
                  I enjoy learning new things and try to overcome new
                  <br /> challenges while analyzing how I improved through{" "}
                  <br /> them.
                </p>
              </div>
            </div>
          </div>
          <div
          style={{
            backgroundImage:"url('https://necatikcl.dev/images/card-hello-right-memoji.png')",
            backgroundSize:"cover",
          }}
           className="w-2/5 bg-yellow-500">
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
