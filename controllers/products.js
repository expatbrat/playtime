const express = require('express');
const router = express.Router();
const Product = require('../models/storedata.js');
// const Time = require('../models/time.js');


router.get('/reset', (req, res) => {
  // console.log('test')
  console.log('reset hit');
  Product.remove({}, (error, allProducts) => {
    res.render(
      'reset.ejs',
      {
        product: allProducts
      }
    )
  })
})


router.get('/', (req, res) => {
      Product.find({}, (error, allProducts) => {
          res.render(
              'index.ejs',
              {
                  product: allProducts
              }
          );
      })
  });


router.get('/seed', async (req, res) => {
  var currentTime = new Date();
  var desiredTime = new Date(2015, 09, 21, 11, 29, 55)
  var difference = currentTime - desiredTime
  var actualDate = Date.parse(currentTime) - difference
  const newProducts =
  {
    timeLine: 'October 21st, 2015',
    timeOffset: difference,
    timeProducts: [
      {
        name: 'Betamax VCR',
        description: `Betamax was a rival to VHS, which would allow consumers to watch film media in their own home. It didn't sell well, and was abandoned long before its rival.`,
        img: '../images/beta.jpg',
        price: 2500,
        qty: 5
      }, {
        name: 'JVC Camcorder',
        description: 'The JVC camcorder was a brand of camcorder used by scientists around 1985',
        img: '../images/jvccamcorder.jpg',
        price: 1250,
        qty: 3
      }, {
        name: 'Frisbee',
        description: 'Frisbees were plastic flying discs invented in the 20th century as recreational items to throw at a target or for someone else to catch.',
        img: '../images/Frisbee.jpg',
        price: 300,
        qty: 25
      }, {
        name: 'a bust of John F. Kennedy',
        description: 'A bust of President Kennedy who we renamed Riverside Drive for.',
        img: 'https://vignette.wikia.nocookie.net/bttf/images/0/05/Kennedy.png/',
        price: 10000,
        qty: 1
      }, {
        name: 'Jaws NES game published by LFN',
        description: 'The Nintendo Entertainment System, or NES, was a video game console by Nintendo that was released in 1985. This Jaws title was the video game spin-off from the popular Steven Spielberg shark action movie released on June 20th, 1975.',
        img: '../images/jawsnes.jpg',
        price: 700,
        qty: 3
      }, {
        name: 'BurgerTime NES game published by Data East',
        description: 'BurgerTime (バーガータイム, Bāgātaimu) is a 1982 arcade game created by Data East initially for its DECO Cassette System. The player is chef Peter Pepper, who must walk over hamburger ingredients located across a maze of platforms while avoiding pursuing characters.',
        img: '../images/BurgerTime_arcadeflyer.png',
        price: 600,
        qty: 6
      }, {
        name: `National Lampoon's Animal House - VHS`,
        description: `National Lampoon's Animal House is a 1978 American comedy film directed by John Landis about a misfit group of fraternity members who challenge the autority of the dean of Faber College.`,
        img: '../images/Animalhouseposter.jpg',
        price: 550,
        qty: 10
      }, {
        name: `Dragnet - VHS`,
        description: `Dragnet is a 1987 American buddy cop comedy film, directed and co-written by Tom Mankiewicz in his directorial debut. Starring Dan Aykroyd and Tom Hanks, the film is based on the radio and television crime drama of the same name.`,
        img: '../images/dragnetvhs.jpg',
        price: 900,
        qty: 7
      }, {
        name: `Grays Sports Almanac`,
        description: `Now this has an interesting feature. It has a dust jacket. Books used to have these to protect the covers. Of course that was before they had dust-repllent paper.`,
        img: '../images/grayssportsalmanac.jpg',
        price: 550,
        qty: 1
      }, {
        name: `Black & Decker DustBuster`,
        description: `And if you're interested in dust, we have a quaint little piece from the 1980s. It's called a DustBuster.`,
        img: '../images/dustbuster.png',
        price: 6000,
        qty: 2
      }, {
        name: `Black & Decker Clothes Iron`,
        description: `A common household staple in the 80s. People used these to remove the wrinkles from their clothing back before wrickle resistant fabric.`,
        img: '../images/iron.jpg',
        price: 550,
        qty: 10
      }, {
        name: `a record player`,
        description: `A record player, also known as a phonograph or gramophone, was a device that could play back sound that was inscribed on a record.`,
        img: '../images/recordplayer.jpg',
        price: 600,
        qty: 2
      }, {
        name: `The President's Album`,
        description: `The President's Album was the story of the American Revolution narrated by Ronald Reagan, the 40th President of the United States. It was released in 1981.`,
        img: '../images/The_Presidents_Album.jpg',
        price: 1,
        qty: 9999
      }, {
        name: `Stand-up Reagan - VHS`,
        description: `From his very first day in office Ronald Reagan endeared himself to millions of Americans with his affable, fun-loving personality. Now, for the first time, his most humorous tales and most amusing anecdotes are combined on one delightfully entertaining DVD.`,
        img: '../images/Stand-Up_Reagan.jpg',
        price: .2,
        qty: 100000000
      }, {
        name: `a large bottle of Pepsi-Cola`,
        description: `Pepsi  dis a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893 by Caleb Bradham and introduced as Brad's Drink, it was renamed as Pepsi-Cola in 1898, and then shortened to Pepsi in 1961.`,
        img: '../images/pepsi.jpg',
        price: 9000,
        qty: 3
      }, {
        name: `Magnavox Weekender AM-62`,
        description: `The Magnavox Weekender AM-62 was a transistor radio released by Magnavox in 1963.`,
        img: '../images/Magnavox.jpg',
        price: 6420,
        qty: 1
      }, {
        name: `Super-8 Movie Project`,
        description: `The Magnavox Weekender AM-62 was a transistor radio released by Magnavox in 1963.`,
        img: '../images/super-8.jpg',
        price: 20000,
        qty: 4
      }, {
        name: `a lava lamp`,
        description: `A decorative piece from the 1980s, thought at the time to be romantic mood lighting.`,
        img: '../images/lavalamp.jpg',
        price: 4520,
        qty: 8
      }, {
        name: `1984 Macintosh computer`,
        description: `The Macintosh was introduced by a US$1.5 million Ridley Scott television commercial, "1984". It most notably aired during the third quarter of Super Bowl XVIII on January 22, 1984, and is now considered a "watershed event"[35] and a "masterpiece.`,
        img: '../images/mac1984.jpg',
        price: 450390,
        qty: 1
      }, {
        name: `a large plastic peanut`,
        description: `A large vintage Planters peanut from the 1980s.`,
        img: '../images/largepeanut.jpg',
        price: 450390,
        qty: 1
      }, {
        name: `a white and blue soap tureen`,
        description: `A popular way to store you soap in 1980s Art Deco bathrooms.`,
        img: '../images/soap.jpg',
        price: 40,
        qty: 1
      }, {
        name: `The Cardinal of the Kremlin by Tom Clancy`,
        description: `A classic thriller novela from the era starring the Jack Ryan character.`,
        img: '../images/cardinal.jpeg',
        price: 110,
        qty: 7
      }, {
        name: `Pac-Man Lunch Box`,
        description: `These boxes were for children to carry home-made lunches to school before we passed the "Meals For Students Act".`,
        img: '../images/pacman.jpg',
        price: 660,
        qty: 2
      }, {
        name: `Berenstain Bears Lunch Box`,
        description: `These boxes were for children to carry home-made lunches to school before we passed the "Meals For Students Act".`,
        img: '../images/bear.jpg',
        price: 250,
        qty: 4
      }, {
        name: `very rare smiley face from 1972`,
        description: `The Smiley has travelled far from its early 1960s origins, changing like a constantly mutating virus: from early-70s fad to late-80s acid house culture, from millennial txt option to serial killer signature and ubiquitous emoticon. While the origin of the design is contested, it seems that it first appeared during the early 1960s. In 1963 there was an American children's TV programme called The Funny Company, which featured a crude smiley face as a kids' club logo: it was shown on their caps, in the end titles and the final message, "Keep Smiling".`,
        img: '../images/smileyface.jpg',
        price: 30000,
        qty: 3
      }, {
        name: `Who Framed Roger Rabbit plush doll`,
        description: `A plush toy for children depicting the famous 1980s cartoon character from the hit film "Who Framed Roger Rabbit".`,
        img: '../images/roger.jpg',
        price: 21300,
        qty: 1
      }, {
        name: `Barbie Cool Times doll`,
        description: `Barbie is a fashion doll manufactured by the American toy company Mattel, Inc. and launched in March 1959. American businesswoman Ruth Handler is credited with the creation of the doll using a German doll called Bild Lilli as her inspiration. Mattel has sold over a billion Barbie dolls making it one of the most recognized toys of all time. This Cool Times Barbie Doll was original sold with a scooter and was one of the most popular dolls during the 1980s. Ken & Midge dolls were sold seperately. A highly collectible item for Barbie fans! https://www.youtube.com/watch?v=S0XSQ8CJLB4".`,
        img: '../images/barbiecooltimes.jpg',
        price: 1320,
        qty: 7
      }, {
        name: `Barbie Ken California doll`,
        description: `The most popular Ken doll of the 1980s. This was Ken's final face and body style before the break up with Barbie in February 14th, 2004. All models of Ken after 2011 had a new refreshed modern style making these older pieces valuable collector items.`,
        img: '../images/ken.jpg',
        price: 1320,
        qty: 7
      }, {
        name: `vintage 1982 Perrier water bottles`,
        description: `A popular activity in the 1980s was to purchase different types of water presumably due to a lack of nearby clean water supplies. This brand added carbonation as a marketing stunt to make the water appear cleaner and fresher.`,
        img: '../images/water.png',
        price: 290,
        qty: 6
      }, {
        name: `Guess two-tone blue denim jacket, complete with "Art in Revolution" button`,
        description: `This Guess jacket is mostly gray with blue panels at the top of the arms and shoulders, the collar, and pocket flaps. It has five brass snaps at the opening and two brass snaps on each of the front pockets. The waistband is elastic and there is a crease where the arms meet the back of the jacket. Popularly worn with the cuffs turned up on the arms. Also included is the "Art in Revolution" white button with the red triangle and black semi-circle. The design originates from an exhibition of Soviet art held in London in 1971.`,
        img: '../images/jacket.png',
        price: 55000,
        qty: 1
      }, {
        name: `Panasonic Toot-a-Loop Radio`,
        description: `The Toot-a-Loop Radio or Panasonic R-72 is a novelty radio made by Panasonic Japan in the early 1970s. This radio was designed to be wrapped around the wrist (provided your wrist wasn't too large). It also came with stickers for customizing the unit. Reception was the AM broadcast band only - no FM (the FM version of this radio is called RF-72). The radio was shaped something like a donut with the hole off-center. If twisted, the smaller half would pivot and the larger half would separate, forming an "S" shape. One side of the radio had a grille behind which sat the speaker. There was also a jack for a mono earplug. The tuner was located inside one of the "splits," so the radio had to be twisted into the "S" position in order to be tuned, but the volume control was on the outer diameter of the radio and could be adjusted regardless of whether the radio was twisted open or closed. The Toot-a-Loop came in several colors including white, red, blue, and yellow. It was also produced in two other colors orange and lime which were sold in Australia and New Zealand. Australian and New Zealand models had the badging National Panasonic and were advertised as a "Sing-O-Ring" radio. Also known by collectors as a bangle or wrist radio. The advertisement song went "It's an S it's an O it's a crazy radio! Toot a loop!".`,
        img: '../images/Tootaloop.jpg',
        price: 4520,
        qty: 1
      }, {
        name: `Sanyo Orange RPT 1200 Phonosphere`,
        description: `Up for sale we have a vintage 1970's Sanyo RPT 1200 "Phonosphere" record player/turntable radio. The Phonosphere measures approx. 14" tall by 13" wide by 13" deep, and can play 45 records with the somked plastic dome top open or closed and can play 12" lp's with the lid open. The 45 record adapter for the turntable looks like the top half of a disco ball and it has a light that you can turn on or off built in to shine on it for that disco effect. It also has an AM radio built into it.`,
        img: '../images/sanyo.jpg',
        price: 3600,
        qty: 1
      }, {
        name: `Jaws 2 - VHS`,
        description: `Jaws 2 is a 1978 American horror film[3] directed by Jeannot Szwarc and co-written by Carl Gottlieb. It is the sequel to Steven Spielberg's Jaws, and the second installment in the Jaws franchise.`,
        img: '../images/jaws2.jpg',
        price: 820,
        qty: 3
      }, {
        name: `R.C. Pro-Am for NES`,
        description: `R.C. Pro-Am is a racing video game developed by Rare. It was released for the Nintendo Entertainment System (NES) by Nintendo for North America in March 1988, and then in Europe on April 15 of the same year.`,
        img: '../images/rcproam.jpg',
        price: 670,
        qty: 6
      }, {
        name: `"Trust Me" Live Comedy Album by Jimmy Carter`,
        description: `Trust Me was a comedy vinyl record in which Hans Peterson did an impersonation of Jimmy Carter, the 39th President of the United States.`,
        img: '../images/carter.jpg',
        price: 670,
        qty: 6
      }
    ]}
    try {
      const seedItems = await Product.create(newProducts)
      res.redirect('/store')
    } catch (err) {
      res.send(err.message)
    }
  })

  router.get('/:id', (req, res) => {
      Product.findById(req.params.id, (error, foundProducts) => {
          res.render(
              'details.ejs',
              {
                  product: foundProducts
              }
          )
      })
  })


router.get('/', (req, res) => {
      Product.find({}, (error, allProducts) => {
          res.render(
              'index.ejs',
              {
                  product: allProducts
              }
          );
      })
  });



module.exports = router;
