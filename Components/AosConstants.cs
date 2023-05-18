using System.ComponentModel.DataAnnotations;

namespace BlazorAnimationSample.Components
{

    public enum AnimationNames
    {
        [Display(Name = "fade")]
        Fade = 0,

        [Display(Name = "fade-up")]
        FadeUp,

        [Display(Name = "fade-down")]
        FadeDown,

        [Display(Name = "fade-left")]
        FadeLeft,

        [Display(Name = "fade-right")]
        FadeRight,

        [Display(Name = "fade-up-right")]
        FadeUpRight,

        [Display(Name = "fade-up-left")]
        FadeUpLeft,

        [Display(Name = "fade-down-right")]
        FadeDownRight,

        [Display(Name = "fade-down-left")]
        FadeDownLeft,

        [Display(Name = "flip-up")]
        FlipUp,

        [Display(Name = "flip-down")]
        FlipDown,

        [Display(Name = "flip-left")]
        FlipLeft,

        [Display(Name = "flip-right")]
        FlipRight,

        [Display(Name = "slide-up")]
        SlideUp,

        [Display(Name = "slide-down")]
        SlideDown,

        [Display(Name = "slide-left")]
        SlideLeft,

        [Display(Name = "slide-right")]
        SlideRight,

        [Display(Name = "zoom-in")]
        ZoomIn,

        [Display(Name = "zoom-in-up")]
        ZoomInUp,

        [Display(Name = "zoom-in-down")]
        ZoomInDown,

        [Display(Name = "zoom-in-left")]
        ZoomInLeft,

        [Display(Name = "zoom-in-right")]
        ZoomInRight,

        [Display(Name = "zoom-out")]
        ZoomOut

    }


}
