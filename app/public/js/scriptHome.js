$(document).ready(function(){
    $('#tipo_moto').click(function(){
        $('.sec-motos').show();
        $('.sec-carros').hide();
        $('.sec-vans').hide();
        $('.sec-caminhoes').hide();
        $('.sec-bicicletas').hide();
        $('.sec-todos').hide();
    })
    $('#tipo_carro').click(function(){
        $('.sec-motos').hide();
        $('.sec-carros').show();
        $('.sec-vans').hide();
        $('.sec-caminhoes').hide();
        $('.sec-bicicletas').hide();
        $('.sec-todos').hide();
    })
    $('#tipo_van').click(function(){
        $('.sec-motos').hide();
        $('.sec-carros').hide();
        $('.sec-vans').show();
        $('.sec-caminhoes').hide();
        $('.sec-bicicletas').hide();
        $('.sec-todos').hide();
    })
    $('#tipo_caminhao').click(function(){
        $('.sec-motos').hide();
        $('.sec-carros').hide();
        $('.sec-vans').hide();
        $('.sec-caminhoes').show();
        $('.sec-bicicletas').hide();
        $('.sec-todos').hide();
    })
    $('#tipo_bike').click(function(){
        $('.sec-motos').hide();
        $('.sec-carros').hide();
        $('.sec-vans').hide();
        $('.sec-caminhoes').hide();
        $('.sec-bicicletas').show();
        $('.sec-todos').hide();
    })
    $('#tipo_todos').click(function(){
        $('.sec-motos').hide();
        $('.sec-carros').hide();
        $('.sec-vans').hide();
        $('.sec-caminhoes').hide();
        $('.sec-bicicletas').hide();
        $('.sec-todos').show();
    })

    $('.tipos_veiculos').click(function(){
        $(this).css('background-color', '#FF8500');
        $(this).siblings().css('background-color', 'rgba(51, 51, 51, 0.8)');
    })
 });

