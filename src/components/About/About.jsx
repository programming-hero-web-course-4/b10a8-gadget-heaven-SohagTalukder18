import React from 'react'

export default function About() {
    return (



        // <div className="bg-white p-6 shadow-md rounded-md max-w-4xl mx-auto">
        //     <h1 className="text-3xl font-bold text-blue-600 mb-4">About GadgetHaven</h1>
        //     <p className="text-gray-700 mb-6">
        //         Welcome to GadgetHaven! We are a premier e-commerce platform specializing in gadgets
        //         like computers, phones, smartwatches, chargers, and power banks.
        //     </p>
        //     <h2 className="text-2xl font-semibold text-blue-500 mb-3">Our Mission</h2>
        //     <p className="text-gray-700 mb-6">
        //         Our mission is to deliver cutting-edge gadgets at affordable prices while ensuring
        //         exceptional quality and customer satisfaction.
        //     </p>
        //     <h2 className="text-2xl font-semibold text-blue-500 mb-3">Contact Us</h2>
        //     <ul className="text-gray-700">
        //         <li>Email: <span className="font-semibold">support@gadgethaven.com</span></li>
        //         <li>Phone: <span className="font-semibold">+1 800-123-4567</span></li>
        //         <li>Address: <span className="font-semibold">123 Tech Street, Silicon Valley</span></li>
        //     </ul>
        // </div>

 
        <div className="bg-white p-8 shadow-md rounded-md max-w-6xl mx-auto mt-6">
            <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">About GadgetHaven</h1>

            {/* Introduction */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-500 mb-3">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed">
                    At GadgetHaven, we are passionate about technology and innovation. 
                    As a leading e-commerce platform for gadgets, we strive to provide our customers 
                    with cutting-edge products and unparalleled shopping experiences. From the latest 
                    smartphones to powerful laptops and accessories, we have it all.
                </p>
            </section>

            {/* Our History */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-500 mb-3">Our History</h2>
                <p className="text-gray-700 leading-relaxed">
                    Established in 2010, GadgetHaven started as a small tech store catering to 
                    local customers. Over the years, we expanded our operations globally, delivering 
                    gadgets to thousands of satisfied customers across the world. Today, we are proud 
                    to be recognized as a trusted name in the tech industry.
                </p>
            </section>

            {/* Our Values */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-500 mb-3">Our Core Values</h2>
                <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
                    <li><strong>Customer Focus:</strong> We prioritize our customers and their satisfaction above all.</li>
                    <li><strong>Innovation:</strong> We embrace new technologies to provide the best gadgets on the market.</li>
                    <li><strong>Integrity:</strong> We believe in transparency and ethical business practices.</li>
                    <li><strong>Quality:</strong> We ensure that all our products meet the highest standards.</li>
                </ul>
            </section>

            {/* Our Team */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-500 mb-3">Meet Our Team</h2>
                <p className="text-gray-700 leading-relaxed">
                    Our dedicated team of tech enthusiasts, customer service experts, and logistics professionals 
                    work tirelessly to ensure a seamless shopping experience for you. We are united by our 
                    passion for technology and our commitment to excellence.
                </p>
            </section>

            {/* Testimonials */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-500 mb-3">What Our Customers Say</h2>
                <div className="bg-gray-100 p-6 rounded-md shadow-sm">
                    <blockquote className="italic text-gray-700">
                        "GadgetHaven is my go-to site for all things tech. Their customer service is top-notch, 
                        and their product quality is unmatched. I couldn't be happier with my purchases!" 
                    </blockquote>
                    <p className="text-right text-blue-500 mt-4">- Jane Doe</p>
                </div>
            </section>

            {/* Contact Us */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-500 mb-3">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                    Have questions or need assistance? We’d love to hear from you!
                </p>
                <ul className="mt-4">
                    <li>Email: <span className="font-semibold">support@gadgethaven.com</span></li>
                    <li>Phone: <span className="font-semibold">+1 800-123-4567</span></li>
                    <li>Address: <span className="font-semibold">123 Tech Street, Silicon Valley, CA</span></li>
                </ul>
            </section>
        </div>
   




        // ============



    )
}
