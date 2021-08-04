function test() {
             var p1 = document.getElementById('password1').value;
               if( p1 != 2356) {
                document.write("잘가");
                return false;
               } else{
                 location.href="main.html";
               return true;
               }
           }
