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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
