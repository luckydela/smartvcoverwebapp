export let CUSTOMER_MENUS:any = [
  {
    name: 'Policies',
    submenus: [
      {
        name: 'Buy New Policy',
        img: 'buy-16.png',
        path:'buypolicy'
      },
      {
        name: 'Renew Policy',
        img:'buy-2-16.png',
        path: 'mypolicies'
      },
      {
        name: 'My Policies',
        img:'text-file-5-16.png',
        path: 'mypolicies'
      }
    ]
  },
  {
    name: 'Claims',
    submenus: [
      {
        name: 'New Claim',
        img: 'add-user-2-16.png',
        path: 'make-a-claim'
      },
      {
        name: 'Claim Status',
        img:'outline-16.png',
        path: 'claimstatus'
      },
      {
        name: 'My Claims',
        img:'text-file-5-16.png',
        path: 'myclaims'
      }
    ]
  },
  {
    name: 'Other',
    submenus: [
      {
        name: 'My Sticker',
        img: 'checked-user-16.png',
        path: 'mysitcker'
      },
      {
        name: 'Notification',
        img:'check-mark-3-16.png',
        path: 'notifications'
      },
      {
        name: 'Settings',
        img:'user-3-16.png',
        path: 'settings'
      }
    ]
  }
]


export let AGENT_MENUS:any = [
  {
    name: 'Policies',
    submenus: [
      {
        name: 'Buy Policy',
        img: 'buy-16.png',
        path:'buypolicy'
      },
      {
        name: 'Renew Policy',
        img:'buy-2-16.png',
        path: 'mypolicies'
      },
      {
        name: 'My Policies',
        img:'text-file-5-16.png',
        path: 'mypolicies'
      }
    ]
  },
  {
    name: 'Personal',
    submenus: [
      {
        name: 'My Commission',
        img: 'add-user-2-16.png',
        path: 'mycommision'
      },
      {
        name: 'Sold Policies',
        img:'outline-16.png',
        path: 'soldpolicies'
      },
      {
        name: 'Profile Settings',
        img:'text-file-5-16.png',
        path: 'profile'
      }
    ]
  },
  {
    name: 'Other',
    submenus: [
      {
        name: 'Notification',
        img:'check-mark-3-16.png',
        path: 'notifications'
      },
      {
        name: 'Settings',
        img:'user-3-16.png',
        path: 'settings'
      }
    ]
  }
]

export let ENDPOINTS = {
  main:'https://smartcover-api-dev.azurewebsites.net/smartCover/api/',
  client:'client_login',
  agent: 'agents/sign_in',
  create_account: 'clients/create_account'
}