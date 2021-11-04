$(window).scroll(function(){
    let heroHeight=$('#hero').height()
    let top = $(window).scrollTop();
    if(top>heroHeight){
        $('nav').removeClass('bg-transparent navbar-dark');
        $('nav').addClass('bg-white navbar-light shadow-sm')
    }
        
    else{
        $('nav').addClass('bg-transparent navbar-dark')
        $('nav').removeClass('bg-white navbar-light shadow-sm');
    }
       
})