const YELLOW =   "yellow"
const RED =      "red"
const BROWN =    "brown"
const BLUE =     "blue"
const GREEN =    "green"
const GRAY =     "gray"
const PURPLE =   "purple"

const COLORS = {
  YELLOW:   YELLOW,
  RED:      RED,
  BROWN:    BROWN,
  BLUE:     BLUE,
  GREEN:    GREEN,
  GRAY:     GRAY,
  PURPLE:   PURPLE
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
const SCIENTISTS_GUILDS = [TABLET, COMPASS, WHEEL]

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
  {"color": BROWN, "name": "Lumber Yard", "resources": "W" },
  {"color": BROWN, "name": "Stone Pit", "resources": "S" },
  {"color": BROWN, "name": "Clay Pool", "resources": "C"  },
  {"color": BROWN, "name": "Ore Vein", "resources": "O" },
  {"color": BROWN, "name": "Tree Farm", "orResources": "WC", "cost":"$" },
  {"color": BROWN, "name": "Excavation", "orResources": "SC", "cost":"$" },
  {"color": BROWN, "name": "Clay Pit", "orResources": "CO", "cost":"$" },
  {"color": BROWN, "name": "Timber Yard", "orResources": "SW", "cost":"$" },
  {"color": BROWN, "name": "Forest Cave", "orResources": "WO", "cost":"$" },
  {"color": BROWN, "name": "Mine", "orResources":"OS", "cost": "$" },
  {"color": GRAY, "name": "Loom", "resources": "L" },
  {"color": GRAY, "name": "Glassworks", "resources": "G" },
  {"color": GRAY, "name": "Press", "resources": "P" },
  {"color": BLUE, "name": "Pawnshop", "resources": "VVV" },
  {"color": BLUE, "name": "Baths", "resources": "VVV", "cost": "S" },
  {"color": BLUE, "name": "Altar", "resources": "VV" },
  {"color": BLUE, "name": "Theater", "resources": "VV" },
  {"color": YELLOW, "name": "Tavern", "resources": "$$$$$" },
  {"color": YELLOW, "name": "East Trading Post", "direction": ">", "trade": "CSOW" },
  {"color": YELLOW, "name": "West Trading Post", "direction": "<", "trade": "CSOW" },
  {"color": YELLOW, "name": "Marketplace", "direction": "<>", "trade": "LGP" },
  {"color": RED, "name": "Stockade", "resources": "X", "cost": "W" },
  {"color": RED, "name": "Barracks", "resources": "X", "cost": "O" },
  {"color": RED, "name": "Guard Tower", "resources": "X", "cost": "C" },
  {"color": GREEN, "name": "Apothocary", "resources": "&", "cost": "L" },
  {"color": GREEN, "name": "Workshop", "resources": "@", "cost": "G" },
  {"color": GREEN, "name": "Scriptorium", "resources": "#", "cost": "P" }
]

const AGE_TWO_CARDS = [
  {"resources": "WW", "cost": "$", "name": "Sawmill", "color": BROWN},
  {"resources": "SS", "cost": "$", "name": "Quarry", "color": BROWN},
  {"resources": "CC", "cost": "$", "name": "Brickyard", "color": BROWN},
  {"resources": "OO", "cost": "$", "name": "Foundry", "color": BROWN},
  {"resources": "L", "name": "Loom", "color": GRAY},
  {"resources": "G", "name": "Glassworks", "color": GRAY},
  {"resources": "P", "name": "Press", "color": GRAY},
  {"freeIf": "Baths", "resources": "VVVVV", "cost": "SSS", "name": "Aquaduct", "color": BLUE},
  {"freeIf": "Altar", "resources": "VVV", "cost": "WCG", "name": "Temple", "color": BLUE},
  {"freeIf": "Theater", "resources": "VVVV", "cost": "WOO", "name": "Statue", "color": BLUE},
  {"freeIf": "Scriptorium", "resources": "VVVV", "cost": "CCL", "name": "Courthouse", "color": BLUE},
  {"freeIf": "E/W Trad Post", "orResources": "LGP", "cost": "CC", "name": "Forum", "color": YELLOW},
  {"freeIf": "Marketplace", "orResources": "CSOW", "cost": "WW", "name": "Caravansery", "color": YELLOW},
  {"resources": "$", "name": "Vineyard", "color": YELLOW, "direction": "<v>", "dependency": BROWN},
  {"resources": "$$", "name": "Bazaar", "color": YELLOW, "direction": "<v>", "dependency": GRAY},
  {"resources": "XX", "cost": "SSS", "name": "Walls", "color": RED},
  {"resources": "XX", "cost": "WOO", "name": "Training Ground", "color": RED},
  {"freeIf": "Apothocary", "resources": "XX", "cost": "OCW", "name": "Stables", "color": RED},
  {"freeIf": "Workshop", "resources": "XX", "cost": "WWO", "name": "Archery Range", "color": RED},
  {"freeIf": "Apothocary", "resources": "&", "cost": "OOG", "name": "Dispensary", "color": GREEN},
  {"freeIf": "Workshop", "resources": "@", "cost": "CCP", "name": "Laboratory", "color": GREEN},
  {"freeIf": "Scriptorium", "resources": "#", "cost": "SSL", "name": "Library", "color": GREEN},
  {"resources": "#", "cost": "WP", "name": "School", "color": GREEN}
]

