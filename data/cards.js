const gameCards = [
  {
    "id": "FiftyGoldCoin",
    "name": "50 Gold Coin",
    "cost": 0,
    "rarity": "Rare",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/fifty_gold_coin_temp.png",
    "effect": "Gain 50[[gold]]\nPermanently remove this Card from your Deck",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Gain 50[[gold]] ",
        "twice",
        "\nPermanently remove this Card from your Deck"
      ]
    }
  },
  {
    "id": "Appetite",
    "name": "Appetite",
    "cost": 15,
    "rarity": "Rare",
    "owner": "Potti",
    "type": "Option",
    "art": "assets/cards/appetite_temp.png",
    "effect": "Remove random Cells until failure\nChance: 100%, -4 points per removal",
    "exhaust": "None",
    "upgrade": {
      "cost": 15,
      "segments": [
        "Remove random Cells until failure\nChance: 100%, -",
        "3",
        " points per removal"
      ]
    }
  },
  {
    "id": "Appraisal",
    "name": "Appraisal",
    "cost": 10,
    "rarity": "Rare",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/appraisal_temp.png",
    "effect": "If you have gained 100[[gold]] this battle, draw 2 Cards",
    "exhaust": "None",
    "upgrade": {
      "cost": 10,
      "segments": [
        "If you have gained 100[[gold]] this battle, draw ",
        "3",
        " Cards"
      ]
    }
  },
  {
    "id": "Orange",
    "name": "Axis Shift",
    "cost": 35,
    "rarity": "Rare",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/axis_shift.png",
    "effect": "Paint: entire Row of selected Cell\nOwn Cell selected: entire Column",
    "exhaust": "None",
    "upgrade": {
      "cost": 30,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "BarrierCrash",
    "name": "Barrier Crash",
    "cost": 10,
    "rarity": "Advanced",
    "owner": "Ryan",
    "type": "Option",
    "art": "assets/cards/barrier_crash_temp.png",
    "effect": "Spend all [[armor]] on your Cells in [[cross]](1)\nPaint the 8 Cells around each Cell that spent [[armor]]",
    "exhaust": "None",
    "upgrade": {
      "cost": 5,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "BarrierStrike",
    "name": "Barrier Strike",
    "cost": 15,
    "rarity": "Legendary",
    "owner": "Ryan",
    "type": "Paint",
    "art": "assets/cards/barrier_strike_temp.png",
    "effect": "Spend all [[armor]] on an Own Cell\nPaint: [[square]]([[armor]] spent)",
    "exhaust": "Always",
    "upgrade": {
      "cost": 5,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Bite",
    "name": "Bite",
    "cost": 25,
    "rarity": "Common",
    "owner": "Potti",
    "type": "Option",
    "art": "assets/cards/bite.png",
    "effect": "Remove a [[square]](3) Area from battle",
    "exhaust": "BaseOnly",
    "upgrade": {
      "cost": 25,
      "segments": [
        "Remove a [[square]](3) Area from battle"
      ]
    }
  },
  {
    "id": "SkyBlue",
    "name": "Brush Relay",
    "cost": 35,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/brush_relay.png",
    "effect": "Paint: [[cross]](1)\nDraw 1 Card",
    "exhaust": "None",
    "upgrade": {
      "cost": 35,
      "segments": [
        "Paint: [[cross]](1)\nDraw ",
        "2",
        " Cards"
      ]
    }
  },
  {
    "id": "DarkIvory",
    "name": "Bulwark Splash",
    "cost": 30,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/bulwark_splash.png",
    "effect": "Paint: [[square]](3) + [[armor]] +1",
    "exhaust": "None",
    "upgrade": {
      "cost": 25,
      "segments": [
        "Paint: [[square]](3) + [[armor]] ",
        "+2",
        ""
      ]
    }
  },
  {
    "id": "CallOfZero",
    "name": "Call of Zero",
    "cost": 15,
    "rarity": "Legendary",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/call_of_zero.png",
    "effect": "Draw 3 Cards that cost 0 from your Draw Pile",
    "exhaust": "Always",
    "upgrade": {
      "cost": 10,
      "segments": [
        "Draw ",
        "4",
        " Cards that cost 0 from your Draw Pile"
      ]
    }
  },
  {
    "id": "Yellow",
    "name": "Cardinal Burst",
    "cost": 30,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/cardinal_burst.png",
    "effect": "Paint: [[cross]](3)",
    "exhaust": "None",
    "upgrade": {
      "cost": 30,
      "segments": [
        "Paint: [[cross]]",
        "(4)",
        ""
      ]
    }
  },
  {
    "id": "CatsEye",
    "name": "Cat's Eye",
    "cost": 10,
    "rarity": "Common",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/cats_eye.png",
    "effect": "Reduce next Card Cost by 10% of current [[gold]]",
    "exhaust": "None",
    "upgrade": {
      "cost": 5,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "CatsPaw",
    "name": "Cat's Paw",
    "cost": 0,
    "rarity": "Legendary",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/cats_paw.png",
    "effect": "Gain 50[[gold]]\nNext Cat's Paw Cost +10 this battle",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Gain ",
        "70",
        "[[gold]]\nNext Cat's Paw Cost +10 this battle"
      ]
    }
  },
  {
    "id": "Coffee",
    "name": "Coffee",
    "cost": 0,
    "rarity": "Legendary",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/coffee.png",
    "effect": "Gain 15[[gold]]\nDraw 2 Cards",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Gain ",
        "20",
        "[[gold]]\nDraw 2 Cards"
      ]
    }
  },
  {
    "id": "ComboSupply",
    "name": "Combo Supply",
    "cost": 15,
    "rarity": "Common",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/combo_supply_temp.png",
    "effect": "If you have played at least 3 Cards this turn, draw 2 Cards",
    "exhaust": "Always",
    "upgrade": {
      "cost": 15,
      "segments": [
        "If you have played at least 3 Cards this turn, draw ",
        "3",
        " Cards"
      ]
    }
  },
  {
    "id": "Confusion",
    "name": "Confusion",
    "cost": 20,
    "rarity": "Rare",
    "owner": "Greenzy",
    "type": "Paint",
    "art": "assets/cards/confusion_temp.png",
    "effect": "Paint: [[cross]](1)\nGive those Cells [[confusion]]",
    "exhaust": "None",
    "upgrade": {
      "cost": 15,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Consume",
    "name": "Consume",
    "cost": 0,
    "rarity": "Legendary",
    "owner": "Potti",
    "type": "Option",
    "art": "assets/cards/consume.png",
    "effect": "Neutralize all Cells in [[cross]](1)",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Neutralize all Cells in [[square]]",
        "(3)",
        ""
      ]
    }
  },
  {
    "id": "Coupon",
    "name": "Coupon",
    "cost": 0,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/coupon.png",
    "effect": "Next Card Cost -10\nDoes not affect Cards with base Cost 0",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Next Card Cost ",
        "-15",
        "\nDoes not affect Cards with base Cost 0"
      ]
    }
  },
  {
    "id": "Dot",
    "name": "Dab",
    "cost": 0,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/dot.png",
    "effect": "Paint: 1 Cell",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Paint: 1 Cell + [[random]]",
        "(1)",
        ""
      ]
    }
  },
  {
    "id": "DeadFlaura",
    "name": "Dead Flaura",
    "cost": 5,
    "rarity": "Special",
    "owner": "Shared",
    "type": "Evil",
    "art": "assets/cards/dead_flaura.png",
    "effect": "On use: [[exhaust]] all copies in Hand/Draw/Discard\nCost +5[[gold]] this run\nTurn end: each Hand copy \u2192 2 in Discard",
    "exhaust": "Always"
  },
  {
    "id": "TripleDraw",
    "name": "Deep Draw",
    "cost": 50,
    "rarity": "Rare",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/deep_draw.png",
    "effect": "Draw 3 Cards",
    "exhaust": "None",
    "upgrade": {
      "cost": 40,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "DefenseTransfer",
    "name": "Defense Transfer",
    "cost": 0,
    "rarity": "Common",
    "owner": "Ryan",
    "type": "Option",
    "art": "assets/cards/defense_transfer_temp.png",
    "effect": "Move all [[armor]] from one of your Cells to another of your Cells",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Move all [[armor]] from one of your Cells to another of your Cells\nGive the target [[armor]] ",
        "+2",
        ""
      ]
    }
  },
  {
    "id": "DefensiveStance",
    "name": "Defensive Stance",
    "cost": 20,
    "rarity": "Rare",
    "owner": "Ryan",
    "type": "Option",
    "art": "assets/cards/defensive_stance_temp.png",
    "effect": "Until your next Turn starts:\nWhenever an Enemy captures one of your Cells, give [[armor]] +1 to 1 random Own Cells",
    "exhaust": "None",
    "upgrade": {
      "cost": 20,
      "segments": [
        "Until your next Turn starts:\nWhenever an Enemy captures one of your Cells, give [[armor]] +1 to ",
        "2",
        " random Own Cells"
      ]
    }
  },
  {
    "id": "Brown",
    "name": "Delayed Splash",
    "cost": 25,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/delayed_splash.png",
    "effect": "Paint: 1 Cell\nPaint [[diamond]](2) there in 2 Turns",
    "exhaust": "None",
    "upgrade": {
      "cost": 25,
      "segments": [
        "Paint: 1 Cell\nPaint [[diamond]](2) there in ",
        "1",
        " Turn"
      ]
    }
  },
  {
    "id": "DiamondCoat",
    "name": "Diamond Coat",
    "cost": 55,
    "rarity": "Legendary",
    "owner": "Ryan",
    "type": "Paint",
    "art": "assets/cards/diamond_coat.png",
    "effect": "Paint: [[square]](3) + Spread + [[armor]] +5",
    "exhaust": "None",
    "upgrade": {
      "cost": 45,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Digestion",
    "name": "Digestion",
    "cost": 0,
    "rarity": "Rare",
    "owner": "Potti",
    "type": "Option",
    "art": "assets/cards/digestion_temp.png",
    "effect": "Gain 5[[gold]] per Relic you own",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Gain ",
        "8",
        "[[gold]] per Relic you own"
      ]
    }
  },
  {
    "id": "DispersedPaint",
    "name": "Dispersed Paint",
    "cost": 5,
    "rarity": "Common",
    "owner": "Greenzy",
    "type": "Paint",
    "art": "assets/cards/dispersed_paint_temp.png",
    "effect": "Paint up to 4 random Cells that are not orthogonally adjacent to each other",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Black",
    "name": "Double Cross",
    "cost": 30,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/double_cross.png",
    "effect": "Paint: [[cross]](1)\nChoose Twice",
    "exhaust": "None",
    "upgrade": {
      "cost": 25,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "FanDance",
    "name": "Fan Dance",
    "cost": 65,
    "rarity": "Advanced",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/fan_dance_temp.png",
    "effect": "Give all your Cells [[confusion]] until your next Turn starts",
    "exhaust": "Always",
    "upgrade": {
      "cost": 55,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Fill",
    "name": "Fill",
    "cost": 10,
    "rarity": "Rare",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/fill_temp.png",
    "effect": "Paint the selected area if it is fully enclosed only by your Cells",
    "exhaust": "None",
    "upgrade": {
      "cost": 10,
      "segments": [
        "Paint the selected area if it is fully enclosed only by your Cells\nIf this paints 3 or fewer Cells, gain ",
        "60",
        "[[gold]]"
      ]
    }
  },
  {
    "id": "FixIt",
    "name": "Fix It",
    "cost": 30,
    "rarity": "Rare",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/fix_it.png",
    "effect": "Give Fixed to an Own Cell",
    "exhaust": "Always",
    "upgrade": {
      "cost": 20,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Fortify",
    "name": "Fortify",
    "cost": 5,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/fortify.png",
    "effect": "Own Cells in [[cross]](1): [[armor]] +1",
    "exhaust": "None",
    "upgrade": {
      "cost": 5,
      "segments": [
        "Own Cells in [[cross]](1): [[armor]] ",
        "+3",
        ""
      ]
    }
  },
  {
    "id": "FrameSplash",
    "name": "Frame It!",
    "cost": 35,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/frame_splash.png",
    "effect": "Paint: border of [[square]](5)",
    "exhaust": "None",
    "upgrade": {
      "cost": 30,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "GoldBar",
    "name": "Gold Bar",
    "cost": 0,
    "rarity": "Special",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/gold_bar_temp.png",
    "effect": "Gain 100[[gold]]\nPermanently remove this Card from your Deck",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Gain ",
        "250",
        "[[gold]]\nPermanently remove this Card from your Deck"
      ]
    }
  },
  {
    "id": "Red",
    "name": "Grand Splash",
    "cost": 65,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/grand_splash.png",
    "effect": "Paint: [[square]](5)",
    "exhaust": "None",
    "upgrade": {
      "cost": 55,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Guardian",
    "name": "Guardian",
    "cost": 65,
    "rarity": "Rare",
    "owner": "Ryan",
    "type": "Option",
    "art": "assets/cards/guardian_temp.png",
    "effect": "Give all your Cells [[armor]] +1",
    "exhaust": "None",
    "upgrade": {
      "cost": 55,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Guilt",
    "name": "Guilt",
    "cost": 0,
    "rarity": "Special",
    "owner": "Shared",
    "type": "Evil",
    "art": "assets/cards/guilt.png",
    "effect": "While in Hand:\nNo [[gold]] from the first claim each Turn\nUnplayable",
    "exhaust": "None"
  },
  {
    "id": "DarkSeaGreen",
    "name": "Hollow Diamond",
    "cost": 20,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/hollow_diamond.png",
    "effect": "Paint: border of [[diamond]](2).\nFill inside if it has no Enemy Cells",
    "exhaust": "None",
    "upgrade": {
      "cost": 15,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Hydration",
    "name": "Hydration",
    "cost": 0,
    "rarity": "Common",
    "owner": "Ivan",
    "type": "Option",
    "art": "assets/cards/hydration_temp.png",
    "effect": "Reduce the Cost of an upgraded Card in your Hand by 5[[gold]] this battle",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Reduce the Cost of an upgraded Card in your Hand by ",
        "10",
        "[[gold]] this battle"
      ]
    }
  },
  {
    "id": "PersonalTraining",
    "name": "I'll Train You!",
    "cost": 40,
    "rarity": "Rare",
    "owner": "Ivan",
    "type": "Option",
    "art": "assets/cards/personal_training.png",
    "effect": "Permanently upgrade 1 random Card in your Deck\nIf none can be upgraded, gain 65[[gold]]",
    "exhaust": "Always",
    "upgrade": {
      "cost": 35,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Improvisation",
    "name": "Improvisation",
    "cost": 35,
    "rarity": "Rare",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/improvisation_temp.png",
    "effect": "This battle: Each turn, the first time you play each Card created during this battle, draw 1 Card",
    "exhaust": "Always",
    "upgrade": {
      "cost": 30,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Ingestion",
    "name": "Ingestion",
    "cost": 0,
    "rarity": "Advanced",
    "owner": "Potti",
    "type": "Option",
    "art": "assets/cards/ingestion.png",
    "effect": "Own Cells in [[cross]](1) \u2192 Neutral\nGain 5[[gold]] per neutralized Cell",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Own Cells in [[cross]](1) \u2192 Neutral\nGain ",
        "8",
        "[[gold]] per neutralized Cell"
      ]
    }
  },
  {
    "id": "Kettlebell",
    "name": "Kettlebell",
    "cost": 10,
    "rarity": "Common",
    "owner": "Ivan",
    "type": "Option",
    "art": "assets/cards/kettlebell.png",
    "effect": "Upgrade 1 other Card in your Hand for this battle",
    "exhaust": "None",
    "upgrade": {
      "cost": 10,
      "segments": [
        "Upgrade ",
        "all",
        " other Cards in your Hand for this battle"
      ]
    }
  },
  {
    "id": "LetMeCook",
    "name": "Let Me Cook",
    "cost": 50,
    "rarity": "Legendary",
    "owner": "Potti",
    "type": "Option",
    "art": null,
    "effect": "Create 1 random consumable",
    "exhaust": "Always",
    "upgrade": {
      "cost": 40,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Lilac",
    "name": "Lilac Crossfire",
    "cost": 55,
    "rarity": "Legendary",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/lilac_crossfire.png",
    "effect": "Paint: entire Row + entire Column",
    "exhaust": "None",
    "upgrade": {
      "cost": 45,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "LooseChange",
    "name": "Loose Change",
    "cost": 0,
    "rarity": "Common",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/loose_change.png",
    "effect": "Gain 4[[gold]] per 0-Cost Card played this Turn",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Gain ",
        "6",
        "[[gold]] per 0-Cost Card played this Turn"
      ]
    }
  },
  {
    "id": "Green",
    "name": "Lucky Splash",
    "cost": 25,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/lucky_splash.png",
    "effect": "Paint: [[cross]](1) + [[random]](5)",
    "exhaust": "None",
    "upgrade": {
      "cost": 25,
      "segments": [
        "Paint: [[cross]](1) + [[random]]",
        "(6)",
        ""
      ]
    }
  },
  {
    "id": "MassPurification",
    "name": "Mass Purification",
    "cost": 55,
    "rarity": "Legendary",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/mass_purification.png",
    "effect": "Remove all beneficial effects except Fixed from every Cell",
    "exhaust": "None",
    "upgrade": {
      "cost": 45,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Mirror",
    "name": "Mirror",
    "cost": 0,
    "rarity": "Rare",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/mirror.png",
    "effect": "Replay the last Card at Cost +10",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Replay the last Card at Cost ",
        "+5",
        ""
      ]
    }
  },
  {
    "id": "Magenta",
    "name": "Mirror Cross",
    "cost": 20,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/mirror_cross.png",
    "effect": "Paint: [[cross]](1) + mirrored [[cross]](1)",
    "exhaust": "None",
    "upgrade": {
      "cost": 10,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "MudSplash",
    "name": "Mud Splash",
    "cost": 65,
    "rarity": "Rare",
    "owner": "Potti",
    "type": "Paint",
    "art": "assets/cards/mud_splash_temp.png",
    "effect": "Remove [[square]](3)\nThen choose an area to paint [[square]](3)",
    "exhaust": "None",
    "upgrade": {
      "cost": 55,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "MultiplyingSpray",
    "name": "Multiplying Spray",
    "cost": 35,
    "rarity": "Legendary",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/multiplying_spray_temp.png",
    "effect": "Paint 3 random Cells\nThis run: Your next Multiplying Spray paints 1 more Cell",
    "exhaust": "Always",
    "upgrade": {
      "cost": 35,
      "segments": [
        "Paint 3 random Cells\nThis run: Your next Multiplying Spray paints ",
        "2",
        " more Cells"
      ]
    }
  },
  {
    "id": "Pink",
    "name": "Neutral Bloom",
    "cost": 25,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/neutral_bloom.png",
    "effect": "Paint: [[cross]](1)\nPaint adjacent Neutral Cells",
    "exhaust": "None",
    "upgrade": {
      "cost": 15,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "NewExploration",
    "name": "New Exploration",
    "cost": 20,
    "rarity": "Legendary",
    "owner": "Ivan",
    "type": "Option",
    "art": "assets/cards/new_exploration_temp.png",
    "effect": "Choose 1 of 3 random Cards from all pools\nAdd it to your Hand with a 10[[gold]] discount this battle",
    "exhaust": "None",
    "upgrade": {
      "cost": 20,
      "segments": [
        "Choose 1 of ",
        "5",
        " random Cards from all pools\nAdd it to your Hand with a 10[[gold]] discount this battle"
      ]
    }
  },
  {
    "id": "OverHere",
    "name": "Over Here!",
    "cost": 45,
    "rarity": "Advanced",
    "owner": "Ivan",
    "type": "Option",
    "art": "assets/cards/over_here_temp.png",
    "effect": "Add 3 Signal Flags to your Hand\nThe created Cards have [[exhaust]]",
    "exhaust": "None",
    "upgrade": {
      "cost": 45,
      "segments": [
        "Add 3 ",
        "upgraded",
        " Signal Flags to your Hand\nThe created Cards have [[exhaust]]"
      ]
    }
  },
  {
    "id": "Purple",
    "name": "Paint Scatter",
    "cost": 25,
    "rarity": "Common",
    "owner": "Greenzy",
    "type": "Paint",
    "art": "assets/cards/paint_scatter.png",
    "effect": "Paint: 1 Cell + [[random]](8)",
    "exhaust": "None",
    "upgrade": {
      "cost": 25,
      "segments": [
        "Paint: 1 Cell + [[random]]",
        "(10)",
        ""
      ]
    }
  },
  {
    "id": "Perfection",
    "name": "Perfection",
    "cost": 15,
    "rarity": "Rare",
    "owner": "Ivan",
    "type": "Option",
    "art": "assets/cards/perfection_temp.png",
    "effect": "Paint 1 random Cell per upgraded Card played this turn",
    "exhaust": "Always",
    "upgrade": {
      "cost": 15,
      "segments": [
        "Paint ",
        "2",
        " random Cells per upgraded Card played this turn"
      ]
    }
  },
  {
    "id": "PiercingPaint",
    "name": "Piercing Paint",
    "cost": 25,
    "rarity": "Advanced",
    "owner": "Ryan",
    "type": "Paint",
    "art": "assets/cards/piercing_paint_temp.png",
    "effect": "Remove all Enemy [[armor]] in [[square]](3)\nPaint that Area",
    "exhaust": "None",
    "upgrade": {
      "cost": 20,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Poise",
    "name": "Poise",
    "cost": 0,
    "rarity": "Rare",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/poise_temp.png",
    "effect": "Cost: 5% of your [[gold]]\nNext turn start: gain 125% of [[gold]] paid",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Cost: 5% of your [[gold]]\nNext turn start: gain ",
        "150",
        "% of [[gold]] paid"
      ]
    }
  },
  {
    "id": "PortableShop",
    "name": "Portable Shop",
    "cost": 50,
    "rarity": "Legendary",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/portable_shop_temp.png",
    "effect": "Offer 1 random shop Card, Relic and Consumable each\nBuy 1 for 100% of its shop price\nThis battle: Portable Shop costs +35[[gold]] after each use",
    "exhaust": "Always",
    "upgrade": {
      "cost": 40,
      "segments": [
        "Offer 1 random shop Card, Relic and Consumable each\nBuy 1 for ",
        "75",
        "% of its shop price\nThis battle: Portable Shop costs +35[[gold]] after each use"
      ]
    }
  },
  {
    "id": "Preserve",
    "name": "Preserve",
    "cost": 20,
    "rarity": "Advanced",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/preserve_temp.png",
    "effect": "Reserve another Card in your Hand\nReturn it next Turn with a Cost of 0 this battle",
    "exhaust": "Always",
    "upgrade": {
      "cost": 10,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Purification",
    "name": "Purification",
    "cost": 10,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/purification.png",
    "effect": "Remove all beneficial effects except Fixed from Enemy Cells in [[square]](3)",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "PurifyingPaint",
    "name": "Purifying Paint",
    "cost": 15,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/purifying_paint.png",
    "effect": "Before every Cell painted by your next Paint Card, remove all its beneficial effects except Fixed",
    "exhaust": "None",
    "upgrade": {
      "cost": 10,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "DoubleDraw",
    "name": "Quick Refill",
    "cost": 30,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/quick_refill.png",
    "effect": "Draw 2 Cards",
    "exhaust": "None",
    "upgrade": {
      "cost": 20,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Raindrops",
    "name": "Raindrops",
    "cost": 10,
    "rarity": "Advanced",
    "owner": "Greenzy",
    "type": "Paint",
    "art": "assets/cards/raindrops_temp.png",
    "effect": "Paint: 1 Cell\n70% chance to paint [[random]](1)\nRepeat until failure",
    "exhaust": "None",
    "upgrade": {
      "cost": 10,
      "segments": [
        "Paint: 1 Cell\n",
        "80",
        "% chance to paint [[random]](1)\nRepeat until failure"
      ]
    }
  },
  {
    "id": "Barrier",
    "name": "Reinforce",
    "cost": 10,
    "rarity": "Common",
    "owner": "Ryan",
    "type": "Option",
    "art": "assets/cards/reinforce.png",
    "effect": "Cells with [[armor]]: [[armor]] +1",
    "exhaust": "None",
    "upgrade": {
      "cost": 5,
      "segments": [
        "Cells with [[armor]]: [[armor]] ",
        "+2",
        ""
      ]
    }
  },
  {
    "id": "Reuse",
    "name": "Replay",
    "cost": 40,
    "rarity": "Common",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/reuse_temp.png",
    "effect": "Repeat your next Card 1 extra time\nExcludes permanent Card additions/removals",
    "exhaust": "Always",
    "upgrade": {
      "cost": 40,
      "segments": [
        "Repeat your next Card ",
        "2",
        " extra times\nExcludes permanent Card additions/removals"
      ]
    }
  },
  {
    "id": "Retreat",
    "name": "Retreat",
    "cost": 0,
    "rarity": "Special",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/retreat_temp.png",
    "effect": "Draw 1 Card",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Draw ",
        "2",
        " Cards"
      ]
    }
  },
  {
    "id": "RiggedLuck",
    "name": "Rigged Luck",
    "cost": 30,
    "rarity": "Rare",
    "owner": "Greenzy",
    "type": "Option",
    "art": "assets/cards/rigged_luck_temp.png",
    "effect": "This turn: Random paint prioritizes Enemy Cells without Spread",
    "exhaust": "None",
    "upgrade": {
      "cost": 25,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Ripen",
    "name": "Ripen",
    "cost": 20,
    "rarity": "Rare",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/ripen_temp.png",
    "effect": "This battle: Transform your other hand cards into random cards one rarity higher.\nThey cost 5[[gold]] less.",
    "exhaust": "Always",
    "upgrade": {
      "cost": 20,
      "segments": [
        "This battle: Transform your other hand cards into random ",
        "upgraded",
        " cards one rarity higher.\nThey cost 5[[gold]] less."
      ]
    }
  },
  {
    "id": "Roar",
    "name": "Roar",
    "cost": 0,
    "rarity": "Rare",
    "owner": "Ryan",
    "type": "Option",
    "art": "assets/cards/roar_temp.png",
    "effect": "Spend all [[armor]] on your Cells in [[cross]](1)\nGain 5[[gold]] per [[armor]] spent",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Spend all [[armor]] on your Cells in [[cross]](1)\nGain ",
        "7",
        "[[gold]] per [[armor]] spent"
      ]
    }
  },
  {
    "id": "RotatingSquare",
    "name": "Rotating Square",
    "cost": 5,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/rotating_square_temp.png",
    "effect": "Paint: [[square]](2)\nThe center rotates in 90\u00b0 steps while hovering",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Savor",
    "name": "Savor",
    "cost": 0,
    "rarity": "Advanced",
    "owner": "Potti",
    "type": "Option",
    "art": "assets/cards/savor_temp.png",
    "effect": "Gain 1[[gold]] per Cell removed this battle",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Gain ",
        "2",
        "[[gold]] per Cell removed this battle"
      ]
    }
  },
  {
    "id": "ScatterForever",
    "name": "Scatter Forever",
    "cost": 75,
    "rarity": "Legendary",
    "owner": "Greenzy",
    "type": "Paint",
    "art": "assets/cards/scatter_forever.png",
    "effect": "Paint: 1 Cell + [[random]](20)",
    "exhaust": "None",
    "upgrade": {
      "cost": 75,
      "segments": [
        "Paint: 1 Cell + [[random]]",
        "(24)",
        ""
      ]
    }
  },
  {
    "id": "Scurry",
    "name": "Scurry",
    "cost": 40,
    "rarity": "Advanced",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/scurry_temp.png",
    "effect": "Add 2 Retreats to your Hand",
    "exhaust": "None",
    "upgrade": {
      "cost": 40,
      "segments": [
        "Add ",
        "3",
        " Retreats to your Hand"
      ]
    }
  },
  {
    "id": "Lime",
    "name": "Second Coat",
    "cost": 35,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/second_coat.png",
    "effect": "Paint: [[cross]](2)\nRepaint those Cells next Turn",
    "exhaust": "None",
    "upgrade": {
      "cost": 35,
      "segments": [
        "Paint: [[cross]](2)\nRepaint those Cells next Turn + [[armor]] ",
        "+1",
        ""
      ]
    }
  },
  {
    "id": "LemonChiffon",
    "name": "Shielding Stroke",
    "cost": 10,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/shielding_stroke.png",
    "effect": "Paint: [[cross]](1) + [[armor]] +1",
    "exhaust": "None",
    "upgrade": {
      "cost": 10,
      "segments": [
        "Paint: [[cross]](1) + [[armor]] ",
        "+2",
        ""
      ]
    }
  },
  {
    "id": "ShoppingTime",
    "name": "Shopping Time!",
    "cost": 25,
    "rarity": "Advanced",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/shopping_time_temp.png",
    "effect": "Choose 1 of 3 random Cards to add to your Hand",
    "exhaust": "None",
    "upgrade": {
      "cost": 25,
      "segments": [
        "Choose 1 of ",
        "4",
        " random Cards to add to your Hand"
      ]
    }
  },
  {
    "id": "SignAway",
    "name": "Sign Away",
    "cost": 0,
    "rarity": "Advanced",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/sign_away_temp.png",
    "effect": "Exhaust another Card in your Hand\nGain 50% of its Deck Cost in [[gold]]",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Exhaust another Card in your Hand\nGain ",
        "100",
        "% of its Deck Cost in [[gold]]"
      ]
    }
  },
  {
    "id": "SignalFlag",
    "name": "Signal Flag",
    "cost": 5,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/signal_flag.png",
    "effect": "Paint: 1 Cell + [[flag]]",
    "exhaust": "None",
    "upgrade": {
      "cost": 5,
      "segments": [
        "Paint: 1 Cell + [[flag]]\nPaint [[random]]",
        "(1)",
        " + [[flag]]"
      ]
    }
  },
  {
    "id": "Smelt",
    "name": "Smelt",
    "cost": 0,
    "rarity": "Special",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/hachipo_smelt_temp.png",
    "effect": "Add 1 random Fleeting card to your hand",
    "exhaust": "Always",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Add ",
        "2",
        " random Fleeting cards to your hand"
      ]
    }
  },
  {
    "id": "SolitaryGourmet",
    "name": "Solitary Gourmet",
    "cost": 30,
    "rarity": "Advanced",
    "owner": "Potti",
    "type": "Paint",
    "art": "assets/cards/solitary_gourmet_temp.png",
    "effect": "Paint: [[square]](3) once per Consumable used this battle",
    "exhaust": "None",
    "upgrade": {
      "cost": 20,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "KeepSpending",
    "name": "Spend, Spend, Spend",
    "cost": 50,
    "rarity": "Rare",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/keep_spending_temp.png",
    "effect": "This battle: Each base-0[[gold]] Card adds 5[[gold]] discount to your next Card with base Cost > 0",
    "exhaust": "Always",
    "upgrade": {
      "cost": 50,
      "segments": [
        "This battle: Each base-0[[gold]] Card adds ",
        "10",
        "[[gold]] discount to your next Card with base Cost > 0"
      ]
    }
  },
  {
    "id": "TerritoryExpansion",
    "name": "Spread",
    "cost": 50,
    "rarity": "Advanced",
    "owner": "Greenzy",
    "type": "Option",
    "art": "assets/cards/territory_expansion_temp.png",
    "effect": "Paint all orthogonal neighbors of your current Cells",
    "exhaust": "None",
    "upgrade": {
      "cost": 40,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Blue",
    "name": "Square Splash",
    "cost": 15,
    "rarity": "Common",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/square_splash.png",
    "effect": "Paint: [[square]](3)",
    "exhaust": "None",
    "upgrade": {
      "cost": 10,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Stockpile",
    "name": "Stockpile",
    "cost": 20,
    "rarity": "Advanced",
    "owner": "Colby",
    "type": "Option",
    "art": "assets/cards/stockpile_temp.png",
    "effect": "Choose 1 Card from your Draw Pile to set aside\nAdd it to your Hand at the start of your next Turn",
    "exhaust": "None",
    "upgrade": {
      "cost": 15,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "StoneFragment",
    "name": "Stone Fragment",
    "cost": 0,
    "rarity": "Special",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/stone_fragment.png",
    "effect": "Selected Enemy Cell \u2192 Neutral",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        "Selected Enemy Cell + ",
        "1",
        " random Enemy Cell \u2192 Neutral"
      ]
    }
  },
  {
    "id": "StonerSoul",
    "name": "Stoner's Soul",
    "cost": 45,
    "rarity": "Special",
    "owner": "Shared",
    "type": "Evil",
    "art": "assets/cards/stoner_soul.png",
    "effect": "While in Hand:\nCannot gain [[armor]]",
    "exhaust": "None"
  },
  {
    "id": "StripUndercoat",
    "name": "Strip Undercoat",
    "cost": 5,
    "rarity": "Common",
    "owner": "Potti",
    "type": "Option",
    "art": "assets/cards/strip_undercoat_temp.png",
    "effect": "Neutralize your Cells in [[cross]](2)\nDraw 1 Card",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Surge",
    "name": "Surge",
    "cost": 15,
    "rarity": "Advanced",
    "owner": "Ivan",
    "type": "Option",
    "art": "assets/cards/surge.png",
    "effect": "Draw 1 Card\nIf it is upgraded, draw 1 more",
    "exhaust": "None",
    "upgrade": {
      "cost": 15,
      "segments": [
        "Draw 1 Card\nIf it is upgraded, draw ",
        "2",
        " more"
      ]
    }
  },
  {
    "id": "TakeWing",
    "name": "Take Wing",
    "cost": 45,
    "rarity": "Rare",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/take_wing_temp.png",
    "effect": "Flee this battle without rewards\nPermanently remove this Card from your Deck\nCannot be used in boss battles",
    "exhaust": "Always",
    "upgrade": {
      "cost": 10,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Takeover",
    "name": "Takeover",
    "cost": 5,
    "rarity": "Advanced",
    "owner": "Greenzy",
    "type": "Option",
    "art": "assets/cards/takeover_temp.png",
    "effect": "Paint 3 random Enemy Cells",
    "exhaust": "None",
    "upgrade": {
      "cost": 5,
      "segments": [
        "Paint ",
        "5",
        " random Enemy Cells"
      ]
    }
  },
  {
    "id": "Teamwork",
    "name": "Teamwork",
    "cost": 85,
    "rarity": "Legendary",
    "owner": "Colby",
    "type": "Paint",
    "art": "assets/cards/teamwork_temp.png",
    "effect": "Paint: [[cross]](1) once per Card drawn from your Deck this Turn",
    "exhaust": "Always",
    "upgrade": {
      "cost": 70,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Aquamarine",
    "name": "Tidal Seed",
    "cost": 30,
    "rarity": "Legendary",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/tidal_seed.png",
    "effect": "Paint: 1 Cell + Spread",
    "exhaust": "None",
    "upgrade": {
      "cost": 20,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Transmutation",
    "name": "Transmutation",
    "cost": 50,
    "rarity": "Legendary",
    "owner": "Greenzy",
    "type": "Option",
    "art": "assets/cards/purifying_paint.png",
    "effect": "This battle, Cells painted by random-paint Cards have a 20% chance to gain a random effect",
    "exhaust": "Always",
    "upgrade": {
      "cost": 40,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Treadmill",
    "name": "Treadmill",
    "cost": 50,
    "rarity": "Advanced",
    "owner": "Ivan",
    "type": "Option",
    "art": "assets/cards/treadmill_temp.png",
    "effect": "Draw until your Hand is full",
    "exhaust": "None",
    "upgrade": {
      "cost": 40,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "TripleShield",
    "name": "Triple Shield",
    "cost": 5,
    "rarity": "Advanced",
    "owner": "Ryan",
    "type": "Option",
    "art": "assets/cards/triple_shield_temp.png",
    "effect": "Give one of your Cells [[armor]] +3",
    "exhaust": "None",
    "upgrade": {
      "cost": 0,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "TrustMe",
    "name": "Trust Me!",
    "cost": 25,
    "rarity": "Rare",
    "owner": "Ivan",
    "type": "Paint",
    "art": "assets/cards/trust_me_temp.png",
    "effect": "Paint: 1 Cell + [[random]](4)\nGive the painted Own Cells [[flag]]",
    "exhaust": "None",
    "upgrade": {
      "cost": 20,
      "segments": [
        "Paint: 1 Cell + [[random]]",
        "(5)",
        "\nGive the painted Own Cells [[flag]]"
      ]
    }
  },
  {
    "id": "TwinStrokes",
    "name": "Twin Strokes",
    "cost": 15,
    "rarity": "Rare",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/twin_strokes_temp.png",
    "effect": "Paint a 1\u00d75 line, then choose a 1\u00d73 line\nChoose an Own Cell to paint vertically",
    "exhaust": "None",
    "upgrade": {
      "cost": 10,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "Ultrasound",
    "name": "Ultrasound",
    "cost": 35,
    "rarity": "Legendary",
    "owner": "Shared",
    "type": "Option",
    "art": "assets/cards/ultrasound_temp.png",
    "effect": "Return up to 1 random Cards played last turn from your discard pile to your Hand\nTheir Cost becomes 125% this battle",
    "exhaust": "Always",
    "upgrade": {
      "cost": 30,
      "segments": [
        "Return up to ",
        "3",
        " random Cards played last turn from your discard pile to your Hand\nTheir Cost becomes 125% this battle"
      ]
    }
  },
  {
    "id": "Vault",
    "name": "Vault",
    "cost": 100,
    "rarity": "Rare",
    "owner": "Juliana",
    "type": "Option",
    "art": "assets/cards/vault_temp.png",
    "effect": "Add a Gold Bar to your Deck",
    "exhaust": "Always",
    "upgrade": {
      "cost": 75,
      "segments": [
        ""
      ]
    }
  },
  {
    "id": "WarmUp",
    "name": "Warm-up",
    "cost": 10,
    "rarity": "Legendary",
    "owner": "Ivan",
    "type": "Option",
    "art": "assets/cards/warm_up_temp.png",
    "effect": "Upgraded Cards in your Deck cost 5 less this battle",
    "exhaust": "Always",
    "upgrade": {
      "cost": 5,
      "segments": [
        "Upgraded Cards in your Deck cost ",
        "10",
        " less this battle"
      ]
    }
  },
  {
    "id": "Whim",
    "name": "Whim",
    "cost": 10,
    "rarity": "Rare",
    "owner": "Greenzy",
    "type": "Option",
    "art": "assets/cards/whim_temp.png",
    "effect": "This battle: Random-paint Cards paint 1 extra random Cell",
    "exhaust": "Always",
    "upgrade": {
      "cost": 10,
      "segments": [
        "This battle: Random-paint Cards paint ",
        "2",
        " extra random Cells"
      ]
    }
  },
  {
    "id": "XCross",
    "name": "X-Cross",
    "cost": 25,
    "rarity": "Advanced",
    "owner": "Shared",
    "type": "Paint",
    "art": "assets/cards/x_cross.png",
    "effect": "Paint: [[x]](2)",
    "exhaust": "None",
    "upgrade": {
      "cost": 25,
      "segments": [
        "Paint: [[x]](2)\nCenter and Ends: [[armor]] ",
        "+1",
        ""
      ]
    }
  }
];
