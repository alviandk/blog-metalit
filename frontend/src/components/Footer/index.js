import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
const home= process.env.REACT_APP_METALIT_URL
const help=home + `/help`
const contact=home + `/contact`
const term_conditions=home + `/term-conditions`
const privacy_policy=home + `/privacy-policy`

class Footer extends Component {
    render() {
        return (
            <footer class="bg-dark py-4 text-white">
              <div class="footer-middle">
                <div class="container px-5 my-5">
                    <div class="row mb-3">
                      <div class="col-md-3 col-sm-6">
                        <div class="footer-pad">
                          <ul class="list-unstyled">
                            <li>
                              <a class="text-reset text-decoration-none"
                                href={help}
                              >
                                Pusat Bantuan
                              </a>
                            </li>
                            <li>
                            <li>
                              <a class="text-reset text-decoration-none"
                                href={contact}
                                >
                                Hubungi Kami
                              </a>
                            </li>
                              <a class="text-reset text-decoration-none"
                                href={term_conditions}
                              >
                                Syarat dan Ketentuan
                              </a>
                            </li>
                            <li>
                              <a class="text-reset text-decoration-none"
                                href={privacy_policy}
                              >
                                Kebijakan Privasi
                              </a>
                            </li>
                           </ul>
                        </div>
                      </div>
                      <div class="col-md-3 col-sm-6"></div>
                      <div class="col-md-3 col-sm-6"></div>
                      <div class="col-md-3">
                        <p>Hubungi Kami</p>
                        <p>Jl. Bangka Raya No.17, RT.13/RW.01, 
                            Bangka,Kec. Mampang Prpt, Kota Jakarta Selatan, 
                            Daerah Khusus Ibukota Jakarta 12730
                        </p>
                      </div>   
                    </div>
                    <div class="row">
                        <div class="col-md-12 copy">
                            <p class="text-center">All Rights Reserved | Copyright © 2021 | PT Metamorfosa Teknologi Berdikari</p>
                            <div class="text-center">
                                <span class="mx-2">
                                    <a href="https://twitter.com/idmetalit" target="_blank">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </span>
                                <span class="mx-2">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </span>
                                <span class="mx-2">
                                    <a href="https://instagram.com/metalit.id" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </span>
                                <span class="mx-2">
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>  
                                </span>  
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </footer>
        )
    }
}

export default Footer;