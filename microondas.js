function microondas(p,m){
    if (p == 'pipoca' && m>=20 && m<30) {
      console.log('A comida queimou!')
    }
    else if (p == 'pipoca' && m<10) {
      console.log('Tempo insuficiente para o preparo do alimento.')
    }
    else if (p == 'pipoca' && m>=30) {
      console.log('Kabumm!')
    }
    else if (p == 'macarrão' && m>=16 && m<24) {
      console.log('A comida queimou!')
    }
    else if (p == 'macarrão' && m<8) {
      console.log('Tempo insuficiente para o preparo do alimento.')
    }
    else if (p == 'macarrão' && m>=24) {
      console.log('Kabumm!')
    }
    else if (p == 'carne' && m>=30 && m<45) {
      console.log('A comida queimou!')
    }
    else if (p == 'carne' && m<15) {
      console.log('Tempo insuficiente para o preparo do alimento.')
    }
    else if (p == 'carne' && m>=45) {
      console.log('Kabumm!')
    }
    else if (p == 'feijão' && m>=24 && m<36) {
      console.log('A comida queimou!')
    }
    else if (p == 'feijão' && m<12) {
      console.log('Tempo insuficiente para o preparo do alimento.')
    }
    else if (p == 'feijão' && m>=36) {
      console.log('Kabumm!')
    }
    else if ( p== 'brigadeiro' && m>16 && m<24) {
      console.log('A comida queimou!')
    }
    else if (p == 'brigadeiro' && m<8) {
      console.log('Tempo insuficiente para o preparo do alimento.')
    }
    else if (p == 'brigadeiro' && m>=24) {
      console.log('Kabumm!')
    }
    else if (p !== 'brigadeiro' && p !== 'macarrão' && m !== 'carne' && a !== 'feijão' && a !== 'brigadeiro') {
      console.log('Prato inexiste!')
    }
    else {console.log('Prato pronto, bom apetite!!!')
  }
  }
  
  microondas('macarrão', 2);