<script>
  // Obtém elemento <img>
  const imagemBanner = document.querySelector('.banner-image')
  // Cria lista vazia para guardar endereço das imagens
  let imagem = [];
  // Contador para percorrer lista
  let i = 0;
  // Variável para auxiliar no loop das imagens
  var timeInterval = null;

  imagem[0] = '{% static "img/banners/agendamento/1.png" %}'
  imagem[1] = '{% static "img/banners/agendamento/2.png" %}'
  imagem[2] = '{% static "img/banners/agendamento/3.png" %}'

  function trocaTamanho() {
    /**
     ** Subistitui lista de imagens de acordo com largura da tela
    **/
    // Obtém largura da janela
    const largura = window.innerWidth;
    // Verifica se largua é maior ou menos que 992px
    if (largura < 993) {
      // Se resloção for menor que 992px a imagem menor é adicionada na tela
      imagem[0] = '{% static "img/banners/agendamento/1-MOBILE.png" %}'
      imagem[1] = '{% static "img/banners/agendamento/2-MOBILE.png" %}'
      imagem[2] = '{% static "img/banners/agendamento/3-MOBILE.png" %}'
    } else if (largura === 992) {
      proximo()
    } else if (largura > 992) {
      // Se resloção for maior que 992px a imagem maior é adicionada na tela
      imagem[0] = '{% static "img/banners/agendamento/1.png" %}'
      imagem[1] = '{% static "img/banners/agendamento/2.png" %}'
      imagem[2] = '{% static "img/banners/agendamento/3.png" %}'
    }
  }

  window.addEventListener('resize', function () {
    /**
     ** Veifica largura da tela
    **/
    trocaTamanho()
  })

  function proximo() {
    /**
     ** Troca para próxima imagem
    **/
    if (i < imagem.length - 1) {
      i++;
    } else {
      i = 0;
    }
    // Mostra imagem atual
    imagemBanner.setAttribute('src', imagem[i])
  }

  function anterior() {
    /**
     ** Troca para imagem anterior
    **/
    if (i > 0) {
      i--;
    } else {
      i = imagem.length - 1;
    }
    // Mostra imagem atual
    imagemBanner.setAttribute('src', imagem[i])
  }

  function carrosseu() {
    /**
     ** Loop infinito do bem
    **/
    if (timeInterval !== null) {
      clearInterval(timeInterval)
    }

    timeInterval = setInterval(function () {
      proximo()
    }, 5000)
  }

  trocaTamanho()
  carrosseu();
</script>
