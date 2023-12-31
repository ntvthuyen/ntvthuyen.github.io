export type Project = {
    id: string
    name: string
    tags?: string[]
    feature?: string
    description?: string
    img: string
    link?: string
}

export const projects: Project[] = [
    {
        id: 'smartwatchauthentication',
        name: 'Towards a Gratifying Interactive Modality for Smart Environments based on Ubiquitous Sensing (BSc. Thesis)',
        tags: ['Project', 'Wearable', 'Signal Processing', 'Thesis'],
        description:
            'Intuitive, effortless, and enjoyable computer interaction by employing a natural everyday-carry object – the smartwatch.',
        feature: 'Wearable',
        img: 'https://ntvthuyen.com/assets/moto360.jpg',
        link: 'https://ntvthuyen.com/projects/smartwatchauthentication/'
    },
    { 
        id: 'smartwatchremotecontrol',
        name: 'Smartwatch Remote Control',
        tags: ['Project', 'Wearable'],
        description:
            "This is a part of my thesis, I built this demo to test data streaming from smartwatch to personal computer. Users can tap on the buttons show on the smartwatch screen to select and run an application. I also built a custom windows credential provider that allows users to login with token stored in the smartwatch.",
        feature: 'Wearable',
        img: 'https://ntvthuyen.com/assets/smartwatchremotecontrol.png',
        link: 'https://ntvthuyen.com/projects/smartwatchremotecontrol/'
    },
    {
        id: 'wikispace',
        name: 'Wikispace',
        tags: ['Project', 'Coursework', 'VR', 'Unity'],
        description:
            "Wikipedia in VR. This project is my final project for 3D visualization and game development course",
        feature: 'VR',
        img: 'https://ntvthuyen.com/assets/wikispace_banner.png',
        link: 'https://ntvthuyen.com/projects/wikispace/'
    },
    {
        id: 'leapmotionseminar',
        name: 'Leap Motion Seminar',
        tags: ['Project', 'Coursework', 'Leap Motion', 'Unity'],
        description:
            "The goal is to introduce my friends about leap motion device. So we built this project using Unity 3D and leap motion V4.",
        feature: 'Leap Motion',
        img: 'https://ntvthuyen.com/assets/leapmotion/banner.png',
        link: 'https://ntvthuyen.com/projects/leapmotionseminar/'
    }, {
        id: 'routeboxer',
        name: 'Route Boxer',
        tags: ['Project', 'Coursework', 'Algorithm'],
        description:
            "This is a reimplementation of RouteBoxer algorithm using various line clipping algorithm to identify boxes that are crossed by the polylines of finding path. ",
        feature: 'Algorithm',
        img: 'https://ntvthuyen.com/assets/routeboxer/screenshot(4).jpg',
        link: 'https://ntvthuyen.com/projects/routeboxer/'
    }, {
        id: 'waifugenerator',
        name: 'Waifu Generator',
        tags: ['Project', 'Coursework', 'Mobile'],
        description:
            "Model deployment and Mobile interface for anime character generative model",
        feature: 'Mobile',
        img: 'https://ntvthuyen.com/assets/waifugenerator/clickyui(4).png',
        link: 'https://ntvthuyen.com/projects/waifugenerator/'
    },

]
