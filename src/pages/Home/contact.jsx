import React from 'react';

const Contact = () => {
    return (
        <section className="pt-3">
        <div className="container">
            <div className="section-title mb-6 w-75 mx-auto text-center">
                <h2 className="mb-1">Contact <span className="theme">us</span></h2>
                <p></p>
            </div>
            <div id="contact-form1" className="contact-form">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="map rounded overflow-hiddenb rounded mb-md-4">
                            <div style={{width: "100%"}}>
                                <iframe title='office map' height="500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.9840942665783!2d77.0385656!3d28.419736800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d8fb782a609%3A0x7859d439c9d0fc22!2sTravel%20Freeby!5e0!3m2!1sen!2sin!4v1692718361007!5m2!1sen!2sin"></iframe>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        
                        <div id="contactform-error-msg"></div>

                        <form method="post" action="#" name="contactform2" id="contactform2">
                            <div className="form-group mb-2">
                                <input type="text" name="first_name" className="form-control" id="fullname" placeholder="First Name"/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" name="last_name" className="form-control" id="llastname" placeholder="Last Name"/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="email" name="email"  className="form-control" id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" name="phone" className="form-control" id="phnumber" placeholder="Phone"/>
                            </div>
                            <div className="textarea mb-2">
                                <textarea name="comments" placeholder="Enter a message"></textarea>
                            </div>
                            <div className="comment-btn text-center">
                                <input type="submit" className="nir-btn" id="submit2" value="Send Message"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Contact;
