$(document).ready(function() {



    
const storeItems = [
    {
        title: 'Blanco y Negro VIPDJ Headphones',
        description: 'Pioneer HDJ2000 Limited Edition. Ibiza, early 2010s. Blanco y Negro record label official product. 40 units ever built. Worn by famous balearic Djs. Handmade by master jewelers with aprox. 4.000~ SWAROVSKI ELEMENTS T crystals.'
       +   ' <p> Comes with the Pioneer Blanco y Negro cover box, a hard plastic protective case, and the business card of the jeweler that made them. Mint condition. </p>'
       +   ' <p><a href="https://luxurylaunches.com/gadgets/swarowski_studded_pioneer_hdj2000_headphones_for_the_starryeyed_djs.php">Read more</a></p>',
        price: '€3500.00',
        image: '/pics/store/1.jpeg'
    }//,
//    {
      //  title: 'Old Antique German Pharmacy Jarsd Logo T-Shirt',
      //  description: 'Black, 100% cotton, sizes S–XL.',
     //   price: '€20.00',
     //   image: '/pics/store/shirt1.jpg'
//    }
];

// Create the store popup HTML
const storePopup = $(`
    <div id="store-popup">
        <div class="close-btn">&times;</div>
        <div id="store-content">      </div>
        <div>  <p>Contact <a href="mailto:web@estrellarecords.com?subject=Webform"  target="_blank">Here</a> for purchases and inquiries. </p></br>  <h3>Legal Notice & Privacy Policy</h3>
    <p>This is a personal webpage created for the occasional sale of privately owned collectible items. It is not a commercial or professional business activity. </p>
    <p>This website does not collect personal data through forms. If you contact me by email, the information you provide (such as your name, email address, and message) will be used solely to respond to your inquiry or manage the possible sale. Your data will not be stored or shared with third parties.</p>
 </div>
`);

$('body').append(storePopup);

// Populate the store
storeItems.forEach(item => {
    const html = `
        <div class="store-item">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
        </div>
    `;
    $('#store-content').append(html);
});

// Show/hide logic
$('#store').on('click', function(event) {
    event.preventDefault();
    $('#store-popup').fadeIn(300);
});

$('#store-popup .close-btn').on('click', function() {
    $('#store-popup').fadeOut(300);
});

// Optional: close on ESC
$(document).on('keydown', function(e) {
    if (e.key === "Escape") {
        $('#store-popup').fadeOut(300);
    }
});

    









    
    const popup = $('<div id="popup-links"></div>').html(`
        <a href="https://www.youtube.com/@estrellarecordsmadrid" target="_blank">Youtube</a>
        <a href="https://www.soundcloud.com/estrellarecords" target="_blank">Soundcloud</a><br>
        <a href="https://www.mixcloud.com/juliocaroa/" target="_blank">Mixcloud</a><br>
        <a href="https://www.instagram.com/estrellarecordsmadrid/" target="_blank">Instagram</a>
        <a href="https://www.tiktok.com/@estrellarecordsmadrid/" target="_blank">TikTok</a>
        <a href="mailto:web@estrellarecords.com?subject=Webform"  target="_blank">Email</a><br>       
    `);

    $('body').append(popup);

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#popup-links, #links').length) {
            popup.hide();
        }
    });

$('#links').on('click', function(event) {
    event.stopPropagation(); // Prevent event bubbling up to document click

    const buttonPosition = $(this).offset();
    const buttonHeight = $(this).outerHeight();
    const popupHeight = popup.outerHeight(); // Get popup height



    const leftPosition = buttonPosition.left;
    
    // Move the popup **higher** by subtracting its height 
    const topPosition = buttonPosition.top - popupHeight ;

    popup.css({
        top: topPosition,  
        left: leftPosition 
    }).toggle();
});



    $('#gallery').on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        $.magnificPopup.open({
            items: [
                {
                    src: '/pics/1.jpeg', // Image 1
                    type: 'image'
                },
                {
                    src: '/pics/2.jpg', // Image 2
                    type: 'image'
                },
                {
                    src: '/pics/3.jpg', // Image 3
                    type: 'image'
                },
                {
                    src: '/pics/4.jpg', // Image 4
                    type: 'image'
                },
                {
                    src: '/pics/5.jpg', // Image 5
                    type: 'image'
                },
                {
                    src: '/pics/6.jpg', // Image 6
                    type: 'image'
                }   
          //  ,
            //    {
              //      src: 'https://www.youtube.com/watch?v=0R-UEiYKYvs', // Video 1
            //      type: 'iframe'
           //     }
                //,
           //     {
           //         src: 'https://vimeo.com/example2', // Video 2
           //         type: 'iframe'
           //     }
            ],
            gallery: {
                enabled: true, // Enables gallery mode
                navigateByImgClick: true, // Allows navigation by clicking on images
                preload: [0, 1] // Preload current and next image/video
            },
            type: 'image', // Default type to image
            mainClass: 'mfp-img-mobile', // Mobile responsive
            tLoading: 'Loading content #%curr%...', // Loading text for both images and videos
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', // Error text for images
                verticalFit: true // Fits image vertically
            },
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/', // YouTube link detection
                        id: 'v=', // Get the video ID from the link
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' // Embedded YouTube video URL
                    },
                    vimeo: {
                        index: 'vimeo.com/', // Vimeo link detection
                        id: '/', // Get the video ID from the link
                        src: 'https://player.vimeo.com/video/%id%?autoplay=1' // Embedded Vimeo video URL
                    }
                },
                tError: '<a href="%url%">The video #%curr%</a> could not be loaded.' // Error text for videos
            },
            callbacks: {
                change: function() {
                    const mediaType = this.currItem.type; // 'image' or 'iframe'
                    const mediaIndex = this.index + 1; // Get 1-based index of the current media

                    // Get the current time in uct+2
                    const currentTime = new Date();
                    const timeOffset = currentTime.getTimezoneOffset(); // Get offset in minutes from UTC
                    const UTC2Offset = -120; // UTC+2 offset is -120 minutes
                    const localTime = new Date(currentTime.getTime() + (UTC2Offset - timeOffset) * 60000); // Adjust time to GMT+1
                    const time = localTime.toISOString().split('T')[1].split('.')[0]; // Extract time part from ISO string
                    
                    // Log each image or video view as a goal with the current time (GMT+1)
                    if (mediaType === 'image') {
                        clicky.goal('P' + mediaIndex + ' ' + time); // Image view with time
                    } else if (mediaType === 'iframe') {
                        clicky.goal('V' + mediaIndex + ' ' + time); // Video view with time
                    }

                }
            }
        });
    });

    function isFirefoxMobile() {
        const userAgent = navigator.userAgent.toLowerCase();
        return userAgent.includes('firefox') && userAgent.includes('mobile');
    }

    function isMobile() {
        const userAgent = navigator.userAgent.toLowerCase();
        return userAgent.includes('mobile');
    }

    if (isFirefoxMobile()) {
        document.body.classList.add('firefox-mobile');
    } else if (isMobile()) {
        document.body.classList.add('general-mobile');
    } else {
        document.body.classList.add('no-mobile');
    }
});
