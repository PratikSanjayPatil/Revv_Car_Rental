var login = document.getElementById("lo_n");
var login2 = document.getElementById("lo_n2");
let saved_detail = JSON.parse(localStorage.getItem("Authentic")) || {};
if(saved_detail === true){
    login.addEventListener("click", function(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
    
        alert("Allready Login")
    });

    login2.addEventListener("click", function(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
    
        alert("Allready Login")
    });
}


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

//nav Bar 2

const nav2_display = ()=>{
    let nav = document.getElementById("nav2");
    document.addEventListener("scroll",()=>{
        var scrollLength = window.scrollY || document.documentElement.scrollTop;
        // nav.style.top = scrollLength>=550 ? "60px" : "0"
        if(scrollLength>=510){
            gsap.to("#nav2",{
                top:60,
                duration:0.5,
                delay:0,
            })
        }
        else{
            gsap.to("#nav2",{
                top:0,
                duration:0.5,
                delay:0,
                ease: "power2.out"
            })
        }
    })
}
nav2_display()

//Nav Bar 2 End


// Login and Logout




// login and logout end


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




// Select City Section


const add_city = ()=>{
    const top50CitiesInIndia = [
        "Select City",
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Hyderabad",
        "Ahmedabad",
        "Chennai",
        "Kolkata",
        "Surat",
        "Pune",
        "Jaipur",
        "Lucknow",
        "Kanpur",
        "Nagpur",
        "Indore",
        "Thane",
        "Bhopal",
        "Visakhapatnam",
        "Pimpri-Chinchwad",
        "Patna",
        "Vadodara",
        "Ghaziabad",
        "Ludhiana",
        "Agra",
        "Nashik",
        "Faridabad",
        "Meerut",
        "Rajkot",
        "Kalyan-Dombivali",
        "Vasai-Virar",
        "Varanasi",
        "Srinagar",
        "Aurangabad",
        "Dhanbad",
        "Amritsar",
        "Navi Mumbai",
        "Allahabad",
        "Howrah",
        "Ranchi",
        "Gwalior",
        "Jabalpur",
        "Coimbatore",
        "Vijayawada",
        "Jodhpur",
        "Madurai",
        "Raipur",
        "Chandigarh",
        "Guntur",
        "Guwahati"
      ];
      let select = document.querySelectorAll("#city");
    //   const selected_city = document.getElementById("selected_city").innerText=top50CitiesInIndia[0]
      console.log(select);
      select.forEach((ppp)=>{
        top50CitiesInIndia.map((item)=>{
            let opt = document.createElement("option");
            opt.value=item
            opt.text=item
            ppp.appendChild(opt)
          })
      })
}

//Select City Section End
/* Main Slider*/

/* First Slider */


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



/* First Slider End */

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



//Happy Customers

    /*for Mobile*/


    let a = 0
    let happy_left = document.getElementById("happy_left")
    let happy_right = document.getElementById("happy_right")
    const scrollslider4 = (a)=>{
        
            gsap.to(".happy_slider .happy_section",{
            left:(a),
            duration:1,

        })
    }   
   
   if(screenWidth <= 450){
           
       const manualscrollslide4 = ()=>{
   
           happy_left.style.opacity=0.5;
           document.getElementById("happy_right").addEventListener("click",()=>{
               if(a>-1975){
                   scrollslider4(a-=395);
               }
               if(a===-1975){
                   happy_right.style.opacity=0.5;
               }
               if(a!==0){
                   happy_left.style.opacity=1;
               }
   
           })
           document.getElementById("happy_left").addEventListener("click",()=>{
               if(a<0){
                   scrollslider4(a+=395);
               }
               if(a===0){
                   happy_left.style.opacity=0.5;
               }
               if(a!==-1975){
                   happy_right.style.opacity=1;
               }
           })
       }
       manualscrollslide4();
   }
   
   /*for Mobile*/
   
   else{

       const manualscrollslide4 = ()=>{
   
           happy_left.style.opacity=0.5;
           document.getElementById("happy_right").addEventListener("click",()=>{
               if(a>-590){
                   scrollslider4(a-=295);
                   
               }
               if(a===-590){
                happy_right.style.opacity=0.5;
               }
               else if(a!==0){
                    happy_left.style.opacity=1;
               }
           })
           document.getElementById("happy_left").addEventListener("click",()=>{
               if(a<0){
                   scrollslider4(a+=295);
                   
               }
               if(a===0){
                happy_left.style.opacity=0.5;
               }
               else if(a!==-590){
                    happy_right.style.opacity=1;
               }
           })
       }
       manualscrollslide4();
   }
   
   
   //Happy customers



// Nav Bar 2 start

add_city();
const rental_box_change = ()=>{
    const subs_header = document.getElementById("subs_header")
    const rental_header = document.getElementById("rental_header")
    const cale_box = document.querySelector("#rental_box .selection_box .calendor")
    const select = document.querySelector("#rental_box .selection_box select")
    const rental_logo_img = document.getElementById("rental_logo_img")
    const inp = document.querySelector("#rental_box .selection_box select")
    const selected_city = document.getElementById("selected_city")
    inp.addEventListener("change",()=>{
        selected_city.innerText=inp.value

    })
    subs_header.addEventListener("click",()=>{
        subs_header.classList="active"
        rental_header.classList=null
        cale_box.style.display="none"
        select.style.borderRadius = "10px";
        select.style.marginTop="40px"
        rental_logo_img.src="./Assets/subscription_web.png"
    })
    rental_header.addEventListener("click",()=>{
        rental_header.classList="active"
        subs_header.classList=null
        cale_box.style.display="flex"
        select.style.borderRadius = "10px 10px 0 0";
        select.style.marginTop="0"
        rental_logo_img.src="./Assets/asset 9.svg"

    })
}
rental_box_change();


// Nav Bar End


