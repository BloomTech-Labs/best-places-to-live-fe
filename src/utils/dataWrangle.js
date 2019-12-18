const axios = require("axios");
const fs = require("fs");

/* Getting correct image urls' from teleport API data to send to our BE - Sorry about the many lines */

let teleportData = [
  {
    href: "https://api.teleport.org/api/urban_areas/slug:aarhus/",
    name: "Aarhus"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:adelaide/",
    name: "Adelaide"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:albuquerque/",
    name: "Albuquerque"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:almaty/",
    name: "Almaty"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:amsterdam/",
    name: "Amsterdam"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:anchorage/",
    name: "Anchorage"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:andorra/",
    name: "Andorra"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:ankara/",
    name: "Ankara"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:asheville/",
    name: "Asheville"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:asuncion/",
    name: "Asuncion"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:athens/",
    name: "Athens"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:atlanta/",
    name: "Atlanta"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:auckland/",
    name: "Auckland"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:austin/",
    name: "Austin"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:baku/", name: "Baku" },
  { href: "https://api.teleport.org/api/urban_areas/slug:bali/", name: "Bali" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:baltimore/",
    name: "Baltimore"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bangkok/",
    name: "Bangkok"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:barcelona/",
    name: "Barcelona"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:beijing/",
    name: "Beijing"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:beirut/",
    name: "Beirut"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:belfast/",
    name: "Belfast"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:belgrade/",
    name: "Belgrade"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:belize-city/",
    name: "Belize City"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bengaluru/",
    name: "Bengaluru"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bergen/",
    name: "Bergen"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:berlin/",
    name: "Berlin"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:bern/", name: "Bern" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bilbao/",
    name: "Bilbao"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:birmingham/",
    name: "Birmingham"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:birmingham-al/",
    name: "Birmingham, AL"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bogota/",
    name: "Bogota"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:boise/",
    name: "Boise"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bologna/",
    name: "Bologna"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bordeaux/",
    name: "Bordeaux"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:boston/",
    name: "Boston"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:boulder/",
    name: "Boulder"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bozeman/",
    name: "Bozeman"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bratislava/",
    name: "Bratislava"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:brighton/",
    name: "Brighton"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:brisbane/",
    name: "Brisbane"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bristol/",
    name: "Bristol"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:brno/", name: "Brno" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:brussels/",
    name: "Brussels"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:bucharest/",
    name: "Bucharest"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:budapest/",
    name: "Budapest"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:buenos-aires/",
    name: "Buenos Aires"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:buffalo/",
    name: "Buffalo"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:cairo/",
    name: "Cairo"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:calgary/",
    name: "Calgary"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:cambridge/",
    name: "Cambridge"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:cape-town/",
    name: "Cape Town"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:caracas/",
    name: "Caracas"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:cardiff/",
    name: "Cardiff"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:casablanca/",
    name: "Casablanca"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:charleston/",
    name: "Charleston"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:charlotte/",
    name: "Charlotte"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:chattanooga/",
    name: "Chattanooga"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:chennai/",
    name: "Chennai"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:chiang-mai/",
    name: "Chiang Mai"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:chicago/",
    name: "Chicago"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:chisinau/",
    name: "Chisinau"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:christchurch/",
    name: "Christchurch"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:cincinnati/",
    name: "Cincinnati"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:cleveland/",
    name: "Cleveland"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:cluj-napoca/",
    name: "Cluj-Napoca"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:cologne/",
    name: "Cologne"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:colorado-springs/",
    name: "Colorado Springs"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:columbus/",
    name: "Columbus"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:copenhagen/",
    name: "Copenhagen"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:cork/", name: "Cork" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:curitiba/",
    name: "Curitiba"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:dallas/",
    name: "Dallas"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:dar-es-salaam/",
    name: "Dar es Salaam"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:delhi/",
    name: "Delhi"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:denver/",
    name: "Denver"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:des-moines/",
    name: "Des Moines"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:detroit/",
    name: "Detroit"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:doha/", name: "Doha" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:dresden/",
    name: "Dresden"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:dubai/",
    name: "Dubai"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:dublin/",
    name: "Dublin"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:dusseldorf/",
    name: "Dusseldorf"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:edinburgh/",
    name: "Edinburgh"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:edmonton/",
    name: "Edmonton"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:eindhoven/",
    name: "Eindhoven"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:eugene/",
    name: "Eugene"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:florence/",
    name: "Florence"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:florianopolis/",
    name: "Florianopolis"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:fort-collins/",
    name: "Fort Collins"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:frankfurt/",
    name: "Frankfurt"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:fukuoka/",
    name: "Fukuoka"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:gaillimh/",
    name: "Galway"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:gdansk/",
    name: "Gdansk"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:geneva/",
    name: "Geneva"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:gibraltar/",
    name: "Gibraltar"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:glasgow/",
    name: "Glasgow"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:gothenburg/",
    name: "Gothenburg"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:grenoble/",
    name: "Grenoble"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:guadalajara/",
    name: "Guadalajara"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:guatemala-city/",
    name: "Guatemala City"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:halifax/",
    name: "Halifax"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:hamburg/",
    name: "Hamburg"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:hannover/",
    name: "Hannover"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:havana/",
    name: "Havana"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:helsinki/",
    name: "Helsinki"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:ho-chi-minh-city/",
    name: "Ho Chi Minh City"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:hong-kong/",
    name: "Hong Kong"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:honolulu/",
    name: "Honolulu"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:houston/",
    name: "Houston"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:hyderabad/",
    name: "Hyderabad"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:indianapolis/",
    name: "Indianapolis"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:innsbruck/",
    name: "Innsbruck"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:istanbul/",
    name: "Istanbul"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:jacksonville/",
    name: "Jacksonville"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:jakarta/",
    name: "Jakarta"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:johannesburg/",
    name: "Johannesburg"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:kansas-city/",
    name: "Kansas City"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:karlsruhe/",
    name: "Karlsruhe"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:kathmandu/",
    name: "Kathmandu"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:kiev/", name: "Kiev" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:kingston/",
    name: "Kingston"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:knoxville/",
    name: "Knoxville"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:krakow/",
    name: "Krakow"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:kuala-lumpur/",
    name: "Kuala Lumpur"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:kyoto/",
    name: "Kyoto"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:lagos/",
    name: "Lagos"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:la-paz/",
    name: "La Paz"
  },
  {
    href:
      "https://api.teleport.org/api/urban_areas/slug:las-palmas-de-gran-canaria/",
    name: "Las Palmas de Gran Canaria"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:las-vegas/",
    name: "Las Vegas"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:lausanne/",
    name: "Lausanne"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:leeds/",
    name: "Leeds"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:leipzig/",
    name: "Leipzig"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:lille/",
    name: "Lille"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:lima/", name: "Lima" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:lisbon/",
    name: "Lisbon"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:liverpool/",
    name: "Liverpool"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:ljubljana/",
    name: "Ljubljana"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:london/",
    name: "London"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:los-angeles/",
    name: "Los Angeles"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:louisville/",
    name: "Louisville"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:luxembourg/",
    name: "Luxembourg"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:lviv/", name: "Lviv" },
  { href: "https://api.teleport.org/api/urban_areas/slug:lyon/", name: "Lyon" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:madison/",
    name: "Madison"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:madrid/",
    name: "Madrid"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:malaga/",
    name: "Malaga"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:malmo/",
    name: "Malmo"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:managua/",
    name: "Managua"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:manchester/",
    name: "Manchester"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:manila/",
    name: "Manila"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:marseille/",
    name: "Marseille"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:medellin/",
    name: "Medellin"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:melbourne/",
    name: "Melbourne"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:memphis/",
    name: "Memphis"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:mexico-city/",
    name: "Mexico City"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:miami/",
    name: "Miami"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:milan/",
    name: "Milan"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:milwaukee/",
    name: "Milwaukee"
  },
  {
    href:
      "https://api.teleport.org/api/urban_areas/slug:minneapolis-saint-paul/",
    name: "Minneapolis-Saint Paul"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:minsk/",
    name: "Minsk"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:montevideo/",
    name: "Montevideo"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:montreal/",
    name: "Montreal"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:moscow/",
    name: "Moscow"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:mumbai/",
    name: "Mumbai"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:munich/",
    name: "Munich"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:nairobi/",
    name: "Nairobi"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:nantes/",
    name: "Nantes"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:naples/",
    name: "Naples"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:nashville/",
    name: "Nashville"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:new-orleans/",
    name: "New Orleans"
  },
  {
    href: "https:q9//api.teleport.org/api/urban_areas/slug:new-york/",
    name: "New York"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:nice/", name: "Nice" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:nicosia/",
    name: "Nicosia"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:oklahoma-city/",
    name: "Oklahoma City"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:omaha/",
    name: "Omaha"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:orlando/",
    name: "Orlando"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:osaka/",
    name: "Osaka"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:oslo/", name: "Oslo" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:ottawa/",
    name: "Ottawa"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:oulu/", name: "Oulu" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:oxford/",
    name: "Oxford"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:palo-alto/",
    name: "Palo Alto"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:panama/",
    name: "Panama"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:paris/",
    name: "Paris"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:perth/",
    name: "Perth"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:philadelphia/",
    name: "Philadelphia"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:phnom-penh/",
    name: "Phnom Penh"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:phoenix/",
    name: "Phoenix"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:phuket/",
    name: "Phuket"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:pittsburgh/",
    name: "Pittsburgh"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:portland-me/",
    name: "Portland, ME"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:portland-or/",
    name: "Portland, OR"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:porto/",
    name: "Porto"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:porto-alegre/",
    name: "Porto Alegre"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:prague/",
    name: "Prague"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:providence/",
    name: "Providence"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:quebec/",
    name: "Quebec"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:quito/",
    name: "Quito"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:raleigh/",
    name: "Raleigh"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:reykjavik/",
    name: "Reykjavik"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:richmond/",
    name: "Richmond"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:riga/", name: "Riga" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:rio-de-janeiro/",
    name: "Rio De Janeiro"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:riyadh/",
    name: "Riyadh"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:rochester/",
    name: "Rochester"
  },
  { href: "https://api.teleport.org/api/urban_areas/slug:rome/", name: "Rome" },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:rotterdam/",
    name: "Rotterdam"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:saint-petersburg/",
    name: "Saint Petersburg"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:salt-lake-city/",
    name: "Salt Lake City"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:san-antonio/",
    name: "San Antonio"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:san-diego/",
    name: "San Diego"
  },
  {
    href:
      "https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/",
    name: "San Francisco Bay Area"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:san-jose/",
    name: "San Jose"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:san-juan/",
    name: "San Juan"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:san-luis-obispo/",
    name: "San Luis Obispo"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:san-salvador/",
    name: "San Salvador"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:santiago/",
    name: "Santiago"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:santo-domingo/",
    name: "Santo Domingo"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:sao-paulo/",
    name: "Sao Paulo"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:sarajevo/",
    name: "Sarajevo"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:saskatoon/",
    name: "Saskatoon"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:seattle/",
    name: "Seattle"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:seoul/",
    name: "Seoul"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:seville/",
    name: "Seville"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:shanghai/",
    name: "Shanghai"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:singapore/",
    name: "Singapore"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:skopje/",
    name: "Skopje"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:sofia/",
    name: "Sofia"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:st-louis/",
    name: "St. Louis"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:stockholm/",
    name: "Stockholm"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:stuttgart/",
    name: "Stuttgart"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:sydney/",
    name: "Sydney"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:taipei/",
    name: "Taipei"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tallinn/",
    name: "Tallinn"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/",
    name: "Tampa Bay Area"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tampere/",
    name: "Tampere"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tartu/",
    name: "Tartu"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tashkent/",
    name: "Tashkent"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tbilisi/",
    name: "Tbilisi"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tehran/",
    name: "Tehran"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tel-aviv/",
    name: "Tel Aviv"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:the-hague/",
    name: "The Hague"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:thessaloniki/",
    name: "Thessaloniki"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tokyo/",
    name: "Tokyo"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:toronto/",
    name: "Toronto"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:toulouse/",
    name: "Toulouse"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:tunis/",
    name: "Tunis"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:turin/",
    name: "Turin"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:turku/",
    name: "Turku"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:uppsala/",
    name: "Uppsala"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:utrecht/",
    name: "Utrecht"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:valencia/",
    name: "Valencia"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:valletta/",
    name: "Valletta"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:vancouver/",
    name: "Vancouver"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:victoria/",
    name: "Victoria"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:vienna/",
    name: "Vienna"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:vilnius/",
    name: "Vilnius"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:warsaw/",
    name: "Warsaw"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:washington-dc/",
    name: "Washington, D.C."
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:wellington/",
    name: "Wellington"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:winnipeg/",
    name: "Winnipeg"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:wroclaw/",
    name: "Wroclaw"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:yerevan/",
    name: "Yerevan"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:zagreb/",
    name: "Zagreb"
  },
  {
    href: "https://api.teleport.org/api/urban_areas/slug:zurich/",
    name: "Zurich"
  }
];

const stupid = `https://api.teleport.org/api/urban_areas/slug:aarhus/	Aarhus
https://api.teleport.org/api/urban_areas/slug:adelaide/	Adelaide
https://api.teleport.org/api/urban_areas/slug:albuquerque/	Albuquerque
https://api.teleport.org/api/urban_areas/slug:almaty/	Almaty
https://api.teleport.org/api/urban_areas/slug:amsterdam/	Amsterdam
https://api.teleport.org/api/urban_areas/slug:anchorage/	Anchorage
https://api.teleport.org/api/urban_areas/slug:andorra/	Andorra
https://api.teleport.org/api/urban_areas/slug:ankara/	Ankara
https://api.teleport.org/api/urban_areas/slug:asheville/	Asheville
https://api.teleport.org/api/urban_areas/slug:asuncion/	Asuncion
https://api.teleport.org/api/urban_areas/slug:athens/	Athens
https://api.teleport.org/api/urban_areas/slug:atlanta/	Atlanta
https://api.teleport.org/api/urban_areas/slug:auckland/	Auckland
https://api.teleport.org/api/urban_areas/slug:austin/	Austin
https://api.teleport.org/api/urban_areas/slug:baku/	Baku
https://api.teleport.org/api/urban_areas/slug:bali/	Bali
https://api.teleport.org/api/urban_areas/slug:baltimore/	Baltimore
https://api.teleport.org/api/urban_areas/slug:bangkok/	Bangkok
https://api.teleport.org/api/urban_areas/slug:barcelona/	Barcelona
https://api.teleport.org/api/urban_areas/slug:beijing/	Beijing
https://api.teleport.org/api/urban_areas/slug:beirut/	Beirut
https://api.teleport.org/api/urban_areas/slug:belfast/	Belfast
https://api.teleport.org/api/urban_areas/slug:belgrade/	Belgrade
https://api.teleport.org/api/urban_areas/slug:belize-city/	Belize City
https://api.teleport.org/api/urban_areas/slug:bengaluru/	Bengaluru
https://api.teleport.org/api/urban_areas/slug:bergen/	Bergen
https://api.teleport.org/api/urban_areas/slug:berlin/	Berlin
https://api.teleport.org/api/urban_areas/slug:bern/	Bern
https://api.teleport.org/api/urban_areas/slug:bilbao/	Bilbao
https://api.teleport.org/api/urban_areas/slug:birmingham/	Birmingham
https://api.teleport.org/api/urban_areas/slug:birmingham-al/	Birmingham, AL
https://api.teleport.org/api/urban_areas/slug:bogota/	Bogota
https://api.teleport.org/api/urban_areas/slug:boise/	Boise
https://api.teleport.org/api/urban_areas/slug:bologna/	Bologna
https://api.teleport.org/api/urban_areas/slug:bordeaux/	Bordeaux
https://api.teleport.org/api/urban_areas/slug:boston/	Boston
https://api.teleport.org/api/urban_areas/slug:boulder/	Boulder
https://api.teleport.org/api/urban_areas/slug:bozeman/	Bozeman
https://api.teleport.org/api/urban_areas/slug:bratislava/	Bratislava
https://api.teleport.org/api/urban_areas/slug:brighton/	Brighton
https://api.teleport.org/api/urban_areas/slug:brisbane/	Brisbane
https://api.teleport.org/api/urban_areas/slug:bristol/	Bristol
https://api.teleport.org/api/urban_areas/slug:brno/	Brno
https://api.teleport.org/api/urban_areas/slug:brussels/	Brussels
https://api.teleport.org/api/urban_areas/slug:bucharest/	Bucharest
https://api.teleport.org/api/urban_areas/slug:budapest/	Budapest
https://api.teleport.org/api/urban_areas/slug:buenos-aires/	Buenos Aires
https://api.teleport.org/api/urban_areas/slug:buffalo/	Buffalo
https://api.teleport.org/api/urban_areas/slug:cairo/	Cairo
https://api.teleport.org/api/urban_areas/slug:calgary/	Calgary
https://api.teleport.org/api/urban_areas/slug:cambridge/	Cambridge
https://api.teleport.org/api/urban_areas/slug:cape-town/	Cape Town
https://api.teleport.org/api/urban_areas/slug:caracas/	Caracas
https://api.teleport.org/api/urban_areas/slug:cardiff/	Cardiff
https://api.teleport.org/api/urban_areas/slug:casablanca/	Casablanca
https://api.teleport.org/api/urban_areas/slug:charleston/	Charleston
https://api.teleport.org/api/urban_areas/slug:charlotte/	Charlotte
https://api.teleport.org/api/urban_areas/slug:chattanooga/	Chattanooga
https://api.teleport.org/api/urban_areas/slug:chennai/	Chennai
https://api.teleport.org/api/urban_areas/slug:chiang-mai/	Chiang Mai
https://api.teleport.org/api/urban_areas/slug:chicago/	Chicago
https://api.teleport.org/api/urban_areas/slug:chisinau/	Chisinau
https://api.teleport.org/api/urban_areas/slug:christchurch/	Christchurch
https://api.teleport.org/api/urban_areas/slug:cincinnati/	Cincinnati
https://api.teleport.org/api/urban_areas/slug:cleveland/	Cleveland
https://api.teleport.org/api/urban_areas/slug:cluj-napoca/	Cluj-Napoca
https://api.teleport.org/api/urban_areas/slug:cologne/	Cologne
https://api.teleport.org/api/urban_areas/slug:colorado-springs/	Colorado Springs
https://api.teleport.org/api/urban_areas/slug:columbus/	Columbus
https://api.teleport.org/api/urban_areas/slug:copenhagen/	Copenhagen
https://api.teleport.org/api/urban_areas/slug:cork/	Cork
https://api.teleport.org/api/urban_areas/slug:curitiba/	Curitiba
https://api.teleport.org/api/urban_areas/slug:dallas/	Dallas
https://api.teleport.org/api/urban_areas/slug:dar-es-salaam/	Dar es Salaam
https://api.teleport.org/api/urban_areas/slug:delhi/	Delhi
https://api.teleport.org/api/urban_areas/slug:denver/	Denver
https://api.teleport.org/api/urban_areas/slug:des-moines/	Des Moines
https://api.teleport.org/api/urban_areas/slug:detroit/	Detroit
https://api.teleport.org/api/urban_areas/slug:doha/	Doha
https://api.teleport.org/api/urban_areas/slug:dresden/	Dresden
https://api.teleport.org/api/urban_areas/slug:dubai/	Dubai
https://api.teleport.org/api/urban_areas/slug:dublin/	Dublin
https://api.teleport.org/api/urban_areas/slug:dusseldorf/	Dusseldorf
https://api.teleport.org/api/urban_areas/slug:edinburgh/	Edinburgh
https://api.teleport.org/api/urban_areas/slug:edmonton/	Edmonton
https://api.teleport.org/api/urban_areas/slug:eindhoven/	Eindhoven
https://api.teleport.org/api/urban_areas/slug:eugene/	Eugene
https://api.teleport.org/api/urban_areas/slug:florence/	Florence
https://api.teleport.org/api/urban_areas/slug:florianopolis/	Florianopolis
https://api.teleport.org/api/urban_areas/slug:fort-collins/	Fort Collins
https://api.teleport.org/api/urban_areas/slug:frankfurt/	Frankfurt
https://api.teleport.org/api/urban_areas/slug:fukuoka/	Fukuoka
https://api.teleport.org/api/urban_areas/slug:gaillimh/	Galway
https://api.teleport.org/api/urban_areas/slug:gdansk/	Gdansk
https://api.teleport.org/api/urban_areas/slug:geneva/	Geneva
https://api.teleport.org/api/urban_areas/slug:gibraltar/	Gibraltar
https://api.teleport.org/api/urban_areas/slug:glasgow/	Glasgow
https://api.teleport.org/api/urban_areas/slug:gothenburg/	Gothenburg
https://api.teleport.org/api/urban_areas/slug:grenoble/	Grenoble
https://api.teleport.org/api/urban_areas/slug:guadalajara/	Guadalajara
https://api.teleport.org/api/urban_areas/slug:guatemala-city/	Guatemala City
https://api.teleport.org/api/urban_areas/slug:halifax/	Halifax
https://api.teleport.org/api/urban_areas/slug:hamburg/	Hamburg
https://api.teleport.org/api/urban_areas/slug:hannover/	Hannover
https://api.teleport.org/api/urban_areas/slug:havana/	Havana
https://api.teleport.org/api/urban_areas/slug:helsinki/	Helsinki
https://api.teleport.org/api/urban_areas/slug:ho-chi-minh-city/	Ho Chi Minh City
https://api.teleport.org/api/urban_areas/slug:hong-kong/	Hong Kong
https://api.teleport.org/api/urban_areas/slug:honolulu/	Honolulu
https://api.teleport.org/api/urban_areas/slug:houston/	Houston
https://api.teleport.org/api/urban_areas/slug:hyderabad/	Hyderabad
https://api.teleport.org/api/urban_areas/slug:indianapolis/	Indianapolis
https://api.teleport.org/api/urban_areas/slug:innsbruck/	Innsbruck
https://api.teleport.org/api/urban_areas/slug:istanbul/	Istanbul
https://api.teleport.org/api/urban_areas/slug:jacksonville/	Jacksonville
https://api.teleport.org/api/urban_areas/slug:jakarta/	Jakarta
https://api.teleport.org/api/urban_areas/slug:johannesburg/	Johannesburg
https://api.teleport.org/api/urban_areas/slug:kansas-city/	Kansas City
https://api.teleport.org/api/urban_areas/slug:karlsruhe/	Karlsruhe
https://api.teleport.org/api/urban_areas/slug:kathmandu/	Kathmandu
https://api.teleport.org/api/urban_areas/slug:kiev/	Kiev
https://api.teleport.org/api/urban_areas/slug:kingston/	Kingston
https://api.teleport.org/api/urban_areas/slug:knoxville/	Knoxville
https://api.teleport.org/api/urban_areas/slug:krakow/	Krakow
https://api.teleport.org/api/urban_areas/slug:kuala-lumpur/	Kuala Lumpur
https://api.teleport.org/api/urban_areas/slug:kyoto/	Kyoto
https://api.teleport.org/api/urban_areas/slug:lagos/	Lagos
https://api.teleport.org/api/urban_areas/slug:la-paz/	La Paz
https://api.teleport.org/api/urban_areas/slug:las-palmas-de-gran-canaria/	Las Palmas de Gran Canaria
https://api.teleport.org/api/urban_areas/slug:las-vegas/	Las Vegas
https://api.teleport.org/api/urban_areas/slug:lausanne/	Lausanne
https://api.teleport.org/api/urban_areas/slug:leeds/	Leeds
https://api.teleport.org/api/urban_areas/slug:leipzig/	Leipzig
https://api.teleport.org/api/urban_areas/slug:lille/	Lille
https://api.teleport.org/api/urban_areas/slug:lima/	Lima
https://api.teleport.org/api/urban_areas/slug:lisbon/	Lisbon
https://api.teleport.org/api/urban_areas/slug:liverpool/	Liverpool
https://api.teleport.org/api/urban_areas/slug:ljubljana/	Ljubljana
https://api.teleport.org/api/urban_areas/slug:london/	London
https://api.teleport.org/api/urban_areas/slug:los-angeles/	Los Angeles
https://api.teleport.org/api/urban_areas/slug:louisville/	Louisville
https://api.teleport.org/api/urban_areas/slug:luxembourg/	Luxembourg
https://api.teleport.org/api/urban_areas/slug:lviv/	Lviv
https://api.teleport.org/api/urban_areas/slug:lyon/	Lyon
https://api.teleport.org/api/urban_areas/slug:madison/	Madison
https://api.teleport.org/api/urban_areas/slug:madrid/	Madrid
https://api.teleport.org/api/urban_areas/slug:malaga/	Malaga
https://api.teleport.org/api/urban_areas/slug:malmo/	Malmo
https://api.teleport.org/api/urban_areas/slug:managua/	Managua
https://api.teleport.org/api/urban_areas/slug:manchester/	Manchester
https://api.teleport.org/api/urban_areas/slug:manila/	Manila
https://api.teleport.org/api/urban_areas/slug:marseille/	Marseille
https://api.teleport.org/api/urban_areas/slug:medellin/	Medellin
https://api.teleport.org/api/urban_areas/slug:melbourne/	Melbourne
https://api.teleport.org/api/urban_areas/slug:memphis/	Memphis
https://api.teleport.org/api/urban_areas/slug:mexico-city/	Mexico City
https://api.teleport.org/api/urban_areas/slug:miami/	Miami
https://api.teleport.org/api/urban_areas/slug:milan/	Milan
https://api.teleport.org/api/urban_areas/slug:milwaukee/	Milwaukee
https://api.teleport.org/api/urban_areas/slug:minneapolis-saint-paul/	Minneapolis-Saint Paul
https://api.teleport.org/api/urban_areas/slug:minsk/	Minsk
https://api.teleport.org/api/urban_areas/slug:montevideo/	Montevideo
https://api.teleport.org/api/urban_areas/slug:montreal/	Montreal
https://api.teleport.org/api/urban_areas/slug:moscow/	Moscow
https://api.teleport.org/api/urban_areas/slug:mumbai/	Mumbai
https://api.teleport.org/api/urban_areas/slug:munich/	Munich
https://api.teleport.org/api/urban_areas/slug:nairobi/	Nairobi
https://api.teleport.org/api/urban_areas/slug:nantes/	Nantes
https://api.teleport.org/api/urban_areas/slug:naples/	Naples
https://api.teleport.org/api/urban_areas/slug:nashville/	Nashville
https://api.teleport.org/api/urban_areas/slug:new-orleans/	New Orleans
https://api.teleport.org/api/urban_areas/slug:new-york/	New York
https://api.teleport.org/api/urban_areas/slug:nice/	Nice
https://api.teleport.org/api/urban_areas/slug:nicosia/	Nicosia
https://api.teleport.org/api/urban_areas/slug:oklahoma-city/	Oklahoma City
https://api.teleport.org/api/urban_areas/slug:omaha/	Omaha
https://api.teleport.org/api/urban_areas/slug:orlando/	Orlando
https://api.teleport.org/api/urban_areas/slug:osaka/	Osaka
https://api.teleport.org/api/urban_areas/slug:oslo/	Oslo
https://api.teleport.org/api/urban_areas/slug:ottawa/	Ottawa
https://api.teleport.org/api/urban_areas/slug:oulu/	Oulu
https://api.teleport.org/api/urban_areas/slug:oxford/	Oxford
https://api.teleport.org/api/urban_areas/slug:palo-alto/	Palo Alto
https://api.teleport.org/api/urban_areas/slug:panama/	Panama
https://api.teleport.org/api/urban_areas/slug:paris/	Paris
https://api.teleport.org/api/urban_areas/slug:perth/	Perth
https://api.teleport.org/api/urban_areas/slug:philadelphia/	Philadelphia
https://api.teleport.org/api/urban_areas/slug:phnom-penh/	Phnom Penh
https://api.teleport.org/api/urban_areas/slug:phoenix/	Phoenix
https://api.teleport.org/api/urban_areas/slug:phuket/	Phuket
https://api.teleport.org/api/urban_areas/slug:pittsburgh/	Pittsburgh
https://api.teleport.org/api/urban_areas/slug:portland-me/	Portland, ME
https://api.teleport.org/api/urban_areas/slug:portland-or/	Portland, OR
https://api.teleport.org/api/urban_areas/slug:porto/	Porto
https://api.teleport.org/api/urban_areas/slug:porto-alegre/	Porto Alegre
https://api.teleport.org/api/urban_areas/slug:prague/	Prague
https://api.teleport.org/api/urban_areas/slug:providence/	Providence
https://api.teleport.org/api/urban_areas/slug:quebec/	Quebec
https://api.teleport.org/api/urban_areas/slug:quito/	Quito
https://api.teleport.org/api/urban_areas/slug:raleigh/	Raleigh
https://api.teleport.org/api/urban_areas/slug:reykjavik/	Reykjavik
https://api.teleport.org/api/urban_areas/slug:richmond/	Richmond
https://api.teleport.org/api/urban_areas/slug:riga/	Riga
https://api.teleport.org/api/urban_areas/slug:rio-de-janeiro/	Rio De Janeiro
https://api.teleport.org/api/urban_areas/slug:riyadh/	Riyadh
https://api.teleport.org/api/urban_areas/slug:rochester/	Rochester
https://api.teleport.org/api/urban_areas/slug:rome/	Rome
https://api.teleport.org/api/urban_areas/slug:rotterdam/	Rotterdam
https://api.teleport.org/api/urban_areas/slug:saint-petersburg/	Saint Petersburg
https://api.teleport.org/api/urban_areas/slug:salt-lake-city/	Salt Lake City
https://api.teleport.org/api/urban_areas/slug:san-antonio/	San Antonio
https://api.teleport.org/api/urban_areas/slug:san-diego/	San Diego
https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/	San Francisco Bay Area
https://api.teleport.org/api/urban_areas/slug:san-jose/	San Jose
https://api.teleport.org/api/urban_areas/slug:san-juan/	San Juan
https://api.teleport.org/api/urban_areas/slug:san-luis-obispo/	San Luis Obispo
https://api.teleport.org/api/urban_areas/slug:san-salvador/	San Salvador
https://api.teleport.org/api/urban_areas/slug:santiago/	Santiago
https://api.teleport.org/api/urban_areas/slug:santo-domingo/	Santo Domingo
https://api.teleport.org/api/urban_areas/slug:sao-paulo/	Sao Paulo
https://api.teleport.org/api/urban_areas/slug:sarajevo/	Sarajevo
https://api.teleport.org/api/urban_areas/slug:saskatoon/	Saskatoon
https://api.teleport.org/api/urban_areas/slug:seattle/	Seattle
https://api.teleport.org/api/urban_areas/slug:seoul/	Seoul
https://api.teleport.org/api/urban_areas/slug:seville/	Seville
https://api.teleport.org/api/urban_areas/slug:shanghai/	Shanghai
https://api.teleport.org/api/urban_areas/slug:singapore/	Singapore
https://api.teleport.org/api/urban_areas/slug:skopje/	Skopje
https://api.teleport.org/api/urban_areas/slug:sofia/	Sofia
https://api.teleport.org/api/urban_areas/slug:st-louis/	St. Louis
https://api.teleport.org/api/urban_areas/slug:stockholm/	Stockholm
https://api.teleport.org/api/urban_areas/slug:stuttgart/	Stuttgart
https://api.teleport.org/api/urban_areas/slug:sydney/	Sydney
https://api.teleport.org/api/urban_areas/slug:taipei/	Taipei
https://api.teleport.org/api/urban_areas/slug:tallinn/	Tallinn
https://api.teleport.org/api/urban_areas/slug:tampa-bay-area/	Tampa Bay Area
https://api.teleport.org/api/urban_areas/slug:tampere/	Tampere
https://api.teleport.org/api/urban_areas/slug:tartu/	Tartu
https://api.teleport.org/api/urban_areas/slug:tashkent/	Tashkent
https://api.teleport.org/api/urban_areas/slug:tbilisi/	Tbilisi
https://api.teleport.org/api/urban_areas/slug:tehran/	Tehran
https://api.teleport.org/api/urban_areas/slug:tel-aviv/	Tel Aviv
https://api.teleport.org/api/urban_areas/slug:the-hague/	The Hague
https://api.teleport.org/api/urban_areas/slug:thessaloniki/	Thessaloniki
https://api.teleport.org/api/urban_areas/slug:tokyo/	Tokyo
https://api.teleport.org/api/urban_areas/slug:toronto/	Toronto
https://api.teleport.org/api/urban_areas/slug:toulouse/	Toulouse
https://api.teleport.org/api/urban_areas/slug:tunis/	Tunis
https://api.teleport.org/api/urban_areas/slug:turin/	Turin
https://api.teleport.org/api/urban_areas/slug:turku/	Turku
https://api.teleport.org/api/urban_areas/slug:uppsala/	Uppsala
https://api.teleport.org/api/urban_areas/slug:utrecht/	Utrecht
https://api.teleport.org/api/urban_areas/slug:valencia/	Valencia
https://api.teleport.org/api/urban_areas/slug:valletta/	Valletta
https://api.teleport.org/api/urban_areas/slug:vancouver/	Vancouver
https://api.teleport.org/api/urban_areas/slug:victoria/	Victoria
https://api.teleport.org/api/urban_areas/slug:vienna/	Vienna
https://api.teleport.org/api/urban_areas/slug:vilnius/	Vilnius
https://api.teleport.org/api/urban_areas/slug:warsaw/	Warsaw
https://api.teleport.org/api/urban_areas/slug:washington-dc/	Washington, D.C.
https://api.teleport.org/api/urban_areas/slug:wellington/	Wellington
https://api.teleport.org/api/urban_areas/slug:winnipeg/	Winnipeg
https://api.teleport.org/api/urban_areas/slug:wroclaw/	Wroclaw
https://api.teleport.org/api/urban_areas/slug:yerevan/	Yerevan
https://api.teleport.org/api/urban_areas/slug:zagreb/	Zagreb
https://api.teleport.org/api/urban_areas/slug:zurich/	Zurich`;

const cities = stupid.replace(/\bhttps:(\S)*\b\/\s/g, "");
const citiesArray = cities.split("\n");

let axiosGets = [];
let newDict1 = [];
for (let itemD of citiesArray) {
  for (let itemT of teleportData) {
    if (itemT["name"] === itemD) {
      axiosGets.push(axios.get(itemT["href"] + "images"));
      newDict1.push(citiesArray[citiesArray.indexOf(itemD)]);
    }
  }
}
let finalDict = [];

const response = axios
  .all(axiosGets)
  .then(res => {
    let axiosGetData = res.map(item => item.data);
    for (let i = 0; i < newDict1.length; i++) {
      let obj = {};
      obj.name = newDict1[i];
      obj.photoWeb = axiosGetData[i]["photos"][0]["image"]["web"];
      obj.photoMobile = axiosGetData[i]["photos"][0]["image"]["mobile"];
      finalDict.push(obj);
    }

    fs.writeFile("data.txt", JSON.stringify(finalDict), err => {
      // In case of a error throw err.
      if (err) throw err;
    });
  })
  .catch(err => console.log(err));
