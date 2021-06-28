class CustomComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  /**
   * mounting
   */
  connectedCallback() {
    this.shadow.innerHTML = ` <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  />

  <style>
    .center {
      height: 100%;
      margin: auto;
    }

    #cp {
      box-shadow: 0px 0px 5px 5px rgb(48, 48, 48);
      border-radius: 5px;
      margin: auto;
      height: auto;
    }

    .card-img {
      width: 100%;
      margin: 5px 0px;
    }

    #title {
      text-align: center;
      margin-bottom: 10px;
      font-size: 40px;
      font-weight: 500;
      color: whitesmoke;
      background-color: #053742;
    }

    .info {
      margin: 0px 10px;
      width: max-content;
    }
    .info-box {
      margin: 5px 10px;
      border: 2px solid;
      border-radius: 5px;
      line-height: 1.6em;
      text-align: left;
    }

    input[type="button"] {
      width: 100%;
      height: 50px;
      border: 1px solid;
      border-radius: 15px;
      background: black;
      font-size: 18px;
      color: #e9f4fb;
      font-weight: 700;
      cursor: pointer;
      outline: none;
      margin: 3px 0px;
    }

    input[type="button"]:hover {
      border-color: #2691d9;
      transition: 0.5s;
    }
  </style>

  <div class="row">
    <div class="col-12" id="title">BLUE-EYES WHITE DRAGON</div>
  </div>

  <div class="row">
    <div class="col-2"></div>
    <div class="col-8" id="cp">
      <div class="row">
        <div class="col-4">
          <img class="card-img" src="blue-eyes.png" alt="" />
        </div>
        <div class="col-7 info">
          <div class="row">
            <div class="col-5 info-box">Attribute: Light</div>
            <div class="col-5 info-box">Level: 8</div>
          </div>
          <div class="row">
            <div class="col-12 info-box">Monster type: Dragon</div>
          </div>
          <div class="row">
            <div class="col-12 info-box">Card type: Normal</div>
          </div>
          <div class="row">
            <div class="col-5 info-box">ATK: 3000</div>
            <div class="col-5 info-box">DEF: 2500</div>
          </div>
          <div class="row">
            <div class="col-12 info-box">
              Card text: <br />
              This legendary dragon is a powerful engine of destruction.
              Virtually invincible, very few have faced this awesome creature
              and lived to tell the tale.
            </div>
          </div>

          <input type="button" value="View cards related to this card" />
          <input
            type="button"
            value="Search for decks containing this card"
          />
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>`;
  }

  attributesChangedCallback() {}

  disconnectedCallback() {}
}

customElements.define("custom-elem", CustomComponent);
