const nav_menue = document.querySelector("header ul");
const menue_icon = document.querySelector(".menue-icon")
const nav_items = document.querySelectorAll("header ul li")
const header = document.querySelector("header")
const menue_button = document.querySelector(".menue")

// Event listener to control what happens when we click on the the hamburger menue
menue_button.addEventListener("click", () => {
    console.log(nav_menue.classList)

    // If the navigation menue is currently hidden, we unhide and style it using the actions below
    if (nav_menue.classList.contains("hidden")){

        // we remove the hidden class from the navigation menue and add the class to show the menue
        nav_menue.classList.remove("hidden")
        nav_menue.classList.add("show_navigation_ul")

        // We also prepared styles for each item in the navigation menue, so we iterate to add the styles
        nav_items.forEach(item =>{
            item.classList.add("style_resposive_nav_items")

        })

        // we add the style for the header, to make it active
        header.classList.add("header_for_menue_click")


        // Here we add classes to style the hamburger menue to turn to an X
        menue_icon.parentElement.firstElementChild.classList.add("rotate-menue-icon-first-child")
        menue_icon.parentElement.lastElementChild.classList.add("rotate-menue-icon-last-child")
        document.querySelector("#menue > :nth-child(2)").classList.add("hidden")
        
    }
    // If the the hidden class is not present and the show class is, we simply do the opposite
    else if(nav_menue.classList.contains("show_navigation_ul")){
        nav_menue.classList.remove("show_navigation_ul")
        nav_menue.classList.add("hidden")
        
        nav_items.forEach(item =>{
            item.classList.remove("style_resposive_nav_items")

        })


        header.classList.remove("header_for_menue_click")
        menue_icon.parentElement.firstElementChild.classList.remove("rotate-menue-icon-first-child")
        menue_icon.parentElement.lastElementChild.classList.remove("rotate-menue-icon-last-child")
        document.querySelector("#menue > :nth-child(2)").classList.remove("hidden")

    }
});

const handle_nav_item_click = (e) => {
    nav_menue.classList.remove("show_navigation_ul")
    nav_menue.classList.add("hidden")
    header.classList.remove("header_for_menue_click")
    menue_icon.parentElement.firstElementChild.classList.remove("rotate-menue-icon-first-child")
    menue_icon.parentElement.lastElementChild.classList.remove("rotate-menue-icon-last-child")
    document.querySelector("#menue > :nth-child(2)").classList.remove("hidden")

    nav_items.forEach(item =>{
        item.classList.remove("style_resposive_nav_items")

    })
}



//Now we need to control what happens to the hamburger menue when the screen size changes
const handleScreenResize = (e) => {
    if (e.matches) {
        // Screen size is less than or equal to e
        nav_menue.classList.add('hidden');

    } else {
        // Screen size is larger than e
        nav_menue.classList.remove('hidden');

        if (nav_menue.classList.contains("show_navigation_ul")){
            nav_menue.classList.remove("show_navigation_ul")
            nav_items.forEach(item =>{
                item.classList.remove("style_resposive_nav_items")
    
            })
    
    
            header.classList.remove("header_for_menue_click")
            menue_icon.parentElement.firstElementChild.classList.remove("rotate-menue-icon-first-child")
            menue_icon.parentElement.lastElementChild.classList.remove("rotate-menue-icon-last-child")
            document.querySelector("#menue > :nth-child(2)").classList.remove("hidden")
        }
    }
}

// Create a media query list
const mediaQuery = window.matchMedia("(max-width: 1116px)");

// Attach listener to media query
mediaQuery.addEventListener('change', handleScreenResize);

// Initial check
handleScreenResize(mediaQuery);




document.querySelector("#hire_me_btn").addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({behavior: "smooth"})
});

document.querySelector("#CV_download_btn").addEventListener("click", () => {
    // Create and anchor tag
    a = document.createElement("a");

    // add the link to the download
    a.href = "PDF/Junior Data Science and AI CV.pdf"
    a.target = "_blank"

    // click the href
    a.click()
})