// Guild cards are chosen at random.  N players + 2
const AGE_THREE_CARDS = [
  {"color": BLUE, "freeIf": "Temple", "resources": "VVVVVVV", "cost": "CCOGPL", "name": "Pantheon"},
  {"color": BLUE, "freeIf": "Statue", "resources": "VVVVV", "cost": "WCC", "name": "Gardens"},
  {"color": BLUE, "resources": "VVVVVV", "cost": "GOSS", "name": "Town Hall"},
  {"color": BLUE, "resources": "VVVVVVVV", "cost": "GPLCWOS", "name": "Palace"},
  {"color": BLUE, "freeIf": "Library", "resources": "VVVVVV", "cost": "OSWW", "name": "Senate"},
  {"dependency": BROWN, "color": YELLOW, "freeIf": "Forum", "resources": "V$", "cost": "LOW", "name": "Haven"},
  {"dependency": YELLOW, "color": YELLOW, "freeIf": "Caravansery", "resources": "V$", "cost": "GS", "name": "Lighthouse"},
  {"dependency": GRAY, "color": YELLOW, "resources": "VV$$", "cost": "CCP", "name": "Chamber of Co"},
  {"dependency": "wonder", "color": YELLOW, "freeIf": "Dispensary", "resources": "$$$V", "cost": "OSS", "name": "Arena"},
  {"color": RED, "freeIf": "Walls", "resources": "XXX", "cost": "SOOO", "name": "Fortifications"},
  {"color": RED, "freeIf": "Training Ground", "resources": "XXX", "cost": "SSSO", "name": "Circus"},
  {"color": RED, "resources": "XXX", "cost": "OWWL", "name": "Arsenal"},
  {"color": RED, "freeIf": "Laboratory", "resources": "XXX", "cost": "WCCCC", "name": "Siege Workshop"},
  {"color": GREEN, "freeIf": "Dispensary", "resources": "&", "cost": "CCLP", "name": "Lodge"},
  {"color": GREEN, "freeIf": "Laboratory", "resources": "@", "cost": "OOGL", "name": "Observatory"},
  {"color": GREEN, "freeIf": "Library", "resources": "#", "cost": "WWPG", "name": "University"},
  {"color": GREEN, "freeIf": "School", "resources": "&", "cost": "SSSG", "name": "Academy"},
  {"color": GREEN, "freeIf": "School", "resources": "@", "cost": "WPL", "name": "Study"}
]

const GUILD_CARDS = [
  {"dependency": BROWN, "direction": "<>", "color": PURPLE, "resources": "V", "cost": "OOCSW", "name": "Workers Guild"},
  {"dependency": GRAY, "direction": "<>", "color": PURPLE, "resources": "VV", "cost": "OOSS", "name": "Craftsmen Guild"},
  {"dependency": YELLOW, "direction": "<>", "color": PURPLE, "resources": "V", "cost": "LPG", "name": "Traders Guild"},
  {"dependency": GREEN, "direction": "<>", "color": PURPLE, "resources": "V", "cost": "CCCLP", "name": "Philosophers Guild"},
  {"dependency": RED, "direction": "<>", "color": PURPLE, "resources": "V", "cost": "CCCG", "name": "Spies Guild"},
  {"dependency": "-1X", "direction": "<>", "color": PURPLE, "resources": "V", "cost": "OOSL", "name": "Strategists Guild"},
  {"dependency": [BROWN, GRAY, PURPLE], "direction": "v", "color": PURPLE, "resources": "V", "cost": "WWWPG", "name": "Ship-owners Guild"},
  {"direction": "<>", "color": PURPLE, "orResources": "&@#", "cost": "WWOOP", "name": "Scientists Guild"},
  {"dependency": BLUE, "direction": "<>", "color": PURPLE, "resources": "V", "cost": "WWWSL", "name": "Magistrates Guild"},
  {"direction": "<>", "color": PURPLE, "resources": "V", "cost": "SSCCG", "name": "Builders Guild"}
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

const GAME_PIECES = {
  "cardCounts": CARD_COUNTS,
  "guildCards": GUILD_CARDS,
  "ageThreeCards": AGE_THREE_CARDS,
  "ageTwoCards": AGE_TWO_CARDS,
  "ageOneCards": AGE_ONE_CARDS,
  "sectors": SECTORS,
  "resourcesKey": RESOURCES_KEY,
  "colors": COLORS,
  "rawGoods": RAW_GOODS,
  "manufacturedGoods": MANUFACTURED_GOODS,
  "scientistsGuilds": SCIENTISTS_GUILDS,
  "directions": DIRECTIONS,
  "coin": COIN
}

export default GAME_PIECES
