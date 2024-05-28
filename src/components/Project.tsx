const Projects: React.FC = () => {
    const projects = [
      { title: 'Project Title 1', description: 'Project description goes here.', imageUrl: '/project-image-url1.jpg' },
      { title: 'Project Title 2', description: 'Project description goes here.', imageUrl: '/project-image-url2.jpg' },
    ];
  
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Projects</h2>
          <div className="flex flex-wrap justify-center">
            {projects.map(project => (
              <div key={project.title} className="bg-gray-100 shadow-md rounded-lg p-4 m-2 w-60">
                <img src={project.imageUrl} alt={project.title} className="rounded mb-2" />
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  