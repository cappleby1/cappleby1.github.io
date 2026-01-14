function ProjectInfo({ title, shortDesc, longDesc, githubLink }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <h4>{title}</h4>
      <p>{shortDesc}</p>
      {expanded && <p>{longDesc}</p>}

      <button className="read-more" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show less" : "Read more"}
      </button>

      <div className="link-box">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          Click to view project on Github!
        </a>
      </div>
    </>
  );
}


const projects = [
  {

    id: "postgrad-react",
    title: "Postgraduate Dissertation",
    shortDesc: "I created an escape room style game in Unreal Engine. This was to create an inovative way to conduct cognitive research. My game is an example of how a game could be created and adjusted depending on the research being conducted. This specific game was based on research for cognitive bias.",
    longDesc: "The main focus of the game is that the buttons shown will have different functions than what the player would expect. For example the red button would open the door instead of the green button. The player would be trying to escape the room in the time limit. There are menus and the ability to restart levels as well as a small amount of NPC AI.",
    githubLink: "https://github.com/cappleby1/Postgraduate_Dissertation"
  },
  {
    id: "undergrad-react",
    title: "Hand Tracking Project - Based on Undergraduate Dissertation",
    shortDesc: "This project was to create a more interactive way for the user to complete physiotherapy. The project was created in unity and used OpenCV with python sockets. This has since been updated and I am currently improving this project and expanding on what I did for my dissertation. Such as it can now track and move both hands (or only 1 if only 1 is detcted)",
    longDesc: "By using only a webcam the user could use their hand to move an in-game hand that could interact with the game world. This would include things such as activating buttons. The game would record the player's time so that they were able to track progress for their rehabilitation. With more time more features such as accuracy tracking would have been added or different ways of interacting with objects in the world. This would could be increased scope wise to a near full game project.",
    githubLink: "https://github.com/cappleby1/undergraduate_dissertation/tree/main"
  },
  {
    id: "godot-react",
    title: "Godot Project",
    shortDesc: "This was a small demo/game I created in godot. The aim of this project was to learn godot and complete a more rounded game development project where I had worked on all sections of the game.",
    longDesc: "The reason I chose to use godot for this project was because I wanted experience using an idie game development platform. Godot uses it's own version of typescript and I wanted to try using this new language. There is currently one level that can be completed from start to end with a timer and coins to pickup. There is also a dead zone which will restart the level if the player falls off.",
    githubLink: "https://github.com/cappleby1/Godot_Game"
  },
  {
    id: "xr-react",
    title: "XR Unity Project",
    shortDesc: "This is a XR unity project I took up. The user will scan a QR code on their phone using the device camera which will spawn a cube. This cube can be interacted with using the buttons on screen.",
    longDesc: "This was my first project working with AR, the aim was to learn more about using AR within unity as I had used a webcam to interact the game world but I had not used unity to interact with the real world.",
    githubLink: "https://github.com/cappleby1/xr_mobile_app"
  }
];


projects.forEach(project  => {
  ReactDOM.createRoot(document.getElementById(project.id)).render(
    <ProjectInfo
      title={project.title}
      shortDesc={project.shortDesc}
      longDesc={project.longDesc}
      githubLink={project.githubLink}
    />
  );
});
