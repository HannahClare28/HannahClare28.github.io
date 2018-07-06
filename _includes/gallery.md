
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