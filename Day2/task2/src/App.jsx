import React from "react";
import MobileMenu from "./MobileMenu"
import "./App.css"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <MobileMenu />
      <div className="pt-20 text-center">
        <h1 className="text-3xl font-bold text-[#008751] mt-10">
          Welcome to NaijaMarket
        </h1>
        <p className="mt-3 text-gray-600">
          Your trusted place for authentic Nigerian goods.
        </p>
      </div>
    </div>
  );
}

export default App;
