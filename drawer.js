class Drawer extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
    <style>
        header {
            border-radius: 8px; /* rounded corners */
            box-shadow: 0 0 8px black;
            height: 2rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            justify-content: space-between;
        }

        header > .menu-icon {
            text-align: left;
            cursor: pointer;
            font-size: 25px;
            margin: 0px 25px 0px 5px;
        }

        /* Opens drawer */
        .drawer {
            height: 100%;
            width: 200px;
            position: fixed;
            top: 0;
            left: -200px; /* Keeps drawer hidden */
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
            transition: left 0.3s ease;
            padding-top: 20px;
            z-index: 1000;
            background-color: black;
        }
        .drawer.open {
            left: 0;
        }

        .drawer a {
            text-decoration: none;
            color: whitesmoke;
            display: block;
            padding: 15px 25px;
            transition: background-color 0.3s ease;
        }

        /* Highlights selection in drawer when clicked */
        .drawer a:hover {
            background-color: grey;
        }

        /* Invisible part that hides drawer when clicked, usually hidden */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .overlay.open {
            opacity: 1;
            visibility: visible;
        }

        /* Moves content aside when drawer opens */
        .drawer-open {
            margin-left: 200px;
        }
    </style>
    <header>
        <span class="menu-icon" id="menuIcon">&#9776;</span>
    </header>

    <div class="drawer" id="drawer">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
    </div>
    <div class="overlay" id="overlay"></div>
`;

    this.shadowRoot
      .getElementById("menuIcon")
      .addEventListener("click", () => this.toggleDrawer());
    this.shadowRoot
      .getElementById("overlay")
      .addEventListener("click", () => this.toggleDrawer());
  }

  toggleDrawer() {
    const drawer = this.shadowRoot.getElementById("drawer");
    const overlay = this.shadowRoot.getElementById("overlay");
    const content = document.getElementById("content");

    drawer.classList.toggle("open");
    overlay.classList.toggle("open");
    if (content) content.classList.toggle("drawer-open");
  }
}

customElements.define("drawer", Drawer);
