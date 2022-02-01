export default {
    name: 'users',
    title: 'Users',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'Username',
            type: 'string'
        },
        {
            name: 'walletAddress',
            title: 'Wallet Address',
            type: 'string'
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image'
        },
        {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image'
        },
        {
            name: 'twitterHandle',
            title: 'Twitter Handle',
            type: 'string'
        },
    ]
}