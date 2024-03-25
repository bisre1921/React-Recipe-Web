
export const NavLinks = [
    {
        label : "Home" , 
        to : "/"
    }, 
    {
        label : "About" , 
        to : "/about"
    } , 
    {
        label : "Contact-us" , 
        to : "contact-us"
    } , 
    
];



export const settings = {
    // dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 2 ,
     autoplay: true,
     autoplaySpeed: 1000,
     responsive: [
         {
           breakpoint: 1400,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 2,
           }
         },
         {
           breakpoint: 1279,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
           }
         },
         {
           breakpoint: 1023,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         },
         {
             breakpoint: 767,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 1
             }
         },
           {
             breakpoint: 639,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
         }
       ]
 };

export const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + " ..." : text;
};
