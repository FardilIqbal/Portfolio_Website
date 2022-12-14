import {reactLogo, cssLogo, jsLogo, htmlLogo, javaLogo,websiteIcon,routerIcon} from "../assets"

export const navLinks = [
    {
        id:"home",
        title:"Home"
    },
    {
        id:"skills",
        title:"Skills"
    },
    {
        id:"projects",
        title:"Projects"
    },
    {
        id:"contact",
        title:"Contact Me"
    }


]
export const skills = [
    {
        id:"skill_1",
        logo:htmlLogo,
        title:"HTML",
        content:"I have a great grasp of HTML and I am capable of using it to create the basic groundwork for a website"
    },
    {
        id:"skill_2",
        logo:cssLogo,
        title:"CSS",
        content:"I am proficient with using CSS to create modern websites and I am capable of using Tailwind CSS to create modern websites quickly, such as this one!"
    },
    {
        id:"skill_3",
        logo:jsLogo,
        title:"JavaScript",
        content:"Vanilla javascript is what is used to create this website. I have plenty of experience with using javascript to create the logic for my websites. Furthermore, I am familiar with ES^ additions"
    },
    {
        id:"skill_4",
        logo:reactLogo,
        title:"React",
        content:"React was used to create this website and I have sufficient experience in using it to create responsive, modern websites using react hooks such as useState and useEffect"
    },
    {
        id:"skill_5",
        logo:javaLogo,
        title:"Java",
        content:"Java is often used to create my projects, such as the router graph model"
    }

]
export const projs = [
    {
        name:"Portfolio Website",
        pict:websiteIcon,
        link:"https://github.com/FardilIqbal/Portfolio_Website"

    },
    {
        name:"Router Graph",
        pict:routerIcon,
        link:"https://github.com/FardilIqbal/Router_Graph",
        //author:<a href="https://www.flaticon.com/free-icons/router" title="router icons">Router icons created by Adib Sulthon - Flaticon</a>
    }
]