
class Floco {
    constructor() {
        this.y = -80;
        this.x = 0;
        this.basex = Math.random() * 1300;
        this.velocidadey = Math.random() * 3 + 1;
        this.el = document.createElement('img');
        
        this.el.src = 'imgs/floco.png';
        this.el.alt = 'Floco';
        document.querySelector('#neve').appendChild(this.el);
    }

    nevar() {
        this.x = this.basex + Math.cos(this.y / 20) * 10;
        this.y += this.velocidadey;

        if (this.y >= window.innerWidth) {
            this.basex = Math.random() * 1300;
            this.y = -80;
        }

        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

let floco = [new Floco(), new Floco(), new Floco(),new Floco(), new Floco(), new Floco(),new Floco(), new Floco(), new Floco(),new Floco()];

setInterval(() => {
    for (let i = 0; i < floco.length; i++) {
            floco[i].nevar();
    }
}, 33);

let botao_colocaEl = document.querySelector('#botaoc');
botao_colocaEl.addEventListener('click', () => {
    floco.push(new Floco(),new Floco(), new Floco(), new Floco(),);
    document.getElementById("olaf").style.right = "2px";
    });
        



    