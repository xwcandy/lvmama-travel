window.addEventListener('load',function(){


    // 2、初始化swiper插件（轮播图）
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
            },//设置自动滑动
        // 设置回路
        loop : true,
        //设置分页器
        pagination: {
            el: '.swiper-pagination',
        }
    
        // prevButton:'.swiper-button-prev',
        // nextButton:'.swiper-button-next',
        // effect : 'flip',
    })

},false)