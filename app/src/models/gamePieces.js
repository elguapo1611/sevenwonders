
const COLORS = {
  YELLOW:   "yellow",
  RED:      "red",
  BROWN:    "brown",
  BLUE:     "blue",
  GREEN:    "green",
  GRAY:     "gray",
  PURPLE:   "purple",
}

const ORE = "ore"
const WOOD = "wood"
const CLAY = "clay"
const STONE = "stone"
const RAW_GOODS = [ORE, WOOD, CLAY, STONE]

const GLASS = "glass"
const LOOM = "loom"
const PAPYRUS = "papyrus"
const MANUFACTURED_GOODS = [GLASS, LOOM, PAPYRUS]

const COIN = "coin"

const TABLET = "tablet"
const COMPASS = "compass"
const WHEEL = "wheel"
const SCIENTESTS_GUILDS = [TABLET, COMPASS, WHEEL]

const LEFT = "left"
const RIGHT = "right"
const CENTER = "center"
const DIRECTIONS = [LEFT, RIGHT, CENTER]

const VICTORY_POINT = "victory point"
const SHIELD = "shield"

const RESOURCES_KEY = {
  "C": CLAY,
  "O": ORE,
  "W": WOOD,
  "S": STONE,
  "G": GLASS,
  "L": LOOM,
  "P": PAPYRUS,
  "X": SHIELD,
  "$": COIN,
  "V": VICTORY_POINT,
  "#": TABLET,
  "&": COMPASS,
  "@": WHEEL,
  "<": LEFT,
  ">": RIGHT,
  "v": CENTER
}

const SECTORS = {
  PURPLE: "Guilds",
  BROWN : "Raw materials",
  GRAY : "Manufactured goods",
  BLUE : "Civilain",
  YELLOW : "Commercial",
  RED : "Military",
  GREEN : "Scientific"
}

const AGE_ONE_CARDS = [
  {"color": "brown", "name": "Lumber Yard", "resources": "W" },
  {"color": "brown", "name": "Stone Pit", "resources": "S" },
  {"color": "brown", "name": "Clay Pool", "resources": "C"  },
  {"color": "brown", "name": "Ore Vein", "resources": "O" },
  {"color": "brown", "name": "Tree Farm", "orResources": "WC", "cost":"$" },
  {"color": "brown", "name": "Excavation", "orResources": "SC", "cost":"$" },
  {"color": "brown", "name": "Clay Pit", "orResources": "CO", "cost":"$" },
  {"color": "brown", "name": "Timber Yard", "orResources": "SW", "cost":"$" },
  {"color": "brown", "name": "Forest Cave", "orResources": "WO", "cost":"$" },
  {"color": "brown", "name": "Mine", "orResources":"OS", "cost": "$" },
  {"color": "gray", "name": "Loom", "resources": "L" },
  {"color": "gray", "name": "Glassworks", "resources": "G" },
  {"color": "gray", "name": "Press", "resources": "P" },
  {"color": "blue", "name": "Pawnshop", "resources": "VVV" },
  {"color": "blue", "name": "Baths", "resources": "VVV", "cost": "S" },
  {"color": "blue", "name": "Altar", "resources": "VV" },
  {"color": "blue", "name": "Theater", "resources": "VV" },
  {"color": "yellow", "name": "Tavern", "resources": "$$$$$" },
  {"color": "yellow", "name": "East Trading Post", "direction": ">", "trade": "CSOW" },
  {"color": "yellow", "name": "West Trading Post", "direction": "<", "trade": "CSOW" },
  {"color": "yellow", "name": "Marketplace", "direction": "<>", "trade": "LGP" },
  {"color": "red", "name": "Stockade", "resources": "X", "cost": "W" },
  {"color": "red", "name": "Barracks", "resources": "X", "cost": "O" },
  {"color": "red", "name": "Guard Tower", "resources": "X", "cost": "C" },
  {"color": "green", "name": "Apothocary", "resources": "&", "cost": "L" },
  {"color": "green", "name": "Workshop", "resources": "@", "cost": "G" },
  {"color": "green", "name": "Scriptorium", "resources": "#", "cost": "P" }
]

