class OlaMundo extends HTMLElement {
    constructor() {
        super()
    }
   
    connectedCallback(){
        this.innerHTML = "<p>Ola Mundo</p>";
    }
}
 
customElements.define("ola-mundo", OlaMundo)
 
class nome extends HTMLElement {
    constructor(){
        super()
    }
 
    connectedCallback(){
        this.innerHTML = "<p>Meu nome é Laura</p>";
    }
}
 
customElements.define("meu-nome", nome)
 