const Contact: React.FC = () => {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Email: <a href="mailto:your-email@example.com" className="text-blue-600">your-email@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-600">+1234567890</a></p>
        </div>
      </section>
    );
  };
  
  export default Contact;
  