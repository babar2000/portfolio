const Skills: React.FC = () => {
    const skills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'];
    return (
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Skills</h2>
          <div className="flex flex-wrap justify-center">
            {skills.map(skill => (
              <div key={skill} className="bg-white shadow-md rounded-lg p-4 m-2 w-40">
                <p className="text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  