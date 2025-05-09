var config = {
    style: 'mapbox://styles/jones4wm/cmacv69zf009401s8bw4ic3u4',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1Ijoiam9uZXM0d20iLCJhIjoiY205OHV3ZTUzMDRhZzJqcTFhcncxNW5reCJ9.4BS0zS0uyQ3WcX0yaMM0eg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
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
            image: './assets/as_i_lay_dying.jpg'
            description: '',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Someplace Georgia',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'This was the place in Georgia where Celie lived her whole life, in relative isolation and ignorance',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
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
            description: 'The Olinka people are a fictional African tribe in the Color Purple who experience colonial oppression at the hands of the Englishmen running a rubber factory. Walker uses them to deepen her theme of oppression and cultural identity',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
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
            description: 'The novel ends with Celie meeting her long lost children, who she believed to be dead..',
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
