import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css'; // Import the CSS file
import logo from './images/TRUST.png'; // Adjust the path to your logo image
import ImageSlideshow from './components/ImageSlideshow';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
        <div className="App">
      <div className="slideshow-container">
      
      <div className="flex items-center space-x-4 moving-text">
                <img src={logo} alt="Logo" className="inline-logo" />
                <h1 className="text-4xl font-bold mb-8">
                  TAMIL REPATRIATES UNITED SEVA TRUST
                </h1>
              </div>
    </div>
          <ImageSlideshow />
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
       
      </main>
    </div>
  );
}

export default App;