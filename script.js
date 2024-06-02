//Mudando a imagem do header de acordo com o tamanho de tela

//Garante que a imagem carregada é a correta ao redimensionar a tela.
window.addEventListener('resize', function() {
    var imgElement = document.getElementById('slide_main');
    if (window.matchMedia('(max-width: 600px)').matches) {
        imgElement.src = "./assets/FotoHeader-Mobile.svg";
    } else {
        imgElement.src = "./assets/Background Principal.svg";
    }
});

//Garante que a imagem carregada é a correta ao carregar a página.
document.addEventListener('DOMContentLoaded', (event) => {
    var imgElement = document.getElementById('slide_main');
    if (window.matchMedia('(max-width: 600px)').matches) {
        imgElement.src = "./assets/FotoHeader- Mobile.svg";
    } else {
        imgElement.src = "./assets/Background Principal.svg";
    }
});

//Header Responsivo
let timer;

document.addEventListener('mousemove', function () {
    clearTimeout(timer);

    if (window.scrollY > 0) {
        document.querySelector('header').classList.remove('hide');

        timer = setTimeout(function () {
            document.querySelector('header').classList.add('hide');
        }, 3000);
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY === 0) {
        document.querySelector('header').classList.remove('hide');
    }
});


//Menu Hamburguer Responsivo
function openMenu() {
    const itens_nav = document.querySelector('.nav_list');
    if (itens_nav && (itens_nav.style.display === 'none' || !itens_nav.style.display)) {
        itens_nav.style.display = 'block';
        itens_nav.style.position = 'absolute';
        itens_nav.style.top = '100%';
        itens_nav.style.right = '0';
        itens_nav.style.textAlign = 'center';
        

        const navItems = document.querySelectorAll('.nav_list li');
            navItems.forEach(item => {
                item.style.padding = '10px';
            });


    } else if (itens_nav) {
        itens_nav.style.display = 'none'

    }
}

// Caso o usuario role a página com o header visível, troca a cor da logo e das escritas para não haver interferência na leitura
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const slidePrincipalHeight = document.querySelector('#slide_main').offsetHeight;
    const menuHamburger = document.querySelector('#burguer')
    if (window.scrollY > slidePrincipalHeight) {
        header.classList.add('scrolled');
        menuHamburger.style.color = 'black';
    } else {
        header.classList.remove('scrolled');
        menuHamburger.style.color = 'white';
    }
});

//Validando Formulário
document.getElementById('contatoForm').addEventListener('submit', function(event) {
    var isValid = true;
    
    // Validação do nome
    var nome = document.getElementById('nome').value;
    if (nome.length <= 3) {
        document.getElementById('nomeError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('nomeError').style.display = 'none';
    }
    
    // Validação do email
    var email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.com')) {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
    
    // Validação da mensagem
    var mensagem = document.getElementById('mensagem').value;
    if (mensagem.split(' ').length <= 3) {
        document.getElementById('mensagemError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('mensagemError').style.display = 'none';
    }
    
    // Se não for válido, prevenir o envio do formulário
    if (!isValid) {
        event.preventDefault();
    } 
});

// Carrossel de imagens

function createImageChanger(id, src) {
    let currentImage = 0;
    let imageElement = document.getElementById(id);

    function changeImage() {
        imageElement.src = src[currentImage];
        imageElement.style.transition = "opacity 0.5s";
        imageElement.style.opacity = 0;

        setTimeout(function() {
            imageElement.style.opacity = 1;
        }, 100);

        currentImage = (currentImage + 1) % src.length;
    }

    return {
        start: function() {
            this.interval = setInterval(changeImage, 5000);
        },
        stop: function() {
            clearInterval(this.interval);
        }
    };
}

let imagemPublicoChanger = createImageChanger('imagemPublico', ['./assets/Publico1.svg', './assets/Publico2.svg']);

imagemPublicoChanger.start();

document.getElementById('imagemPublico').addEventListener('mouseover', function() {
    imagemPublicoChanger.stop();
});

document.getElementById('imagemPublico').addEventListener('mouseout', function() {
    imagemPublicoChanger.start();
});