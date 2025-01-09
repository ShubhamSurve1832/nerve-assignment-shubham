export const COMMON_SETTINGS = (customSettings) => ({
    infinite: false,
    speed: 500,
    arrow: true,
    dots:false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: customSettings.dots1024 || false,
                slidesToShow: customSettings.slidesToShow1024 || 1,
                slidesToScroll: 1,
                infinite: true,
                arrow: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                dots: customSettings.dots600 || false,
                slidesToShow: customSettings.slidesToShow600 || 1,
                slidesToScroll: 1,
                arrow: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                dots: customSettings.dots480 || false,
                arrow: false,
                slidesToShow: customSettings.slidesToShow480 || 1,
                slidesToScroll: 1,
                centerMode: customSettings.centerMode480 || false,
                centerPadding: customSettings.centerPadding480 || '10px',
                infinite:customSettings.infinite480 || true
            },
        },
    ],
    ...customSettings,
});