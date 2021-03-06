// navigation menu
(() => {

    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navmenu = document.querySelector(".nav-menu"),
    closeNavBtn = document.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click",showNavMenu);
    closeNavBtn.addEventListener("click",hideNavMenu);


    function bodyScrollingToggle() {
       document.body.classList.toggle("stop-scrolling");
    }

    function showNavMenu() {
       navmenu.classList.add("open");
       bodyScrollingToggle();
    }
    function hideNavMenu() {
      navmenu.classList.remove("open");
      fadeOutEffect();
      bodyScrollingToggle();
   }
   function fadeOutEffect() {
      document.querySelector(".fade-out-effect").classList.add("active");
      setTimeout(() => {
         document.querySelector(".fade-out-effect").classList.remove("active");
      },300)
   }

   // attach and event handler to document
   document.addEventListener("click", (event) => {
      if(event.target.classList.contains('link-item')){
         //  make sure event.target.hash has a value before existing
         if(event.target.hash !==""){
         //   prevent default anchor click behavior
            event.preventDefault();
            const hash = event.target.hash;
            // deactivate existing  active section           
            document.querySelector(".section.active").classList.add("hide");
            document.querySelector(".section.active").classList.remove("active");
            // activate new section
            document.querySelector(hash).classList.add("active");
            document.querySelector(hash).classList.remove("hide");
            // deactivating existing active naigation menu 'link-item'
            navmenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
            navmenu.querySelector(".active").classList.remove("active","inner-shadow");
            // if clicked link-item is contained withing the nav menu
            if(navmenu.classList.contains("open")){
               // activate  new navigation menu link item
               event.target.classList.add("active","inner-shadow");
               event.target.classList.remove("outer-shadow","hover-in-shadow");
               // hide nav menu
             hideNavMenu();

            }
            else{
                let navItems = navmenu.querySelectorAll(".link-item"); 
                navItems.forEach((item) => {
                   if(hash === item.hash){
                  //  activate new navigation menu 'link-item'
                  item.classList.add("active","inner-shadow"); 
                  item.classList.remove("outer-shadow","hover-in-shadow");    
               }
               })
               fadeOutEffect();
            }
         }
      }
   })

})();


// about section tabs

(() =>{
       const aboutSection = document.querySelector(".about-section"),
       tabsConstainer = document.querySelector(".about-tabs");

       tabsConstainer.addEventListener("click",(event) =>{
        //    if event.target contains "tab-item" class and not contains 'active' class
           if(event.target.classList.contains("tab-item") && 
           !event.target.classList.contains("active")){
           const target = event.target.getAttribute("data-target");
        //    deactivate existing active 'tab-item'
           tabsConstainer.querySelector(".active").classList.remove("outer-shadow"
           ,"active");
        //    activate new 'tab-item'
           event.target.classList.add("active","outer-shadow");
        //    deactivate existing active 'tab-content'
           aboutSection.querySelector(".tab-content.active").classList.remove("active");
        // //    activate new 'tab-content'
        aboutSection.querySelector(target).classList.add("active");
           }
       })
})();


// portfolio filter

// (() =>{
//     const filterContainer = document.querySelector(".portfolio-filter"),
//     portfolioitemsContainer = document.querySelector(".portfolio-items"),
//     portfolioItems = document.querySelectorAll(".portfolio-item");
//     // Let itemIndex, slideIndex, screenshot;

//     filterContainer.addEventListener("click", (event)=>{
//         if(event.target.classList.contains("filter-item") && 
//         event.target.classList.contains("active")){
//        filterContainer.querySelector(".active").classList.remove("active","outer-shadow");
//        event.target.classList.add("active","outer-shadow");
//        const target = event.target.getAttribute("data-target");
//        portfolioItems.forEach((item)=>{
//            if(target === item.getAttribute("data-category")){
//         item.classList.remove("hide");
//         item.classList.add("show");

//            }
//            else{
//             item.classList.remove("hide");
//             item.classList.add("show");
//            }
//        })
//         }
//     })
// })();


// hide all section except active

(() =>{

   const sections = document.querySelectorAll(".section");
   sections.forEach((section) =>{
      if(!section.classList.contains("active")){
         section.classList.add("hide");
      }
   })

})();

















