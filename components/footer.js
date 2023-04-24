class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer" id="#Contact">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>Artworks and Web-dev by Mot Hakimi𓅓  
            <a href="" style="color: rgb(0, 0, 146)"><i class="fa fa-twitter fa-lg">  </i></a>
            <a href="" style="color: rgb(0, 0, 146)"><i class="fa fa-instagram fa-lg">  </i></a></h5>
          <span class="">
              
          </span>
          <p> 
            Open-source Project Available on
            <a
              href="https://github.com/Motiche/Aerial-Insectivores"
              style="color: blue"
              >Github <i class="fa fa-github"></i
            ></a>
          </p>
          <hr />
          <div class="row">
            <div class="col-6">
              <ul class="list-unstyled">
                <li><a href="">Product</a></li>
                <li><a href="">Benefits</a></li>
                <li><a href="">Partners</a></li>
                <li><a href="">Team</a></li>
              </ul>
            </div>
              <div class="col-6">
                <ul class="list-unstyled">
                  <li><a href="">Documentation</a></li>
                  <li><a href="">Support</a></li>
                  <li><a href="">Legal Terms</a></li>
                  <li><a href="">About</a></li>
                </ul>
              </div>
            </div>
            <br/>
            All texts were generated using ChatGPT
        </div>       
        <div class="col-md-5">
          <h5 class="text-md-right">Contact Us <i class="fa fa-envelope"></i></h5>
          <form
            action="https://formsubmit.co/exister72@gmail.com"
            method="POST"
          >
          <input
              type="text"
              name="name" 
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Name"
            />
            <input
              type="email"
              name="email" 
              class="form-control mt-1"
              id="exampleInputEmail1"
              placeholder="Enter Email"
            />

            <input
              class="form-control mt-1"
              id="exampleMessage"
              name="message"
              placeholder="Message"
              style="height:100px;"
              required
            />
              <button type="submit" class="btn btn-primary btn-md mt-1">
                Send
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    <br />
  </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
