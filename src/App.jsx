import React from "react";

const App = () => {
  return (
    <div>
      <h1 className=" text-4xl font-bold underline">Hello world!</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-3 h-200">
        <button className="grow order-1">#1 top left corner</button>
        <button className="grow order-3">#3 top right corner</button>
        <button className="grow order-4">#4 middle left</button>
        <button className="grow order-5">#5 centre position</button>
        <button className="grow order-6">#6 middle right</button>
        <button className="grow order-8">#8 bottom middle</button>
        <button className="grow order-9">#9 bottom right</button>
        <button className="grow order-7">#7 bottom left</button>
        <button className="grow order-2">#2 middle top</button>
      </div>
    </div>
  );
};

export default App;
