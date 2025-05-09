var config = {
    style: 'mapbox://styles/jones4wm/cmacv69zf009401s8bw4ic3u4',
    accessToken: 'pk.eyJ1Ijoiam9uZXM0d20iLCJhIjoiY205OHV3ZTUzMDRhZzJqcTFhcncxNW5reCJ9.4BS0zS0uyQ3WcX0yaMM0eg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'Female Empowerment in Southern Lit ',
    subtitle: 'How it is shown through economic purchases and movement',
    byline: 'Will Jones, Matt Gowel, Daniel Hamby',
    footer: '',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Main Thesis',
            image: './assets/as_i_lay_dying.jpg',
            description: `Throughout both of their novels Hurston and Walker showcase female empowerment through both movement and economic purchases. There are a lot more instances of movement and economic purchases by women in these novels than there are in *As I Lay Dying*. Through both the text and the mapping data we will show how Hurston and Walker show a more positive vision of the South than Faulkner. Hurston and Walker mainly show a more positive vision of the South by showing how women empower themselves through movement and economics even in dire times. Ward also shows female empowerment but her work is more focused on the personal than the economic.`,
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Hurston: Empowerment Through Movement and Economics',
            image: './assets/their_eyes_were_watching_god.jpg', // Add proper extension
            description: `
                Throughout <em>Their Eyes Were Watching God</em>, we see Janie’s empowerment through movement in particular. 
                First, she runs away from her first husband. Later, she meets Tea Cake, and together they engage in business. 
                Some may critique the novel for portraying Janie as finding her identity through men. While this may be partially true, 
                what makes Janie empowered in this situation is that she is with Tea Cake on her own terms. 

                <blockquote>
                “Tea Cake and Janie decided to stay since they wanted to make another season on the muck. 
                There was nothing to do, after they had gathered several bushels of dried beans to save over 
                and sell to the planters in the fall.” (Hurston 139)
                </blockquote>

                This passage shows Janie engaged in business willingly and collaboratively, unlike earlier in the novel 
                when she was forced to work in a store by her husband Jody. Through these two examples, 
                Hurston shows how women can be both shackled and freed through economics.

                At one point in the novel, Tea Cake is being irresponsible by gambling away all their money. 
                In response, Janie takes matters into her own hands:

                <blockquote>
                “Tea Cake was spending and doing out his own pocket, so Janie never told him about 
                the two hundred dollars she had pinned inside her shirt next to her skin.” (Hurston 117)
                </blockquote>

                This is one of the ways Hurston shows female empowerment even in less-than-ideal circumstances. 
                Janie secretly sets aside money, demonstrating economic agency and personal foresight. 
                She is actively taking control over her financial future, rather than being completely dependent on Tea Cake.
            `,
            location: {
                center: [-81.38478, 25.85764],
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'Olinka',
            image: './assets/firestone_farm.jpg',
            description: `The Olinka people are a fictional African tribe in <em>The Color Purple</em> who experience colonial oppression at the hands of the Englishmen running a rubber factory. Walker uses them to deepen her theme of oppression and cultural identity.`,
            location: {
                center: [-10.378889436404226, 6.251275915595865],
                zoom: 8,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: `The novel ends with Celie meeting her long-lost children, who she believed to be dead.`,
            location: {
                center: [-41.47212410646295, 34.781162343274076],
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};