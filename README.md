[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/data-fetch)

# BTFF

## How to use

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/master | tar -xz --strip=2 next.js-master/examples/data-fetch
cd data-fetch
```

Install it and run:

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Next.js was conceived to make it easy to create universal apps. That's why fetching data
on the server and the client when necessary it's so easy with Next.

Using `getInitialProps` we will fetch data in the server for SSR and then in the client only when the component is re-mounted but not in the first paint.

## What it's really used for

This is a simple application to bring in randomization techniques in order to decide Fantasy Football Draft Order. Really dumb stuff.

* Draft Results are determined by the 2017 Week 4 Preseason Game.*

By the selection above, the total number of points scored by those two teams combined will rank the players in order of which they will make their selections.
If by chance there are any ties, those within the tie have the opportunity to resolve in any creative way possible.
If this doesn't come to a resolution, another random ranking will determine those slots.
* Houston and Dallas were removed due to Hurricane Harvey