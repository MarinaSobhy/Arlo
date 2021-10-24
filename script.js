$(window).scroll(function(){
    let heroHeight=$('#hero').height()
    let top = $(window).scrollTop();
    if(top>heroHeight){
        console.log('white')
        $('nav').removeClass('bg-transparent navbar-dark');
        $('nav').addClass('bg-white navbar-light shadow-sm')
    }
        
    else{
        console.log('trans')
        $('nav').addClass('bg-transparent navbar-dark')
        $('nav').removeClass('bg-white navbar-light shadow-sm');
    }
       
})