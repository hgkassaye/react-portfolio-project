import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className='site-footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-6, col-md-4'>
                            <h5>Company</h5>
                            <ul className='list-unstyled'>
                                <li>About</li>
                                <li>News</li>
                                <li>Partnership</li>
                            </ul>
                        </div>
                        <div className='col-xs-6 col-md-4'>
                            <h5>Follow Us</h5>
                            <ul className='list-unstyled'>
                                <li className='social-container'>
                                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a> Instagram
                                </li>
                                <li className='social-container'>
                                    <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a> Facebook
                                </li>
                                <li className='social-container'>
                                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a> Twitter
                                </li>
                                <li className='social-container'>
                                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> YouTube
                                </li>
                            </ul>
                        </div>
                        <div className='col-xs-12 col-md-4'>
                            <h5>Contact Us</h5>
                            <a role="button" className="btn btn-link" href="tel:+11115645678"><i className="fa fa-phone" /> 111-564-5678</a><br />
                            <a role="button" className="btn btn-link" href="mailto:hello@abode.com"><i className="fa fa-envelope-o" /> hello@abode.com</a>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-sm' style={{alignSelf: 'center'}}>
                            <p>
                                &copy;{new Date().getFullYear()} Abode, Inc. All Rights Reserved 

                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;