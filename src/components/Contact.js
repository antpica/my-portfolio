import React from 'react';

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here, e.g., sending data to a server.
    // For this example, we're just logging the form data to the console.
    const formData = new FormData(e.target);
    console.log('Form Data:', {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
    // Clear the form after submission
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="container mt-4 pt-4">
        <h1 className="text-center">Contact</h1>
        <div className="row mt-4">
          <div className="col-lg-6">
            <img
              src="./assets/images/contact.jpeg"
              className="imageContactPage"
              alt=""
            />
          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
