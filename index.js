console.log("index");
let menubtn = document.getElementById("menu_btn")
menubtn.addEventListener("click",()=>{
    opnsdmenu(true);
})
let menuclosebtn = document.getElementById("menu_close_btn")
menuclosebtn.addEventListener("click",()=>{
    opnsdmenu(false);
})
const opnsdmenu = (flag)=>{
    let sidemenu = document.getElementById("side_menu")
    sidemenu.className = flag ? "active" : ""
}

/* First Slider */
let x = 0
const scrollslider = (x)=>{
        gsap.to(".slider .featuressection",{
            left:(x),
            duration:1.2,

        })
}

const manualscrollslide = ()=>{
    document.getElementById("feature_right").addEventListener("click",()=>{
        if(x>-1020){
            scrollslider(x-=395);
        }
    })
    document.getElementById("feature_left").addEventListener("click",()=>{
        if(x<0){
            scrollslider(x+=395);
        }
    })
}
manualscrollslide();
const automaticscrollslider = ()=>{
        setInterval(()=>{
            scrollslider(x-=395);
            if(x<-1020){
                return x=395;
            }
        },3000)
}
automaticscrollslider();

/* First Slider */

/* Second Slider */
    let y = 0
    const scrollslider2 = (y)=>{
        console.log(y)
            gsap.to(".slider2 .offer_section",{
                left:(y),
                duration:1.2,

            })
    }

    const manualscrollslide2 = ()=>{
        document.getElementById("offer_right").addEventListener("click",()=>{
            console.log(y)
            if(y>-395){
                scrollslider2(y-=395);
            }
        })
        document.getElementById("offer_left").addEventListener("click",()=>{
            console.log(y)
            if(y<0){
                scrollslider2(y+=395);
            }
        })
    }
    manualscrollslide2();

     const automaticscrollslider2 = ()=>{
         setInterval(()=>{
             scrollslider2(y-=395);
             if(y<0){
                 return y=395;
             }
         },3300)
        }
    automaticscrollslider2();
 /*Second Slider */

