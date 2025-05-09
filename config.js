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
    title: 'Female Empowerment in Southern Lit',
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
            description: `Throughout both of their novels Hurston and Walker showcase female empowerment through both movement and economic purchases...`,
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
            description: `Throughout <em>Their Eyes Were Watching God</em>...`,
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
            description: `Walker’s novel has more emphasis on the economic side than Hurston’s...`,
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
            description: `<em>As I Lay Dying</em> has examples of economic purchases by women, but they’re shown through the male gaze...`,
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
        },
        {
            id: 'chapter-four',
            alignment: 'fully',
            hidden: false,
            title: 'Why might Faulkner’s novel seem to depict the South more negatively?',
            image: './assets/as_i_lay_dying.jpg',
            description: `
                One reason may be that being a white man may paradoxically make Faulkner more inclined to write a negative depiction of the South.
                Hurston, Walker, and Ward more often portray how Black women empower themselves—even in dire circumstances—
                suggesting a more hopeful or resistant narrative than Faulkner offers.
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

