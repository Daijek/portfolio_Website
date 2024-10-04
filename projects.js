const portfolio_projects = {
    web_dev: [
        {

        }
    ],
    data_analysis: [
        {
            title: "Predictive Analysis of Traffic Accidents",
            image: "images//portfolio_project_images/accident_analysis.jpg",
            image_alt: "traffic accident image",
            description: "Utilizing machine learning and statistical methods to make predictions on accidents in the Uk for the year",
            skills: "Python • SQL • Machine Learning",
            github_link: "",
            live_demo_tag_state: false,
            live_demo_link: ""
        },
        {
            title: "Analysis of UK Census Data",
            image: "images//portfolio_project_images/census_image.jpg",
            image_alt: "traffic accident image",
            description: `
            Utilizing python and statistical libraries like numpy and pandas to analyse the UKs census 
            data for the year 2021 to determine the best type of houses to be built on onoccupied lands, and
            investments for the future  `,
            skills: "Python • numpy • pandas",
            github_link: "",
            live_demo_tag_state: false,
            live_demo_link: ""
        }
    ],
    machine_learning: [
        {

        }
    ]
}

try{
    const project_cards = document.querySelectorAll(".card")

    const portfolioContainer = document.querySelector(".portfolio_body")
    console.log(portfolioContainer)


    web_dev = project_cards[0];
    data_analysis = project_cards[1]
    ml = project_cards[2];
    console.log("here")
    console.log(web_dev)

    const animate_project_card = (card) =>{
        card.classList.add("animate")
        card.querySelector("h1 span").classList.add("animate")
    
        setTimeout(() => {
            window.location.href = "portfolio.html"
            console.log("hello")
        }, 0) 
    
        // setTimeout(() => {
        //     card.classList.remove("animate")
        // }, 7000)
    }
    
    web_dev.addEventListener("click", () => {
        animate_project_card(web_dev);
        localStorage.setItem("project_page", portfolio_projects.web_dev)
        localStorage.setItem("portfolio_page_name", "Web Development")
        
        
    })

    data_analysis.addEventListener("click", () => {
        animate_project_card(data_analysis);
        localStorage.setItem("project_page", JSON.stringify(portfolio_projects.data_analysis))
        localStorage.setItem("portfolio_page_name", "Data Analysis")
        
        
    })

    ml.addEventListener("click", () => {
        animate_project_card(ml);
        localStorage.setItem("project_page", portfolio_projects.machine_learning)
        localStorage.setItem("portfolio_page_name", "Machine Learning")
        
    })
}
catch (error){
    console.log("Err", error)
}




