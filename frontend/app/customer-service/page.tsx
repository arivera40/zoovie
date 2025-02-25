import Accordion from "@/components/Accordion"

export default function CustomerService() {
  const faqs = [
    { title: "How do I book tickets?", content: "You can book tickets online through our website or mobile app." },
    {
      title: "Can I cancel my booking?",
      content: "Yes, you can cancel your booking up to 2 hours before the showtime.",
    },
    {
      title: "Do you offer refunds?",
      content: "Refunds are available for cancelled bookings made more than 2 hours before the showtime.",
    },
  ]

  return (
    <div className="customer-service-page">
      <h1 className="display-4 mb-4">Customer Service</h1>
      <p className="lead">Need help? Our customer service team is here to assist you.</p>

      <div className="mt-5 faq-section">
        <h2 className="h3 mb-4">Frequently Asked Questions</h2>
        <Accordion items={faqs} />
      </div>

      <div className="mt-5">
        <h2 className="h3 mb-4">Contact Us</h2>
        <form className="contact-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

