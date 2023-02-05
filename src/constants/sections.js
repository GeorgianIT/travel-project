import Title from "../components/Title";
import Footer from "../components/Footer";
import SectionTwo from "../components/SectionTwo";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "#home",
        path: '/Home',
        element: <Title/>,
    },
    {
        id: "discover",
        title: "Discover",
        link: "#discover",
        path: '/discover',
        element: <SectionTwo/>,
    },
    {
        id: "footer",
        title: "Footer",
        link: "#footer",
        path: '/footer',
        element: <Footer/>,
    },
]