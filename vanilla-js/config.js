var config = {
    style: 'mapbox://styles/eshirinyan/ckd22y3dz2ks11io3wdq5knnn',
    accessToken: 'pk.eyJ1IjoiZXNoaXJpbnlhbiIsImEiOiJmMzUxNDdkMWFjNTQ0ZTZiMDUyZmMwNWIwNjMwMmJlNyJ9.SML9WjW66aMhZ95JNaqFeQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Каменните животни на София',
    subtitle: 'Естетиката на градската среда',
    byline: 'map by Urban Souvenir',
    footer: 'http://www.urban-souvenir.com/',
    chapters: [
        {
            id: 'all1',
            title: 'Каменните животни',
            image: './images/horiz+bw_0010_P4254771.JPG.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [23.30565, 42.68947],
				zoom: 11.00,
				pitch: 0.00,
				bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
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
            id: 'kn',
            title: 'Княжеската градина',
            image: './images/horiz+bw_0010_P4254771.JPG.jpg',
            description: 'Автор на животните в “Княжеската градина” е скулпторът Георги Гергов, а на тези в градинката “Майчин дом” - скулпторът Иван Икилюлев',
            location: {
                center: [23.33352, 42.69030],
                zoom: 17.0,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'z',
            title: 'Парк Заимов',
            image: './images/Zaimov_0010_P2120144.JPG.jpg',
            description: 'Преди време съвсем случайно се оказахме с малката ми дъщеря в парка “Заимов”.  И двете бяхме очаровани от старите скулптури на животни. Посрещна ни голямата костенурка в пясъчника точно срещу театър “София”. Продължихме към детската площадка, където лично мен най-много ме впечатли каменната пързалка - крокодил.',
            location: {
                center: [23.34229, 42.69719],
                zoom: 17.0,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'md',
            title: 'Градинката "Майчин дом"',
            image: './images/Maichin+dom.jpg',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [23.31825, 42.70901],
                zoom: 17.0,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
