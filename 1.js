$(document).ready(function() {
    const popup = $('<div id="popup-links"></div>').html(`
        <a href="https://www.mixcloud.com/juliocaroa/" target="_blank">Mixcloud</a><br>
        <a href="https://soundcloud.com/estrellarecords" target="_blank">Soundcloud</a><br>
        <a href="mailto:juliocaro@estrellarecords.com?subject=Webform" target="_blank">Email</a><br>
        <a href="https://www.instagram.com/estrellarecordsmadrid/" target="_blank">Instagram</a>
    `);

    $('body').append(popup);

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#popup-links, #links').length) {
            popup.hide();
        }
    });

    $('#links').on('click', function(event) {
        event.stopPropagation();

        const buttonPosition = $(this).offset();
        const popupHeight = popup.outerHeight();

        const topPosition = buttonPosition.top - popupHeight;
        const leftPosition = buttonPosition.left;

        popup.css({
            top: topPosition,
            left: leftPosition
        }).toggle();
    });

    $('#gallery').on('click', function(event) {
        event.preventDefault();

        $.magnificPopup.open({
            items: [
                { src: '/pics/1.jpeg', type: 'image' },
                { src: '/pics/2.jpg', type: 'image' },
                { src: '/pics/3.jpg', type: 'image' },
                { src: '/pics/4.jpg', type: 'image' },
                { src: '/pics/5.jpg', type: 'image' },
                { src: '/pics/6.jpg', type: 'image' }
            ],
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            type: 'image',
            mainClass: 'mfp-img-mobile',
            tLoading: 'Loading content #%curr%...',
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                verticalFit: true
            },
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                    }
                },
                tError: '<a href="%url%">The video #%curr%</a> could not be loaded.'
            },
            callbacks: {
                change: function() {
                    const mediaType = this.currItem.type;
                    const mediaIndex = this.index + 1;

                    const currentTime = new Date();
                    const timeOffset = currentTime.getTimezoneOffset();
                    const UTC2Offset = -120;
                    const localTime = new Date(currentTime.getTime() + (UTC2Offset - timeOffset) * 60000);
                    const time = localTime.toISOString().split('T')[1].split('.')[0];

                    if (mediaType === 'image') {
                        clicky.goal('P' + mediaIndex + ' ' + time);
                    } else if (mediaType === 'iframe') {
                        clicky.goal('V' + mediaIndex + ' ' + time);
                    }
                }
            }
        });
    });

    $('#stream').hide(); // Hide Play Me button initially

    $('#stream').on('click', function(event) {
        event.preventDefault();

        if ($('#audio-player').length === 0) {
            const iframe = $('<iframe>', {
                id: 'audio-player',
                src: 'https://strstream.great-site.net/proxy.php',
                width: 320,
                height: 100,
                frameborder: 0,
                allow: 'autoplay'
            }).css({
                display: 'block',
                margin: '20px auto'
            });

            $('body').append(iframe);
        }
    });

    window.addEventListener('message', function(event) {
        if (event.data && event.data.streamStatus) {
            if (event.data.streamStatus === 'live') {
                $('#stream').show();
            } else if (event.data.streamStatus === 'offline') {
                $('#stream').hide();
                $('#audio-player').remove();
            }
        }
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
