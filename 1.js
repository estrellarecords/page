$(document).ready(function() {
    const popup = $('<div id="popup-links"></div>').html(`
        <a href="https://soundcloud.com/estrellarecords" target="_blank">Soundcloud</a><br>
        <a href="https://www.mixcloud.com/known1234/" target="_blank">Mixcloud</a><br>
        <a href="mailto:juliocaro@estrellarecords.com?subject=Webform"  target="_blank">Contact</a>
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

        const windowWidth = $(window).width();
        const additionalOffset = 10; // Extra padding or offset

        // Calculate left position as a fixed value based on button's position
        const leftPosition = buttonPosition.left + additionalOffset;

        // Toggle popup visibility and position it relative to the button with extra offset
        popup.css({
            top: buttonPosition.top + buttonHeight + additionalOffset,  // Add offset to the top
            left: leftPosition // Use fixed left position
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
                // Add more items as needed
            ],
            gallery: {
                enabled: true, // Enables gallery mode
                navigateByImgClick: true, // Allows navigation by clicking on images
                preload: [0, 1] // Preload current and next image
            },
            type: 'image', // Default type to image
            mainClass: 'mfp-img-mobile', // Mobile responsive
            tLoading: 'Loading image #%curr%...', // Loading text
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', // Error text
                verticalFit: true // Fits image vertically
            },
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/', // YouTube link detection
                        id: 'v=', // Get the video ID from the link
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1' // Embedded video URL
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
