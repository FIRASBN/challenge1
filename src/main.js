import React, { useState } from 'react';
import { ReactComponent as Logo } from "./assets/icons/icon-arrow.svg";
import "./App.css";
const projects = [
  {
    id: 1,
    title: "Project Paramour",
    description: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    backgroundImage: "bg-image-1"
  },
  {
    id: 2,
    title: "Seraph Station",
    description: "The Seraph Station project challenged us to design a unique station that would transport people through time.The result is a fresh and futuristic model inspired by space stations.",
    backgroundImage: "bg-image-2"
  },
  {
    id: 3,
    title: "Federal II Tower",
    description: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches. ",
    backgroundImage: "bg-image-3"
  },
  {
    id: 4,
    title: "Trinity Bank Tower",
    description: "DescTrinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.ription of the final project. This is the final statement of bold, modern architecture.",
    backgroundImage: "bg-image-4"
  },
];

function Main() {
  const [activePage, setActivePage] = useState(1);

  const project = projects[activePage - 1];

  return (
    <main className={project.backgroundImage}>
      <div className="containermain">
        <h1><strong>{project.title}</strong></h1>
        <p>{project.description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}<br />
          </React.Fragment>
        ))}</p>
        <button className='buttum'><strong>See Your Portfolio</strong><Logo /></button>
      </div>
      <div>
        <ul className="pagination">
          {projects.map(project => (
            <li key={project.id}>
              <a
                href={`#page${project.id}`}
                onClick={() => setActivePage(project.id)}
                className={activePage === project.id ? 'active' : ''}
              >
                <strong>{`0${project.id}`}</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
