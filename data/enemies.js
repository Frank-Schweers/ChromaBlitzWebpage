const enemyDetails = {
  "amethy": {
    "name": "Amethy",
    "level": "2",
    "floors": "5\u201314",
    "ability": "Each turn, the area painted by the player's first Paint Card immediately becomes Amethy's. On its turn, Amethy paints five random playable cells that it does not already own.",
    "story": "Amethy never steals an idea. It only steals the first splash of paint.",
    "passive": "Each turn, the area painted by your first Paint Card becomes its territory. The passive is consumed even if that card only removes Defense.",
    "patterns": [
      "Paints five random non-owned cells."
    ]
  },
  "blobber": {
    "name": "Blobber",
    "level": "1",
    "floors": "6\u201314",
    "ability": "Paints one of the map's three full horizontal channels or three full vertical channels. Blobber prioritizes the channel with the most player-owned cells, then the fewest neutral cells.",
    "story": "Water slimes live by the lake, so clear that animals try to drink them. Flaura are the worst: they mistake them for dew and end up fighting the slimes.\nOh, now I'm cross just telling you! The nerve! I'll go give those Flaura a scolding. Back shortly!",
    "passive": "None",
    "patterns": [
      "Paints the full row or column that reclaims the most player cells."
    ]
  },
  "chester": {
    "name": "Chester",
    "level": "1",
    "floors": "8\u201314",
    "ability": "Alternates between painting three 2x2 areas and painting one 1x7 line. Chester chooses the combination that produces the largest ownership advantage.",
    "story": "Chester lives for the amusement of watching someone step on it and cry out in pain.",
    "passive": "None",
    "patterns": [
      "Paints three 2\u00d72 areas one after another.",
      "Next turn: paints a 1\u00d77 line."
    ]
  },
  "citrina": {
    "name": "Two Citrinas",
    "level": "2",
    "floors": "10\u201314",
    "ability": "Two Citrinas act separately. Each chooses either a 2x2 area or a 1x6 line. While their combined territory is ahead, they prioritize empty cells; while behind, they prioritize player cells. The battle ends only when both territories are gone.",
    "story": "They agree on every strategy except which one of them thought of it first.",
    "passive": "Only loses when every enemy territory is gone.",
    "patterns": [
      "Paints a 2\u00d72 area.",
      "Paints a 1\u00d76 line."
    ]
  },
  "flaura": {
    "name": "Flaura",
    "level": "1",
    "floors": "2\u20136",
    "ability": "Paints a 3x3 square. Flaura first targets a completely empty 3x3 area. If none exists, it chooses the area that captures the most player-owned cells. If every complete 3x3 area is already hers, she paints up to nine useful cells elsewhere.",
    "story": "These thriving pink flowers fancy themselves the world's prettiest. Every other species is ugly to them. Even you would be a hideous monster in their eyes, you know.\nIf you want to pass, bring a mirror. They'll be too busy admiring themselves to spare you a glance.",
    "passive": "None",
    "patterns": [
      "Paints a 3\u00d73 area. Prioritizes completely empty areas."
    ]
  },
  "flaurachester": {
    "name": "Flaura & Chester",
    "level": "1",
    "floors": "11\u201314",
    "ability": "Flaura and Chester act separately. Flaura paints a 3x3 square, while Chester alternates between three 2x2 areas and one 1x7 line. An enemy is defeated when none of its own cells remain.",
    "story": "Flaura remains obsessed with beauty. Chester remains obsessed with watching people step on it. Their partnership is going about as smoothly as expected.",
    "passive": "None",
    "patterns": [
      "Flaura paints a 3\u00d73 area.",
      "Chester paints three 2\u00d72 areas one after another.",
      "Chester alternates with a 1\u00d77 line."
    ]
  },
  "gemi": {
    "name": "Gemi",
    "level": "2",
    "floors": "2\u20134",
    "ability": "Paints a radius-1 cross in the position that captures the most player-owned cells. Only the center of each initial cross has Spread. Every cell painted by Gemi has Spread.",
    "story": "Gemi insists that it is a polished gemstone, even though nobody has ever seen it sit still long enough to polish.",
    "passive": "Every cell it paints has Spread.",
    "patterns": [
      "Paints a radius-1 cross. Every painted cell has Spread."
    ]
  },
  "glider": {
    "name": "Glider",
    "level": "2",
    "floors": "7\u201314",
    "ability": "Twice each turn, paints a full row or column across gaps, then sets the Defense of its cells in that line to 1. Its starting cell is Fixed.",
    "story": "Glider travels in straight lines and leaves a guarded trail.",
    "passive": "None",
    "patterns": [
      "Twice, paints a full row or column across gaps and sets its cells' Defense to 1."
    ]
  },
  "grandmastar": {
    "name": "Grandmastar",
    "level": "2",
    "floors": "10\u201314",
    "ability": "Cycles through three adaptive patterns: paints three 2x2 areas; paints a connected group of eight cells and grants each painted cell 1 Defense; then paints nine individual cells and gives the final painted cell Spread. While ahead it prioritizes neutral cells, and while tied or behind it prioritizes player cells. Its paint ignores player Defense and suppresses player Spread, but cannot capture Fixed cells.",
    "story": "Grandmastar claims every move was calculated nine turns ago, including the moves it changes its mind about.",
    "passive": "Its paint ignores player Defense and suppresses player Spread. Fixed cells remain protected.",
    "patterns": [
      "Paints three 2\u00d72 areas.",
      "Paints eight connected cells and grants them 1 Defense.",
      "Paints nine individual cells; the final cell gains Spread."
    ]
  },
  "hyperflaura": {
    "name": "Hyper Flaura",
    "level": "1",
    "floors": "15",
    "ability": "Cycles through three actions: paints three 3x3 squares using Flaura's targeting rules; paints six 2x2 areas that prioritize player cells, switching to isolated single cells when no 2x2 area can gain territory; then paints every cell surrounding its territory. When the player uses the same card type again during a turn, each repeat costs 10 additional Gold.",
    "story": "Hyper Flaura claims its enormous eye can recognize beauty at a glance. Unfortunately, it has been staring at the player for quite a while without reaching a conclusion.",
    "passive": "Repeating a card type costs 10 additional Gold.",
    "patterns": [
      "Paints three 3\u00d73 areas one after another.",
      "Paints six 2\u00d72 areas one after another.",
      "Paints every non-owned cell surrounding its territory."
    ]
  },
  "jemerald": {
    "name": "Jemerald",
    "level": "2",
    "floors": "5\u201310",
    "ability": "At the start of its turn, every owned cell gains 1 Defense. It then paints every non-owned cell orthogonally adjacent to its territory, and every newly painted cell gains 1 Defense.",
    "story": "Jemerald calls defense a form of good posture and refuses to slouch.",
    "passive": "At the start of its turn, every owned cell gains 1 Defense.",
    "patterns": [
      "Paints every non-owned orthogonal neighbor of its territory; every painted cell gains 1 Defense."
    ]
  },
  "mayple": {
    "name": "Mayple",
    "level": "1",
    "floors": "2\u20134",
    "ability": "Paints every playable cell orthogonally adjacent to any cell Mayple currently owns. Its territory spreads outward from all existing edges at once.",
    "story": "Mayple are mostly mild, but some paint everything red, insisting it's the finest color.\nTheir researchers wear red and even dye their fur, so I hear.\n\u2026Just don't wear green and say, \"I prefer this color!\" I'd rather not learn what happens next.",
    "passive": "None",
    "patterns": [
      "Expands into every non-owned cell neighboring its territory."
    ]
  },
  "megachester": {
    "name": "Mega Chester",
    "level": "1",
    "floors": "15",
    "ability": "Cycles through expanding thorn rings. First it paints two 3x3 borders, then one 5x5 border, then one 7x7 border. Each ring chooses the position that captures the most player cells. Whenever one player card captures at least five Mega Chester cells, up to three remaining undefended cells gain 1 Defense.",
    "story": "Unlike an ordinary Chester, Mega Chester does not wait for someone to step on it. It rolls over and arranges the accident itself.",
    "passive": "When one card captures at least 5 of its cells, up to 3 random remaining cells without Defense gain 1 Defense.",
    "patterns": [
      "Paints two 3\u00d73 borders one after another.",
      "Then paints a 5\u00d75 border.",
      "Then paints a 7\u00d77 border."
    ]
  },
  "megaflaura": {
    "name": "Mega Flaura",
    "level": "1",
    "floors": "7\u201314",
    "ability": "Paints two 3x3 squares on each turn. While Mega Flaura is alive, the player cannot play the same card type more than once during a single turn.",
    "story": "Mega Flaura claims that becoming bigger has refined its sense of beauty. Everyone else suspects it has merely become louder.",
    "passive": "The same card type cannot be played twice in one turn.",
    "patterns": [
      "Paints two 3\u00d73 areas one after another."
    ]
  },
  "megawendy": {
    "name": "Mega Wendy",
    "level": "1",
    "floors": "15",
    "ability": "Paints seven separate 1x2 areas. After painting, two of those cells become Fixed. Whenever Mega Wendy captures a player-owned cell, it steals 1 Gold and holds it. Defeating Mega Wendy returns all Gold held this way.",
    "story": "Mega Wendy calls the missing Gold a temporary atmospheric storage fee.",
    "passive": "Steals 1 Gold whenever it captures one of your cells. Defeating it returns all Gold held this way.",
    "patterns": [
      "Paints seven separate 1\u00d72 areas, then fixes two of the painted cells."
    ]
  },
  "moley": {
    "name": "Moley",
    "level": "1",
    "floors": "7\u201314",
    "ability": "Alternates between placing up to 8 burrows and firing from every burrow. New burrows avoid sharing a row or column with another burrow. Each burrow paints a straight line in its best orthogonal direction, skipping gaps in the board, then disappears.",
    "story": "Moley keeps watch over a maze of narrow tunnels.",
    "passive": "Burrows disappear when their cells are captured or neutralized.",
    "patterns": [
      "Installs 8 burrows, prioritizing cells that do not share a row or column with another burrow.",
      "Each burrow paints its most advantageous orthogonal ray to the edge, then disappears. Rays cross gaps."
    ]
  },
  "mossy": {
    "name": "Mossy",
    "level": "1",
    "floors": "5\u201310",
    "ability": "Paints a connected cluster of seven cells, choosing the cluster that creates the greatest ownership advantage.",
    "story": "Fearsome things ride the wind, you know. Moss favors damp places, but sends tiny spores far afield. Together, even an elephant cannot best them.\nThey usually fly in swarms. Why is this one alone? Lost its way? \u2026Surely the others haven't shunned it?",
    "passive": "None",
    "patterns": [
      "Paints a connected cluster of seven cells."
    ]
  },
  "mushy": {
    "name": "Mushy",
    "level": "2",
    "floors": "7\u201310",
    "ability": "Twice each turn, paints the full horizontal row or vertical column that best disrupts the player. All cells painted by those two actions then become Fixed. The full middle row begins as Fixed Mushy territory.",
    "story": "Mushy says the spots on its cap are windows. Nobody has been brave enough to ask what is looking through them.",
    "passive": "None",
    "patterns": [
      "Paints a full row or column. After the second paint, cells painted by both actions become Fixed."
    ]
  },
  "papastar": {
    "name": "Papa Star",
    "level": "1",
    "floors": "7\u201314",
    "ability": "Papa Star does not lose when it has no cells, and claiming an empty cell for the first time grants only 3 Gold instead of 5 during this battle. It cycles through three actions: painting a full row and column plus a separate 4x4 area; granting 1 Defense to every owned cell; then consuming 1 Defense from defended cells to paint their orthogonal neighbors. Defeat it by filling the board while owning more cells than Papa Star.",
    "story": "Nobody knows why a star was found in the forest instead of the sky. Apparently, Papa Star ran away to escape his wife's nagging.",
    "passive": "Does not lose when all its cells are removed. First-claim Gold from empty cells is reduced to 3.",
    "patterns": [
      "Paints a full row and column, then a separate 4\u00d74 area.",
      "Grants 1 Defense to every owned cell.",
      "Consumes Defense to paint neighboring cells."
    ]
  },
  "ribbit": {
    "name": "Ribbit",
    "level": "2",
    "floors": "15",
    "ability": "Paints a 2x2 area, then takes a random player-owned cell and all player-owned cells connected to it orthogonally, ignoring Defense. The target changes whenever the player plays a card. Fixed cells remain protected.",
    "story": "Ribbit claims connected territory with a single leap.",
    "passive": "Each player turn, the first 3 of its cells you capture each trigger a 2\u00d72 paint.",
    "patterns": [
      "Paints a 2\u00d72 area, then takes a random player cell and all orthogonally connected player cells."
    ]
  },
  "ruby": {
    "name": "Ruby",
    "level": "2",
    "floors": "4\u20139",
    "ability": "Paints the 2x2 area that best disrupts the player. The four cells in the center begin Fixed: they cannot be captured, neutralized, or removed. After the player completes two cards in a turn, Ruby immediately ends that turn.",
    "story": "Ruby thinks every good plan should be short, rigid, and over before anyone gets a third idea.",
    "passive": "Your turn ends after you play 2 cards.",
    "patterns": [
      "Paints a 2\u00d72 area."
    ]
  },
  "shapira": {
    "name": "Shapira",
    "level": "2",
    "floors": "5\u201314",
    "ability": "On its turn, Shapira attempts three card uses from the player's Draw Pile. Paint Cards fully resolve, including follow-up effects, then move to the Discard Pile. Each missing Paint Card use Exhausts an Option Card instead. An empty Draw Pile ends the action.",
    "story": "Shapira insists borrowing paint without asking is simply an advanced form of color theory.",
    "passive": "Attempts 3 uses from your Draw Pile. Paint Cards fully resolve and are discarded; missing Paint Cards Exhaust Option Cards.",
    "patterns": [
      "Shapira's pattern depends on the cards in your deck."
    ]
  },
  "snek": {
    "name": "Snek",
    "level": "1",
    "floors": "4",
    "ability": "Paints a 1x5 line, then paints a 1x3 line. Each line prioritizes the position that captures the most player-owned cells.",
    "story": "Only the long green snakes are absent from our village. Once our neighbors, they were banished after an unhappy affair. Snek seems to be their descendant.\nPerhaps he resents us still. If you meet him, give him a hug. Let's show him our love.",
    "passive": "None",
    "patterns": [
      "Paints a 1\u00d75 line, then a 1\u00d73 line."
    ]
  },
  "stoner": {
    "name": "Stoner",
    "level": "1",
    "floors": "9\u201314",
    "ability": "Paints an X-shaped pattern extending two cells diagonally from its center. Every Stoner-owned cell hit by the pattern finishes the action with 1 Defense. Its starting cells also begin with 1 Defense.",
    "story": "Stoner believes that moving is an unnecessary habit invented by creatures that failed to find a comfortable place to sit.",
    "passive": "None",
    "patterns": [
      "Paints an X-shaped pattern. Every painted cell gains 1 Defense."
    ]
  },
  "ted": {
    "name": "Ted",
    "level": "1",
    "floors": "0",
    "ability": "On his turn, Ted paints three connected cells in a straight line or an L shape. He prioritizes patterns containing player-owned cells. If the player owns no cells, he targets empty cells instead.",
    "story": "Barely grown up, Ted already fancies himself a pillar of the village. Quite the busybody, that lad. He's good at painting battles, but quietly goes easy on the villagers. Well, he thinks nobody notices, at any rate.\nStill, keep your hands off his acorns. The other day I merely tried to dust one off, and goodness me! That was when I first learned how fierce a squirrel's teeth can be.",
    "passive": "None",
    "patterns": [
      "Paints three cells in a line.",
      "Paints three cells in an L shape."
    ]
  },
  "wendy": {
    "name": "Wendy",
    "level": "1",
    "floors": "10\u201314",
    "ability": "Paints five separate 1x2 areas, choosing each pair to create the greatest ownership advantage.",
    "story": "Wendy becomes offended whenever someone calls it a tornado. It prefers the term 'highly organized air.'",
    "passive": "None",
    "patterns": [
      "Paints five separate 1\u00d72 areas one after another."
    ]
  }
};