const AGE_TWO_CARDS = [
  {"resources": "WW", "cost": "$", "name": "Sawmill", "color": "brown"},
  {"resources": "SS", "cost": "$", "name": "Quarry", "color": "brown"},
  {"resources": "CC", "cost": "$", "name": "Brickyard", "color": "brown"},
  {"resources": "OO", "cost": "$", "name": "Foundry", "color": "brown"},
  {"resources": "L", "name": "Loom", "color": "gray"},
  {"resources": "G", "name": "Glassworks", "color": "gray"},
  {"resources": "P", "name": "Press", "color": "gray"},
  {"freeIf": "Baths", "resources": "VVVVV", "cost": "SSS", "name": "Aquaduct", "color": "blue"},
  {"freeIf": "Altar", "resources": "VVV", "cost": "WCG", "name": "Temple", "color": "blue"},
  {"freeIf": "Theater", "resources": "VVVV", "cost": "WOO", "name": "Statue", "color": "blue"},
  {"freeIf": "Scriptorium", "resources": "VVVV", "cost": "CCL", "name": "Courthouse", "color": "blue"},
  {"freeIf": "E/W Trad Post", "orResources": "LGP", "cost": "CC", "name": "Forum", "color": "yellow"},
  {"freeIf": "Marketplace", "orResources": "CSOW", "cost": "WW", "name": "Caravansery", "color": "yellow"},
  {"resources": "$", "name": "Vineyard", "color": "yellow", "direction": "<v>", "dependency": "brown"},
  {"resources": "$$", "name": "Bazaar", "color": "yellow", "direction": "<v>", "dependency": "gray"},
  {"resources": "XX", "cost": "SSS", "name": "Walls", "color": "red"},
  {"resources": "XX", "cost": "WOO", "name": "Training Ground", "color": "red"},
  {"freeIf": "Apothocary", "resources": "XX", "cost": "OCW", "name": "Stables", "color": "red"},
  {"freeIf": "Workshop", "resources": "XX", "cost": "WWO", "name": "Archery Range", "color": "red"},
  {"freeIf": "Apothocary", "resources": "&", "cost": "OOG", "name": "Dispensary", "color": "green"},
  {"freeIf": "Workshop", "resources": "@", "cost": "CCP", "name": "Laboratory", "color": "green"},
  {"freeIf": "Scriptorium", "resources": "#", "cost": "SSL", "name": "Library", "color": "green"},
  {"resources": "#", "cost": "WP", "name": "School", "color": "green"}
]

const AGE_THREE_CARDS = [
  {"dependency": "brown", "direction": "<>", "color": "purple", "resources": "V", "cost": "OOCSW", "name": "Workers Guild"},
  {"dependency": "gray", "direction": "<>", "color": "purple", "resources": "VV", "cost": "OOSS", "name": "Craftsmen Guild"},
  {"dependency": "yellow", "direction": "<>", "color": "purple", "resources": "V", "cost": "LPG", "name": "Traders Guild"},
  {"dependency": "green", "direction": "<>", "color": "purple", "resources": "V", "cost": "CCCLP", "name": "Philosophers Guild"},
  {"dependency": "red", "direction": "<>", "color": "purple", "resources": "V", "cost": "CCCG", "name": "Spies Guild"},
  {"dependency": "-1X", "direction": "<>", "color": "purple", "resources": "V", "cost": "OOSL", "name": "Strategists Guild"},
  {"dependency": ["brown", "gray", "purple"], "direction": "v", "color": "purple", "resources": "V", "cost": "WWWPG", "name": "Ship-owners Guild"},
  {"direction": "<>", "color": "purple", "orResources": "&@#", "cost": "WWOOP", "name": "Scientists Guild"},
  {"dependency": "blue", "direction": "<>", "color": "purple", "resources": "V", "cost": "WWWSL", "name": "Magistrates Guild"},
  {"direction": "<>", "color": "purple", "resources": "V", "cost": "SSCCG", "name": "Builders Guild"},
  {"color": "blue", "freeIf": "Temple", "resources": "VVVVVVV", "cost": "CCOGPL", "name": "Pantheon"},
  {"color": "blue", "freeIf": "Statue", "resources": "VVVVV", "cost": "WCC", "name": "Gardens"},
  {"color": "blue", "resources": "VVVVVV", "cost": "GOSS", "name": "Town Hall"},
  {"color": "blue", "resources": "VVVVVVVV", "cost": "GPLCWOS", "name": "Palace"},
  {"color": "blue", "freeIf": "Library", "resources": "VVVVVV", "cost": "OSWW", "name": "Senate"},
  {"dependency": "brown", "color": "yellow", "freeIf": "Forum", "resources": "V$", "cost": "LOW", "name": "Haven"},
  {"dependency": "yellow", "color": "yellow", "freeIf": "Caravansery", "resources": "V$", "cost": "GS", "name": "Lighthouse"},
  {"dependency": "gray", "color": "yellow", "resources": "VV$$", "cost": "CCP", "name": "Chamber of Co"},
  {"dependency": "wonder", "color": "yellow", "freeIf": "Dispensary", "resources": "$$$V", "cost": "OSS", "name": "Arena"},
  {"color": "red", "freeIf": "Walls", "resources": "XXX", "cost": "SOOO", "name": "Fortifications"},
  {"color": "red", "freeIf": "Training Ground", "resources": "XXX", "cost": "SSSO", "name": "Circus"},
  {"color": "red", "resources": "XXX", "cost": "OWWL", "name": "Arsenal"},
  {"color": "red", "freeIf": "Laboratory", "resources": "XXX", "cost": "WCCCC", "name": "Siege Workshop"},
  {"color": "green", "freeIf": "Dispensary", "resources": "&", "cost": "CCLP", "name": "Lodge"},
  {"color": "green", "freeIf": "Laboratory", "resources": "@", "cost": "OOGL", "name": "Observatory"},
  {"color": "green", "freeIf": "Library", "resources": "#", "cost": "WWPG", "name": "University"},
  {"color": "green", "freeIf": "School", "resources": "&", "cost": "SSSG", "name": "Academy"},
  {"color": "green", "freeIf": "School", "resources": "@", "cost": "WPL", "name": "Study"}
]

