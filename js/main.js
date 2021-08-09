$(function(){

    




    let menuList = $('#list');

    function reamove(){
        menuList.removeClass("menu__list-active");
        $('span').toggleClass('menu_btn-active');

    }

    let header = $('#header');
    let intro  = $('#introI');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    
    $(window).on('scroll', function(){
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH   ){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }


    });


    $('.menu_btn').on('click',function(){

        $('.menu__list').toggleClass('menu__list-active')
    });

    $('.menu_btn').on('click',function(e){

        $('span').toggleClass('menu_btn-active');
    }); 

    $("[data-scroll]").on("click", function(event){
        

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;


        
        $("html, body").animate({
             scrollTop:  elementOffset -87 
            
             
        },700);
        
        reamove();
        
        
    });




});


const tabs_btn = document.querySelectorAll(".tabs-link");


tabs_btn.forEach(function(item) {

    item.addEventListener("click", function() {

        let currentBtn = item;

       
         
        tabs_btn.forEach(function(item){
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
    });
});

const color_btn = document.querySelectorAll(".box-colos");


color_btn.forEach(function(item) {

    item.addEventListener("click", function() {

        let currentBtn = item;


        color_btn.forEach(function(item){
            item.classList.remove('active-color');
        });

        currentBtn.classList.add('active-color');
    });
});

