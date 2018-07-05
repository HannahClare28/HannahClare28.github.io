<div class="container" style="padding:10px;">
  <div id="contact" class="section scrollspy">     
    <div class="card medium" style="height: auto;">
      <div class="card-content" >   
        <div style="text-align:center">
          If you like my pictures, get in contact with me and leave a message.
          <br/> <br/> 
          The best way to keep up with my work is to follow my Instagram account hannahclare_p      
          <br/> <br/>  
        </div>  
        <div class="row" style="text-align:center">
          <a class="waves-effect waves-light btn purple lighten" target="_blank" href="{{site.instagram}}" ><i class="fab fa-instagram right fa-2x " style=" font-size: 2.5rem"></i></a>  
        </div>
      </div>
    </div>
  </div>
</div>
<div id="email" class="section scrollspy">
   <h3 style="text-align:center;">Email me!</h3>   
 </div>
<div class="card medium" style="height: auto;">   
  <div class="card-content" >
    <form class="col s12" action="https://formspree.io/{{site.email}}" method="POST">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input class="validate" id="icon_prefix" type="text" name="name">
          <label for="icon_prefix">Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input class="validate" id="email" type="email" name="_replyto">
          <label for="email" data-error="Please enter a valid Email Address" data-success="Verified!">Email</label>
        </div>
      </div>
      <div class="row">
       <div class="input-field col s12">
         <i class="material-icons prefix">message</i>
         <textarea id="icon_prefix2" class="materialize-textarea" name="message"></textarea>
         <label for="icon_prefix2">Message</label>
       </div>
     </div>
      <button class="btn waves-effect grey waves-dark darken-3 white-text z-depth-4 " style="text-align:center" type="submit" name="action">Submit
         <i class="material-icons right">send</i>
       </button>
    </form>
  </div>  
</div>
