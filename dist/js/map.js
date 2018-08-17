const mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff0000"
            },
            {
                "lightness": "75"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "56"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "lightness": "38"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "66"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "lightness": "40"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-4"
            },
            {
                "lightness": "57"
            },
            {
                "gamma": "6.33"
            },
            {
                "color": "#f3efe7"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#f5eaea"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#e7ffe9"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#c5cfd5"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

function initMap() {

    const myLatLng = new google.maps.LatLng(3.204, 106.748);

    // Create the map.
    const map = new google.maps.Map(document.getElementsByClassName('map')[0], {
        zoom: 4,
        center: myLatLng,
        styles: mapStyle
    });

    //define data
    const data = { "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates":  [ 100.54,13.747 ]
          },
          "properties": {
            "country":"Thailand",
            "name":"Bangkok",
            "description":"Our first taste of Asia! Temples, wet season, pad thai, fried rice, and tuk tuks!",
            "color":"FF6600"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates":  [ 98.991,18.794 ]
          },
          "properties": {
            "country":"Thailand",
            "name":"Chiang Mai",
            "description":"Took a night train from Bangkok to arrive here, the former capital of Thailand. The jungle-covered mountians were such an amazing view to wake up to in the morning. The Chaing Mai adventure included bathing elephants at an elephant sanctuary (p.s.a. Please do not ride elephants), finding a hidden temple with new friends from Holland, and cliff jumping at a local waterfall.",
            "color":"FF9F1C"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates":  [ 98.44,19.366 ]
          },
          "properties": {
            "country":"Thailand",
            "name":"Pai",
            "description":"Someone once described Pai as a tropical island in the mountains. The description is spot on. Jungles, waterfalls, winding roads, palm trees, sunshine, mangoes galore. How much we loved our tropical pailand!",
            "color":"FFBF69"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates":  [ 98.837,8.012 ]
          },
          "properties": {
            "country":"Thailand",
            "name":"Krabi",
            "description":"If Pai is a tropical island in the mountains, Railay Beach is mountains on a tropical island. With limestone cliffs, white-sand beaches, and water-front caves, it's a rock-climber's paradise. This peninsula has no roads, no cars, and Tonsai Beach (the beach next to Railay where we were staying) has practically no people. Just one \"Chill Out Bar\" with a fire dancing show and Jenga. Quite the combo. In our time here we packed in plenty of beach time, a full day of climbing, paddleboarding at (and after) sunset, and unexpectedly meeting monkeys on our jungle trek from Tonsai to Railay one afternoon.",
            "color":"FFFFCC"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates":  [ 101.713,3.156 ]
          },
          "properties": {
            "country":"Malaysia",
            "name":"Kuala Lumpur",
            "description":"The capital of Malaysia - and an Air Asia hub. We stopped here for an extended layover of 2 nights to explore the city. Which made us truly realize that we are not quite city people. But even a city holds treasure for those who don't find themselves at home in cities - we started our one full day at Batu Caves (biggest cave I've ever seen, complete with monkeys and a temple), followed by a lot of walking, escaping the heat a bit for lunch and ice cream at malls (now we know why it's called MALaysia), and a fountain light show at sundown near the famous Petronas Towers. ",
            "color":"FFFFFF"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates":  [ 116.066,-8.405 ]
          },
          "properties": {
            "country":"Indonesia",
            "name":"Lombok/Gili Islands",
            "description":"The Gilis - tiny islands off the coast of Lombok, Indonesia (not-as-tiny island next to Bali) - are known as one of the best scuba spots in the world. So if we're here, why not check out what makes this place so famous. While we weren't originally planning on diving at the start of our trip, I'm so glad we decided on getting scuba certified here. And if scuba's not your thing, there are plenty of other activities too - snorkeling, walking around the island (no cars, just bikes and horse-drawn buggies), catching live music on the main stretch (while watching the night divers crawl out of the water out of nowhere like aliens.) ",
            "color":"CBF3F0"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates":  [ 115.508,-8.536 ]
          },
          "properties": {
            "country":"Indonesia",
            "name":"Padang Bai",
            "description":"The main port on the east coast of Bali - woo we made it to Bali! Not much in Padang Bai itself, but definitely a hub for inland adventures. We used Padang Bai as a base for our sunrise hike up Mount Batur - a volcano on Bali. What an adventure: picked up at our hotel at 2am, fried bananas at 3am, hiking from 3:30-5:30am, sunrise, walking the crater rim (surrounded by more monkeys of course), and jogging down. Not often that you can say you hiked up and down a volcano before 9am!",
            "color":"2EC4B6"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates":  [ 115.446,-8.676 ]
          },
          "properties": {
            "country":"Indonesia",
            "name":"Nusa Lembongan",
            "description":"Another island, another chance for island activities! Nusa Lembongan, the middle of three islands off the coast of Bali, is known for it's surfing, scuba, and sunsets. Diving certification in hand, we signed up for our real \"test\" - diving in the open water without our Gili instructor watching over us (we still had a dive master though - definitely not diving alone anytime soon!). We were thrilled when 40-minutes into our 50-minute dive, we saw a huge manta ray float right past us like an eagle! Surfing the next morning on the reef break playground, followed by yoga, and incredible sunsets, filled out our time here.",
            "color":"009999"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates":  [ 115.28,-8.433 ]
          },
          "properties": {
            "country":"Indonesia",
            "name":"Ubud",
            "description":"For our last few days in Asia, we said bye to the beaches (until right before our flights, when we had to take a dip) and headed inland to Ubud. Even though our vacation featured quite a bit of monkeys already, we still couldn't pass up the opportunity to check out Ubud's famous Monkey Forest. Over 600 monkeys roaming free beside you, is not something you'll find in many other places in the world. The monkeys really seemed to like Rachel's backpack (and the Cliff bar wrappers in the side pocket), and... my head. Maybe the blonde hair is similar to a banana? That's my logic at least. The next day, we checked out the small-family owned Tegalalong Rice Terrace, a coffee and spice plantation, and spring water temple, Tirta Empel. ",
            "color":"006666"
          }
        }
      ]
    };

    // Load the stores GeoJSON onto the map.
    map.data.addGeoJson(data);


    //Define the custom marker icons, using the store's "category".
    map.data.setStyle(feature => {
        return {
            icon: {
                url: `images/bangkoktobali/icon_${feature.getProperty('color')}.png`,
                scaledSize: new google.maps.Size(20, 20),
            }
        };
    });

    const apiKey = 'AIzaSyC9oUJ-Q86DV0oaEDEjq91Kn6gqDdtf_qA';
    const infoWindow = new google.maps.InfoWindow();

    // Show the information for a store when its marker is clicked.
    map.data.addListener('click', event => {

        let country = event.feature.getProperty('country');
        let name = event.feature.getProperty('name');
        let color = event.feature.getProperty('color');
        let description = event.feature.getProperty('description');
        let position = event.feature.getGeometry().get();
        let content = `
      <div style="float:left; width:200px; height: 170px; margin-top:30px; background-color:${color}">
        <h2 style="margin-left:20px">${name}</h2>
        <p style="margin-left:20px">${country}</p>
</div>
      <div style="margin-left:220px; margin-bottom:20px;">
        <p style="margin-top:20px">${description}</p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
    `;

        infoWindow.setContent(content);
        infoWindow.setPosition(position);
        infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
        infoWindow.open(map);
    });
}
