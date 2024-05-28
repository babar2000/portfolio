const About: React.FC = () => {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col items-center">
          <img src="/your-image-url.jpg" alt="Your Name" className="rounded-full w-32 h-32 mb-4" />
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p className="text-center max-w-xl">Write a short bio highlighting your skills and experience.</p>
        </div>
      </section>
    );
  };
  
  export default About;
  