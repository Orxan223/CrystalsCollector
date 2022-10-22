let umumi = 0
let win = 1
            let lost = 1

            let texmini1 = Math.floor(Math.random() * 10) + 1
            let texmini2 = Math.floor(Math.random() * 10) + 1
            let texmini3 = Math.floor(Math.random() * 10) + 1
            let texmini4 = Math.floor(Math.random() * 10) + 1
            let finish =   Math.floor(Math.random() * 100) + 1

            $(".target").html(finish)
            
            

            $(".red").on("click",function(){
                umumi += texmini1
                $(".number").html(umumi)
                
               
                netice()
            })
            $(".blue").on("click",function(){
                umumi += texmini2
                $(".number").html(umumi) 
              
                netice()
            })
            $(".green").on("click",function(){
                umumi += texmini3
                $(".number").html(umumi) 
               
                netice()
            })
            $(".white").on("click",function(){
                umumi += texmini4
                $(".number").html(umumi) 
                
                netice()
            })

            // $(".sifirla").on("click",function(){
            //     finish = Math.floor(Math.random() * 100) + 1
            //     $(".target").html(finish)
            // })
            

            function netice(){
                if(umumi == finish  ){
                    alert("You are winner")
                    umumi = 0
                    $(".win").html(win)
                    win++
                    
                }else if(umumi > finish){
                    alert("Please try again")
                    umumi = 0
                    $(".lost").html(lost)
                    lost++

                }
            }