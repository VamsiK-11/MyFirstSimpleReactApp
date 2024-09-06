import React, { useState } from 'react';
import './index.css';

function App() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeSection, setActiveSection] = useState('');
  const handleNavClick = (section) => {
    setActiveSection(section);
  };
  
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setGalleryImages(prevImages => [...prevImages, ...newImages]);
  };

  const scrollToGallery = () => {
    document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex">
        {/* Left side (empty) */}
        <div className="w-1/2"></div>

        {/* Right side with navigation, content, and additional features */}
        <div className="w-1/2 bg-black p-4 shadow-slate-400 flex flex-col">
          {/* Navigation */}
          <div className="bg-gray-600 p-2 shadow-md rounded-xl flex flex-col mb-4">
          <nav className="px-12">
              <ul className="flex justify-evenly bg-black rounded-3xl p-2 text-xl font-mono">
                <li className="nav-item transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                  <a
                    href="#about-me"
                    className="block px-4 py-2 text-white rounded-2xl hover:bg-gray-800 hover:font-medium transition-colors"
                    onClick={() => handleNavClick('about-me')}
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                  <a
                    href="#experiences"
                    className="block px-4 py-2 text-white rounded-2xl hover:bg-gray-800 hover:font-medium transition-colors"
                    onClick={() => handleNavClick('experiences')}
                  >
                    Experiences
                  </a>
                </li>
                <li className="nav-item transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                  <a
                    href="#recommended"
                    className="block px-4 py-2 text-white rounded-2xl hover:bg-gray-800 hover:font-medium transition-colors"
                    onClick={() => handleNavClick('recommended')}
                  >
                    Recommended
                  </a>
                </li>
              </ul>
            </nav>
            {/* Content container directly under the ul */}
            <div className="px-12 mt-2 p-4 rounded-xl text-gray-300 text-lg flex-1">
            {activeSection === 'about-me' && (
                <div>
                  <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
                  <p className="pt-4">With a background in various programming languages and frameworks, I've developed a diverse skill set. My journey has included building web applications, mobile apps, and contributing to open-source projects. I’m particularly interested in user experience design and how technology can improve lives. I believe in the power of collaboration and strive to stay ahead in a rapidly evolving field. My goal is to work on projects that have a meaningful impact and to keep growing both personally and professionally.</p>
                </div>
              )}
              {activeSection === 'experiences' && (
                <div>
                  <p>Software Engineer at Tech Innovators Inc.</p>
                  <p>June 2022 - Present</p>
                  <p className="pt-4">At Tech Innovators Inc., I lead the development of scalable web applications using React and Node.js. My role involves collaborating with cross-functional teams to design and implement new features, optimizing application performance, and ensuring robust security practices. I have successfully managed several high-impact projects, including a customer analytics platform that improved data insights for the sales team.</p>
                </div>
              )}
              {activeSection === 'recommended' && (
                <div>
                  <p>Jane Smith, Senior Developer at Tech Innovators Inc.</p>
                  <p className="pt-4">They excelled in leading development projects and consistently delivered high-quality results. Their technical skills and ability to collaborate effectively make them a valuable asset to any team. [Your Name] is proactive in identifying and solving complex problems and consistently seeks out opportunities to enhance their skills and contribute to team success. Their positive attitude and dedication have made a significant impact on our projects.</p>
                </div>
              )}
            </div>
          </div>
          {/* New container below the content */}
          <div id="gallery-section" className="bg-gray-800 p-4 shadow-md rounded-2xl mt-6">
            <h2
              className="text-white text-2xl font-bold mb-4 cursor-pointer p-3 rounded-xl transition-colors duration-300 hover:bg-black font-mono"
              onClick={scrollToGallery}
            >
              Gallery
            </h2>
            <div className="flex items-start mb-4">
              <div className="flex-grow flex flex-wrap gap-4">
                {galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-32 h-32 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                ))}
              </div>
              <label
                htmlFor="fileInput"
                className="text-white bg-black px-4 py-2 rounded-md cursor-pointer hover:bg-gray-600 transition-colors"
              >
                Add
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                id="fileInput"
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
