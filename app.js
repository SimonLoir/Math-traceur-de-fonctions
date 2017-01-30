document.addEventListener('DOMContentLoaded', fn, false);
function fn(){
canvas = document.querySelector('canvas');
        ctx = canvas.getContext('2d');
        
       canvas.onclick = function () {
           
           document.querySelector('.tool-bar').classList.add('hidden');
           
       }
       
       document.querySelector('.hide').onclick = function (){
           document.querySelector('.tool-bar').classList.toggle("hidden");            
       };
       
       document.querySelector('.tool-bar').onclick= function () {
           
           document.querySelector('.tool-bar').classList.remove('hidden');
           
       }
       
       function hide(){
           canvas.click();
       }
        
        canvas.height = canvas.scrollHeight;
        canvas.width = canvas.scrollWidth;
        
        zoom = 50;

        if(window.location.hash != ""){
            zoom = parseInt(window.location.hash.replace('#', ""));
        }

        mid_height = canvas.scrollHeight / 2;
        mid_width = canvas.scrollWidth / 2;

        interval = zoom;

        window.onhashchange = function () {
            if(window.location.hash != ""){
                interval = parseInt(window.location.hash.replace('#', ""));
                document.querySelector('.clear').click();
            }
        }
        
        Ypos = mid_height;
        Ypos2 = mid_height;
        Xpos = mid_width;
        Xpos2 = mid_width;
        
        make_graph();
        
        ctx.beginPath();
        ctx.strokeStyle = "#e2a61f"
        ctx.strokeText('Designed by Simon Loir', 0, canvas.height - 10)
        
        x_zero = mid_width;
        y_zero = mid_height;
        
        document.querySelectorAll('button')[0].onclick = function () {
            make_graph();
        }
        
        document.querySelectorAll('button')[1].onclick = function () {
            val = document.querySelector('.function').value;
            
            val = val.replace("^2", "²");
            val = val.replace("³", "^3");
            val = val.replace("-x", "-1x");

            if(val == "x²"){
                power2(1,0,0);
                return;
            }
            
            matchs = val.match(/^(.+)x²$/i);
            
            if(matchs != null){
                power2(matchs[1], 0, 0);
                return;
            }
            
            matchs = val.match(/^(.+)x²\+(.+)$/i);
            
            if(matchs != null){
                val = matchs[1] + "(x-" + 0 + ")²+" + matchs[2];
                macths = null;
            }

            matchs = val.match(/^x²\+(.+)$/i);
            
            if(matchs != null){
                val =  "1(x-" + 0 + ")²+" + matchs[1];
                macths = null;
            }

            matchs = val.match(/^(.+)x\^3$/i);
            
            if(matchs != null){
                power3(matchs[1], 0, 0);
                return;
            }
            
            matchs = val.match(/(.+)\(x\-(.+)\)²\+(.+)/i);
            
            if(matchs != null){
                power2(matchs[1], matchs[2], parseFloat(matchs[3]));
                return;
            }
            
            matchs = val.match(/(.+)\(x\+(.+)\)²\+(.+)/i);
            
            if(matchs != null){
                power2(matchs[1], -matchs[2], parseFloat(matchs[3]));
                return;
            }
            
            matchs = val.match(/(.+)\(x\-(.+)\)²\-(.+)/i);
            
            if(matchs != null){
                power2(matchs[1], matchs[2], -parseFloat(matchs[3]));
                return;
            }
            
            matchs = val.match(/(.+)\(x\+(.+)\)²\-(.+)/i);
            
            if(matchs != null){
                power2(matchs[1], -matchs[2], -parseFloat(matchs[3]));
                return;
            }
            
            matchs = val.match(/(.+)x²\+(.+)x\+(.+)/i)
            
            if(matchs != null){
                
                var a, b, c;

                a = parseFloat(matchs[1]);
                b = parseFloat(matchs[2]);
                c = parseFloat(matchs[3]);
                
                from_dev(a, b,c, val);
            }
            
            matchs = val.match(/(.+)x²\-(.+)x\+(.+)/i)
            
            if(matchs != null){
                
                var a, b, c;

                a = parseFloat(matchs[1]);
                b = -parseFloat(matchs[2]);
                c = parseFloat(matchs[3]);
                
                from_dev(a, b,c, val);
            }
            
            matchs = val.match(/(.+)x²\+(.+)x\-(.+)/i)
            
            if(matchs != null){
                
                var a, b, c;

                a = parseFloat(matchs[1]);
                b = parseFloat(matchs[2]);
                c = - parseFloat(matchs[3]);
                
                from_dev(a, b,c, val);
            }
            
            matchs = val.match(/(.+)x²\-(.+)x\-(.+)/i)
            
            if(matchs != null){
                
                var a, b, c;

                a = parseFloat(matchs[1]);
                b = -parseFloat(matchs[2]);
                c = - parseFloat(matchs[3]);
                
                from_dev(a, b,c, val);
            }

            console.error('No match found !');
            
        }
}

function from_dev(a, b, c, val){
            var dev = document.querySelector('.dev');
                dev.innerHTML = "<b>Développement : </b><br />"
                dev.innerHTML += "Forme développée : " + val;
                dev.innerHTML += "<br />Passage à la forme canonique :";
                dev.innerHTML += "<br />a = " + a;
                dev.innerHTML += "<br />b = " + b;
                dev.innerHTML += "<br />c = " + c;
                dev.innerHTML += "<br /><br /> ax²+bx+c<br />= ";
                dev.innerHTML += "a.(x²+b/a+c/a)<br />= ";
                dev.innerHTML += "a.(x²+ b/a + c/a + ((b/a) . (1/2))² - ((b/a) . (1/2))² + c/a)<br />= ";
                dev.innerHTML += "a.((x + (b/a) . (1/2))² - ((b/a) . (1/2))² + c/a)<br />= ";

                
                
                var first_exp = (b/a) * (1/2);
                
                dev.innerHTML += a + "(x + " + first_exp +")² - " + a +"(" + first_exp +")² + " + c + "<br />= ";

                var exp_2 = -a * Math.pow(first_exp,2);

                exp_2 = (exp_2 + c);
                
                dev.innerHTML += a + "(x + " + first_exp +")² + " +exp_2;

                
                document.querySelector('.function').value = a + "(x+" + first_exp + ")²+" + exp_2;

                document.querySelectorAll('button')[1].click();
        }