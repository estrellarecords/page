$(document).ready(function() {
    $(document).on('click', function (event) {
        if (!$(event.target).closest('#popup-links, #links').length) {
            popup.hide();
        }
    });
    // Create the popup div and append it to the body
    const popup = $('<div id="popup-links"></div>').html(`
        <a href="https://example.com" target="_blank">Example Link 1</a><br>
        <a href="https://anotherlink.com" target="_blank">Example Link 2</a><br>
        <a href="https://yetanotherlink.com" target="_blank">Example Link 3</a>
    `);

    // Append popup to the body
    $('body').append(popup);

$('#links').on('click', function(event) {
    event.stopPropagation();  // Prevent event bubbling up to document click

    // Get the current position of the button
    const buttonPosition = $(this).offset();
    const buttonHeight = $(this).outerHeight();

    const windowWidth = $(window).width();
    const additionalOffset = 10; // Extra padding or offset

    // Calculate left position as a percentage of window width
    let leftPosition = (buttonPosition.left / windowWidth) * 100;

    // Toggle popup visibility and position it relative to the button with extra offset
    popup.css({
        top: buttonPosition.top + buttonHeight + additionalOffset,  // Add offset to the top
        left: `calc(${leftPosition}% + ${additionalOffset}px)`  // Responsive left position
    }).toggle();
});


    $('#gallery').on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        $.magnificPopup.open({
            items: [
                {
                    src: '1.jpg', // Image 1
                    type: 'image'
                },
                //{
                 //   src: 'https://www.youtube.com/watch?v=xcJtL7QggTI', // YouTube video
               //     type: 'iframe'
             //   },
                {
                    src: '2.jpg', // Image 2
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
});
  // Function to detect Firefox on mobile
    function isFirefoxMobile() {
        var userAgent = navigator.userAgent.toLowerCase();
        return userAgent.includes('firefox') );   //&& (userAgent.includes('android')
    }
    function isMobile() {
        var userAgent = navigator.userAgent.toLowerCase();
        return  userAgent.includes('mobile'));
    }

    // Add a class if Firefox on mobile is detected
    if (isFirefoxMobile()) {
        document.body.classList.add('firefox-mobile');
    }
 if (isMobile()) {
        document.body.classList.add('general-mobile');
    }
