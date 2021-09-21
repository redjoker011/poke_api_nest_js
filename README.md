## Poke API built with Nest JS

## Description

Rest API for Poke API built with Nest JS

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Available API's

- / // Return Pokemon List

### Berries

This API returns list of berries

```
// curl localhost:3000/berries
{
  "count": 64,
  "next": "https://pokeapi.co/api/v2/berry?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "cheri",
      "url": "https://pokeapi.co/api/v2/berry/1/"
    },
    {
      "name": "chesto",
      "url": "https://pokeapi.co/api/v2/berry/2/"
    },
    {
      "name": "pecha",
      "url": "https://pokeapi.co/api/v2/berry/3/"
    },
    {
      "name": "rawst",
      "url": "https://pokeapi.co/api/v2/berry/4/"
    },
    {
      "name": "aspear",
      "url": "https://pokeapi.co/api/v2/berry/5/"
    },
    {
      "name": "leppa",
      "url": "https://pokeapi.co/api/v2/berry/6/"
    },
    {
      "name": "oran",
      "url": "https://pokeapi.co/api/v2/berry/7/"
    },
    {
      "name": "persim",
      "url": "https://pokeapi.co/api/v2/berry/8/"
    },
    {
      "name": "lum",
      "url": "https://pokeapi.co/api/v2/berry/9/"
    },
    {
      "name": "sitrus",
      "url": "https://pokeapi.co/api/v2/berry/10/"
    },
    {
      "name": "figy",
      "url": "https://pokeapi.co/api/v2/berry/11/"
    },
    {
      "name": "wiki",
      "url": "https://pokeapi.co/api/v2/berry/12/"
    },
    {
      "name": "mago",
      "url": "https://pokeapi.co/api/v2/berry/13/"
    },
    {
      "name": "aguav",
      "url": "https://pokeapi.co/api/v2/berry/14/"
    },
    {
      "name": "iapapa",
      "url": "https://pokeapi.co/api/v2/berry/15/"
    },
    {
      "name": "razz",
      "url": "https://pokeapi.co/api/v2/berry/16/"
    },
    {
      "name": "bluk",
      "url": "https://pokeapi.co/api/v2/berry/17/"
    },
    {
      "name": "nanab",
      "url": "https://pokeapi.co/api/v2/berry/18/"
    },
    {
      "name": "wepear",
      "url": "https://pokeapi.co/api/v2/berry/19/"
    },
    {
      "name": "pinap",
      "url": "https://pokeapi.co/api/v2/berry/20/"
    }
  ]
}

```

For pagination just pass limit and offset params as query parameters

```
// curl "localhost:3000/berries?limit=10&offset=10"
{
  "count": 64,
  "next": "https://pokeapi.co/api/v2/berry?offset=20&limit=10",
  "previous": "https://pokeapi.co/api/v2/berry?offset=0&limit=10",
  "results": [
    {
      "name": "figy",
      "url": "https://pokeapi.co/api/v2/berry/11/"
    },
    {
      "name": "wiki",
      "url": "https://pokeapi.co/api/v2/berry/12/"
    },
    {
      "name": "mago",
      "url": "https://pokeapi.co/api/v2/berry/13/"
    },
    {
      "name": "aguav",
      "url": "https://pokeapi.co/api/v2/berry/14/"
    },
    {
      "name": "iapapa",
      "url": "https://pokeapi.co/api/v2/berry/15/"
    },
    {
      "name": "razz",
      "url": "https://pokeapi.co/api/v2/berry/16/"
    },
    {
      "name": "bluk",
      "url": "https://pokeapi.co/api/v2/berry/17/"
    },
    {
      "name": "nanab",
      "url": "https://pokeapi.co/api/v2/berry/18/"
    },
    {
      "name": "wepear",
      "url": "https://pokeapi.co/api/v2/berry/19/"
    },
    {
      "name": "pinap",
      "url": "https://pokeapi.co/api/v2/berry/20/"
    }
  ]
}
```

### Specific Berry Detail

This endpoint returns details for specific berry

