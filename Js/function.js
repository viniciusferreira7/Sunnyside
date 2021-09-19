$(function(){

    //Funções
    funcaomenumobile();
    abrircontact();
    fecharcontact();


    function funcaomenumobile(){
        //Variaveis

        var menumobile = $('#menu-mobile');

        //Funções

        mudarcorlear();
        clicarmenu();
        removemobile();

        function mudarcorlear(){
            $('h5').hover(function(){
                $('#yellow-bar').css('backgroun-color','rgba(117, 194, 179,0.8)')
            }).blur(function(){
                $('#yellow-bar').css('backgroun-color','rgba(255, 255, 0,0.8)')
            })
        }

        function clicarmenu(){
            menumobile.click(function(e){
                e.stopPropagation();
                $('#btnx').click(function(e){
                    e.stopPropagation();
                })
                $('#menu-ul').fadeIn(1000);
                $('#creatives').fadeOut(1000);
                $('#arrow-down').fadeOut(1000);
            })

        }

        function removemobile(){
            $('body,#btnx').click(function(){
                $('#menu-ul').fadeOut();
                $('#creatives').fadeIn(1000);
                $('#arrow-down').fadeIn(1000);
                
            })
        }

    }


    function abrircontact(){
        
        //Variaveis
        var contact = $('.contact');
        var formWraper = $('#form-wraper');
        var bg = $('#bg');

        contact.click(function(e){
            e.preventDefault();
            e.stopPropagation();
            formWraper.click(function(e){
                e.stopPropagation();
            })
            bg.fadeIn();
        })
    }

    function fecharcontact(){
        //Variaveis
        var body = $('body');
        var bg = $('#bg');

        $('body,.btnx-contact').click(function(){
            bg.fadeOut();
        })

    }

    //Enviar formulario


    $('form').submit(function(e){
        e.preventDefault();

        //Variaveis
        var name = $('#name').val()
        var telephone = $('#telephone').val();
        var email = $('#email').val();

        if(errado() == false){
            
        }else{
            envio();
        }

       function errado(){

            if(namevalidar(name) == false){
            campoinvalido($('input[name="name"]'));
            return false;
            }

            if(telephonevalidar(telephone) == false){
                campoinvalido($('input[name="telephone"]'));
                return false;
            }

            if(emailvalidar(email) == false){
                campoinvalido($('input[name="email"]'));
                return false;   
            }
        }
        
    })


    //Função de estilização dos campo invalidos


    $('input[type="text"]').focus(function(){
        resetarCampoinvalido($(this));
    })


    function campoinvalido(el){
        el.css('border-color','red');
        el.css('color','red')
        el.val('Campo Inválido');
    }

    function resetarCampoinvalido(el){
        el.css('border-color','black');
        el.css('color','#757575')
        el.val('');
    
    }



    //Função de validação

    function namevalidar(name){

        //Variaveis
        var namesplit = name.split(" ");
        var amount = name.split(" ").length;

        if(name = ""){
            return false;
        
        }

        else if(amount >=2){
            for(i = 0; i < amount; i++){
                if(namesplit[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                    console.log('funcionou');
                }else{
                    return false;
                }    
            }

        }else{
            return false;
        }
    }

    function telephonevalidar(telephone){

        if(telephone == ''){
            return false;
        }

        else if(telephone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
            return false;

            }else{
                console.log('telephone aceito')
        }
    }

    function emailvalidar(email){
        if(email == ''){
            return false;
        }

        else if(email.match(/^([A-Za-z0-9.]{1,})+@+([a-z.]{1,})$/) == null ){
            return false;
        
        }else{
            console.log('email aceito');
        }
    }


    //Mensagem de envio

    function envio(){

        $('#bg-envio').fadeIn(1000,function(){
            $('#yellow-load').animate({
                width:'0',
            },3000, function(){ $(this).removeAttr('style');})
            $('#pink-load').animate({
                width:'0',
            },3000, function(){ $(this).removeAttr('style');})
            $('#blue-load').animate({
                width:'0',
            },3000, function(){ $(this).removeAttr('style');})
            $('#bg-envio').fadeOut(4000,function(){
                $('#bg-enviado').fadeIn(2000,function(){
                    $('#bg-enviado').fadeOut(3000,function(){})
                })
            });
        });
    }

    $('#telephone').mask('(00)0000-0000');

    //Slider imagens

    $(window).resize(function(){
        if($(window).width() <= 775){
            sliderImagens();

        }else if($(window).width() > 775){
            
        }
    })

    var sliderImagens =  function(){
            //Variaveis
        var indiceAtual = 0;
        var indiceMaximo = $('.peopleWraper').length;
        var peopleWraper = $('.peopleWraper');


        //Funcoes
        slider();
        alternarSlider();

        function slider(){
            peopleWraper.eq(indiceAtual).fadeIn();
        }

        function alternarSlider(){
            setInterval(function(){
                peopleWraper.eq(indiceAtual).fadeOut();
                indiceAtual++;
                if(indiceAtual == indiceMaximo){
                    indiceAtual = 0;
                }
                peopleWraper.eq(indiceAtual).fadeIn();
            },3000)
        }
    }   

    $(window).resize(function(){
        if($(window).width() <= 775){
            sliderImagens();

        }else if($(window).width() > 776){
             //Variaveis
        var indiceAtual = 0;
        var indiceMaximo = $('.peopleWraper').length;
        var peopleWraper = $('.peopleWraper');


        //Funcoes
        slider();
        alternarSlider();

        function slider(){
            peopleWraper.eq(indiceAtual).fadeIn();
        }

        function alternarSlider(){
            setInterval(function(){
                peopleWraper.eq(indiceAtual).fadeIn();
                indiceAtual++;
                if(indiceAtual == indiceMaximo){
                    indiceAtual = 0;
                }
                peopleWraper.eq(indiceAtual).fadeIn();
            },0001)
        }   
        }
    })
})