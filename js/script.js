

/* =================== TYPING ANIMATION ====================== */
var typed = new Typed (".typing",{
    strings:["","Web Designer", "Web Developer","Graphic Designer","Youtuber",""],
typeSpeed:100,
BackSpeed:60,
loop:true
})
/* ===== HEADER ===== */
const nav = document.querySelector(".nav"),
	navList = nav.querySelectorAll("li"),
	totalNavList = navList.length,
	allSection = document.querySelectorAll(".section"),
	totalSection = allSection.length;
	for(let i=0; i<totalNavList; i++)
	{
		const a = navList[i].querySelector("a");
		a.addEventListener("click", function()
		{
			removeBackSection();
                for(let j=0; j<totalNavList; j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                        //allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
			this.classList.add("active")
			showSection(this);
			if(window.innerWidth < 1200)
			{
				headerSectionTogglerBtn();
		    }
        })
    }
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
         {
            allSection[i].classList.remove("back-section");
         }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
	for(let i=0 ; i<totalSection ; i++)
	{
		allSection[i].classList.remove("active");
    }
	const target = element.getAttribute("href").split("#")[1];
	document.querySelector("#" + target).classList.add("active")
	
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#"))
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".ham"),
header = document.querySelector(".nav");
const barras = document.querySelectorAll(".ham span");

navTogglerBtn.addEventListener("click", () =>
{
  header.classList.toggle("active");
  barras.forEach(child =>
  {
    child.classList.toggle("animated");
  });
});

