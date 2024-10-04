class portfolioCard extends HTMLElement {
    constructor(){
        super()
        this.text = "";
        this.description= "";
        this.skills= "";
        this.github_link= "";
        this.live_demo_tag = "";
        this.image = "";
        this.image_alt = "";
    }

    connectedCallback(){
        this.title = this.getAttribute("title");
        this.description = this.getAttribute("description");
        this.skills = this.getAttribute("skills");
        this.github_link = this.getAttribute("github_link")
        this.live_demo_tag = this.getAttribute("live_demo_tag");
        this.image = this.getAttribute("image");
        this.image_alt = this.getAttribute("image_alt");
        this.render();
    }

    render(){
        this.innerHTML = `
                    
                    <div class="portfolio_card_image">
                        <img src=${this.image} alt=${this.image_alt}">
                        <div></div>
                    </div>
                    <h1>${this.title}</h1>
                    <h2>
                        <span>Description:</span>${this.description} 
                    </h2>
                    
                    <h3>skills: ${this.skills}</h3>
                    <div class="links">
                        <a href="${this.github_link}">Github</a>
                        ${this.live_demo_tag}
                    </div>
                    
                    `
    }
}

customElements.define("portfolio-card", portfolioCard)





const render_projects = (project_category) =>{
    const portfolioContainer = document.querySelector('.portfolio_body')
    
    project_category.forEach((project) =>{
        const project_card = document.createElement("portfolio-card");
        project_card.classList.add("portfolio_card");
        
        project_card.setAttribute("title", project.title);
        project_card.setAttribute("image", project.image);
        project_card.setAttribute("image_alt", project.image_alt);
        project_card.setAttribute("description", project.description);
        project_card.setAttribute("skills", project.skills);
        project_card.setAttribute("github_link", project.github_link);

        if (project.live_demo_tag_state){
            console.log(project.live_demo_link)
            project_card.setAttribute("live_demo_tag", `
                <a href="${project.live_demo_link}">Live Demo</a>
                `);
        }
        else{
            project_card.setAttribute("live_demo_tag", "");
        }


        portfolioContainer.appendChild(project_card)

    })
}
var portfolio_category_title = document.createElement("h1");
portfolio_category_title.textContent = localStorage.getItem("portfolio_page_name")

document.querySelector(".portfolio_search_container").append(portfolio_category_title)
render_projects(JSON.parse(localStorage.getItem("project_page")))


const portfolioCont = document.querySelector('.portfolio_body')



const portfolioSearchInput = document.querySelector(".portfolio_search input")
console.log(portfolioSearchInput)

portfolioSearchInput.addEventListener("input", e =>{
    const value = e.target.value.toLowerCase();

    for (let i = 0; i < portfolioCont.children.length; i++) {
        const portfolioCard = portfolioCont.children[i]
        const title = portfolioCard.querySelector("h1")
        const desc = portfolioCard.querySelector("h2")
        const skills = portfolioCard.querySelector("h3")

        // console.log(title.textContent)
        // console.log(value)

        const isVisible = title.textContent.toLowerCase().includes(value) || desc.textContent.toLowerCase().includes(value) || skills.textContent.toLowerCase().includes(value)
        
        // console.log(isVisible)
        if (isVisible){
            portfolioCard.classList.remove("hidden")
            // console.log(portfolioCard)
        }
        else{
            portfolioCard.classList.add("hidden")
            // console.log(portfolioCard)
        }
    }
})


