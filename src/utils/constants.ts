export const USER_API_URL = 'https://randomuser.me/api/';
export const USER_API_SEED = 'platterco';
export const USER_API_COUNT = 82;

export const USER_API_EXCL = [
    'login',
    'registered',
    'phone',
    'dob',
    'cell',
    'id'
];

export const DEVELOPER_TYPES = [
    'Full-Stack Developer',
    'Backend Developer',
    'Mobile Developer',
    'Data Scientist',
    'Frontend Developer'
];

export const DEVELOPER_SKILLS = [
    'Android', 
    'iOS', 
    'Java', 
    'React', 
    'Angular', 
    'Python', 
    'Ruby', 
    'PHP', 
    'Go'
];

export const DEV_DESCRIPTION = `
    {{name}} has over 15 years of experience as a {{type}}, including creating a #1 iOS game in 2008 and scaling 
    Yahoo ad servers. {{name}}'s strengths are adaptability, clear communication, and a relentless focus on the
    details that get projects shipped.
`;

export const DEV_DESCRIPTION_TAGS = ['{{name}}', '{{type}}'] as const;

export const DEV_EXPERIENCE = [
    {
        title: 'CEO at Mobility Drive (2009 - present)',
        points: [
            `Developed iOS apps which have been installed on over 15 million devices 
            and the RocketScience app was #1 in the App Store in December 2007.`,
            'Created other games including RPG TrueMasters.',
            `Co-author of VisualMadness 360 for global retailers, an enterprise iPad app that provides 
            supermarkets with a way to direct store layouts and perform visual (photo-based) audits.`,
            `Developed a social photo sharing platform that transcends language and location through video 
            and photo conversations. Used Unique UX, localization, real-time translation, and wev services.`,
        ],
        tech: ['iOS', 'C', 'C++', 'Objective C', 'Parse.com', 'OpenGL', 'REST', 'Web Services', 'Cheetah3D']
    },
    {
        title: 'Team Lead at Multimedia LLC (2004 - 2008)',
        points: [
            'Developed technical integrations of Right Media Ad Server into the Yahoo! APT platform.',
            `Led numerous end-to-end APT feature implementions from design, development, and testing to
            production, deployment and monitoring.`,
            `Developed numerous internal-facing tools and web services for Yahoo! Sales, Engineering, 
            and Search Marketing groups.`,
            'Developed several tool prototypes and integrated various group efforts for project Panama',
            'Developed the Right Media back-end display advertising server system.'
        ],
        tech: ['Perl', 'C++']
    }
];

export const DEVELOPER_SERVICES = [
    'Mobile iOS development',
    'CTO management',
    'Python development',
    'C++ development',
    'Parse.com',
    'Swift', 
    'REST API architecture'
];

export const MAX_PER_PAGE = 20;

export const FOOTER_LINKS = [
    "Contact Us",
    "Press Center",
    "Careers"
];