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
            image: './assets/their_eyes_were_watching_god.jpg',
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
            title: 'Walker mainly shows empowerment through economic purchases and business.',
            image: './assets/the_color_purple.jpg',
            description: `
                Walker’s novel has more emphasis on the economic side than Hurston’s. With Celie moving to Tennessee and then starting her pants business with the help of Shug:

                <blockquote>
                “Then finally one day I made the perfect pair of pants. For my sugar, naturally. They soft dark blue jersey with teeny patches of red. But what makes them so good is, they totally comfortable.” (Walker 211)
                </blockquote>

                <blockquote>
                “She laugh. Let’s us put advertisements in the paper, she say. And let’s us raise you prices a hefty notch. And let’s us just go ahead and give you this dining room for your factory and git you some more women in here to cut and sew, while you sit back and design. You making your living, Celie, she say. Girl, you on your way.” (Walker 213)
                </blockquote>

                With Shug helping Celie, Walker shows us how female empowerment is a collective journey, not just a solitary one.
            `,
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
            title: 'As I Lay Dying vs Salvage the Bones',
            image: './assets/salvage_the_bones.jpg',
            description: `
                Even though <em>As I Lay Dying</em> has specific examples of economic purchases by women, they are done through the male gaze, and therefore do not serve as shining beacons of female empowerment.

                <em>Salvage the Bones</em> doesn’t have many purchases, but it does show Esch standing up to Manny — female empowerment through personal growth rather than economic independence.

                <blockquote>
                "I loved you!" This is Medea wielding the knife. This is Medea cutting. I rake my fingernails across his face, leave pink scratches that turn red, fill with blood." (Ward 204)
                </blockquote>

                <blockquote>
                "I'm going to beat the shit out of him," Randall said, the words whistling out of him...<br>
                "No, Randall," I said. "You don't need to. I already did." Randall snorted, but he didn't let Junior go, and he squeezed his forearm to his waist, folding my arm into his, pulling me with him. We walked to Big Henry's front door together.” (Ward 244)
                </blockquote>

                In <em>Salvage the Bones</em>, Jesmyn Ward portrays women as more empowered through their personal social relationships. Despite having fewer economic transactions than in Faulkner’s work, women are given more agency to act and defend their own interests.
            `,
            location: {
                center: [-89.26806244331303, 30.400637931513852],
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
