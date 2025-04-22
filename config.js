var config = {
    style: 'https://api.mapbox.com/styles/v1/jones4wm/cm98v7cp600pw01quez9059qg.html?title=copy&access_token=pk.eyJ1Ijoiam9uZXM0d20iLCJhIjoiY205OHV3ZTUzMDRhZzJqcTFhcncxNW5reCJ9.4BS0zS0uyQ3WcX0yaMM0eg&zoomwheel=true&fresh=true#2/38/-34',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYnVyZ2VyamgiLCJhIjoiY20yc3IyZXozMDBqdTJ2b3BpY3M3aWNqcCJ9.BRJ_B6H5_MYZ7Q_PBxcaQg',
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
    title: 'Mapping the Color Purple Title ',
    subtitle: 'Significant places mentioned by Alice Walker in her book',
    byline: 'Will Jones',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'The Color Purple',
            image: './assets/color_purple_cover.jpg',
            description: 'An epistolary novel that tells the story of Celie, a black woman who lived in rural isolation in Georgia and her journey of self discovery',
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