```
curl "localhost:3000/berries/bluk"
{
  "firmness": {
    "name": "soft",
    "url": "https://pokeapi.co/api/v2/berry-firmness/2/"
  },
  "flavors": [
    {
      "flavor": {
        "name": "spicy",
        "url": "https://pokeapi.co/api/v2/berry-flavor/1/"
      },
      "potency": 0
    },
    {
      "flavor": {
        "name": "dry",
        "url": "https://pokeapi.co/api/v2/berry-flavor/2/"
      },
      "potency": 10
    },
    {
      "flavor": {
        "name": "sweet",
        "url": "https://pokeapi.co/api/v2/berry-flavor/3/"
      },
      "potency": 10
    },
    {
      "flavor": {
        "name": "bitter",
        "url": "https://pokeapi.co/api/v2/berry-flavor/4/"
      },
      "potency": 0
    },
    {
      "flavor": {
        "name": "sour",
        "url": "https://pokeapi.co/api/v2/berry-flavor/5/"
      },
      "potency": 0
    }
  ],
  "growth_time": 2,
  "id": 17,
  "item": {
    "name": "bluk-berry",
    "url": "https://pokeapi.co/api/v2/item/142/"
  },
  "max_harvest": 10,
  "name": "bluk",
  "natural_gift_power": 70,
  "natural_gift_type": {
    "name": "fire",
    "url": "https://pokeapi.co/api/v2/type/10/"
  },
  "size": 108,
  "smoothness": 20,
  "soil_dryness": 35
}
```

### Items

This API returns list of items

```
// curl localhost:3000/items
{
  "count": 954,
  "next": "https://pokeapi.co/api/v2/item?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "master-ball",
      "url": "https://pokeapi.co/api/v2/item/1/"
    },
    {
      "name": "ultra-ball",
      "url": "https://pokeapi.co/api/v2/item/2/"
    },
    {
      "name": "great-ball",
      "url": "https://pokeapi.co/api/v2/item/3/"
    },
    {
      "name": "poke-ball",
      "url": "https://pokeapi.co/api/v2/item/4/"
    },
    {
      "name": "safari-ball",
      "url": "https://pokeapi.co/api/v2/item/5/"
    },
    {
      "name": "net-ball",
      "url": "https://pokeapi.co/api/v2/item/6/"
    },
    {
      "name": "dive-ball",
      "url": "https://pokeapi.co/api/v2/item/7/"
    },
    {
      "name": "nest-ball",
      "url": "https://pokeapi.co/api/v2/item/8/"
    },
    {
      "name": "repeat-ball",
      "url": "https://pokeapi.co/api/v2/item/9/"
    },
    {
      "name": "timer-ball",
      "url": "https://pokeapi.co/api/v2/item/10/"
    },
    {
      "name": "luxury-ball",
      "url": "https://pokeapi.co/api/v2/item/11/"
    },
    {
      "name": "premier-ball",
      "url": "https://pokeapi.co/api/v2/item/12/"
    },
    {
      "name": "dusk-ball",
      "url": "https://pokeapi.co/api/v2/item/13/"
    },
    {
      "name": "heal-ball",
      "url": "https://pokeapi.co/api/v2/item/14/"
    },
    {
      "name": "quick-ball",
      "url": "https://pokeapi.co/api/v2/item/15/"
    },
    {
      "name": "cherish-ball",
      "url": "https://pokeapi.co/api/v2/item/16/"
    },
    {
      "name": "potion",
      "url": "https://pokeapi.co/api/v2/item/17/"
    },
    {
      "name": "antidote",
      "url": "https://pokeapi.co/api/v2/item/18/"
    },
    {
      "name": "burn-heal",
      "url": "https://pokeapi.co/api/v2/item/19/"
    },
    {
      "name": "ice-heal",
      "url": "https://pokeapi.co/api/v2/item/20/"
    }
  ]
}
```

For pagination just pass limit and offset params as query parameters

```
// curl "localhost:3000/items?limit=10&offset=10"
{
  "count": 954,
  "next": "https://pokeapi.co/api/v2/item?offset=20&limit=10",
  "previous": "https://pokeapi.co/api/v2/item?offset=0&limit=10",
  "results": [
    {
      "name": "luxury-ball",
      "url": "https://pokeapi.co/api/v2/item/11/"
    },
    {
      "name": "premier-ball",
      "url": "https://pokeapi.co/api/v2/item/12/"
    },
    {
      "name": "dusk-ball",
      "url": "https://pokeapi.co/api/v2/item/13/"
    },
    {
      "name": "heal-ball",
      "url": "https://pokeapi.co/api/v2/item/14/"
    },
    {
      "name": "quick-ball",
      "url": "https://pokeapi.co/api/v2/item/15/"
    },
    {
      "name": "cherish-ball",
      "url": "https://pokeapi.co/api/v2/item/16/"
    },
    {
      "name": "potion",
      "url": "https://pokeapi.co/api/v2/item/17/"
    },
    {
      "name": "antidote",
      "url": "https://pokeapi.co/api/v2/item/18/"
    },
    {
      "name": "burn-heal",
      "url": "https://pokeapi.co/api/v2/item/19/"
    },
    {
      "name": "ice-heal",
      "url": "https://pokeapi.co/api/v2/item/20/"
    }
  ]
}
```