const CARD_COUNTS = [
  {"playerCount": {"3": 1, "4": 2, "5": 2, "6": 2, "7": 2}, "name": "Lumber Yard"},
  {"playerCount": {"3": 1, "4": 1, "5": 2, "6": 2, "7": 2}, "name": "Stone Pit"},
  {"playerCount": {"3": 1, "4": 1, "5": 2, "6": 2, "7": 2}, "name": "Clay Pool"},
  {"playerCount": {"3": 1, "4": 2, "5": 2, "6": 2, "7": 2}, "name": "Ore Vein"},
  {"playerCount": {"3": 0, "4": 0, "5": 0, "6": 1, "7": 1}, "name": "Tree Farm"},
  {"playerCount": {"3": 0, "4": 1, "5": 1, "6": 1, "7": 1}, "name": "Excavation"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 1, "7": 1}, "name": "Clay Pit"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 1, "7": 1}, "name": "Timber Yard"},
  {"playerCount": {"3": 0, "4": 0, "5": 1, "6": 1, "7": 1}, "name": "Forest Cave"},
  {"playerCount": {"3": 0, "4": 0, "5": 0, "6": 1, "7": 1}, "name": "Mine"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 2, "7": 2}, "name": "Loom"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 2, "7": 2}, "name": "Glassworks"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 2, "7": 2}, "name": "Press"},
  {"playerCount": {"3": 0, "4": 1, "5": 1, "6": 1, "7": 2}, "name": "Pawnshop"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 1, "7": 2}, "name": "Baths"},
  {"playerCount": {"3": 1, "4": 1, "5": 2, "6": 2, "7": 2}, "name": "Altar"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 2, "7": 2}, "name": "Theater"},
  {"playerCount": {"3": 0, "4": 1, "5": 2, "6": 2, "7": 3}, "name": "Tavern"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 1, "7": 2}, "name": "East Trading Post"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 1, "7": 2}, "name": "West Trading Post"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 2, "7": 2}, "name": "Marketplace"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 1, "7": 2}, "name": "Stockade"},
  {"playerCount": {"3": 1, "4": 1, "5": 2, "6": 2, "7": 2}, "name": "Barracks"},
  {"playerCount": {"3": 1, "4": 2, "5": 2, "6": 2, "7": 2}, "name": "Guard Tower"},
  {"playerCount": {"3": 1, "4": 1, "5": 2, "6": 2, "7": 2}, "name": "Apothocary"},
  {"playerCount": {"3": 1, "4": 1, "5": 1, "6": 1, "7": 2}, "name": "Workshop"},
  {"playerCount": {"3": 1, "4": 2, "5": 2, "6": 2, "7": 2}, "name": "Scriptorium"}
]


// COLORS: COLORS,
//   MANUFACTURED_GOODS: MANUFACTURED_GOODS,
//   SCIENTESTS_GUILDS: SCIENTESTS_GUILDS,
//   ORE: ORE,
//   WOOD: WOOD,
//   CLAY: CLAY,
//   STONE: STONE,
//   GLASS: GLASS,
//   LOOM: LOOM,
//   PAPYRUS: PAPYRUS,
//   COIN: COIN,
//   TABLET: TABLET,
//   COMPASS: COMPASS,
//   WHEEL: WHEEL,
//   LEFT: LEFT,
//   RIGHT: RIGHT,
//   CENTER: CENTER,
//   DIRECTIONS: DIRECTIONS,
//   VICTORY_POINT: VICTORY_POINT,
//   RAW_GOODS: RAW_GOODS,
//   SHIELD: SHIELD,
//   RESOURCES_KEY: RESOURCES_KEY,
//   SECTORS: SECTORS,
//   AGE_ONE_CARDS: AGE_ONE_CARDS,
//   AGE_TWO_CARDS: AGE_TWO_CARDS,
//   AGE_THREE_CARDS: AGE_THREE_CARDS,
//   CARD_COUNTS: CARD_COUNTS
// const GAME_PIECES = {}

// const foo = "bar"
// export default foo
