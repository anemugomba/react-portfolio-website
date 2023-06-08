import Project from "../models/Project";

const technologies = {
    laravel: 'Laravel',
    mysql: 'MySql',
    react: 'ReactJS',
    reactNative: 'React Native',
    svelteKit: 'SveltKit',
    aws: 'AWS',
    slim: 'Slim PHP',
    swagger: 'Swagger'
}

export const projectsData: Project[] = [
    {
        id: 1,
        coverImage: 'https://anesu-portfolio-site.s3.amazonaws.com/foodiefans-mobile/Screenshot_20230608_113425_Expo+Go.jpg',
        technologies: [technologies.aws, technologies.laravel, technologies.reactNative, technologies.react],
        description: 'Foodiefans is a mobile application where users can share their experiences and reviews about restaurants, make reservations, instant messaging and share posts',
        title: 'FoodieFans Mobile App @ Foodiefans Inc',
        liveLink: '',
        githubLink: '',
        moreInfoLink: '',
        images: ['Screenshot_20230608_113425_Expo Go.jpg', 'Screenshot_20230608_113403_Expo Go.jpg', 'Screenshot_20230608_113513_Expo Go.jpg', 'Screenshot_20230608_113522_Expo Go.jpg','Screenshot_20230608_113532_Expo Go.jpg', 'Screenshot_20230608_113801_Expo Go.jpg','Screenshot_20230608_113822_Expo Go.jpg']
    },
    {
        id: 2,
        coverImage: 'https://anesu-portfolio-site.s3.amazonaws.com/dock411-mobile/coverImage.jpg',
        technologies: [technologies.reactNative, technologies.slim],
        description: 'This is a mobile app provides important dock information that truckers can use to make their day easier. Truckers can be aware of things like hours of operation, loading times, yard hazards, backing situations, pallet restrictions and even preview images of the docks before arriving. The list goes on and continues to grow.',
        title: 'Dock411 Mobile App @ Dock411',
        liveLink: '',
        githubLink: '',
        moreInfoLink: '',
        images: ['coverImage.jpg', 'Screenshot_20230608_110219_Expo Go.jpg', 'Screenshot_20230608_110337_Expo Go.jpg', 'Screenshot_20230608_110354_Expo Go.jpg', 'Screenshot_20230608_110412_Expo Go.jpg', 'Screenshot_20230608_110427_Expo Go.jpg']
    },
    {
        id: 3,
        coverImage: 'https://anesu-portfolio-site.s3.amazonaws.com/dock411-admin/coverImage.png',
        technologies: [technologies.svelteKit, technologies.slim, technologies.swagger, technologies.aws],
        description: 'This is an web app used to manage most of dock411 resources, users, drivers, docks and more. Built the web app using Svelte',
        title: 'Dock411 Admin @ Dock411',
        liveLink: '',
        githubLink: '',
        moreInfoLink: '',
        images: ['Screenshot 2023-06-08 102408.png', 'Screenshot 2023-06-08 104617.png','coverImage.png']
    },
    {
        id: 4,
        coverImage: 'https://anesu-portfolio-site.s3.amazonaws.com/layaway/coverImage.png',
        technologies: [technologies.react],
        description: 'Layaway allows a customer to put a deposit on an item—like furniture or a computer—that the seller holds, typically in a store. The customer makes installment payments on it over time and can then pick up the item once the balance has been paid in full.',
        title: 'Layaway @ Elula',
        liveLink: 'https://shop.mylayaway.co.za/',
        githubLink: '',
        moreInfoLink: '',
        images: ['coverImage.png', 'Screenshot 2023-05-04 101003.png', 'Screenshot 2023-05-04 101306.png', 'Screenshot 2023-05-04 103610.png']
    },
    {
        id: 5,
        coverImage: 'https://anesu-portfolio-site.s3.amazonaws.com/devco/coverImage.png',
        technologies: [technologies.reactNative, technologies.laravel],
        description: 'Auction software is a digital platform that allows buyers and suppliers to place bids, enabling rapid and effective negotiations based on real-time price and volume. Built the mobile app using react native and made updates to the biding platform and API',
        title: 'Devco @ Elula',
        liveLink: '',
        githubLink: '',
        moreInfoLink: '',
        images: ['Screenshot 2023-05-04 113315.png', 'Screenshot_20230504_103847_Expo Go.jpg', 'Screenshot_20230504_103937_Expo Go.jpg']
    }
]