### Specific Berry Detail

This endpoint returns details for specific berry

```
curl "localhost:3000/items/master-ball"
{
  "attributes": [
    {
      "name": "countable",
      "url": "https://pokeapi.co/api/v2/item-attribute/1/"
    },
    {
      "name": "consumable",
      "url": "https://pokeapi.co/api/v2/item-attribute/2/"
    },
    {
      "name": "usable-in-battle",
      "url": "https://pokeapi.co/api/v2/item-attribute/4/"
    },
    {
      "name": "holdable",
      "url": "https://pokeapi.co/api/v2/item-attribute/5/"
    }
  ],
  "baby_trigger_for": null,
  "category": {
    "name": "standard-balls",
    "url": "https://pokeapi.co/api/v2/item-category/34/"
  },
  "cost": 0,
  "effect_entries": [
    {
      "effect": "Used in battle\n:   Catches a wild Pokémon without fail.\n\n    If used in a trainer battle, nothing happens and the ball is lost.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "short_effect": "Catches a wild Pokémon every time."
    }
  ],
  "flavor_text_entries": [
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best BALL that\ncatches a POKéMON\nwithout fail.",
      "version_group": {
        "name": "ruby-sapphire",
        "url": "https://pokeapi.co/api/v2/version-group/5/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best BALL that\ncatches a POKéMON\nwithout fail.",
      "version_group": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version-group/6/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best BALL with the ultimate\nperformance. It will catch any wild\nPOKéMON without fail.",
      "version_group": {
        "name": "firered-leafgreen",
        "url": "https://pokeapi.co/api/v2/version-group/7/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.",
      "version_group": {
        "name": "diamond-pearl",
        "url": "https://pokeapi.co/api/v2/version-group/8/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.",
      "version_group": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version-group/9/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.",
      "version_group": {
        "name": "heartgold-soulsilver",
        "url": "https://pokeapi.co/api/v2/version-group/10/"
      }
    },
    {
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "text": "Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un\nPokémon sauvage.",
      "version_group": {
        "name": "black-white",
        "url": "https://pokeapi.co/api/v2/version-group/11/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.",
      "version_group": {
        "name": "black-white",
        "url": "https://pokeapi.co/api/v2/version-group/11/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best Ball with the ultimate level of\nperformance. It will catch any wild\nPokémon without fail.",
      "version_group": {
        "name": "black-2-white-2",
        "url": "https://pokeapi.co/api/v2/version-group/14/"
      }
    },
    {
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "text": "やせいの　ポケモンを　かならず\nつかまえることが　できる\nさいこう　せいのうの　ボール。",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      }
    },
    {
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "text": "야생 포켓몬을 반드시\n잡을 수 있는\n최고 성능의 볼.",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      }
    },
    {
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "text": "Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un Pokémon\nsauvage.",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      }
    },
    {
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "text": "Der beste Ball! Damit fängst du garantiert jedes\nwilde Pokémon.",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      }
    },
    {
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "text": "La Poké Ball definitiva. Atrapa cualquier Pokémon\nsalvaje y no falla nunca.",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      }
    },
    {
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "text": "La Poké Ball dalle prestazioni migliori:\ncattura qualsiasi Pokémon selvatico senza\nmai fallire.",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best Poké Ball with the ultimate\nlevel of performance. With it, you will\ncatch any wild Pokémon without fail.",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      }
    },
    {
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "text": "野生の　ポケモンを　必ず\n捕まえることが　できる\n最高　性能の　ボール。",
      "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
      }
    },
    {
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "text": "やせいの　ポケモンを　かならず\nつかまえることが　できる\nさいこう　せいのうの　ボール。",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "text": "야생 포켓몬을 반드시\n잡을 수 있는\n최고 성능의 볼.",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "text": "性能最好的球。\n必定能捉到野生寶可夢。",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "text": "Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un Pokémon\nsauvage.",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "text": "Der beste Ball! Damit fängst du garantiert jedes\nwilde Pokémon.",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "text": "La Poké Ball definitiva. Atrapa cualquier Pokémon\nsalvaje y no falla nunca.",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "text": "La Poké Ball dalle prestazioni migliori: cattura\nqualsiasi Pokémon selvatico senza mai fallire.",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best Poké Ball with the ultimate level of\nperformance. With it, you will catch any wild\nPokémon without fail.",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "text": "野生の　ポケモンを　必ず\n捕まえることが　できる\n最高　性能の　ボール。",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "text": "必定能捉到野生宝可梦的，\n性能最好的球。",
      "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
      }
    },
    {
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "text": "やせいの　ポケモンを　かならず\nつかまえることが　できる\nさいこう　せいのうの　ボール。",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    },
    {
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "text": "야생 포켓몬을 반드시\n잡을 수 있는\n최고 성능의 볼.",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    },
    {
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "text": "性能最好的球。\n必定能捉到野生寶可夢。",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    },
    {
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "text": "Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un Pokémon\nsauvage.",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    },
    {
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "text": "Der beste Ball! Damit fängst du garantiert jedes\nwilde Pokémon.",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    },
    {
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "text": "La Poké Ball definitiva. Atrapa cualquier Pokémon\nsalvaje y no falla nunca.",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    },
    {
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "text": "La Poké Ball dalle prestazioni migliori: cattura\nqualsiasi Pokémon selvatico senza mai fallire.",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "text": "The best Poké Ball with the ultimate level of\nperformance. With it, you will catch any wild\nPokémon without fail.",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    },
    {
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "text": "野生の　ポケモンを　必ず\n捕まえることが　できる\n最高　性能の　ボール。",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    },
    {
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "text": "必定能捉到野生宝可梦的，\n性能最好的球。",
      "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
      }
    }
  ],
  "fling_effect": null,
  "fling_power": null,
  "game_indices": [
    {
      "game_index": 1,
      "generation": {
        "name": "generation-iii",
        "url": "https://pokeapi.co/api/v2/generation/3/"
      }
    },
    {
      "game_index": 1,
      "generation": {
        "name": "generation-iv",
        "url": "https://pokeapi.co/api/v2/generation/4/"
      }
    },
    {
      "game_index": 1,
      "generation": {
        "name": "generation-v",
        "url": "https://pokeapi.co/api/v2/generation/5/"
      }
    },
    {
      "game_index": 1,
      "generation": {
        "name": "generation-vi",
        "url": "https://pokeapi.co/api/v2/generation/6/"
      }
    },
    {
      "game_index": 1,
      "generation": {
        "name": "generation-vii",
        "url": "https://pokeapi.co/api/v2/generation/7/"
      }
    }
  ],
  "held_by_pokemon": [],
  "id": 1,
  "machines": [],
  "name": "master-ball",
  "names": [
    {
      "language": {
        "name": "ja-Hrkt",
        "url": "https://pokeapi.co/api/v2/language/1/"
      },
      "name": "マスターボール"
    },
    {
      "language": {
        "name": "ko",
        "url": "https://pokeapi.co/api/v2/language/3/"
      },
      "name": "마스터볼"
    },
    {
      "language": {
        "name": "zh-Hant",
        "url": "https://pokeapi.co/api/v2/language/4/"
      },
      "name": "大師球"
    },
    {
      "language": {
        "name": "fr",
        "url": "https://pokeapi.co/api/v2/language/5/"
      },
      "name": "Master Ball"
    },
    {
      "language": {
        "name": "de",
        "url": "https://pokeapi.co/api/v2/language/6/"
      },
      "name": "Meisterball"
    },
    {
      "language": {
        "name": "es",
        "url": "https://pokeapi.co/api/v2/language/7/"
      },
      "name": "Master Ball"
    },
    {
      "language": {
        "name": "it",
        "url": "https://pokeapi.co/api/v2/language/8/"
      },
      "name": "Master Ball"
    },
    {
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      },
      "name": "Master Ball"
    },
    {
      "language": {
        "name": "ja",
        "url": "https://pokeapi.co/api/v2/language/11/"
      },
      "name": "マスターボール"
    },
    {
      "language": {
        "name": "zh-Hans",
        "url": "https://pokeapi.co/api/v2/language/12/"
      },
      "name": "大师球"
    }
  ],
  "sprites": {
    "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"
  }
}
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
