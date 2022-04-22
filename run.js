const alfy = require('alfy');
(function () {

    const query = alfy.input;
    const jsonData = [
        {
            "name": "iPhone 2G",
            "identifier": "iPhone1,1",
            "boards": [
                {
                    "boardconfig": "m68ap",
                    "platform": "s5l8900x",
                    "cpid": 35072,
                    "bdid": 0
                }
            ],
            "boardconfig": "m68ap",
            "platform": "s5l8900x",
            "cpid": 35072,
            "bdid": 0
        },
        {
            "name": "iPhone 3G",
            "identifier": "iPhone1,2",
            "boards": [
                {
                    "boardconfig": "n82ap",
                    "platform": "s5l8900x",
                    "cpid": 35072,
                    "bdid": 4
                }
            ],
            "boardconfig": "n82ap",
            "platform": "s5l8900x",
            "cpid": 35072,
            "bdid": 4
        },
        {
            "name": "iPhone 3G[S]",
            "identifier": "iPhone2,1",
            "boards": [
                {
                    "boardconfig": "n88ap",
                    "platform": "s5l8920x",
                    "cpid": 35104,
                    "bdid": 0
                }
            ],
            "boardconfig": "n88ap",
            "platform": "s5l8920x",
            "cpid": 35104,
            "bdid": 0
        },
        {
            "name": "iPhone 4 (GSM)",
            "identifier": "iPhone3,1",
            "boards": [
                {
                    "boardconfig": "n90ap",
                    "platform": "s5l8930x",
                    "cpid": 35120,
                    "bdid": 0
                }
            ],
            "boardconfig": "n90ap",
            "platform": "s5l8930x",
            "cpid": 35120,
            "bdid": 0
        },
        {
            "name": "iPhone 4 (CDMA)",
            "identifier": "iPhone3,3",
            "boards": [
                {
                    "boardconfig": "n92ap",
                    "platform": "s5l8930x",
                    "cpid": 35120,
                    "bdid": 6
                }
            ],
            "boardconfig": "n92ap",
            "platform": "s5l8930x",
            "cpid": 35120,
            "bdid": 6
        },
        {
            "name": "iPhone 4[S]",
            "identifier": "iPhone4,1",
            "boards": [
                {
                    "boardconfig": "n94ap",
                    "platform": "s5l8940x",
                    "cpid": 35136,
                    "bdid": 8
                }
            ],
            "boardconfig": "n94ap",
            "platform": "s5l8940x",
            "cpid": 35136,
            "bdid": 8
        },
        {
            "name": "iPod touch 1G",
            "identifier": "iPod1,1",
            "boards": [
                {
                    "boardconfig": "n45ap",
                    "platform": "s5l8900x",
                    "cpid": 35072,
                    "bdid": 2
                }
            ],
            "boardconfig": "n45ap",
            "platform": "s5l8900x",
            "cpid": 35072,
            "bdid": 2
        },
        {
            "name": "iPod touch 2G",
            "identifier": "iPod2,1",
            "boards": [
                {
                    "boardconfig": "n72ap",
                    "platform": "s5l8720x",
                    "cpid": 34592,
                    "bdid": 0
                }
            ],
            "boardconfig": "n72ap",
            "platform": "s5l8720x",
            "cpid": 34592,
            "bdid": 0
        },
        {
            "name": "iPod touch 3",
            "identifier": "iPod3,1",
            "boards": [
                {
                    "boardconfig": "n18ap",
                    "platform": "s5l8922x",
                    "cpid": 35106,
                    "bdid": 2
                }
            ],
            "boardconfig": "n18ap",
            "platform": "s5l8922x",
            "cpid": 35106,
            "bdid": 2
        },
        {
            "name": "iPod touch 4",
            "identifier": "iPod4,1",
            "boards": [
                {
                    "boardconfig": "n81ap",
                    "platform": "s5l8930x",
                    "cpid": 35120,
                    "bdid": 8
                }
            ],
            "boardconfig": "n81ap",
            "platform": "s5l8930x",
            "cpid": 35120,
            "bdid": 8
        },
        {
            "name": "iPad 1",
            "identifier": "iPad1,1",
            "boards": [
                {
                    "boardconfig": "k48ap",
                    "platform": "s5l8930x",
                    "cpid": 35120,
                    "bdid": 2
                }
            ],
            "boardconfig": "k48ap",
            "platform": "s5l8930x",
            "cpid": 35120,
            "bdid": 2
        },
        {
            "name": "iPad 2 (WiFi)",
            "identifier": "iPad2,1",
            "boards": [
                {
                    "boardconfig": "k93ap",
                    "platform": "s5l8940x",
                    "cpid": 35136,
                    "bdid": 4
                }
            ],
            "boardconfig": "k93ap",
            "platform": "s5l8940x",
            "cpid": 35136,
            "bdid": 4
        },
        {
            "name": "iPad 2 (GSM)",
            "identifier": "iPad2,2",
            "boards": [
                {
                    "boardconfig": "k94ap",
                    "platform": "s5l8940x",
                    "cpid": 35136,
                    "bdid": 6
                }
            ],
            "boardconfig": "k94ap",
            "platform": "s5l8940x",
            "cpid": 35136,
            "bdid": 6
        },
        {
            "name": "iPad 2 (CDMA)",
            "identifier": "iPad2,3",
            "boards": [
                {
                    "boardconfig": "k95ap",
                    "platform": "s5l8940x",
                    "cpid": 35136,
                    "bdid": 2
                }
            ],
            "boardconfig": "k95ap",
            "platform": "s5l8940x",
            "cpid": 35136,
            "bdid": 2
        },
        {
            "name": "iPad 2 (Mid 2012)",
            "identifier": "iPad2,4",
            "boards": [
                {
                    "boardconfig": "k93aap",
                    "platform": "s5l8942x",
                    "cpid": 35138,
                    "bdid": 6
                }
            ],
            "boardconfig": "k93aap",
            "platform": "s5l8942x",
            "cpid": 35138,
            "bdid": 6
        },
        {
            "name": "iPad 3 (WiFi)",
            "identifier": "iPad3,1",
            "boards": [
                {
                    "boardconfig": "j1ap",
                    "platform": "s5l8945x",
                    "cpid": 35141,
                    "bdid": 0
                }
            ],
            "boardconfig": "j1ap",
            "platform": "s5l8945x",
            "cpid": 35141,
            "bdid": 0
        },
        {
            "name": "iPad 3 (CDMA)",
            "identifier": "iPad3,2",
            "boards": [
                {
                    "boardconfig": "j2ap",
                    "platform": "s5l8945x",
                    "cpid": 35141,
                    "bdid": 2
                }
            ],
            "boardconfig": "j2ap",
            "platform": "s5l8945x",
            "cpid": 35141,
            "bdid": 2
        },
        {
            "name": "iPad 3 (GSM)",
            "identifier": "iPad3,3",
            "boards": [
                {
                    "boardconfig": "j2aap",
                    "platform": "s5l8945x",
                    "cpid": 35141,
                    "bdid": 4
                }
            ],
            "boardconfig": "j2aap",
            "platform": "s5l8945x",
            "cpid": 35141,
            "bdid": 4
        },
        {
            "name": "Apple TV 2G",
            "identifier": "AppleTV2,1",
            "boards": [
                {
                    "boardconfig": "k66ap",
                    "platform": "s5l8930x",
                    "cpid": 35120,
                    "bdid": 16
                }
            ],
            "boardconfig": "k66ap",
            "platform": "s5l8930x",
            "cpid": 35120,
            "bdid": 16
        },
        {
            "name": "Apple TV 3",
            "identifier": "AppleTV3,1",
            "boards": [
                {
                    "boardconfig": "J33AP",
                    "platform": "s5l8942x",
                    "cpid": 35138,
                    "bdid": 8
                }
            ],
            "boardconfig": "J33AP",
            "platform": "s5l8942x",
            "cpid": 35138,
            "bdid": 8
        },
        {
            "name": "Apple TV 3 (2013)",
            "identifier": "AppleTV3,2",
            "boards": [
                {
                    "boardconfig": "J33iAP",
                    "platform": "s5l8947x",
                    "cpid": 35143,
                    "bdid": 0
                }
            ],
            "boardconfig": "J33iAP",
            "platform": "s5l8947x",
            "cpid": 35143,
            "bdid": 0
        },
        {
            "name": "iPod touch 5",
            "identifier": "iPod5,1",
            "boards": [
                {
                    "boardconfig": "n78ap",
                    "platform": "s5l8942x",
                    "cpid": 35138,
                    "bdid": 0
                }
            ],
            "boardconfig": "n78ap",
            "platform": "s5l8942x",
            "cpid": 35138,
            "bdid": 0
        },
        {
            "name": "iPhone 4 (GSM / 2012)",
            "identifier": "iPhone3,2",
            "boards": [
                {
                    "boardconfig": "n90bap",
                    "platform": "s5l8930x",
                    "cpid": 35120,
                    "bdid": 4
                }
            ],
            "boardconfig": "n90bap",
            "platform": "s5l8930x",
            "cpid": 35120,
            "bdid": 4
        },
        {
            "name": "iPhone 5 (GSM)",
            "identifier": "iPhone5,1",
            "boards": [
                {
                    "boardconfig": "N41AP",
                    "platform": "s5l8950x",
                    "cpid": 35152,
                    "bdid": 0
                }
            ],
            "boardconfig": "N41AP",
            "platform": "s5l8950x",
            "cpid": 35152,
            "bdid": 0
        },
        {
            "name": "iPhone 5 (Global)",
            "identifier": "iPhone5,2",
            "boards": [
                {
                    "boardconfig": "N42AP",
                    "platform": "s5l8950x",
                    "cpid": 35152,
                    "bdid": 2
                }
            ],
            "boardconfig": "N42AP",
            "platform": "s5l8950x",
            "cpid": 35152,
            "bdid": 2
        },
        {
            "name": "iPad Mini (WiFi)",
            "identifier": "iPad2,5",
            "boards": [
                {
                    "boardconfig": "p105ap",
                    "platform": "s5l8942x",
                    "cpid": 35138,
                    "bdid": 10
                }
            ],
            "boardconfig": "p105ap",
            "platform": "s5l8942x",
            "cpid": 35138,
            "bdid": 10
        },
        {
            "name": "iPad Mini (GSM)",
            "identifier": "iPad2,6",
            "boards": [
                {
                    "boardconfig": "p106ap",
                    "platform": "s5l8942x",
                    "cpid": 35138,
                    "bdid": 12
                }
            ],
            "boardconfig": "p106ap",
            "platform": "s5l8942x",
            "cpid": 35138,
            "bdid": 12
        },
        {
            "name": "iPad Mini (Global)",
            "identifier": "iPad2,7",
            "boards": [
                {
                    "boardconfig": "p107ap",
                    "platform": "s5l8942x",
                    "cpid": 35138,
                    "bdid": 14
                }
            ],
            "boardconfig": "p107ap",
            "platform": "s5l8942x",
            "cpid": 35138,
            "bdid": 14
        },
        {
            "name": "iPad 4 (WiFi)",
            "identifier": "iPad3,4",
            "boards": [
                {
                    "boardconfig": "P101AP",
                    "platform": "s5l8955x",
                    "cpid": 35157,
                    "bdid": 0
                }
            ],
            "boardconfig": "P101AP",
            "platform": "s5l8955x",
            "cpid": 35157,
            "bdid": 0
        },
        {
            "name": "iPad 4 (GSM)",
            "identifier": "iPad3,5",
            "boards": [
                {
                    "boardconfig": "P102AP",
                    "platform": "s5l8955x",
                    "cpid": 35157,
                    "bdid": 2
                }
            ],
            "boardconfig": "P102AP",
            "platform": "s5l8955x",
            "cpid": 35157,
            "bdid": 2
        },
        {
            "name": "iPad 4 (Global)",
            "identifier": "iPad3,6",
            "boards": [
                {
                    "boardconfig": "P103AP",
                    "platform": "s5l8955x",
                    "cpid": 35157,
                    "bdid": 4
                }
            ],
            "boardconfig": "P103AP",
            "platform": "s5l8955x",
            "cpid": 35157,
            "bdid": 4
        },
        {
            "name": "iPhone 5s (Global)",
            "identifier": "iPhone6,2",
            "boards": [
                {
                    "boardconfig": "N53AP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 2
                }
            ],
            "boardconfig": "N53AP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 2
        },
        {
            "name": "iPhone 5c (GSM)",
            "identifier": "iPhone5,3",
            "boards": [
                {
                    "boardconfig": "N48AP",
                    "platform": "s5l8950x",
                    "cpid": 35152,
                    "bdid": 10
                }
            ],
            "boardconfig": "N48AP",
            "platform": "s5l8950x",
            "cpid": 35152,
            "bdid": 10
        },
        {
            "name": "iPhone 5c (Global)",
            "identifier": "iPhone5,4",
            "boards": [
                {
                    "boardconfig": "N49AP",
                    "platform": "s5l8950x",
                    "cpid": 35152,
                    "bdid": 14
                }
            ],
            "boardconfig": "N49AP",
            "platform": "s5l8950x",
            "cpid": 35152,
            "bdid": 14
        },
        {
            "name": "iPhone 5s (GSM)",
            "identifier": "iPhone6,1",
            "boards": [
                {
                    "boardconfig": "N51AP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 0
                }
            ],
            "boardconfig": "N51AP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 0
        },
        {
            "name": "iPad Mini 2 (WiFi)",
            "identifier": "iPad4,4",
            "boards": [
                {
                    "boardconfig": "J85AP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 10
                }
            ],
            "boardconfig": "J85AP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 10
        },
        {
            "name": "iPad Mini 2 (Cellular)",
            "identifier": "iPad4,5",
            "boards": [
                {
                    "boardconfig": "J86AP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 12
                }
            ],
            "boardconfig": "J86AP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 12
        },
        {
            "name": "iPad Air (WiFi)",
            "identifier": "iPad4,1",
            "boards": [
                {
                    "boardconfig": "J71AP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 16
                }
            ],
            "boardconfig": "J71AP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 16
        },
        {
            "name": "iPad Air (Cellular)",
            "identifier": "iPad4,2",
            "boards": [
                {
                    "boardconfig": "J72AP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 18
                }
            ],
            "boardconfig": "J72AP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 18
        },
        {
            "name": "iPad Air (China)",
            "identifier": "iPad4,3",
            "boards": [
                {
                    "boardconfig": "J73AP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 20
                }
            ],
            "boardconfig": "J73AP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 20
        },
        {
            "name": "iPad Mini 2 (China)",
            "identifier": "iPad4,6",
            "boards": [
                {
                    "boardconfig": "J87AP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 14
                }
            ],
            "boardconfig": "J87AP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 14
        },
        {
            "name": "iPhone 6+",
            "identifier": "iPhone7,1",
            "boards": [
                {
                    "boardconfig": "N56AP",
                    "platform": "t7000",
                    "cpid": 28672,
                    "bdid": 4
                }
            ],
            "boardconfig": "N56AP",
            "platform": "t7000",
            "cpid": 28672,
            "bdid": 4
        },
        {
            "name": "iPhone 6",
            "identifier": "iPhone7,2",
            "boards": [
                {
                    "boardconfig": "N61AP",
                    "platform": "t7000",
                    "cpid": 28672,
                    "bdid": 6
                }
            ],
            "boardconfig": "N61AP",
            "platform": "t7000",
            "cpid": 28672,
            "bdid": 6
        },
        {
            "name": "iPad Mini 3 (WiFi)",
            "identifier": "iPad4,7",
            "boards": [
                {
                    "boardconfig": "J85mAP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 50
                }
            ],
            "boardconfig": "J85mAP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 50
        },
        {
            "name": "iPad Mini 3 (Cellular)",
            "identifier": "iPad4,8",
            "boards": [
                {
                    "boardconfig": "J86mAP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 52
                }
            ],
            "boardconfig": "J86mAP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 52
        },
        {
            "name": "iPad Mini 3 (China)",
            "identifier": "iPad4,9",
            "boards": [
                {
                    "boardconfig": "J87mAP",
                    "platform": "s5l8960x",
                    "cpid": 35168,
                    "bdid": 54
                }
            ],
            "boardconfig": "J87mAP",
            "platform": "s5l8960x",
            "cpid": 35168,
            "bdid": 54
        },
        {
            "name": "iPad Air 2 (WiFi)",
            "identifier": "iPad5,3",
            "boards": [
                {
                    "boardconfig": "J81AP",
                    "platform": "t7001",
                    "cpid": 28673,
                    "bdid": 6
                }
            ],
            "boardconfig": "J81AP",
            "platform": "t7001",
            "cpid": 28673,
            "bdid": 6
        },
        {
            "name": "iPad Air 2 (Cellular)",
            "identifier": "iPad5,4",
            "boards": [
                {
                    "boardconfig": "J82AP",
                    "platform": "t7001",
                    "cpid": 28673,
                    "bdid": 2
                }
            ],
            "boardconfig": "J82AP",
            "platform": "t7001",
            "cpid": 28673,
            "bdid": 2
        },
        {
            "name": "Apple Watch (38mm)",
            "identifier": "Watch1,1",
            "boards": [
                {
                    "boardconfig": "N27aAP",
                    "platform": "",
                    "cpid": 28674,
                    "bdid": 2
                }
            ],
            "boardconfig": "N27aAP",
            "platform": "",
            "cpid": 28674,
            "bdid": 2
        },
        {
            "name": "Apple Watch (42mm)",
            "identifier": "Watch1,2",
            "boards": [
                {
                    "boardconfig": "N28aAP",
                    "platform": "",
                    "cpid": 28674,
                    "bdid": 4
                }
            ],
            "boardconfig": "N28aAP",
            "platform": "",
            "cpid": 28674,
            "bdid": 4
        },
        {
            "name": "iPod touch 6",
            "identifier": "iPod7,1",
            "boards": [
                {
                    "boardconfig": "N102AP",
                    "platform": "t7000",
                    "cpid": 28672,
                    "bdid": 16
                }
            ],
            "boardconfig": "N102AP",
            "platform": "t7000",
            "cpid": 28672,
            "bdid": 16
        },
        {
            "name": "iPad Mini 4 (WiFi)",
            "identifier": "iPad5,1",
            "boards": [
                {
                    "boardconfig": "J96AP",
                    "platform": "t7000",
                    "cpid": 28672,
                    "bdid": 8
                }
            ],
            "boardconfig": "J96AP",
            "platform": "t7000",
            "cpid": 28672,
            "bdid": 8
        },
        {
            "name": "iPad Mini 4 (Cellular)",
            "identifier": "iPad5,2",
            "boards": [
                {
                    "boardconfig": "J97AP",
                    "platform": "t7000",
                    "cpid": 28672,
                    "bdid": 10
                }
            ],
            "boardconfig": "J97AP",
            "platform": "t7000",
            "cpid": 28672,
            "bdid": 10
        },
        {
            "name": "iPhone 6s",
            "identifier": "iPhone8,1",
            "boards": [
                {
                    "boardconfig": "N71AP",
                    "platform": "s8000",
                    "cpid": 32768,
                    "bdid": 4
                },
                {
                    "boardconfig": "N71mAP",
                    "platform": "s8003",
                    "cpid": 32771,
                    "bdid": 4
                }
            ],
            "boardconfig": "N71AP",
            "platform": "s8000",
            "cpid": 32768,
            "bdid": 4
        },
        {
            "name": "iPhone 6s+",
            "identifier": "iPhone8,2",
            "boards": [
                {
                    "boardconfig": "N66AP",
                    "platform": "s8000",
                    "cpid": 32768,
                    "bdid": 6
                },
                {
                    "boardconfig": "N66mAP",
                    "platform": "s8003",
                    "cpid": 32771,
                    "bdid": 6
                }
            ],
            "boardconfig": "N66AP",
            "platform": "s8000",
            "cpid": 32768,
            "bdid": 6
        },
        {
            "name": "Apple TV 4 (2015)",
            "identifier": "AppleTV5,3",
            "boards": [
                {
                    "boardconfig": "J42dAP",
                    "platform": "t7000",
                    "cpid": 28672,
                    "bdid": 52
                }
            ],
            "boardconfig": "J42dAP",
            "platform": "t7000",
            "cpid": 28672,
            "bdid": 52
        },
        {
            "name": "iPad Pro 12.9-inch (WiFi)",
            "identifier": "iPad6,7",
            "boards": [
                {
                    "boardconfig": "J98aAP",
                    "platform": "s8001",
                    "cpid": 32769,
                    "bdid": 16
                }
            ],
            "boardconfig": "J98aAP",
            "platform": "s8001",
            "cpid": 32769,
            "bdid": 16
        },
        {
            "name": "iPad Pro 12.9-inch (Cellular)",
            "identifier": "iPad6,8",
            "boards": [
                {
                    "boardconfig": "J99aAP",
                    "platform": "s8001",
                    "cpid": 32769,
                    "bdid": 18
                }
            ],
            "boardconfig": "J99aAP",
            "platform": "s8001",
            "cpid": 32769,
            "bdid": 18
        },
        {
            "name": "iPad Pro 9.7-inch (Cellular)",
            "identifier": "iPad6,4",
            "boards": [
                {
                    "boardconfig": "J128AP",
                    "platform": "s8001",
                    "cpid": 32769,
                    "bdid": 10
                }
            ],
            "boardconfig": "J128AP",
            "platform": "s8001",
            "cpid": 32769,
            "bdid": 10
        },
        {
            "name": "iPad Pro 9.7-inch (WiFi)",
            "identifier": "iPad6,3",
            "boards": [
                {
                    "boardconfig": "J127AP",
                    "platform": "s8001",
                    "cpid": 32769,
                    "bdid": 8
                }
            ],
            "boardconfig": "J127AP",
            "platform": "s8001",
            "cpid": 32769,
            "bdid": 8
        },
        {
            "name": "iPhone SE",
            "identifier": "iPhone8,4",
            "boards": [
                {
                    "boardconfig": "N69AP",
                    "platform": "s8003",
                    "cpid": 32771,
                    "bdid": 2
                },
                {
                    "boardconfig": "N69uAP",
                    "platform": "s8000",
                    "cpid": 32768,
                    "bdid": 2
                }
            ],
            "boardconfig": "N69AP",
            "platform": "s8003",
            "cpid": 32771,
            "bdid": 2
        },
        {
            "name": "Apple Watch Series 2 (38mm)",
            "identifier": "Watch2,3",
            "boards": [
                {
                    "boardconfig": "N74AP",
                    "platform": "",
                    "cpid": 32770,
                    "bdid": 12
                }
            ],
            "boardconfig": "N74AP",
            "platform": "",
            "cpid": 32770,
            "bdid": 12
        },
        {
            "name": "iPhone 7 (Global)",
            "identifier": "iPhone9,1",
            "boards": [
                {
                    "boardconfig": "D10AP",
                    "platform": "t8010",
                    "cpid": 32784,
                    "bdid": 8
                }
            ],
            "boardconfig": "D10AP",
            "platform": "t8010",
            "cpid": 32784,
            "bdid": 8
        },
        {
            "name": "Apple Watch Series 2 (42mm)",
            "identifier": "Watch2,4",
            "boards": [
                {
                    "boardconfig": "N75AP",
                    "platform": "",
                    "cpid": 32770,
                    "bdid": 14
                }
            ],
            "boardconfig": "N75AP",
            "platform": "",
            "cpid": 32770,
            "bdid": 14
        },
        {
            "name": "iPhone 7 Plus (Global)",
            "identifier": "iPhone9,2",
            "boards": [
                {
                    "boardconfig": "D11AP",
                    "platform": "t8010",
                    "cpid": 32784,
                    "bdid": 10
                }
            ],
            "boardconfig": "D11AP",
            "platform": "t8010",
            "cpid": 32784,
            "bdid": 10
        },
        {
            "name": "Apple Watch Series 1 (38mm)",
            "identifier": "Watch2,6",
            "boards": [
                {
                    "boardconfig": "N27dAP",
                    "platform": "",
                    "cpid": 32770,
                    "bdid": 2
                }
            ],
            "boardconfig": "N27dAP",
            "platform": "",
            "cpid": 32770,
            "bdid": 2
        },
        {
            "name": "iPhone 7 (GSM)",
            "identifier": "iPhone9,3",
            "boards": [
                {
                    "boardconfig": "D101AP",
                    "platform": "t8010",
                    "cpid": 32784,
                    "bdid": 12
                }
            ],
            "boardconfig": "D101AP",
            "platform": "t8010",
            "cpid": 32784,
            "bdid": 12
        },
        {
            "name": "Apple Watch Series 1 (42mm)",
            "identifier": "Watch2,7",
            "boards": [
                {
                    "boardconfig": "N28dAP",
                    "platform": "",
                    "cpid": 32770,
                    "bdid": 4
                }
            ],
            "boardconfig": "N28dAP",
            "platform": "",
            "cpid": 32770,
            "bdid": 4
        },
        {
            "name": "iPhone 7 Plus (GSM)",
            "identifier": "iPhone9,4",
            "boards": [
                {
                    "boardconfig": "D111AP",
                    "platform": "t8010",
                    "cpid": 32784,
                    "bdid": 14
                }
            ],
            "boardconfig": "D111AP",
            "platform": "t8010",
            "cpid": 32784,
            "bdid": 14
        },
        {
            "name": "iPad 5 (WiFi)",
            "identifier": "iPad6,11",
            "boards": [
                {
                    "boardconfig": "J71sAP",
                    "platform": "s8000",
                    "cpid": 32768,
                    "bdid": 16
                },
                {
                    "boardconfig": "J71tAP",
                    "platform": "s8003",
                    "cpid": 32771,
                    "bdid": 16
                }
            ],
            "boardconfig": "J71sAP",
            "platform": "s8000",
            "cpid": 32768,
            "bdid": 16
        },
        {
            "name": "iPad 5 (Cellular)",
            "identifier": "iPad6,12",
            "boards": [
                {
                    "boardconfig": "J72sAP",
                    "platform": "s8000",
                    "cpid": 32768,
                    "bdid": 18
                },
                {
                    "boardconfig": "J72tAP",
                    "platform": "s8003",
                    "cpid": 32771,
                    "bdid": 18
                }
            ],
            "boardconfig": "J72sAP",
            "platform": "s8000",
            "cpid": 32768,
            "bdid": 18
        },
        {
            "name": "iPad Pro 2 (12.9-inch, Cellular)",
            "identifier": "iPad7,2",
            "boards": [
                {
                    "boardconfig": "J121AP",
                    "platform": "t8011",
                    "cpid": 32785,
                    "bdid": 14
                }
            ],
            "boardconfig": "J121AP",
            "platform": "t8011",
            "cpid": 32785,
            "bdid": 14
        },
        {
            "name": "iPad Pro (10.5-inch, Cellular)",
            "identifier": "iPad7,4",
            "boards": [
                {
                    "boardconfig": "J208AP",
                    "platform": "t8011",
                    "cpid": 32785,
                    "bdid": 6
                }
            ],
            "boardconfig": "J208AP",
            "platform": "t8011",
            "cpid": 32785,
            "bdid": 6
        },
        {
            "name": "iPad Pro (10.5-inch, WiFi)",
            "identifier": "iPad7,3",
            "boards": [
                {
                    "boardconfig": "J207AP",
                    "platform": "t8011",
                    "cpid": 32785,
                    "bdid": 4
                }
            ],
            "boardconfig": "J207AP",
            "platform": "t8011",
            "cpid": 32785,
            "bdid": 4
        },
        {
            "name": "iPad Pro 2 (12.9-inch, WiFi)",
            "identifier": "iPad7,1",
            "boards": [
                {
                    "boardconfig": "J120AP",
                    "platform": "t8011",
                    "cpid": 32785,
                    "bdid": 12
                }
            ],
            "boardconfig": "J120AP",
            "platform": "t8011",
            "cpid": 32785,
            "bdid": 12
        },
        {
            "name": "HomePod",
            "identifier": "AudioAccessory1,1",
            "boards": [
                {
                    "boardconfig": "B238aAP",
                    "platform": "",
                    "cpid": 28672,
                    "bdid": 56
                }
            ],
            "boardconfig": "B238aAP",
            "platform": "",
            "cpid": 28672,
            "bdid": 56
        },
        {
            "name": "iPhone 8 (Global)",
            "identifier": "iPhone10,1",
            "boards": [
                {
                    "boardconfig": "D20AP",
                    "platform": "t8015",
                    "cpid": 32789,
                    "bdid": 2
                }
            ],
            "boardconfig": "D20AP",
            "platform": "t8015",
            "cpid": 32789,
            "bdid": 2
        },
        {
            "name": "iPhone 8 (GSM)",
            "identifier": "iPhone10,4",
            "boards": [
                {
                    "boardconfig": "D201AP",
                    "platform": "t8015",
                    "cpid": 32789,
                    "bdid": 10
                }
            ],
            "boardconfig": "D201AP",
            "platform": "t8015",
            "cpid": 32789,
            "bdid": 10
        },
        {
            "name": "iPhone 8 Plus (GSM)",
            "identifier": "iPhone10,5",
            "boards": [
                {
                    "boardconfig": "D211AP",
                    "platform": "t8015",
                    "cpid": 32789,
                    "bdid": 12
                }
            ],
            "boardconfig": "D211AP",
            "platform": "t8015",
            "cpid": 32789,
            "bdid": 12
        },
        {
            "name": "iPhone 8 Plus (Global)",
            "identifier": "iPhone10,2",
            "boards": [
                {
                    "boardconfig": "D21AP",
                    "platform": "t8015",
                    "cpid": 32789,
                    "bdid": 4
                }
            ],
            "boardconfig": "D21AP",
            "platform": "t8015",
            "cpid": 32789,
            "bdid": 4
        },
        {
            "name": "Apple TV 4K",
            "identifier": "AppleTV6,2",
            "boards": [
                {
                    "boardconfig": "J105aAP",
                    "platform": "",
                    "cpid": 32785,
                    "bdid": 2
                }
            ],
            "boardconfig": "J105aAP",
            "platform": "",
            "cpid": 32785,
            "bdid": 2
        },
        {
            "name": "Apple Watch Series 3 (38mm, LTE)",
            "identifier": "Watch3,1",
            "boards": [
                {
                    "boardconfig": "N111sAP",
                    "platform": "",
                    "cpid": 32772,
                    "bdid": 28
                }
            ],
            "boardconfig": "N111sAP",
            "platform": "",
            "cpid": 32772,
            "bdid": 28
        },
        {
            "name": "Apple Watch Series 3 (42mm, LTE)",
            "identifier": "Watch3,2",
            "boards": [
                {
                    "boardconfig": "N111bAP",
                    "platform": "",
                    "cpid": 32772,
                    "bdid": 30
                }
            ],
            "boardconfig": "N111bAP",
            "platform": "",
            "cpid": 32772,
            "bdid": 30
        },
        {
            "name": "Apple Watch Series 3 (38mm)",
            "identifier": "Watch3,3",
            "boards": [
                {
                    "boardconfig": "N121sAP",
                    "platform": "",
                    "cpid": 32772,
                    "bdid": 24
                }
            ],
            "boardconfig": "N121sAP",
            "platform": "",
            "cpid": 32772,
            "bdid": 24
        },
        {
            "name": "Apple Watch Series 3 (42mm)",
            "identifier": "Watch3,4",
            "boards": [
                {
                    "boardconfig": "N121bAP",
                    "platform": "",
                    "cpid": 32772,
                    "bdid": 26
                }
            ],
            "boardconfig": "N121bAP",
            "platform": "",
            "cpid": 32772,
            "bdid": 26
        },
        {
            "name": "iPhone X (Global)",
            "identifier": "iPhone10,3",
            "boards": [
                {
                    "boardconfig": "D22AP",
                    "platform": "t8015",
                    "cpid": 32789,
                    "bdid": 6
                }
            ],
            "boardconfig": "D22AP",
            "platform": "t8015",
            "cpid": 32789,
            "bdid": 6
        },
        {
            "name": "iPhone X (GSM)",
            "identifier": "iPhone10,6",
            "boards": [
                {
                    "boardconfig": "D221AP",
                    "platform": "t8015",
                    "cpid": 32789,
                    "bdid": 14
                }
            ],
            "boardconfig": "D221AP",
            "platform": "t8015",
            "cpid": 32789,
            "bdid": 14
        },
        {
            "name": "iPad 6 (WiFi)",
            "identifier": "iPad7,5",
            "boards": [
                {
                    "boardconfig": "J71bAP",
                    "platform": "t8010",
                    "cpid": 32784,
                    "bdid": 24
                }
            ],
            "boardconfig": "J71bAP",
            "platform": "t8010",
            "cpid": 32784,
            "bdid": 24
        },
        {
            "name": "iPad 6 (Cellular)",
            "identifier": "iPad7,6",
            "boards": [
                {
                    "boardconfig": "J72bAP",
                    "platform": "t8010",
                    "cpid": 32784,
                    "bdid": 26
                }
            ],
            "boardconfig": "J72bAP",
            "platform": "t8010",
            "cpid": 32784,
            "bdid": 26
        },
        {
            "name": "HomePod (Unknown Model)",
            "identifier": "AudioAccessory1,2",
            "boards": [
                {
                    "boardconfig": "B238AP",
                    "platform": "",
                    "cpid": 28672,
                    "bdid": 26
                }
            ],
            "boardconfig": "B238AP",
            "platform": "",
            "cpid": 28672,
            "bdid": 26
        },
        {
            "name": "iPhone XS Max",
            "identifier": "iPhone11,6",
            "boards": [
                {
                    "boardconfig": "D331pAP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 26
                }
            ],
            "boardconfig": "D331pAP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 26
        },
        {
            "name": "Apple Watch Series 4 (44mm)",
            "identifier": "Watch4,2",
            "boards": [
                {
                    "boardconfig": "N131bAP",
                    "platform": "",
                    "cpid": 32774,
                    "bdid": 10
                }
            ],
            "boardconfig": "N131bAP",
            "platform": "",
            "cpid": 32774,
            "bdid": 10
        },
        {
            "name": "Apple Watch Series 4 (40mm)",
            "identifier": "Watch4,1",
            "boards": [
                {
                    "boardconfig": "N131sAP",
                    "platform": "",
                    "cpid": 32774,
                    "bdid": 8
                }
            ],
            "boardconfig": "N131sAP",
            "platform": "",
            "cpid": 32774,
            "bdid": 8
        },
        {
            "name": "Apple Watch Series 4 (40mm, LTE)",
            "identifier": "Watch4,3",
            "boards": [
                {
                    "boardconfig": "N141sAP",
                    "platform": "",
                    "cpid": 32774,
                    "bdid": 12
                }
            ],
            "boardconfig": "N141sAP",
            "platform": "",
            "cpid": 32774,
            "bdid": 12
        },
        {
            "name": "Apple Watch Series 4 (44mm, LTE)",
            "identifier": "Watch4,4",
            "boards": [
                {
                    "boardconfig": "N141bAP",
                    "platform": "",
                    "cpid": 32774,
                    "bdid": 14
                }
            ],
            "boardconfig": "N141bAP",
            "platform": "",
            "cpid": 32774,
            "bdid": 14
        },
        {
            "name": "iPhone XS",
            "identifier": "iPhone11,2",
            "boards": [
                {
                    "boardconfig": "D321AP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 14
                }
            ],
            "boardconfig": "D321AP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 14
        },
        {
            "name": "iPhone XS Max (China)",
            "identifier": "iPhone11,4",
            "boards": [
                {
                    "boardconfig": "D331AP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 10
                }
            ],
            "boardconfig": "D331AP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 10
        },
        {
            "name": "iPhone XR",
            "identifier": "iPhone11,8",
            "boards": [
                {
                    "boardconfig": "N841AP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 12
                }
            ],
            "boardconfig": "N841AP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 12
        },
        {
            "name": "iPad Pro 3 (12.9-inch, WiFi, 1TB Model)",
            "identifier": "iPad8,6",
            "boards": [
                {
                    "boardconfig": "J320xAP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 24
                }
            ],
            "boardconfig": "J320xAP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 24
        },
        {
            "name": "iPad Pro 3 (11-inch, Cellular)",
            "identifier": "iPad8,3",
            "boards": [
                {
                    "boardconfig": "J318AP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 14
                }
            ],
            "boardconfig": "J318AP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 14
        },
        {
            "name": "iPad Pro 3 (11-inch, WiFi)",
            "identifier": "iPad8,1",
            "boards": [
                {
                    "boardconfig": "J317AP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 12
                }
            ],
            "boardconfig": "J317AP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 12
        },
        {
            "name": "iPad Pro 3 (11-inch, WiFi, 1TB Model)",
            "identifier": "iPad8,2",
            "boards": [
                {
                    "boardconfig": "J317xAP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 28
                }
            ],
            "boardconfig": "J317xAP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 28
        },
        {
            "name": "iPad Pro 3 (11-inch, Cellular, 1TB Model)",
            "identifier": "iPad8,4",
            "boards": [
                {
                    "boardconfig": "J318xAP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 30
                }
            ],
            "boardconfig": "J318xAP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 30
        },
        {
            "name": "iPad Pro 3 (12.9-inch, WiFi)",
            "identifier": "iPad8,5",
            "boards": [
                {
                    "boardconfig": "J320AP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 8
                }
            ],
            "boardconfig": "J320AP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 8
        },
        {
            "name": "iPad Pro 3 (12.9-inch, Cellular)",
            "identifier": "iPad8,7",
            "boards": [
                {
                    "boardconfig": "J321AP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 10
                }
            ],
            "boardconfig": "J321AP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 10
        },
        {
            "name": "iPad Pro 3 (12.9-inch, Cellular, 1TB Model)",
            "identifier": "iPad8,8",
            "boards": [
                {
                    "boardconfig": "J321xAP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 26
                }
            ],
            "boardconfig": "J321xAP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 26
        },
        {
            "name": "iPad Mini 5 (WiFi)",
            "identifier": "iPad11,1",
            "boards": [
                {
                    "boardconfig": "J210AP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 20
                }
            ],
            "boardconfig": "J210AP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 20
        },
        {
            "name": "iPad Mini 5 (Cellular)",
            "identifier": "iPad11,2",
            "boards": [
                {
                    "boardconfig": "J211AP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 22
                }
            ],
            "boardconfig": "J211AP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 22
        },
        {
            "name": "iPad Air 3 (WiFi)",
            "identifier": "iPad11,3",
            "boards": [
                {
                    "boardconfig": "J217AP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 28
                }
            ],
            "boardconfig": "J217AP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 28
        },
        {
            "name": "iPad Air 3 (Cellular)",
            "identifier": "iPad11,4",
            "boards": [
                {
                    "boardconfig": "J218AP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 30
                }
            ],
            "boardconfig": "J218AP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 30
        },
        {
            "name": "iPod touch 7",
            "identifier": "iPod9,1",
            "boards": [
                {
                    "boardconfig": "N112AP",
                    "platform": "t8010",
                    "cpid": 32784,
                    "bdid": 22
                }
            ],
            "boardconfig": "N112AP",
            "platform": "t8010",
            "cpid": 32784,
            "bdid": 22
        },
        {
            "name": "Apple Watch Series 5 (40mm)",
            "identifier": "Watch5,1",
            "boards": [
                {
                    "boardconfig": "N144sAP",
                    "platform": "",
                    "cpid": 32774,
                    "bdid": 16
                }
            ],
            "boardconfig": "N144sAP",
            "platform": "",
            "cpid": 32774,
            "bdid": 16
        },
        {
            "name": "Apple Watch Series 5 (44mm)",
            "identifier": "Watch5,2",
            "boards": [
                {
                    "boardconfig": "N144bAP",
                    "platform": "",
                    "cpid": 32774,
                    "bdid": 18
                }
            ],
            "boardconfig": "N144bAP",
            "platform": "",
            "cpid": 32774,
            "bdid": 18
        },
        {
            "name": "Apple Watch Series 5 (40mm, LTE)",
            "identifier": "Watch5,3",
            "boards": [
                {
                    "boardconfig": "N146sAP",
                    "platform": "",
                    "cpid": 32774,
                    "bdid": 20
                }
            ],
            "boardconfig": "N146sAP",
            "platform": "",
            "cpid": 32774,
            "bdid": 20
        },
        {
            "name": "Apple Watch Series 5 (44mm, LTE)",
            "identifier": "Watch5,4",
            "boards": [
                {
                    "boardconfig": "N146bAP",
                    "platform": "",
                    "cpid": 32774,
                    "bdid": 22
                }
            ],
            "boardconfig": "N146bAP",
            "platform": "",
            "cpid": 32774,
            "bdid": 22
        },
        {
            "name": "iPhone 11 Pro Max",
            "identifier": "iPhone12,5",
            "boards": [
                {
                    "boardconfig": "D431AP",
                    "platform": "t8030",
                    "cpid": 32816,
                    "bdid": 2
                }
            ],
            "boardconfig": "D431AP",
            "platform": "t8030",
            "cpid": 32816,
            "bdid": 2
        },
        {
            "name": "iPhone 11",
            "identifier": "iPhone12,1",
            "boards": [
                {
                    "boardconfig": "N104AP",
                    "platform": "t8030",
                    "cpid": 32816,
                    "bdid": 4
                }
            ],
            "boardconfig": "N104AP",
            "platform": "t8030",
            "cpid": 32816,
            "bdid": 4
        },
        {
            "name": "iPhone 11 Pro",
            "identifier": "iPhone12,3",
            "boards": [
                {
                    "boardconfig": "D421AP",
                    "platform": "t8030",
                    "cpid": 32816,
                    "bdid": 6
                }
            ],
            "boardconfig": "D421AP",
            "platform": "t8030",
            "cpid": 32816,
            "bdid": 6
        },
        {
            "name": "iPad 7 (Cellular)",
            "identifier": "iPad7,12",
            "boards": [
                {
                    "boardconfig": "J172AP",
                    "platform": "t8010",
                    "cpid": 32784,
                    "bdid": 30
                }
            ],
            "boardconfig": "J172AP",
            "platform": "t8010",
            "cpid": 32784,
            "bdid": 30
        },
        {
            "name": "iPad 7 (WiFi)",
            "identifier": "iPad7,11",
            "boards": [
                {
                    "boardconfig": "J171AP",
                    "platform": "t8010",
                    "cpid": 32784,
                    "bdid": 28
                }
            ],
            "boardconfig": "J171AP",
            "platform": "t8010",
            "cpid": 32784,
            "bdid": 28
        },
        {
            "name": "iBridge2,14",
            "identifier": "iBridge2,14",
            "boards": [
                {
                    "boardconfig": "J152fAP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 58
                }
            ],
            "boardconfig": "J152fAP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 58
        },
        {
            "name": "iBridge2,4",
            "identifier": "iBridge2,4",
            "boards": [
                {
                    "boardconfig": "J132AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 12
                }
            ],
            "boardconfig": "J132AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 12
        },
        {
            "name": "iBridge2,10",
            "identifier": "iBridge2,10",
            "boards": [
                {
                    "boardconfig": "J213AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 24
                }
            ],
            "boardconfig": "J213AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 24
        },
        {
            "name": "iBridge2,5",
            "identifier": "iBridge2,5",
            "boards": [
                {
                    "boardconfig": "J174AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 14
                }
            ],
            "boardconfig": "J174AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 14
        },
        {
            "name": "iBridge2,6",
            "identifier": "iBridge2,6",
            "boards": [
                {
                    "boardconfig": "J160AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 15
                }
            ],
            "boardconfig": "J160AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 15
        },
        {
            "name": "iBridge2,15",
            "identifier": "iBridge2,15",
            "boards": [
                {
                    "boardconfig": "J230kAP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 63
                }
            ],
            "boardconfig": "J230kAP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 63
        },
        {
            "name": "iBridge2,1",
            "identifier": "iBridge2,1",
            "boards": [
                {
                    "boardconfig": "J137AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 10
                }
            ],
            "boardconfig": "J137AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 10
        },
        {
            "name": "iBridge2,7",
            "identifier": "iBridge2,7",
            "boards": [
                {
                    "boardconfig": "J780AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 7
                }
            ],
            "boardconfig": "J780AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 7
        },
        {
            "name": "iBridge2,3",
            "identifier": "iBridge2,3",
            "boards": [
                {
                    "boardconfig": "J680AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 11
                }
            ],
            "boardconfig": "J680AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 11
        },
        {
            "name": "iBridge2,8",
            "identifier": "iBridge2,8",
            "boards": [
                {
                    "boardconfig": "J140kAP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 23
                }
            ],
            "boardconfig": "J140kAP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 23
        },
        {
            "name": "iBridge2,12",
            "identifier": "iBridge2,12",
            "boards": [
                {
                    "boardconfig": "J140aAP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 55
                }
            ],
            "boardconfig": "J140aAP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 55
        },
        {
            "name": "iPad Pro 4 (12.9-inch, Cellular)",
            "identifier": "iPad8,12",
            "boards": [
                {
                    "boardconfig": "J421AP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 58
                }
            ],
            "boardconfig": "J421AP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 58
        },
        {
            "name": "iPad Pro 4 (11-inch, WiFi)",
            "identifier": "iPad8,9",
            "boards": [
                {
                    "boardconfig": "J417AP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 60
                }
            ],
            "boardconfig": "J417AP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 60
        },
        {
            "name": "iPad Pro 4 (12.9-inch, WiFi)",
            "identifier": "iPad8,11",
            "boards": [
                {
                    "boardconfig": "J420AP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 56
                }
            ],
            "boardconfig": "J420AP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 56
        },
        {
            "name": "iPad Pro 4 (11-inch, Cellular)",
            "identifier": "iPad8,10",
            "boards": [
                {
                    "boardconfig": "J418AP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 62
                }
            ],
            "boardconfig": "J418AP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 62
        },
        {
            "name": "iPhone SE (2020)",
            "identifier": "iPhone12,8",
            "boards": [
                {
                    "boardconfig": "D79AP",
                    "platform": "t8030",
                    "cpid": 32816,
                    "bdid": 16
                }
            ],
            "boardconfig": "D79AP",
            "platform": "t8030",
            "cpid": 32816,
            "bdid": 16
        },
        {
            "name": "iBridge2,21",
            "identifier": "iBridge2,21",
            "boards": [
                {
                    "boardconfig": "J223AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 59
                }
            ],
            "boardconfig": "J223AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 59
        },
        {
            "name": "iBridge2,16",
            "identifier": "iBridge2,16",
            "boards": [
                {
                    "boardconfig": "J214kAP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 62
                }
            ],
            "boardconfig": "J214kAP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 62
        },
        {
            "name": "iBridge2,22",
            "identifier": "iBridge2,22",
            "boards": [
                {
                    "boardconfig": "J215AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 56
                }
            ],
            "boardconfig": "J215AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 56
        },
        {
            "name": "iBridge2,20",
            "identifier": "iBridge2,20",
            "boards": [
                {
                    "boardconfig": "J185fAP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 35
                }
            ],
            "boardconfig": "J185fAP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 35
        },
        {
            "name": "iBridge2,19",
            "identifier": "iBridge2,19",
            "boards": [
                {
                    "boardconfig": "J185AP",
                    "platform": "t8012",
                    "cpid": 32786,
                    "bdid": 34
                }
            ],
            "boardconfig": "J185AP",
            "platform": "t8012",
            "cpid": 32786,
            "bdid": 34
        },
        {
            "name": "iPad Air 4 (WiFi)",
            "identifier": "iPad13,1",
            "boards": [
                {
                    "boardconfig": "J307AP",
                    "platform": "t8101",
                    "cpid": 33025,
                    "bdid": 4
                }
            ],
            "boardconfig": "J307AP",
            "platform": "t8101",
            "cpid": 33025,
            "bdid": 4
        },
        {
            "name": "iPad 8 (WiFi)",
            "identifier": "iPad11,6",
            "boards": [
                {
                    "boardconfig": "J171aAP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 36
                }
            ],
            "boardconfig": "J171aAP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 36
        },
        {
            "name": "iPad 8 (Cellular)",
            "identifier": "iPad11,7",
            "boards": [
                {
                    "boardconfig": "J172aAP",
                    "platform": "t8020",
                    "cpid": 32800,
                    "bdid": 38
                }
            ],
            "boardconfig": "J172aAP",
            "platform": "t8020",
            "cpid": 32800,
            "bdid": 38
        },
        {
            "name": "iPhone 12",
            "identifier": "iPhone13,2",
            "boards": [
                {
                    "boardconfig": "D53gAP",
                    "platform": "t8101",
                    "cpid": 33025,
                    "bdid": 12
                }
            ],
            "boardconfig": "D53gAP",
            "platform": "t8101",
            "cpid": 33025,
            "bdid": 12
        },
        {
            "name": "iPad Air 4 (Cellular)",
            "identifier": "iPad13,2",
            "boards": [
                {
                    "boardconfig": "J308AP",
                    "platform": "t8101",
                    "cpid": 33025,
                    "bdid": 6
                }
            ],
            "boardconfig": "J308AP",
            "platform": "t8101",
            "cpid": 33025,
            "bdid": 6
        },
        {
            "name": "iPhone 12 mini",
            "identifier": "iPhone13,1",
            "boards": [
                {
                    "boardconfig": "D52gAP",
                    "platform": "t8101",
                    "cpid": 33025,
                    "bdid": 10
                }
            ],
            "boardconfig": "D52gAP",
            "platform": "t8101",
            "cpid": 33025,
            "bdid": 10
        },
        {
            "name": "iPhone 12 Pro Max",
            "identifier": "iPhone13,4",
            "boards": [
                {
                    "boardconfig": "D54pAP",
                    "platform": "t8101",
                    "cpid": 33025,
                    "bdid": 8
                }
            ],
            "boardconfig": "D54pAP",
            "platform": "t8101",
            "cpid": 33025,
            "bdid": 8
        },
        {
            "name": "iPhone 12 Pro",
            "identifier": "iPhone13,3",
            "boards": [
                {
                    "boardconfig": "D53pAP",
                    "platform": "t8101",
                    "cpid": 33025,
                    "bdid": 14
                }
            ],
            "boardconfig": "D53pAP",
            "platform": "t8101",
            "cpid": 33025,
            "bdid": 14
        },
        {
            "name": "HomePod mini",
            "identifier": "AudioAccessory5,1",
            "boards": [
                {
                    "boardconfig": "B520AP",
                    "platform": "t8006",
                    "cpid": 32774,
                    "bdid": 34
                }
            ],
            "boardconfig": "B520AP",
            "platform": "t8006",
            "cpid": 32774,
            "bdid": 34
        },
        {
            "name": "MacBook Pro (M1, Late 2020)",
            "identifier": "MacBookPro17,1",
            "boards": [
                {
                    "boardconfig": "J293AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 36
                }
            ],
            "boardconfig": "J293AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 36
        },
        {
            "name": "MacBook Air (M1, Late 2020)",
            "identifier": "MacBookAir10,1",
            "boards": [
                {
                    "boardconfig": "J313AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 38
                }
            ],
            "boardconfig": "J313AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 38
        },
        {
            "name": "Developer Transition Kit",
            "identifier": "ADP3,2",
            "boards": [
                {
                    "boardconfig": "J273aAP",
                    "platform": "t8027",
                    "cpid": 32807,
                    "bdid": 66
                }
            ],
            "boardconfig": "J273aAP",
            "platform": "t8027",
            "cpid": 32807,
            "bdid": 66
        },
        {
            "name": "Mac Mini (M1, Late 2020)",
            "identifier": "Macmini9,1",
            "boards": [
                {
                    "boardconfig": "J274AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 34
                }
            ],
            "boardconfig": "J274AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 34
        },
        {
            "name": "iPad Pro (11-inch) (3rd generation)",
            "identifier": "iPad13,4",
            "boards": [
                {
                    "boardconfig": "J517AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 8
                }
            ],
            "boardconfig": "J517AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 8
        },
        {
            "name": "iPad Pro (11-inch) (3rd generation)",
            "identifier": "iPad13,5",
            "boards": [
                {
                    "boardconfig": "J517xAP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 10
                }
            ],
            "boardconfig": "J517xAP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 10
        },
        {
            "name": "iPad Pro (12.9-inch) (5th generation)",
            "identifier": "iPad13,9",
            "boards": [
                {
                    "boardconfig": "J522xAP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 26
                }
            ],
            "boardconfig": "J522xAP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 26
        },
        {
            "name": "iPad Pro (12.9-inch) (5th generation)",
            "identifier": "iPad13,11",
            "boards": [
                {
                    "boardconfig": "J523xAP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 30
                }
            ],
            "boardconfig": "J523xAP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 30
        },
        {
            "name": "iPad Pro (12.9-inch) (5th generation)",
            "identifier": "iPad13,8",
            "boards": [
                {
                    "boardconfig": "J522AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 24
                }
            ],
            "boardconfig": "J522AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 24
        },
        {
            "name": "iPad Pro (12.9-inch) (5th generation)",
            "identifier": "iPad13,10",
            "boards": [
                {
                    "boardconfig": "J523AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 28
                }
            ],
            "boardconfig": "J523AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 28
        },
        {
            "name": "iPad Pro (11-inch) (3rd generation)",
            "identifier": "iPad13,7",
            "boards": [
                {
                    "boardconfig": "J518xAP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 14
                }
            ],
            "boardconfig": "J518xAP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 14
        },
        {
            "name": "iPad Pro (11-inch) (3rd generation)",
            "identifier": "iPad13,6",
            "boards": [
                {
                    "boardconfig": "J518AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 12
                }
            ],
            "boardconfig": "J518AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 12
        },
        {
            "name": "iMac 24-inch (M1, Two Ports, 2021)",
            "identifier": "iMac21,1",
            "boards": [
                {
                    "boardconfig": "J456AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 40
                }
            ],
            "boardconfig": "J456AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 40
        },
        {
            "name": "iMac 24-inch (M1, Four Ports, 2021)",
            "identifier": "iMac21,2",
            "boards": [
                {
                    "boardconfig": "J457AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 42
                }
            ],
            "boardconfig": "J457AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 42
        },
        {
            "name": "iPad 9 (WiFi)",
            "identifier": "iPad12,1",
            "boards": [
                {
                    "boardconfig": "J181AP",
                    "platform": "",
                    "cpid": 32816,
                    "bdid": 24
                },
                {
                    "boardconfig": "J181DEV",
                    "platform": "",
                    "cpid": 32816,
                    "bdid": 25
                }
            ],
            "boardconfig": "J181AP",
            "platform": "",
            "cpid": 32816,
            "bdid": 24
        },
        {
            "name": "iPad 9 (Cellular)",
            "identifier": "iPad12,2",
            "boards": [
                {
                    "boardconfig": "J182AP",
                    "platform": "",
                    "cpid": 32816,
                    "bdid": 26
                },
                {
                    "boardconfig": "J182DEV",
                    "platform": "",
                    "cpid": 32816,
                    "bdid": 27
                }
            ],
            "boardconfig": "J182AP",
            "platform": "",
            "cpid": 32816,
            "bdid": 26
        },
        {
            "name": "iPad Mini 6 (WiFi)",
            "identifier": "iPad14,1",
            "boards": [
                {
                    "boardconfig": "J310AP",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 4
                },
                {
                    "boardconfig": "J310DEV",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 5
                }
            ],
            "boardconfig": "J310AP",
            "platform": "",
            "cpid": 33040,
            "bdid": 4
        },
        {
            "name": "iPad Mini 6 (Cellular)",
            "identifier": "iPad14,2",
            "boards": [
                {
                    "boardconfig": "J311AP",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 6
                },
                {
                    "boardconfig": "J311DEV",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 7
                }
            ],
            "boardconfig": "J311AP",
            "platform": "",
            "cpid": 33040,
            "bdid": 6
        },
        {
            "name": "iPhone 13 Pro",
            "identifier": "iPhone14,2",
            "boards": [
                {
                    "boardconfig": "D63AP",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 12
                },
                {
                    "boardconfig": "D63DEV",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 13
                }
            ],
            "boardconfig": "D63AP",
            "platform": "",
            "cpid": 33040,
            "bdid": 12
        },
        {
            "name": "iPhone 13 Pro Max",
            "identifier": "iPhone14,3",
            "boards": [
                {
                    "boardconfig": "D64AP",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 14
                },
                {
                    "boardconfig": "D64DEV",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 15
                }
            ],
            "boardconfig": "D64AP",
            "platform": "",
            "cpid": 33040,
            "bdid": 14
        },
        {
            "name": "iPhone 13 mini",
            "identifier": "iPhone14,4",
            "boards": [
                {
                    "boardconfig": "D16AP",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 8
                },
                {
                    "boardconfig": "D16DEV",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 9
                }
            ],
            "boardconfig": "D16AP",
            "platform": "",
            "cpid": 33040,
            "bdid": 8
        },
        {
            "name": "iPhone 13",
            "identifier": "iPhone14,5",
            "boards": [
                {
                    "boardconfig": "D17AP",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 10
                },
                {
                    "boardconfig": "D17DEV",
                    "platform": "",
                    "cpid": 33040,
                    "bdid": 11
                }
            ],
            "boardconfig": "D17AP",
            "platform": "",
            "cpid": 33040,
            "bdid": 10
        },
        {
            "name": "MacBook Pro (M1 Max, 16-inch, 2021)",
            "identifier": "MacBookPro18,2",
            "boards": [
                {
                    "boardconfig": "J316cAP",
                    "platform": "t6001",
                    "cpid": 24577,
                    "bdid": 10
                }
            ],
            "boardconfig": "J316cAP",
            "platform": "t6001",
            "cpid": 24577,
            "bdid": 10
        },
        {
            "name": "MacBook Pro (M1 Pro, 14-inch, 2021)",
            "identifier": "MacBookPro18,3",
            "boards": [
                {
                    "boardconfig": "J314sAP",
                    "platform": "t6000",
                    "cpid": 24576,
                    "bdid": 8
                }
            ],
            "boardconfig": "J314sAP",
            "platform": "t6000",
            "cpid": 24576,
            "bdid": 8
        },
        {
            "name": "MacBook Pro (M1 Pro, 16-inch, 2021)",
            "identifier": "MacBookPro18,1",
            "boards": [
                {
                    "boardconfig": "J316sAP",
                    "platform": "t6000",
                    "cpid": 24576,
                    "bdid": 10
                }
            ],
            "boardconfig": "J316sAP",
            "platform": "t6000",
            "cpid": 24576,
            "bdid": 10
        },
        {
            "name": "MacBook Pro (M1 Max, 14-inch, 2021)",
            "identifier": "MacBookPro18,4",
            "boards": [
                {
                    "boardconfig": "J314cAP",
                    "platform": "t6001",
                    "cpid": 24577,
                    "bdid": 8
                }
            ],
            "boardconfig": "J314cAP",
            "platform": "t6001",
            "cpid": 24577,
            "bdid": 8
        },
        {
            "name": "iPad Air 5 (Cellular)",
            "identifier": "iPad13,17",
            "boards": [
                {
                    "boardconfig": "J408AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 18
                }
            ],
            "boardconfig": "J408AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 18
        },
        {
            "name": "iPhone SE (3rd generation)",
            "identifier": "iPhone14,6",
            "boards": [
                {
                    "boardconfig": "D49AP",
                    "platform": "t8110",
                    "cpid": 33040,
                    "bdid": 16
                }
            ],
            "boardconfig": "D49AP",
            "platform": "t8110",
            "cpid": 33040,
            "bdid": 16
        },
        {
            "name": "iPad Air 5 (WiFi)",
            "identifier": "iPad13,16",
            "boards": [
                {
                    "boardconfig": "J407AP",
                    "platform": "t8103",
                    "cpid": 33027,
                    "bdid": 16
                }
            ],
            "boardconfig": "J407AP",
            "platform": "t8103",
            "cpid": 33027,
            "bdid": 16
        },
        {
            "name": "Mac Studio (M1 Max)",
            "identifier": "Mac13,1",
            "boards": [
                {
                    "boardconfig": "J375cAP",
                    "platform": "t6001",
                    "cpid": 24577,
                    "bdid": 4
                }
            ],
            "boardconfig": "J375cAP",
            "platform": "t6001",
            "cpid": 24577,
            "bdid": 4
        },
        {
            "name": "Mac Studio (M1 Ultra)",
            "identifier": "Mac13,2",
            "boards": [
                {
                    "boardconfig": "J375dAP",
                    "platform": "t6002",
                    "cpid": 24578,
                    "bdid": 12
                }
            ],
            "boardconfig": "J375dAP",
            "platform": "t6002",
            "cpid": 24578,
            "bdid": 12
        }
    ];
    const filterData = jsonData.filter(function (item) {
        if (item.identifier.includes(query)) {
            return item;
        }
    });
    const result = filterData.map(function (item) {
        return {
            title: item.name,
            subtitle: item.identifier,
            arg: item.name
        }
    });
    alfy.output(result);
})();
