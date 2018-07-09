(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];

    $('.picture').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1];

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    }

                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        });

        $pic.on('click', 'figure', function(event) {
            event.preventDefault();
            
            var $index = $(this).index();
            var options = {
                index: $index,
                bgOpacity: 0.7,
                showHideOpacity: true,
                /*getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index], // find thumbnail   
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        
                        rect = thumbnail.getBoundingClientRect();
    
                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                },*/
                 getThumbBoundsFn: function(items) {
                    return function _getThumbBoundsFn(index) {
                        var $img = items.eq(index),
                            imgOffset = $img.offset(),
                            imgWidth = $img[0].width;
            
                        return { x: imgOffset.left, y: imgOffset.top, w: imgWidth };
                    };}
            }

            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });
})(jQuery);

