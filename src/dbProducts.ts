import { Product } from "src/app/interfaces/product";

export const products: Product[] = [
    {
        id:1,
        name: "Elden Ring",
        price: 249.90,
        description: "Elden Ring is an upcoming action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game, directed by Hidetaka Miyazaki, was made in collaboration with fantasy novelist George R. R. Martin, who provided material for the game's setting. Elden Ring is scheduled to be released for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S on February 25, 2022.",
        image: "/assets/images/eldenring.png",
        quantity: 20
    },
    {
        id: 2,
        name: "Hogwarts Legacy",
        price: 249.90,
        description: "Hogwarts Legacy is an upcoming open-world, action role-playing video game set in the late 1800s in the Wizarding World being developed by Avalanche Software and published by Warner Bros. Interactive Entertainment under its Portkey Games label. The game will be released for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S in 2022.",
        image: "/assets/images/hogwartslegacy.jpg",
        quantity: 10
    },
    {
        id: 3,
        name: "The Witcher 3",
        price: 79.99,
        description: "The Witcher 3: Wild Hunt is an action role-playing game developed by Polish developer CD Projekt Red, and first published in 2015. It is the sequel to the 2011 game The Witcher 2: Assassins of Kings and the third and final main game in The Witcher video game series, played in an open world with a third-person perspective. The games are based on The Witcher series of fantasy novels written by Andrzej Sapkowski.",
        image: "/assets/images/thewitcher3.png",
        quantity: 50
    },
    {
        id: 4,
        name: "Dark Souls 3",
        price: 159.90,
        description: "Dark Souls III is a 2016 action role-playing video game developed by FromSoftware and published by Bandai Namco Entertainment for PlayStation 4, Xbox One, and Microsoft Windows. It is the fourth overall entry of the Souls series and the final installment of the Dark Souls trilogy.",
        image: "/assets/images/darksouls3.png",
        quantity: 45
    },
    {
        id: 5,
        name: "Forspoken",
        price: 349.90,
        description: "Forspoken is an upcoming action role-playing video game developed by Luminous Productions and published by Square Enix. It is to be released on May 24, 2022 for Microsoft Windows and PlayStation 5.",
        image: "/assets/images/forspoken.png",
        quantity: 45
    },
    {
        id: 6,
        name: "The Elder Scrolls V: Skyrim",
        price: 79.00,
        description: "The Elder Scrolls V: Skyrim is an open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the fifth main installment in the Elder Scrolls series, following 2006's The Elder Scrolls IV: Oblivion, and was released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360 on November 11, 2011.",
        image: "/assets/images/skyrim.jpg",
        quantity: 20
    }
]