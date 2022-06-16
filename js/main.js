/* ===================================================================
 *  Knox 1.0.0 - Main JS
 *
 *
 * ------------------------------------------------------------------- */

(function(html) {

    'use strict';

    html.className = html.className.replace(/\bno-js\b/g, '') + 'js';


   /* Preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const body = document.querySelector('body');
        const preloader = document.querySelector('#preloader');

        if (!(preloader)) return;

        window.addEventListener('load', function() {

            body.classList.remove('ss-preload');
            body.classList.add('ss-loaded');

            // page scroll position to top
            preloader.addEventListener('transitionstart', function gotoTop(e) {
                if (e.target.matches('#preloader')) {
                    window.scrollTo(0, 0);
                    preloader.removeEventListener(e.type, gotoTop);
                }
            });

            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader'))  {
                    body.classList.add('ss-show');
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                }
            });

        });

        window.addEventListener('beforeunload' , function() {
            body.classList.remove('ss-show');
        });
    };


   /* Revealing Effect
    * ---------------------------------------------------- */ 
    const ssRevealingEffect = function() {

        const intro = document.querySelector('.s-intro');

        if (!(intro)) return;

        const checkpoint = intro.offsetHeight;
        let opacity;

        window.addEventListener('scroll', function() {

            const currentScroll = window.pageYOffset;

            if (currentScroll <= checkpoint) {
                opacity = 1 - currentScroll / checkpoint;
            } else {
                opacity = 0;
            }
        });

    };


   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssRevealingEffect();

    })();

})(document.documentElement);