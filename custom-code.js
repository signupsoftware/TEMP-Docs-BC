import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Ok, so 'canUseDOM' works fine when running a build, but is a bit iffy when running with 'start'.
// Put in a safety check to see if the DOM is available.
if (ExecutionEnvironment.canUseDOM) {
    var btn = document.querySelectorAll('[tag="ap"]');

    if (btn[0] != null) {
        modHref();
    }
    else {
        setTimeout(modHref, 1000);
    }
}

// Change main menu button URL:s based on selected language.
function modHref() {
    // All main page menu buttons has their own unique tag ID.
    var btn = document.querySelectorAll('[tag="ap"]');    
    if (btn[0] != null) {
        // Check if url contains '/de/' (Deutsch picked as lang)
        var url = window.location.href;
        if (url.includes('/de/')) {
            btn[0].setAttribute('href', '/business-central/de/docs/user-manual');
        } else {
            btn[0].setAttribute('href', '/business-central/docs/user-manual');
        }
    }
    else {
         console.log("btn[0] is null");
    }
}




    //alert("Hello!");

    //const { siteConfig, i18n } = useDocusaurusContext();
    //alert(i18n.currentLocale); 

    // "/business-central/docs/user-manual"
    // "/business-central/de/docs/user-manual"

    // EA 2024-10-31 This could work! Look for /de/ in the URL
    //alert(window.location.href);
    //var btn = document.querySelectorAll('[tag="ap"]');
    //alert("btn: " + btn);
    //alert("URL contains '/de/'");
    //alert("URL does not contain '/de/'");

    // Check to see that btn[0] is not null or undefined
    // if (btn == null) {
    //     alert("btn is null");        
    // }
    // if (btn[0] == null) {
    //     alert("btn[0] is null");
    // }


    //if (btn != null && btn[0] != null) {
        //alert(btn[0].getAttribute('href'));
        //btn[0].setAttribute('href', '/business-central/de/docs/user-manual');
        //alert(btn[0].getAttribute('href'));
    //}


        // Get the attribute 'href' from the object btn[0]
    //alert(btn[0].getAttribute('href'));
    // "/business-central/docs/user-manual"
    // "/business-central/de/docs/user-manual"
    // Set the attribute 'href' to a new value
    //btn[0].setAttribute('href', '/business');

    