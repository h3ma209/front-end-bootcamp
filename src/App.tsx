import exp from "constants";
import "./App.css";

function App() {
  return (
    <div
      className="App h-full w-full min-h-screen text-white"
      style={{ backgroundColor: "#09050F" }}
    >
      <div className="min-h-full w-full px-40  h-screen">
        <div className="w-full flex flex-row justify-between text-xl py-20">
          <div className="">Hema, Front-End</div>
          <div className="flex flex-row space-x-4">
            <a href="#">Present</a>
            <a href="#">Portfolio</a>
            <a href="#">Skills</a>
          </div>
        </div>
        <div className="h-full w-full   flex flex-row">
          <div className="w-4/6 ">
            <div
              className="h-2/4 w-full p-7 rounded-tr-4xl rounded-bl-4xl "
              style={{ backgroundColor: "#313849" }}
            >
              <div>
                <div className="w-full flex flex-row justify-between  place-items-center">
                  <div className="flex flex-row  place-items-center space-x-3">
                    <div className="">
                      <div
                        style={{
                          backgroundImage:
                            'url("https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg")',
                        }}
                        className="h-14 w-14 bg-cover bg-center rounded-full"
                      ></div>
                    </div>
                    <div className="flex flex-col place-items-start">
                      <span>Hi, Im Hema</span>
                      <span>Front-end developer</span>
                    </div>
                  </div>
                  <div className="bg-orange-500 flex flex-row space-x-4">
                    <a href="#">Present</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Skills</a>
                  </div>
                </div>
              </div>
              <div>
                <h1>Passionate to pursue the technology.</h1>
                <p>
                  I enjoy learning new things and try to overcome new challenges
                  while analyzing how I improved through them.
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/4">right</div>
        </div>
      </div>
    </div>
  );
}
export default App;
