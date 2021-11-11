import React, { Component } from "react";
import { Help, Contact, Term_Conditions, Privacy_Policy  } from '../../constant';

class Footer extends Component {
  render() {
    return (
      <footer class="bg-dark py-4 text-white px-3">
        <div class="footer-middle">
          <div class="container px-4 my-5">
            <div class="row mb-3">
              <div class="col-md-4 col-sm-6">
                <div class="footer-pad">
                  <ul class="list-unstyled px-4">
                    <li>
                      <a class="text-reset text-decoration-none" href={Help}>
                        Pusat Bantuan
                      </a>
                    </li>
                    <li>
                    <li>
                      <a class="text-reset text-decoration-none" href={Contact}>
                        Hubungi Kami
                      </a>
                    </li>
                      <a class="text-reset text-decoration-none" href={Term_Conditions}>
                        Syarat dan Ketentuan
                      </a>
                    </li>
                    <li>
                      <a class="text-reset text-decoration-none" href={Privacy_Policy}>
                        Kebijakan Privasi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4 col-sm-6"></div>
              <div class="col-md-3">
                <p class="px-3">Jl. Bangka Raya No.17, RT.13/RW.01, 
                    Bangka,Kec. Mampang Prpt, Kota Jakarta Selatan, 
                    Daerah Khusus Ibukota Jakarta 12730
                    <br/>Telp. 0857-7979-3635
                </p>
              </div>   
            </div>
            
            <div class="row">
              <div class="col-md-12 px-2">
                <p class="text-center px-3">
                  All Rights Reserved | Copyright © 2021 | PT Metamorfosa Teknologi Berdikari
                </p>
                <div class="text-center">
                  <span class="mx-2">
                    <a href="https://twitter.com/metalit_id" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </span>
                  <span class="mx-2">
                    <a href="https://www.facebook.com/Metalit-107151784977073" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </span>
                  <span class="mx-2">
                    <a href="https://instagram.com/metalit.id" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </span>
                  <span class="mx-2">
                    <a href="https://www.linkedin.com/company/metalit-id" target="_blank">
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