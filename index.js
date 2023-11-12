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


// Main Slider
const main_slider = ()=>{
    let pre_btn = document.querySelector("#slider #slide_btns > .btn1")
    pre_btn.style.backgroundColor="Black";
    pre_btn.style.width="17px"
    let prev_btn = document.querySelector("#slider #slide_btns > .btn1");
    let next_btn = document.querySelector("#slider #slide_btns > .btn2");
    prev_btn.addEventListener("click",()=>{
        prevSlide()
    })
    next_btn.addEventListener("click",()=>{
        nextSlide()
    })
    const sliderImages = document.getElementById('slider_images');
    let currentIndex = 0;
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % 2;
        updateSlider(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + 2) % 2;
        updateSlider(currentIndex);
    }
    
    function updateSlider(currentIndex) {
        const translateValue = -currentIndex * 100 + '%';
        next_btn.style.width = (currentIndex==1) ? "17px" : "6px"
        next_btn.style.backgroundColor=(currentIndex==1) ? "black" : ""
        prev_btn.style.width = (currentIndex==0) ? "17px" : "6px"
        prev_btn.style.backgroundColor=(currentIndex==0) ? "black" : ""
        sliderImages.style.transform = 'translateX(' + translateValue + ')';
    }
    setInterval(()=>{
        currentIndex = (currentIndex)? 0:1
        updateSlider(currentIndex);
    },8000)
}
main_slider()



/* Main Slider*/


/*for mobile */
var screenWidth = window.innerWidth;



if (screenWidth <= 450) {
    let x = 0
    const scrollslider = (x)=>{
            gsap.to(".slider .featuressection",{
                left:(x),
                duration:1.5,

            })
    }
    let feature_left = document.getElementById("feature_left");
    const manualscrollslide = ()=>{
        feature_left.style.opacity=0.5;
        document.getElementById("feature_right").addEventListener("click",()=>{
            if(x>-1580){
                scrollslider(x-=395);
                feature_left.style.opacity=1;
                feature_right.style.opacity=1;
            }
            if(x===-1185){
                feature_right.style.opacity=0.5;
            }
        })
        document.getElementById("feature_left").addEventListener("click",()=>{
            if(x<0){
                scrollslider(x+=395);
                feature_right.style.opacity=1;
            }
            if(x===0){
                feature_left.style.opacity=0.5;
            }
        })
    }
    manualscrollslide();


    const automaticscrollslider = ()=>{
        
        setInterval(()=>{
            scrollslider(x-=395);
                if(x===0){
                    feature_left.style.opacity=0.5;
                }
                else{
                    feature_left.style.opacity=1;
                }
                if(x<-1580){
                    feature_right.style.opacity=0.5;
                    return x=395;
                }
                else{
                    // feature_left.style.opacity=1;
                    feature_right.style.opacity=1;
                }
            },3300)
    }
    automaticscrollslider();
}

/*for Mobile*/


else{
    let x = 0
    const scrollslider = (x)=>{
            gsap.to(".slider .featuressection",{
                left:(x),
                duration:1.5,

            })
    }
    let feature_left = document.getElementById("feature_left");
    const manualscrollslide = ()=>{
        feature_left.style.opacity=0.5;
        document.getElementById("feature_right").addEventListener("click",()=>{
            if(x>-1020){
                scrollslider(x-=395);
                feature_left.style.opacity=1;
                feature_right.style.opacity=1;
            }
            if(x===-1185){
                feature_right.style.opacity=0.5;
            }
        })
        document.getElementById("feature_left").addEventListener("click",()=>{
            if(x<0){
                scrollslider(x+=395);
                feature_right.style.opacity=1;
            }
            if(x===0){
                feature_left.style.opacity=0.5;
            }
        })
    }
    manualscrollslide();


    const automaticscrollslider = ()=>{
        
        setInterval(()=>{
            scrollslider(x-=395);
                if(x===0){
                    feature_left.style.opacity=0.5;
                }
                else{
                    feature_left.style.opacity=1;
                }
                if(x<-1020){
                    feature_right.style.opacity=0.5;
                    return x=395;
                }
                else{
                    // feature_left.style.opacity=1;
                    feature_right.style.opacity=1;
                }
            },3300)
    }
    automaticscrollslider();
}



