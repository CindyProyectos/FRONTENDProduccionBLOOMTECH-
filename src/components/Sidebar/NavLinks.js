// sidebar nav links
// Aqui estan las rutas que utiliza el menu lateral.
export default {
   menu1: [
      {
         "menu_title": "sidebar.panel",
         "menu_icon": "zmdi zmdi-home",
         "path": "/app/pages/panel",
         "new_item": false,
         exact: true
      },
      {
         "menu_title": "sidebar.team",
         "menu_icon": "zmdi zmdi-group-work",
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/pages/myteam",
               "menu_title": "sidebar.myteam",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/pages/allteam",
               "menu_title": "sidebar.allteam",
               "new_item": false,
               exact: true
            }
         ]
      },
      {
         "menu_title": "sidebar.wallet",
         "menu_icon": "zmdi zmdi-balance-wallet",
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/wallet/customer-information",
               "menu_title": "sidebar.wallet.customerInformation",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/wallet/bitcoin",
               "menu_title": "sidebar.wallet.bitcoin",
               "new_item": false,
               exact: true
            },
            
            {
               "path": "/app/wallet/ethereum",
               "menu_title": "sidebar.wallet.ethereum",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/wallet/uvad",
               "menu_title": "sidebar.wallet.uvad",
               "new_item": false,
               exact: true
            }
         ]
      },
      {
         "menu_title": "sidebar.deposit",
         "menu_icon": "zmdi zmdi-sign-in",
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/pages/depositusd",
               "menu_title": "sidebar.dolar",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/deposit/bitcoin",
               "menu_title": "sidebar.deposit.bitcoin",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/deposit/bnb",
               "menu_title": "sidebar.deposit.bnb",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/deposit/ethereum",
               "menu_title": "sidebar.deposit.ethereum",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/deposit/uvad",
               "menu_title": "sidebar.deposit.uvad",
               "new_item": false,
               exact: true
            },
         ]
      },
      {
         "menu_title": "sidebar.convert",
         "menu_icon": "zmdi zmdi-refresh-sync",
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/convert/convert",
               "menu_title": "sidebar.convert.convert",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/convert/history",
               "menu_title": "sidebar.convert.history",
               "new_item": false,
               exact: true
            }
         ]
      },
      
      {
         "menu_title": "sidebar.usuario",
         "menu_icon": "zmdi zmdi-accounts-outline",
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/pages/addusers",
               "menu_title": "sidebar.addusers",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/pages/listusers",
               "menu_title": "sidebar.listusers",
               "new_item": false,
               exact: true
            }
         ]
      },
      {
         "path": "/app/pages/withdraw",
         "menu_title": "sidebar.retirar",
         "menu_icon": "zmdi zmdi-long-arrow-left",
         "new_item": false,
         exact: true
      }, 
      /*{
         "menu_title": "sidebar.multiLevel",
         "menu_icon": "zmdi zmdi-view-web",
         "new_item": false,
         "child_routes": [
            {
               "path": "/app/pages/construction",
               "menu_title": "sidebar.refer",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/pages/construction",
               "menu_title": "sidebar.bonus",
               "new_item": false,
               exact: true
            },
            {
               "path": "/app/pages/construction",
               "menu_title": "sidebar.buyPackages",
               "new_item": false,
               exact: true
            }
         ]
      },*/
   ],
   
}
