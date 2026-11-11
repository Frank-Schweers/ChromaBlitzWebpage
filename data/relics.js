const gameRelics = [
  {
    "sources": [
      "Elite battle"
    ],
    "id": "apple",
    "name": "Apple",
    "rarity": "Rare",
    "effect": "On your next shop visit, sell this relic and gain 85 Gold.",
    "upgrade": "On your next shop visit, sell this relic and gain 170 Gold.",
    "art": "assets/relics/apple.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Event"
    ],
    "id": "baby_koala_temp",
    "name": "Baby Koala",
    "rarity": "Special",
    "effect": "At the start of your turn, lose 3 Gold. Growing up takes plenty of food.",
    "upgrade": "At the start of your turn, lose 2 Gold. Growing up takes plenty of food.",
    "art": "assets/relics/baby_koala_temp.png",
    "shopPrice": null
  },
  {
    "id": "crystal_blue",
    "name": "Blue Crystal",
    "effect": "Option cards are 20% more likely to appear in card rewards and shops.",
    "art": "assets/relics/gemblue.png",
    "rarity": "Crystal",
    "sources": [
      "Event"
    ],
    "shopPrice": null,
    "upgrade": null
  },
  {
    "sources": [
      "Treasure"
    ],
    "id": "burnt_letter",
    "name": "Burnt Letter",
    "rarity": "Rare",
    "effect": "At the start of battle, reduce the cost of 2 random cards in your hand by 5 for that battle.",
    "upgrade": "At the start of battle, reduce the cost of all cards in your hand by 5 for that battle.",
    "art": "assets/relics/burnt_letter.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Character starting relic"
    ],
    "id": "cheesy",
    "name": "Cheese Stash",
    "rarity": "Exclusive",
    "effect": "The first 5 cards with a printed cost of 0 Gold played each turn draw 1 card after use.",
    "upgrade": "The first 8 times each turn you play a 0-cost card, draw 1 card.",
    "art": "assets/relics/cheesy.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Event"
    ],
    "id": "chester_chestnut",
    "name": "Chester's Chestnut",
    "rarity": "Special",
    "effect": "The fifth card you play each turn costs 0 Gold.",
    "upgrade": "The fourth card played each turn costs 0 Gold.",
    "art": "assets/relics/chester_chestnut.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Shop"
    ],
    "id": "cleaning_mop_temp",
    "name": "Cleaning Mop",
    "rarity": "Common",
    "effect": "At the end of your turn, neutralize 1 random enemy cell.",
    "upgrade": "At the end of your turn, neutralize 3 random enemy cells.",
    "art": "assets/relics/cleaning_mop_temp.png",
    "shopPrice": 60
  },
  {
    "sources": [
      "Boss battle"
    ],
    "id": "coffee_machine_temp",
    "name": "Coffee Machine",
    "rarity": "Legendary",
    "effect": "At the start of each battle, add 1 Coffee to your hand.",
    "upgrade": "At the start of each battle, add 2 Coffees to your hand.",
    "art": "assets/relics/coffee_machine_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Elite battle"
    ],
    "id": "cooking_pot_temp",
    "name": "Cooking Pot",
    "rarity": "Rare",
    "effect": "After winning a battle, have a 20% chance to receive a consumable.",
    "upgrade": "After winning a battle, have a 35% chance to receive a consumable.",
    "art": "assets/relics/cooking_pot_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Boss battle"
    ],
    "id": "creepy_star",
    "name": "Creepy Star",
    "rarity": "Legendary",
    "effect": "Gain 75 additional Gold when you win by eliminating every enemy-owned cell.",
    "upgrade": "Gain 125 Gold when winning by eliminating every enemy cell.",
    "art": "assets/relics/creepy_star.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Elite battle"
    ],
    "id": "diet_pills_temp",
    "name": "Diet Pills",
    "rarity": "Rare",
    "effect": "Your consumable capacity is fixed at 1. At the start of each battle, if the slot is empty, gain a random consumable.",
    "upgrade": "Your consumable capacity is fixed at 1. At the start of each battle, if the slot is empty, gain a random consumable. When you use a consumable, it has a 25% chance to activate once more.",
    "art": "assets/relics/diet_pills_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Boss battle"
    ],
    "id": "dim",
    "name": "Dim",
    "rarity": "Legendary",
    "effect": "After you play a Paint Card, apply 0.5 Paint to the orthogonal border of its painted area. Half Paint does not affect ownership or score; two applications fully paint the Cell. Enemy paint removes it.",
    "upgrade": "Whenever Dim fully captures a cell, gain 2 Gold.",
    "art": "assets/relics/dim.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Treasure"
    ],
    "id": "discount_sticker_temp",
    "name": "Discount Sticker",
    "rarity": "Common",
    "effect": "Shops offer 1 additional discounted card.",
    "upgrade": "Shops offer 2 additional discounted cards.",
    "art": "assets/relics/discount_sticker_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Shop"
    ],
    "id": "discount_voucher_temp",
    "name": "Discount Voucher",
    "rarity": "Rare",
    "effect": "Your first purchase at each shop costs 50% less.",
    "upgrade": "All purchases at shops cost 50% less.",
    "art": "assets/relics/discount_voucher_temp.png",
    "shopPrice": 100
  },
  {
    "sources": [
      "Character starting relic"
    ],
    "id": "dumbbell",
    "name": "Dumbbell",
    "rarity": "Exclusive",
    "effect": "After every 3 battles, upgrade 1 random unupgraded card in your deck. Each card reward has an additional 50% chance to be offered upgraded.",
    "upgrade": "After every 2 battles, upgrade 1 random unupgraded card in your deck. Each card reward has an additional 50% chance to be offered upgraded.",
    "art": "assets/relics/dumbbell.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Treasure"
    ],
    "id": "elegant_fork_temp",
    "name": "Elegant Fork",
    "rarity": "Rare",
    "effect": "Whenever one of your cells is neutralized, neutralize 1 random enemy cell.",
    "upgrade": "Whenever one of your cells is neutralized, neutralize 2 random enemy cells.",
    "art": "assets/relics/elegant_fork_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Boss battle"
    ],
    "id": "energy_drink_temp",
    "name": "Energy Drink",
    "rarity": "Legendary",
    "effect": "Gain 1 additional action at taverns.",
    "upgrade": "Gain 1 additional action at taverns. Upon entering a tavern, have a 25% chance to gain 1 more action.",
    "art": "assets/relics/energy_drink_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Event"
    ],
    "id": "eucalyptus_temp",
    "name": "Eucalyptus",
    "rarity": "Special",
    "effect": "Win a battle within 3 turns to gain 20 additional Gold.",
    "upgrade": "Win a battle within 3 turns to gain 30 additional Gold.",
    "art": "assets/relics/eucalyptus_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Event"
    ],
    "id": "flaura_core",
    "name": "Flaura's Core",
    "rarity": "Special",
    "effect": "Whenever you play a card that paints a 3\u00d73 area, gain 5 Gold.",
    "upgrade": "Whenever you play a card that paints a 3\u00d73 area, gain 10 Gold.",
    "art": "assets/relics/flaura_core.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Treasure"
    ],
    "id": "gift_card_temp",
    "name": "Gift Card",
    "rarity": "Rare",
    "effect": "Can be used to pay for 125G worth of purchases at shops.",
    "upgrade": "Can be used to pay for 175G worth of purchases at shops.",
    "art": "assets/relics/gift_card_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Shop"
    ],
    "id": "glass_shield_temp",
    "name": "Glass Shield",
    "rarity": "Common",
    "effect": "During your turn, your cells have +1 Defense.",
    "upgrade": "During your turn, your cells have +2 Defense.",
    "art": "assets/relics/glass_shield_temp.png",
    "shopPrice": 80
  },
  {
    "sources": [
      "Boss battle"
    ],
    "id": "golden_scissors_temp",
    "name": "Golden Scissors",
    "rarity": "Legendary",
    "effect": "Upon acquisition, choose 1 card type in your deck. Permanently remove every copy and prevent that type from appearing in acquisition pools for this run. You may skip.",
    "upgrade": "Upon acquisition, choose up to 2 card types in your deck. Permanently remove every copy and prevent those types from appearing in acquisition pools for this run. Upgrading this relic while owned lets you choose 1 additional type. You may skip.",
    "art": "assets/relics/golden_scissors_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Treasure"
    ],
    "id": "green_apple",
    "name": "Green Apple",
    "rarity": "Advanced",
    "effect": "On your next shop visit, sell this relic and gain 55 Gold.",
    "upgrade": "On your next shop visit, sell this relic and gain 110 Gold.",
    "art": "assets/relics/green_apple.png",
    "shopPrice": null
  },
  {
    "id": "crystal_green",
    "name": "Green Crystal",
    "effect": "You may remove up to 2 cards in each shop, but card removal costs 50% more.",
    "art": "assets/relics/gemgreen.png",
    "rarity": "Crystal",
    "sources": [
      "Event"
    ],
    "shopPrice": null,
    "upgrade": null
  },
  {
    "sources": [
      "Treasure",
      "Shop"
    ],
    "id": "green_shoes",
    "name": "Green Pumps",
    "rarity": "Common",
    "effect": "Combat encounters do not appear in events.",
    "upgrade": "Combat encounters do not appear in events. Gain 10 Gold when entering an event.",
    "art": "assets/relics/green_shoes.png",
    "shopPrice": 45
  },
  {
    "sources": [
      "Shop",
      "Treasure"
    ],
    "id": "gym_ball",
    "name": "Gym Ball",
    "rarity": "Advanced",
    "effect": "Upon acquisition, upgrade 3 random unupgraded Paint cards in your deck.",
    "upgrade": "Upon acquisition, upgrade 3 random unupgraded Paint cards in your deck. When this relic is upgraded, upgrade 2 more.",
    "art": "assets/relics/gym_ball.png",
    "shopPrice": 75
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "hachipo_anvil_temp",
    "name": "Hachipo's Anvil",
    "rarity": "Mythic",
    "effect": "After every 4 battle wins, gain a random relic.",
    "upgrade": "After every 3 battle wins, gain a random relic.",
    "art": "assets/relics/hachipo_anvil_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "hachipo_crystal_temp",
    "name": "Hachipo's Crystal",
    "rarity": "Mythic",
    "effect": "Upon acquisition, gain 4 random crystal relics.",
    "upgrade": "Upon acquisition, gain 5 random crystal relics.",
    "art": "assets/relics/hachipo_crystal_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "hachipo_furnace_temp",
    "name": "Hachipo's Furnace",
    "rarity": "Mythic",
    "effect": "At the start of your turn, add a Smelt to your hand.",
    "upgrade": "At the start of your turn, add an upgraded Smelt to your hand.",
    "art": "assets/relics/hachipo_furnace_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "hachipo_gathering_net_temp",
    "name": "Hachipo's Gathering Net",
    "rarity": "Mythic",
    "effect": "When you win a battle, gain 3 Gold per remaining neutral cell and 1 Gold per remaining enemy cell.",
    "upgrade": "When you win a battle, gain 5 Gold per remaining neutral cell and 2 Gold per remaining enemy cell.",
    "art": "assets/relics/hachipo_gathering_net_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "hachipo_hammer_temp",
    "name": "Hachipo's Hammer",
    "rarity": "Mythic",
    "effect": "At the end of your turn, give +2 Defense to up to 3 random cells you own.",
    "upgrade": "At the end of your turn, give +3 Defense to up to 6 random cells you own.",
    "art": "assets/relics/hachipo_hammer_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "hachipo_pickaxe_temp",
    "name": "Hachipo's Pickaxe",
    "rarity": "Mythic",
    "effect": "At the end of your turn, remove a random cell you do not own. Gain 5 Gold if a cell is removed.",
    "upgrade": "At the end of your turn, remove a random cell you do not own. Gain 7 Gold if a cell is removed.",
    "art": "assets/relics/hachipo_pickaxe_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "hachipo_rope_temp",
    "name": "Hachipo's Rope",
    "rarity": "Mythic",
    "effect": "At the end of your turn, you may discard up to 2 cards of your choice from your hand. Draw the same number of cards.",
    "upgrade": "At the end of your turn, you may discard up to 3 cards of your choice from your hand. Draw the same number of cards.",
    "art": "assets/relics/hachipo_rope_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "hachipo_tongs_temp",
    "name": "Hachipo's Tongs",
    "rarity": "Mythic",
    "effect": "Your cells cannot gain Defense. Whenever one would gain Defense, paint that many random cells instead.",
    "upgrade": "Your cells cannot gain Defense. Whenever one would gain Defense, paint that many random cells plus 1 instead.",
    "art": "assets/relics/hachipo_tongs_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "hachipo_whetstone_temp",
    "name": "Hachipo's Whetstone",
    "rarity": "Mythic",
    "effect": "Removing a card at a shop costs 25 less Gold.",
    "upgrade": "Removing a card at a shop costs 50 less Gold.",
    "art": "assets/relics/hachipo_whetstone_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Character starting relic"
    ],
    "id": "bell_collar",
    "name": "Haughty Fan",
    "rarity": "Exclusive",
    "effect": "You cannot gain Gold from empty cells. After winning a battle, gain 4% of your current Gold. After defeating a boss, also gain 100 Gold per current level.",
    "upgrade": "After victory, gain 6% of your current Gold, plus 100 Gold per World after a boss. Base battle victory Gold is increased by 75%; this does not affect this relic's bonuses or boss bonuses.",
    "art": "assets/relics/bell_collar.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Shop",
      "Treasure",
      "Elite battle"
    ],
    "id": "additional_draw",
    "name": "Hidden Ace",
    "rarity": "Advanced",
    "effect": "After the opening mulligan, draw 1 additional card at the start of each battle.",
    "upgrade": "After the mulligan, choose 1 card from your draw pile and draw it.",
    "art": "assets/relics/additional_draw.png",
    "shopPrice": 70
  },
  {
    "sources": [
      "Character starting relic"
    ],
    "id": "hippostamach",
    "name": "Hippostamach",
    "rarity": "Exclusive",
    "effect": "Whenever you remove a cell from battle or change a cell's owner to Neutral, gain 5 Gold per cell. For every 50 cells removed during the run, gain a random unowned shop or elite relic.",
    "upgrade": "Gain 8 Gold for each cell you neutralize or remove. Draw 1 card after an action neutralizes or removes cells. For every 50 cells removed during the run, gain a random unowned shop or elite relic.",
    "art": "assets/relics/hippostamach.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Shop"
    ],
    "id": "leaf",
    "name": "Leaf",
    "rarity": "Common",
    "effect": "Flaura, who lost a leaf somewhere, is looking for this one.",
    "upgrade": "Flaura, who lost a leaf somewhere, is looking for this one. It seems livelier than before.",
    "art": "assets/relics/leaf.png",
    "shopPrice": 40
  },
  {
    "sources": [
      "Character starting relic"
    ],
    "id": "ryan_shield",
    "name": "Lion's Shield",
    "rarity": "Exclusive",
    "effect": "The first card that grants Defense each turn grants 1 additional Defense to the same cells.",
    "upgrade": "The first card each turn that grants Defense grants 2 additional Defense.",
    "art": "assets/relics/ryan_shield.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Character starting relic"
    ],
    "id": "clover",
    "name": "Lucky Clover",
    "rarity": "Exclusive",
    "effect": "Random-paint cards preview their results. When you play a random-paint card, gain 5 Gold.",
    "upgrade": "Random-paint cards preview their results. When you play a random-paint card, gain 7 Gold and paint 1 additional random cell.",
    "art": "assets/relics/clover.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Elite battle"
    ],
    "id": "mini_snek",
    "name": "Mini Snek",
    "rarity": "Rare",
    "effect": "At the end of your turn, Mini Snek paints a 1\u00d73 line in the best available position. Empty cells painted this way still grant Gold.",
    "upgrade": "Mini Snek paints the best available 1\u00d75 line.",
    "art": "assets/relics/mini_snek.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "miriam_bracelet_temp",
    "name": "Miriam's Bracelet",
    "rarity": "Mythic",
    "effect": "At the start of battle, draw 1 character-exclusive card from your draw pile.",
    "upgrade": "At the start of battle, draw 2 character-exclusive cards from your draw pile.",
    "art": "assets/relics/miriam_bracelet_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "miriam_handbag_temp",
    "name": "Miriam's Handbag",
    "rarity": "Mythic",
    "effect": "At the start of battle, gain 20 Gold.",
    "upgrade": "At the start of battle, gain 25 Gold.",
    "art": "assets/relics/miriam_handbag_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "miriam_hat_temp",
    "name": "Miriam's Hat",
    "rarity": "Mythic",
    "effect": "The first cells you paint each battle gain +2 Defense.",
    "upgrade": "The first cells you paint each battle gain +3 Defense.",
    "art": "assets/relics/miriam_hat_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "miriam_heels_temp",
    "name": "Miriam's Heels",
    "rarity": "Mythic",
    "effect": "Cells painted by your first 1 Paint Card each turn become Fixed until your next turn starts.",
    "upgrade": "Cells painted by your first 1 Paint Card each turn gain +1 Defense and become Fixed until your next turn starts.",
    "art": "assets/relics/miriam_heels_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "miriam_magnifier_temp",
    "name": "Miriam's Magnifying Glass",
    "rarity": "Mythic",
    "effect": "Gain 200 Gold. Shop purchases cost 50% more.",
    "upgrade": "Gain 300 Gold. Shop purchases cost 50% more.",
    "art": "assets/relics/miriam_magnifier_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "miriam_mirror_temp",
    "name": "Miriam's Mirror",
    "rarity": "Mythic",
    "effect": "At the start of your turn, add a Fleeting Purification with Exhaust to your hand.",
    "upgrade": "At the start of your turn, add a Fleeting Purification with Exhaust to your hand. It costs 10 Gold less.",
    "art": "assets/relics/miriam_mirror_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "miriam_prayer_temp",
    "name": "Miriam's Prayer",
    "rarity": "Mythic",
    "effect": "Legendary Cards appear 50% more often.",
    "upgrade": "Legendary Cards appear 100% more often.",
    "art": "assets/relics/miriam_prayer_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "miriam_ring_temp",
    "name": "Miriam's Ring",
    "rarity": "Mythic",
    "effect": "Draw 3 additional cards at the start of battle. Skip your normal draws at the start of turns 2 and 3.",
    "upgrade": "Draw 4 additional cards at the start of battle. Skip your normal draws at the start of turns 2 and 3.",
    "art": "assets/relics/miriam_ring_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "miriam_silence_temp",
    "name": "Miriam's Silence",
    "rarity": "Mythic",
    "effect": "At the end of your turn, remove up to 3 random cells.",
    "upgrade": "At the end of your turn, remove up to 4 random cells.",
    "art": "assets/relics/miriam_silence_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Shop",
      "Treasure"
    ],
    "id": "mystery_box",
    "name": "Mystery Box",
    "rarity": "Common",
    "effect": "At the start of battle, replace one random card in the opening hand with a different random card for that battle only.",
    "upgrade": "The replacement card is upgraded.",
    "art": "assets/relics/mystery_box.png",
    "shopPrice": 50
  },
  {
    "sources": [
      "Shop",
      "Treasure"
    ],
    "id": "mystery_boxes",
    "name": "Mystery Box Bombardment",
    "rarity": "Rare",
    "effect": "At the start of battle, replace every card in your deck with a different random card for that battle only.",
    "upgrade": "All replacement cards are upgraded and cost 10 less for this battle.",
    "art": "assets/relics/mystery_boxes.png",
    "shopPrice": 100
  },
  {
    "sources": [
      "Shop"
    ],
    "id": "orange",
    "name": "Orange",
    "rarity": "Common",
    "effect": "The first card you play each battle costs 10 Gold less.",
    "upgrade": "The first 2 cards you play each battle each cost 20 Gold less.",
    "art": "assets/relics/orange.png",
    "shopPrice": 60
  },
  {
    "sources": [
      "Shop",
      "Treasure",
      "Elite battle"
    ],
    "id": "piggy_bank",
    "name": "Piggy Bank",
    "rarity": "Common",
    "effect": "Gain 7 Gold at the start of each battle.",
    "upgrade": "Gain 9 Gold at the start of each battle.",
    "art": "assets/relics/piggy_bank.png",
    "shopPrice": 75
  },
  {
    "sources": [
      "Boss battle"
    ],
    "id": "proliferation_plate",
    "name": "Proliferation Plate",
    "rarity": "Legendary",
    "effect": "Whenever you paint a Cell, it has a 1% chance to gain Proliferation.",
    "upgrade": "Painted cells have a 1.5% chance to gain Proliferation.",
    "art": "assets/relics/proliferation_plate.png",
    "shopPrice": null
  },
  {
    "id": "crystal_purple",
    "name": "Purple Crystal",
    "effect": "Gain 2 Gold at battle start, plus 1 Gold for each other crystal you own.",
    "art": "assets/relics/gempurple.png",
    "rarity": "Crystal",
    "sources": [
      "Event"
    ],
    "shopPrice": null,
    "upgrade": null
  },
  {
    "id": "crystal_red",
    "name": "Red Crystal",
    "effect": "Paint cards are 20% more likely to appear in card rewards and shops.",
    "art": "assets/relics/gemred.png",
    "rarity": "Crystal",
    "sources": [
      "Event"
    ],
    "shopPrice": null,
    "upgrade": null
  },
  {
    "sources": [
      "Elite battle",
      "Treasure"
    ],
    "id": "red_shoes",
    "name": "Red Shoes",
    "rarity": "Advanced",
    "effect": "Up to 3 times, you may ignore the route when moving to the next floor.",
    "upgrade": "May ignore the next-floor route up to 5 times.",
    "art": "assets/relics/red_shoes.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Treasure"
    ],
    "id": "reset_button",
    "name": "Reset Button",
    "rarity": "Rare",
    "effect": "When you are defeated, retry the battle once. This relic expires after use.",
    "upgrade": "Retry defeat up to twice before this relic expires.",
    "art": "assets/relics/reset_button.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Boss battle"
    ],
    "id": "additional_draw_3",
    "name": "Royal Flush",
    "rarity": "Legendary",
    "effect": "After the opening mulligan, draw 2 additional cards at the start of each battle. Increase maximum hand size by 1.",
    "upgrade": "Draw 2 additional cards after the mulligan. Maximum hand size is increased by 2.",
    "art": "assets/relics/additional_draw_3.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Elite battle"
    ],
    "id": "shuriken",
    "name": "Shuriken",
    "rarity": "Rare",
    "effect": "The first time one of your cells is captured during each enemy turn, paint 1 enemy cell. This ignores beneficial effects on enemy cells.",
    "upgrade": "The first time one of your cells is captured during each enemy turn, paint 3 enemy cells. This ignores beneficial effects on enemy cells.",
    "art": "assets/relics/shuriken.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Shop",
      "Treasure"
    ],
    "id": "additional_draw_2",
    "name": "Stacked Deck",
    "rarity": "Rare",
    "effect": "After the opening mulligan, draw 1 additional card at the start of each battle. Increase maximum hand size by 1.",
    "upgrade": "Draw 2 additional cards after the mulligan. Maximum hand size is increased by 1.",
    "art": "assets/relics/additional_draw_2.png",
    "shopPrice": 100
  },
  {
    "sources": [
      "Shop",
      "Treasure",
      "Elite battle"
    ],
    "id": "star",
    "name": "Star",
    "rarity": "Advanced",
    "effect": "The first time you capture an enemy-owned cell each turn, add a random temporary Paint card to your hand.",
    "upgrade": "The temporary Paint card costs 10 less.",
    "art": "assets/relics/star.png",
    "shopPrice": 70
  },
  {
    "sources": [
      "Treasure"
    ],
    "id": "tailors_scissors_temp",
    "name": "Tailor's Scissors",
    "rarity": "Advanced",
    "effect": "Upon acquisition, choose and permanently remove up to 2 cards from your deck. You may skip.",
    "upgrade": "Upon acquisition, choose and permanently remove up to 3 cards from your deck. Upgrading this relic while owned lets you remove 1 additional card. You may skip.",
    "art": "assets/relics/tailors_scissors_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_beret_temp",
    "name": "Ted's Beret",
    "rarity": "Mythic",
    "effect": "Upon acquisition, add 1 random Legendary exclusive card for your character to your deck.",
    "upgrade": "Upon acquisition, add 2 random Legendary exclusive cards for your character to your deck.",
    "art": "assets/relics/ted_beret_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_brush_temp",
    "name": "Ted's Brush",
    "rarity": "Mythic",
    "effect": "Once per turn, after playing your last Paint Card, add 1 random temporary Paint Card to your hand.",
    "upgrade": "Once per turn, after playing your last Paint Card, add 2 random temporary Paint Cards to your hand.",
    "art": "assets/relics/ted_brush_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_gloves_temp",
    "name": "Ted's Gloves",
    "rarity": "Mythic",
    "effect": "Whenever one of your cells would gain Defense, it has a 10% chance to gain Spread instead.",
    "upgrade": "Whenever one of your cells would gain Defense, it has a 20% chance to gain Spread instead.",
    "art": "assets/relics/ted_gloves_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_headband_temp",
    "name": "Ted's Headband",
    "rarity": "Mythic",
    "effect": "Upon acquisition, add 1 random Rare exclusive card for your character to your deck.",
    "upgrade": "Upon acquisition, add 2 random Rare exclusive cards for your character to your deck.",
    "art": "assets/relics/ted_headband_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_iron_temp",
    "name": "Ted's Iron",
    "rarity": "Mythic",
    "effect": "Card offers are 2 times as likely to be replaced by a character-exclusive card.",
    "upgrade": null,
    "art": "assets/relics/ted_iron_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_leaf_temp",
    "name": "Ted's Leaf",
    "rarity": "Mythic",
    "effect": "Upon acquisition, choose up to 2 cards in your deck to transform into random Common through Legendary cards available to your character.",
    "upgrade": "Upon acquisition, choose up to 5 cards in your deck to transform into random Common through Legendary cards available to your character.",
    "art": "assets/relics/ted_leaf_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_milk_temp",
    "name": "Ted's Milk",
    "rarity": "Mythic",
    "effect": "Whenever you play a card at 0 Gold, give +1 Defense to 1 random cell you own.",
    "upgrade": "Whenever you play a card at 0 Gold, give +1 Defense to 2 random cells you own.",
    "art": "assets/relics/ted_milk_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_red_chestnut_temp",
    "name": "Ted's Red Chestnut",
    "rarity": "Mythic",
    "effect": "The third card you play each turn costs 10 Gold less.",
    "upgrade": "The third card you play each turn costs 20 Gold less.",
    "art": "assets/relics/ted_red_chestnut_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_suitcase_temp",
    "name": "Ted's Suitcase",
    "rarity": "Mythic",
    "effect": "At the start of battle, upgrade 3 random cards in your deck for this battle.",
    "upgrade": "At the start of battle, upgrade 5 random cards in your deck for this battle.",
    "art": "assets/relics/ted_suitcase_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Stage start"
    ],
    "id": "ted_writing_pen_temp",
    "name": "Ted's Writing Pen",
    "rarity": "Mythic",
    "effect": "Whenever you play an Option Card, gain 2 Gold.",
    "upgrade": "Whenever you play an Option Card, gain 4 Gold.",
    "art": "assets/relics/ted_writing_pen_temp.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Shop",
      "Treasure"
    ],
    "id": "star_weird",
    "name": "Weird Star",
    "rarity": "Rare",
    "effect": "Gain 1 Gold whenever you capture an enemy-owned cell. Your Paint cards cost 2 additional Gold.",
    "upgrade": "Gain 2 Gold per enemy cell captured. Paint cards cost 1 additional Gold.",
    "art": "assets/relics/star_weird.png",
    "shopPrice": 85
  },
  {
    "sources": [
      "Elite battle"
    ],
    "id": "wooden_shield",
    "name": "Wooden Shield",
    "rarity": "Rare",
    "effect": "Whenever you paint a cell, it has a 5% chance to gain 1 Defense.",
    "upgrade": "Whenever you paint a cell, it has a 10% chance to gain 1 Defense.",
    "art": "assets/relics/wooden_shield.png",
    "shopPrice": null
  },
  {
    "sources": [
      "Shop"
    ],
    "id": "wristband_temp",
    "name": "Wristband",
    "rarity": "Common",
    "effect": "Cards upgraded during battle cost 5 Gold less for that battle.",
    "upgrade": "Cards upgraded during battle cost 10 Gold less for that battle.",
    "art": "assets/relics/wristband_temp.png",
    "shopPrice": 50
  },
  {
    "id": "crystal_yellow",
    "name": "Yellow Crystal",
    "effect": "Common cards are 40% more likely to appear.",
    "art": "assets/relics/gemyellow.png",
    "rarity": "Crystal",
    "sources": [
      "Event"
    ],
    "shopPrice": null,
    "upgrade": null
  },
  {
    "sources": [
      "Treasure",
      "Elite battle"
    ],
    "id": "zero_dividend",
    "name": "Zero Dividend",
    "rarity": "Advanced",
    "effect": "Whenever you play a card that costs 0 Gold, gain 3 Gold.",
    "upgrade": "Whenever you play a 0-cost card, gain 4 Gold.",
    "art": "assets/relics/zero_dividend.png",
    "shopPrice": null
  }
];