/* First Slider */

/* Second Slider */

/*for Mobile*/


if (screenWidth <= 450){

    let y = 0
    const scrollslider2 = (y)=>{
        console.log(y)
            gsap.to(".slider2 .offer_section",{
                left:(y),
                duration:1,

            })
    }

    const manualscrollslide2 = ()=>{
        document.getElementById("offer_left").style.opacity=0.5;
        document.getElementById("offer_right").addEventListener("click",()=>{
            if(y>-1185){
                
                scrollslider2(y-=395);
            }
            if(y===-1185){
                offer_right.style.opacity=0.5;
            }
            if(y!==0){
                offer_left.style.opacity=1;
            }
            
        })
        document.getElementById("offer_left").addEventListener("click",()=>{
            if(y<0){
                scrollslider2(y+=395);
                
            }
            if(y===0){
                offer_left.style.opacity=0.5;
            }
            if(y!==-1185){
                offer_right.style.opacity=1;
            }
        })
    }
    manualscrollslide2();

}

/*for Mobile*/


else{
    let y = 0
    const scrollslider2 = (y)=>{
        console.log(y)
            gsap.to(".slider2 .offer_section",{
                left:(y),
                duration:1,

            })
    }

    const manualscrollslide2 = ()=>{
        document.getElementById("offer_left").style.opacity=0.5;
        document.getElementById("offer_right").addEventListener("click",()=>{
            if(y>-395){
                scrollslider2(y-=395);
                offer_right.style.opacity=0.5;
                offer_left.style.opacity=1;
            }
        })
        document.getElementById("offer_left").addEventListener("click",()=>{
            if(y<0){
                scrollslider2(y+=395);
                offer_right.style.opacity=1;
                offer_left.style.opacity=0.5;
            }
        })
    }
    manualscrollslide2();

}
    

    //  const automaticscrollslider2 = ()=>{
    //      setInterval(()=>{
    //          scrollslider2(y-=395);
    //          if(y<0){
    //             offer_right.style.opacity=0.5;
    //             offer_left.style.opacity=1;
    //              return y=395;
    //          }
    //          else{
    //             offer_right.style.opacity=1;
    //             offer_left.style.opacity=0.5;
    //          }
    //      },3500)
    //     }
    // automaticscrollslider2();

 /*Second Slider */


 /*third slider*/

 /*for Mobile*/


 let z = 0
 let why_rev_left = document.getElementById("why_rev_left")
 let why_rev_right = document.getElementById("why_rev_right")
 const scrollslider3 = (z)=>{
         gsap.to(".slider3 .why_rev_section",{
             left:(z),
             duration:1,

         })
 }   

if(screenWidth <= 450){
        
    const manualscrollslide3 = ()=>{

        why_rev_left.style.opacity=0.5;
        document.getElementById("why_rev_right").addEventListener("click",()=>{
            if(z>-1185){
                scrollslider3(z-=395);
            }
            if(z===-1185){
                why_rev_right.style.opacity=0.5;
            }
            if(z!==0){
                why_rev_left.style.opacity=1;
            }

        })
        document.getElementById("why_rev_left").addEventListener("click",()=>{
            if(z<0){
                scrollslider3(z+=395);
            }
            if(z===0){
                why_rev_left.style.opacity=0.5;
            }
            if(z!==-1185){
                why_rev_right.style.opacity=1;
            }
        })
    }
    manualscrollslide3();
}

/*for Mobile*/

else{
      
    const manualscrollslide3 = ()=>{

        why_rev_left.style.opacity=0.5;
        document.getElementById("why_rev_right").addEventListener("click",()=>{
            if(z>-395){
                scrollslider3(z-=395);
                why_rev_right.style.opacity=0.5;
                why_rev_left.style.opacity=1;
            }
        })
        document.getElementById("why_rev_left").addEventListener("click",()=>{
            if(z<0){
                scrollslider3(z+=395);
                why_rev_right.style.opacity=1;
                why_rev_left.style.opacity=0.5;
            }
        })
    }
    manualscrollslide3();
}

/* third slider */    

