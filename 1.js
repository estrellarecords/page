$(document).ready(function() {
    const popup = $('<div id="popup-links"></div>').html(`
        <a href="https://soundcloud.com/estrellarecords" target="_blank">Soundcloud</a><br>
        <a href="https://www.mixcloud.com/juliocaroa/" target="_blank">Mixcloud</a><br>
        <a href="mailto:juliocaro@estrellarecords.com?subject=Webform"  target="_blank">Email</a><br>
        <a href="https://www.instagram.com/estrellarecordsmadrid/" target="_blank">Instagram</a>
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
           ,
               {
              //      src: 'https://www.youtube.com/watch?v=0R-UEiYKYvs', // Video 1
            //      type: 'iframe'
               }
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
