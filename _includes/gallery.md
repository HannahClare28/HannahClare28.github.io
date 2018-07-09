<!--<link rel="stylesheet" href="/assets/css/gallery.css">-->
<div class="carousel" data-flickity='{ "imagesLoaded": true, "percentPosition": false, "adaptiveHeight": true, "fullscreen": true, "autoPlay": true, "lazyLoad": 1 }'>
  {% for image  in site.static_files %} 
    {% if image.path contains page.folder  %}
    <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="{{ site.baseurl }}{{ image.path }}" alt="{{image.name}}" />
    </div>      
    {% endif %}  
  {% endfor %}  
</div>
<br/>
<div class="row">
  {% for image  in site.static_files %} 
    {% if image.path contains page.folder  %}
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image" >
                    <img src="{{ site.baseurl }}{{ image.path }}" alt="{{image.name}}" />      
                </div>
            </div>
        </div>        
    {% endif %}  
  {% endfor %}  
</div>

<!--<div class="row">       
    <div class="picture cf" itemscope="" itemtype="http://schema.org/ImageGallery">
        <figure itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">
            <a href="http://tutsplus.github.io/photoswipe-jquery/img/office-1.jpg" itemprop="contentUrl" data-size="1000x667">
                <img src="http://tutsplus.github.io/photoswipe-jquery/img/office-1-thumb.jpg" height="400" width="600" itemprop="thumbnail" alt="Beach">
            </a>
            </figure>
            <figure itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">
            <a href="/assets/images/Boudoir/Website-37_3332x5617.JPEG" itemprop="contentUrl" data-size="3332x5617">
                <img src="/assets/images/Boudoir/Website-37_3332x5617.JPEG" height="3332" width="5617" itemprop="thumbnail" alt="Beach">
            </a>
            </figure>
        {% for image  in site.static_files %} 
            {% if image.path contains page.folder  %}
            {% assign sizeExt = image.name | split: '_'%}
            {% assign size = sizeExt | last | split: "."%}
                <div class="col s12 m6" >
                    <div class="card">
                        <figure itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">
                            <a href="{{ site.baseurl }}{{ image.path }}" itemprop="contentUrl" data-size="{{ size | first }}">
                                <img src="{{ site.baseurl }}{{ image.path }}"  itemprop="thumbnail" alt="Beach">
                                <p>{{ size | first }}</p>
                            </a>
                        </figure>        
                    </div>
                </div>                                  
            {% endif %}  
        {% endfor %} 
    </div>  
</div>-->
<p>New</p>
<div class="demo-content cf">        
    <div class="picture {{ page.columns }} cf" itemscope="" itemtype="http://schema.org/ImageGallery">        
        {% for image  in site.static_files %} 
        {% if image.path contains page.folder %}
        {% assign sizeExt = image.name | split: '_'%}
        {% assign size = sizeExt | last | split: "."%}
        <figure itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">
            <a href="{{ site.baseurl }}{{ image.path }}" itemprop="contentUrl" data-size="{{ size | first }}">
                <img src="{{ site.baseurl }}{{ image.path }}"  itemprop="thumbnail" alt="Beach">
            </a>
            </figure>  
        {% endif %}  
    {% endfor %}  
    </div>                 
</div>
  
  <!-- Root element of PhotoSwipe. Must have class pswp. -->
  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
          <div class="pswp__container" style="transform: translate3d(0px, 0px, 0px);">
              <div class="pswp__item" ></div>
              <div class="pswp__item" ></div>
              <div class="pswp__item" ></div>
          </div>
          <div class="pswp__ui pswp__ui--fit pswp__ui--hidden">
              <div class="pswp__top-bar">
                  <div class="pswp__counter"></div>
                  <button class="pswp__button pswp__button--close" title="Close (Esc)" deluminate_imagetype="png"></button>
                  <!--<button class="pswp__button pswp__button--share" title="Share" deluminate_imagetype="png"></button>-->
                  <button class="pswp__button pswp__button--fs" title="Toggle fullscreen" deluminate_imagetype="png"></button>
                  <button class="pswp__button pswp__button--zoom" title="Zoom in/out" deluminate_imagetype="png"></button>
                  <div class="pswp__preloader">
                      <div class="pswp__preloader__icn">
                        <div class="pswp__preloader__cut">
                          <div class="pswp__preloader__donut"></div>
                        </div>
                      </div>
                  </div>
              </div>
              <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                  <div class="pswp__share-tooltip"></div> 
              </div>
              <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
              </button>
              <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
              </button>
              <div class="pswp__caption">
                  <div class="pswp__caption__center"></div>
              </div>
          </div>
      </div>
  </div>
  
<script src="/assets/js/photoswipe.min.js"></script>
<script src="/assets/js/photoswipe-ui-default.min.js"></script>
<!--<script src="/assets/js/script-min.js"></script>    -->
<script src="/assets/js/gallery.js"></script> 
