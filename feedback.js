    <script type="text/javascript">
      $(document).ready(function(){
         $('#comment').click(function(){
          var input= $('#input').val();
          $('.box').append(input +'<br>');
          $('#input').val('');
          $('.box-container').slideDown();
         });
          
         $('#cancel').click(function(){
          $('#input').val('');
         });
       
         $('#delete').click(function(){
          $('.box').text('');
          $('.box-container').slideUp();
         });
      });
