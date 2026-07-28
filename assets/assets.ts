import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import nextjs from './nextjs.png';
import mongodb from './mongodb.png';
import android from './android.png';
import github from './github.png';
import gitlab from './gitlab.png';
import supabase from './supabase.png';
import tailwind from './tailwind.png';
import java from './java.png';
import flutter from './flutter.png';
import kotlin from './kotlin.png';
import linkedin from './linkedin.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo1.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import profile from './profile.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import info_image from './info_image.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import playstore from './playstore.png';
import appstore from './appstore.png';
import postgress from './postgresql.png';
import docker from './docker.png';
import springboot from './spring.png';




export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    postgress,
    docker,
    springboot,
    figma,
    info_image,
    java,
    flutter,
    kotlin,
    supabase,
    tailwind,
    git,
    mongodb,
    nextjs,
    android,
    github,
    gitlab,
    linkedin,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    profile,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    playstore,
    appstore,
};

export const workData = [
    {
        title: 'Online Canteen',
        description: 'Food and grocery delivery within 30-45 minutes in Pilkhuwa.',
        bgImage: '/logo-1.png',
        screenshots: [
            '/screenshots/a.png',
            '/screenshots/b.png',
            '/screenshots/c.png',
            '/screenshots/d.png',
        ],
        apprating: {
            rating: '⭐️ 4.3',
            download: '10k+',
            rated: 'Rated 3+'
        },
        link: { playstore: 'https://play.google.com/store/apps/developer?id=PAM+Solutions&hl=en', appstore: 'https://apps.apple.com/in/app/online-canteen/id6499261675' }
    },
    {
        title: 'Online Canteen Delivery',
        description: 'The OC Delivery Boy App is designed for delivery partners to handle canteen orders quickly, accurately, and with complete convenience.',
        bgImage: '/delivery.png',
        screenshots: [
            '/screenshots/a.png',
            '/screenshots/b.png',
            '/screenshots/c.png',
            '/screenshots/d.png',
        ],
        apprating: {
            rating: '⭐️ 4.3',
            download: '10+',
            rated: 'Rated 3+'
        },
        link: { playstore: 'https://play.google.com/store/apps/developer?id=PAM+Solutions&hl=en', appstore: '' }
    },
    {
        title: 'Jyotish Rashya',
        description: 'Talk to Astrologer on call and get answers to all your worries',
        bgImage: '/Jyo.png',
        screenshots: [
            '/screenshots/a.png',
            '/screenshots/b.png',
            '/screenshots/c.png',
            '/screenshots/d.png',
        ],
        apprating: {
            rating: '⭐️ 4.5',
            download: '10k+',
            rated: 'Rated 3+'
        },
        link: { playstore: 'https://play.google.com/store/apps/developer?id=Astrology+and+Horoscope&hl=en', appstore: '' }
    },
    {
        title: 'The Installer',
        description: 'Get complete installation services in India for home and corporate offices.',
        bgImage: '/Installer.png',
        screenshots: [
            '/screenshots/a.png',
            '/screenshots/b.png',
            '/screenshots/c.png',
            '/screenshots/d.png',
        ],
        apprating: {
            rating: '⭐️ 4.3',
            download: '1k+',
            rated: 'Rated 3+'
        },
        link: { playstore: 'https://play.google.com/store/apps/details?id=com.theinstallers.theinstallers&hl=en', appstore: 'https://apps.apple.com/in/developer/innovate-installers-services-private-limited/id1724172109' }
    },
    {
        title: 'Think IAS-LMS',
        description: 'Start prepairing for competitive CGPSC. through online classes.',
        bgImage: '/Think.png',
        screenshots: [
            '/screenshots/a.png',
            '/screenshots/b.png',
            '/screenshots/c.png',
            '/screenshots/d.png',
        ],
        apprating: {
            rating: '⭐️ 4.3',
            download: '100+',
            rated: 'Rated 3+'
        },
        link: {
            playstore: 'https://play.google.com/store/apps/details?id=com.thinkiasnew.android&hl=en',
            appstore: ''
        }
    },
    {
        title: 'Bible App',
        description: 'This app is designed for users who want to stay connected with Gods Word anytime and anywhere',
        bgImage: '/Pav.png',
        screenshots: [
            '/screenshots/a.png',
            '/screenshots/b.png',
            '/screenshots/c.png',
            '/screenshots/d.png',
        ],
        apprating: {
            rating: '⭐️ 4.4',
            download: '100+',
            rated: 'Rated 3+'
        },
        link: { playstore: 'https://play.google.com/store/apps/details?id=com.create.bible&hl=en_IN', appstore: '' }
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Flutter, Jetpack Compose, Springboot, HTML, Tailwind, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'M.Sc in Computer Science (Final Semester)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 10 projects' }
];

export const toolsData = [
    assets.java, assets.flutter, assets.kotlin, assets.springboot, assets.postgress, assets.docker, assets.tailwind, assets.nextjs, assets.mongodb, assets.git, assets.github, assets.gitlab, assets.android, assets.vscode, assets.firebase, assets.supabase,
];
