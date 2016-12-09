const clock = {
  "category": "Dashboard Tools",
  "group": "Clock",
  "type": "Clock",
  "title": "Clock",
  "description": "Display the time (with configurable timezones)",
  "image": "http://placehold.it/140x100?text=Clock",
  "sections": [{
    "type": "Setup",
    "fields": [
      {
        "name": "Title",
        "type": "text",
        "defaultValue": "Clock"
      },
      {
        "name": "Size",
        "type": "dropdown",
        "defaultValue": "1x1",
        "options": [
          { "label": "1x1", "value": "1x1" }
        ]
      },
      {
        "name": "Format",
        "type": "radio",
        "defaultValue": "24-hour",
        "options": [
          { "label": "24 hour", "value": "24-hour" },
          { "label": "12 hour", "value": "12-hour" }
        ]
      },
      {
        "name": "Location",
        "type": "nested-dropdown",
        "defaultValue": "united-states",
        "options": [
          {
            "label": "Afghanistan",
            "value": "afghanistan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kabul",
              "options": [
                { "label": "Kabul", "value": "kabul" }
              ]
            }
          },
          {
            "label": "Åland Islands",
            "value": "åland-islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "mariehamn",
              "options": [
                { "label": "Mariehamn", "value": "mariehamn" }
              ]
            }
          },
          {
            "label": "Albania",
            "value": "albania",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tirane",
              "options": [
                { "label": "Tirane", "value": "tirane" }
              ]
            }
          },
          {
            "label": "Algeria",
            "value": "algeria",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "algiers",
              "options": [
                { "label": "Algiers", "value": "algiers" }
              ]
            }
          },
          {
            "label": "American Samoa",
            "value": "american-samoa",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "pago-pago",
              "options": [
                { "label": "Pago Pago", "value": "pago-pago" }
              ]
            }
          },
          {
            "label": "Andorra",
            "value": "andorra",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "andorra",
              "options": [
                { "label": "Andorra", "value": "andorra" }
              ]
            }
          },
          {
            "label": "Angola",
            "value": "angola",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "luanda",
              "options": [
                { "label": "Luanda", "value": "luanda" }
              ]
            }
          },
          {
            "label": "Anguilla",
            "value": "anguilla",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "anguilla",
              "options": [
                { "label": "Anguilla", "value": "anguilla" }
              ]
            }
          },
          {
            "label": "Antarctica",
            "value": "antarctica",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "mcmurdo",
              "options": [
                { "label": "McMurdo", "value": "mcmurdo" },
                { "label": "South Pole", "value": "south-pole" },
                { "label": "Rothera", "value": "rothera" },
                { "label": "Palmer", "value": "palmer" },
                { "label": "Mawson", "value": "mawson" },
                { "label": "Davis", "value": "davis" },
                { "label": "Casey", "value": "casey" },
                { "label": "Vostok", "value": "vostok" },
                { "label": "Dumont D'Urville", "value": "dumont-d'urville" },
                { "label": "Syowa", "value": "syowa" }
              ]
            }
          },
          {
            "label": "Antigua and Barbuda",
            "value": "antigua-and-barbuda",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "antigua",
              "options": [
                { "label": "Antigua", "value": "antigua" }
              ]
            }
          },
          {
            "label": "Argentina",
            "value": "argentina",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "buenos-aires",
              "options": [
                { "label": "Buenos Aires", "value": "buenos-aires" },
                { "label": "Cordoba", "value": "cordoba" },
                { "label": "Salta", "value": "salta" },
                { "label": "Jujuy", "value": "jujuy" },
                { "label": "Tucuman", "value": "tucuman" },
                { "label": "Catamarca", "value": "catamarca" },
                { "label": "La Rioja", "value": "la-rioja" },
                { "label": "San Juan", "value": "san-juan" },
                { "label": "Mendoza", "value": "mendoza" },
                { "label": "San Luis", "value": "san-luis" },
                { "label": "Rio Gallegos", "value": "rio-gallegos" },
                { "label": "Ushuaia", "value": "ushuaia" }
              ]
            }
          },
          {
            "label": "Armenia",
            "value": "armenia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "yerevan",
              "options": [
                { "label": "Yerevan", "value": "yerevan" }
              ]
            }
          },
          {
            "label": "Aruba",
            "value": "aruba",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "aruba",
              "options": [
                { "label": "Aruba", "value": "aruba" }
              ]
            }
          },
          {
            "label": "Australia",
            "value": "australia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "lord-howe",
              "options": [
                { "label": "Lord Howe", "value": "lord-howe" },
                { "label": "Hobart", "value": "hobart" },
                { "label": "Currie", "value": "currie" },
                { "label": "Melbourne", "value": "melbourne" },
                { "label": "Syndey", "value": "syndey" },
                { "label": "Broken Hill", "value": "broken-hill" },
                { "label": "Brisbane", "value": "brisbane" },
                { "label": "Lindeman", "value": "lindeman" },
                { "label": "Adelaide", "value": "adelaide" },
                { "label": "Darwin", "value": "darwin" }
              ]
            }
          },
          {
            "label": "Austria",
            "value": "austria",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "vienna",
              "options": [
                { "label": "Vienna", "value": "vienna" }
              ]
            }
          },
          {
            "label": "Azerbaijan",
            "value": "azerbaijan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "baku",
              "options": [
                { "label": "Baku", "value": "baku" }
              ]
            }
          },
          {
            "label": "Bahamas",
            "value": "bahamas",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "nassau",
              "options": [
                { "label": "Nassau", "value": "nassau" }
              ]
            }
          },
          {
            "label": "Bahrain",
            "value": "bahrain",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bahrain",
              "options": [
                { "label": "Bahrain", "value": "bahrain" }
              ]
            }
          },
          {
            "label": "Bangladesh",
            "value": "bangladesh",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "dhaka",
              "options": [
                { "label": "Dhaka", "value": "dhaka" }
              ]
            }
          },
          {
            "label": "Barbados",
            "value": "barbados",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "barbados",
              "options": [
                { "label": "Barbados", "value": "barbados" }
              ]
            }
          },
          {
            "label": "Belarus",
            "value": "belarus",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "minsk",
              "options": [
                { "label": "Minsk", "value": "minsk" }
              ]
            }
          },
          {
            "label": "Belgium",
            "value": "belgium",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "brussels",
              "options": [
                { "label": "Brussels", "value": "brussels" }
              ]
            }
          },
          {
            "label": "Belize",
            "value": "belize",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "belize",
              "options": [
                { "label": "Belize", "value": "belize" }
              ]
            }
          },
          {
            "label": "Benin",
            "value": "benin",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "porto-novo",
              "options": [
                { "label": "Porto-Novo", "value": "porto-novo" }
              ]
            }
          },
          {
            "label": "Bermuda",
            "value": "bermuda",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bermuda",
              "options": [
                { "label": "Bermuda", "value": "bermuda" }
              ]
            }
          },
          {
            "label": "Bhutan",
            "value": "bhutan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "thimphu",
              "options": [
                { "label": "Thimphu", "value": "thimphu" }
              ]
            }
          },
          {
            "label": "Bolivia, Plurinational State of",
            "value": "bolivia-plurinational-state-of",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "la-paz",
              "options": [
                { "label": "La Paz", "value": "la-paz" }
              ]
            }
          },
          {
            "label": "Bonaire, Sin Eustatius and Saba",
            "value": "bonaire-sin-eustatius-and-saba",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kralendijk",
              "options": [
                { "label": "Kralendijk", "value": "kralendijk" }
              ]
            }
          },
          {
            "label": "Bosnia and Herzegovina",
            "value": "bosnia-and-herzegovina",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "sarajevo",
              "options": [
                { "label": "Sarajevo", "value": "sarajevo" }
              ]
            }
          },
          {
            "label": "Botswana",
            "value": "botswana",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "gaborone",
              "options": [
                { "label": "Gaborone", "value": "gaborone" }
              ]
            }
          },
          {
            "label": "Brazil",
            "value": "brazil",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "noronha",
              "options": [
                { "label": "Noronha", "value": "noronha" },
                { "label": "Belem", "value": "belem" },
                { "label": "Fortaleza", "value": "fortaleza" },
                { "label": "Recife", "value": "recife" },
                { "label": "Araguaina", "value": "araguaina" },
                { "label": "Maceio", "value": "maceio" },
                { "label": "Bahia", "value": "bahia" },
                { "label": "Sao Paulo", "value": "sao-paulo" },
                { "label": "Campo Grande", "value": "campo-grande" },
                { "label": "Cuiaba", "value": "cuiaba" },
                { "label": "Santarem", "value": "santarem" },
                { "label": "Porto Velho", "value": "porto-velho" },
                { "label": "Boa Vista", "value": "boa-vista" },
                { "label": "Manaus", "value": "manaus" },
                { "label": "Eirunepe", "value": "eirunepe" },
                { "label": "Rio Branco", "value": "rio-branco" }
              ]
            }
          },
          {
            "label": "British Indian Ocean Territory",
            "value": "british-indian-ocean-territory",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "chagos",
              "options": [
                { "label": "Chagos", "value": "chagos" }
              ]
            }
          },
          {
            "label": "Brunei Darussalam",
            "value": "brunei-darussalam",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "brunei",
              "options": [
                { "label": "Brunei", "value": "brunei" }
              ]
            }
          },
          {
            "label": "Bulgaria",
            "value": "bulgaria",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "sofia",
              "options": [
                { "label": "Sofia", "value": "sofia" }
              ]
            }
          },
          {
            "label": "Burkina Faso",
            "value": "burkina-faso",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "ouagadougou",
              "options": [
                { "label": "Ouagadougou", "value": "ouagadougou" }
              ]
            }
          },
          {
            "label": "Burundi",
            "value": "burundi",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bujumbura",
              "options": [
                { "label": "Bujumbura", "value": "bujumbura" }
              ]
            }
          },
          {
            "label": "Cambodia",
            "value": "cambodia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "phnom-penh",
              "options": [
                { "label": "Phnom Penh", "value": "phnom-penh" }
              ]
            }
          },
          {
            "label": "Cameroon",
            "value": "cameroon",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "douala",
              "options": [
                { "label": "Douala", "value": "douala" }
              ]
            }
          },
          {
            "label": "Canada",
            "value": "canada",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "st-johns",
              "options": [
                { "label": "St Johns", "value": "st-johns" },
                { "label": "Halifax", "value": "halifax" },
                { "label": "Glace Bay", "value": "glace-bay" },
                { "label": "Moncton", "value": "moncton" },
                { "label": "Goose Bay", "value": "goose-bay" },
                { "label": "Blanc-Sablon", "value": "blanc-sablon" },
                { "label": "Montreal", "value": "montreal" },
                { "label": "Toronto", "value": "toronto" },
                { "label": "Nipigon", "value": "nipigon" },
                { "label": "Thunder Bay", "value": "thunder-bay" }
              ]
            }
          },
          {
            "label": "Cape Verde",
            "value": "cape-verde",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "cape-verde",
              "options": [
                { "label": "Cape Verde", "value": "cape-verde" }
              ]
            }
          },
          {
            "label": "Cayman Islands",
            "value": "cayman-islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "cayman",
              "options": [
                { "label": "Cayman", "value": "cayman" }
              ]
            }
          },
          {
            "label": "Central African Republic",
            "value": "central-african-republic",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bangui",
              "options": [
                { "label": "Bangui", "value": "bangui" }
              ]
            }
          },
          {
            "label": "Chad",
            "value": "chad",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "ndjamena",
              "options": [
                { "label": "Ndjamena", "value": "ndjamena" }
              ]
            }
          },
          {
            "label": "Chile",
            "value": "chile",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "santiago",
              "options": [
                { "label": "Santiago", "value": "santiago" },
                { "label": "Easter", "value": "easter" }
              ]
            }
          },
          {
            "label": "China",
            "value": "china",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "shanghai",
              "options": [
                { "label": "Shanghai", "value": "shanghai" },
                { "label": "Harbin", "value": "harbin" },
                { "label": "Chongqing", "value": "chongqing" },
                { "label": "Urumqi", "value": "urumqi" },
                { "label": "Kashgar", "value": "kashgar" }
              ]
            }
          },
          {
            "label": "Christmas Island",
            "value": "christman-island",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "christman",
              "options": [
                { "label": "Christmas", "value": "christmas" }
              ]
            }
          },
          {
            "label": "Cocos (Keeling) Islands",
            "value": "cocos-keeling-islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "cocos",
              "options": [
                { "label": "Cocos", "value": "cocos" }
              ]
            }
          },
          {
            "label": "Colombia",
            "value": "colombia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bogota",
              "options": [
                { "label": "Bogota", "value": "bogota" }
              ]
            }
          },
          {
            "label": "Comoros",
            "value": "comoros",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "comoro",
              "options": [
                { "label": "Comoro", "value": "comoro" }
              ]
            }
          },
          {
            "label": "Congo",
            "value": "congo",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "brazzaville",
              "options": [
                { "label": "Brazzaville", "value": "brazzaville" }
              ]
            }
          },
          {
            "label": "Congo, the Democratic Republic of",
            "value": "congo-the-democratic-republic-of",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kinshasa",
              "options": [
                { "label": "Kinshasa", "value": "kinshasa" },
                { "label": "Lubumbashi", "value": "lubumbashi" }
              ]
            }
          },
          {
            "label": "Cook Islands",
            "value": "cook-islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "rarotonga",
              "options": [
                { "label": "Rarotonga", "value": "rarotonga" }
              ]
            }
          },
          {
            "label": "Costa Rica",
            "value": "costa-rica",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "costa-rica",
              "options": [
                { "label": "Costa Rica", "value": "costa-rica" }
              ]
            }
          },
          {
            "label": "Côte d'lvoire",
            "value": "côte-d'lvoire",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "abidjan",
              "options": [
                { "label": "Abidjan", "value": "abidjan" }
              ]
            }
          },
          {
            "label": "Croatia",
            "value": "croatia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "zagreb",
              "options": [
                { "label": "Zagreb", "value": "zagreb" }
              ]
            }
          },
          {
            "label": "Cuba",
            "value": "cuba",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "havana",
              "options": [
                { "label": "Havana", "value": "havana" }
              ]
            }
          },
          {
            "label": "Curaçao",
            "value": "curaçao",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "curaçao",
              "options": [
                { "label": "Curaçao", "value": "curaçao" }
              ]
            }
          },
          {
            "label": "Cyprus",
            "value": "cyprus",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "nicosia",
              "options": [
                { "label": "Nicosia", "value": "nicosia" }
              ]
            }
          },
          {
            "label": "Czech Republic",
            "value": "czech-republic",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "prague",
              "options": [
                { "label": "Prague", "value": "prague" }
              ]
            }
          },
          {
            "label": "Denmark",
            "value": "denmark",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "copenhagen",
              "options": [
                { "label": "Copenhagen", "value": "copenhagen" }
              ]
            }
          },
          {
            "label": "Djibouti",
            "value": "djibouti",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "djibouti",
              "options": [
                { "label": "Djibouti", "value": "djibouti" }
              ]
            }
          },
          {
            "label": "Dominica",
            "value": "dominica",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "dominica",
              "options": [
                { "label": "Dominica", "value": "dominica" }
              ]
            }
          },
          {
            "label": "Dominican Repbulic",
            "value": "dominican-republic",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "santo-domingo",
              "options": [
                { "label": "Santo Domingo", "value": "santo-domingo" }
              ]
            }
          },
          {
            "label": "Ecuador",
            "value": "ecuador",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "guayaquil",
              "options": [
                { "label": "Guayaquil", "value": "guayaquil" },
                { "label": "Galapagos", "value": "galapagos" }
              ]
            }
          },
          {
            "label": "Egypt",
            "value": "egypt",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "cairo",
              "options": [
                { "label": "Cairo", "value": "cairo" }
              ]
            }
          },
          {
            "label": "El Salvador",
            "value": "el-salvador",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "el-salvador",
              "options": [
                { "label": "El Salvador", "value": "el-salvador" }
              ]
            }
          },
          {
            "label": "Equatorial Guinea",
            "value": "equatorial-guinea",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "malabo",
              "options": [
                { "label": "Malabo", "value": "malabo" }
              ]
            }
          },
          {
            "label": "Eritrea",
            "value": "eritrea",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "asmara",
              "options": [
                { "label": "Asmara", "value": "asmara" }
              ]
            }
          },
          {
            "label": "Estonia",
            "value": "estonia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tallinn",
              "options": [
                { "label": "Tallinn", "value": "tallinn" }
              ]
            }
          },
          {
            "label": "Ethiopia",
            "value": "ethiopia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "addis-ababa",
              "options": [
                { "label": "Addis Ababa", "value": "addis-ababa" }
              ]
            }
          },
          {
            "label": "Falkland Islands (Malvinas)",
            "value": "falkland-islands-malvinas",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "stanley",
              "options": [
                { "label": "Stanley", "value": "stanley" }
              ]
            }
          },
          {
            "label": "Faroe Islands",
            "value": "faroe-islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "faroe",
              "options": [
                { "label": "Faroe", "value": "faroe" }
              ]
            }
          },
          {
            "label": "Fiji",
            "value": "fiji",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "fiji",
              "options": [
                { "label": "Fiji", "value": "fiji" }
              ]
            }
          },
          {
            "label": "Finland",
            "value": "finland",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "helsinki",
              "options": [
                { "label": "Helsinki", "value": "helsinki" }
              ]
            }
          },
          {
            "label": "France",
            "value": "france",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "paris",
              "options": [
                { "label": "Paris", "value": "paris" }
              ]
            }
          },
          {
            "label": "French Guiana",
            "value": "french-guiana",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "cayenne",
              "options": [
                { "label": "Cayenne", "value": "cayenne" }
              ]
            }
          },
          {
            "label": "French Polynesia",
            "value": "french-polynesia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tahiti",
              "options": [
                { "label": "Tahiti", "value": "tahiti" },
                { "label": "Marquesas", "value": "marquesas" },
                { "label": "Gambier", "value": "gambier" }
              ]
            }
          },
          {
            "label": "French Southern Territories",
            "value": "french-southern-territories",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kerguelen",
              "options": [
                { "label": "Kerguelen", "value": "kerguelen" }
              ]
            }
          },
          {
            "label": "Gabon",
            "value": "gabon",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "libreville",
              "options": [
                { "label": "Libreville", "value": "libreville" }
              ]
            }
          },
          {
            "label": "Gambia",
            "value": "gambia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "banjul",
              "options": [
                { "label": "Banjul", "value": "banjul" }
              ]
            }
          },
          {
            "label": "Georgia",
            "value": "georgia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tbilisi",
              "options": [
                { "label": "Tbilisi", "value": "tbilisi" }
              ]
            }
          },
          {
            "label": "Germany",
            "value": "germany",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "berlin",
              "options": [
                { "label": "Berlin", "value": "berlin" }
              ]
            }
          },
          {
            "label": "Ghana",
            "value": "ghana",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "accra",
              "options": [
                { "label": "Accra", "value": "accra" }
              ]
            }
          },
          {
            "label": "Gibraltar",
            "value": "gibraltar",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "gibraltar",
              "options": [
                { "label": "Gibraltar", "value": "gibraltar" }
              ]
            }
          },
          {
            "label": "Greece",
            "value": "greece",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "athens",
              "options": [
                { "label": "Athens", "value": "athens" }
              ]
            }
          },
          {
            "label": "Greenland",
            "value": "greenland",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "godthab",
              "options": [
                { "label": "Godthab", "value": "godthab" },
                { "label": "Danmarkshavn", "value": "danmarkshavn" },
                { "label": "Scoresbysund", "value": "scoresbysund" },
                { "label": "Thule", "value": "thule" }
              ]
            }
          },
          {
            "label": "Grenada",
            "value": "grenada",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "grenada",
              "options": [
                { "label": "Grenada", "value": "grenada" }
              ]
            }
          },
          {
            "label": "Guadeloupe",
            "value": "guadeloupe",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "guadeloupe",
              "options": [
                { "label": "Guadeloupe", "value": "guadeloupe" }
              ]
            }
          },
          {
            "label": "Guam",
            "value": "guam",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "guam",
              "options": [
                { "label": "Guam", "value": "guam" }
              ]
            }
          },
          {
            "label": "Guatemala",
            "value": "guatemala",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "guatemala",
              "options": [
                { "label": "Guatemala", "value": "guatemala" }
              ]
            }
          },
          {
            "label": "Guernsey",
            "value": "guernsey",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "guernsey",
              "options": [
                { "label": "Guernsey", "value": "guernsey" }
              ]
            }
          },
          {
            "label": "Guinea",
            "value": "guinea",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "conakry",
              "options": [
                { "label": "Conakry", "value": "conakry" }
              ]
            }
          },
          {
            "label": "Guinea-Bissau",
            "value": "guinea-bissau",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bissau",
              "options": [
                { "label": "Bissau", "value": "bissau" }
              ]
            }
          },
          {
            "label": "Guyana",
            "value": "guyana",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "guyana",
              "options": [
                { "label": "Guyana", "value": "guyana" }
              ]
            }
          },
          {
            "label": "Haiti",
            "value": "haiti",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "port-au-prince",
              "options": [
                { "label": "Port-au-Prince", "value": "port-au-prince" }
              ]
            }
          },
          {
            "label": "Holy See (Vatican City State)",
            "value": "holy-see-vatican-city-state",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "vatican",
              "options": [
                { "label": "Vatican", "value": "vatican" }
              ]
            }
          },
          {
            "label": "Honduras",
            "value": "honduras",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tegucigalpa",
              "options": [
                { "label": "Tegucigalpa", "value": "tegucigalpa" }
              ]
            }
          },
          {
            "label": "Hong Kong",
            "value": "hong-kong",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "hong-kong",
              "options": [
                { "label": "Hong Kong", "value": "hong-kong" }
              ]
            }
          },
          {
            "label": "Hungary",
            "value": "hungary",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "budapest",
              "options": [
                { "label": "Budapest", "value": "budapest" }
              ]
            }
          },
          {
            "label": "Iceland",
            "value": "iceland",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "reykjavik",
              "options": [
                { "label": "Reykjavik", "value": "reykjavik" }
              ]
            }
          },
          {
            "label": "India",
            "value": "india",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kolkata",
              "options": [
                { "label": "Kolkata", "value": "kolkata" }
              ]
            }
          },
          {
            "label": "Indonesia",
            "value": "indonesia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "jakarta",
              "options": [
                { "label": "Jakarta", "value": "jakarta" },
                { "label": "Pontianak", "value": "pontianak" },
                { "label": "Makassar", "value": "makassar" },
                { "label": "Jayapura", "value": "jayapura" }
              ]
            }
          },
          {
            "label": "Iran, Islamic Republic of",
            "value": "iran-islamic-republic",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tehran",
              "options": [
                { "label": "Tehran", "value": "tehran" }
              ]
            }
          },
          {
            "label": "Iraq",
            "value": "iraq",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "baghdad",
              "options": [
                { "label": "Baghdad", "value": "baghdad" }
              ]
            }
          },
          {
            "label": "Ireland",
            "value": "ireland",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "dublin",
              "options": [
                { "label": "Dublin", "value": "dublin" }
              ]
            }
          },
          {
            "label": "Isle of Man",
            "value": "isle-of-man",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "isle-of-man",
              "options": [
                { "label": "Isle of Man", "value": "isle-of-man" }
              ]
            }
          },
          {
            "label": "Israel",
            "value": "israel",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "jerusalem",
              "options": [
                { "label": "Jerusalem", "value": "jerusalem" }
              ]
            }
          },
          {
            "label": "Italy",
            "value": "italy",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "rome",
              "options": [
                { "label": "Rome", "value": "rome" }
              ]
            }
          },
          {
            "label": "Jamaica",
            "value": "jamaica",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "jamaica",
              "options": [
                { "label": "Jamaica", "value": "jamaica" }
              ]
            }
          },
          {
            "label": "Japan",
            "value": "japan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tokyo",
              "options": [
                { "label": "Tokyo", "value": "tokyo" }
              ]
            }
          },
          {
            "label": "Jersey",
            "value": "jersey",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "jersey",
              "options": [
                { "label": "Jersey", "value": "jersey" }
              ]
            }
          },
          {
            "label": "Jordan",
            "value": "jordan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "amman",
              "options": [
                { "label": "Amman", "value": "amman" }
              ]
            }
          },
          {
            "label": "Kazakhstan",
            "value": "kazakhstan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "almaty",
              "options": [
                { "label": "Almaty", "value": "almaty" },
                { "label": "Qyzylorda", "value": "qyzylorda" },
                { "label": "Aqtobe", "value": "aqtobe" },
                { "label": "Aqtau", "value": "aqtau" },
                { "label": "Oral", "value": "oral" }
              ]
            }
          },
          {
            "label": "Kenya",
            "value": "kenya",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "nairobi",
              "options": [
                { "label": "Nairobi", "value": "nairobi" }
              ]
            }
          },
          {
            "label": "Kiribati",
            "value": "kiribati",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tarawa",
              "options": [
                { "label": "Tarawa", "value": "tarawa" },
                { "label": "Enderbury", "value": "enderbury" },
                { "label": "Kiritimati", "value": "kiritimati" }
              ]
            }
          },
          {
            "label": "Korea, Democratic People's Repbulic of",
            "value": "korea-democratic-people's-republic-of",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "pyongyang",
              "options": [
                { "label": "Pyongyang", "value": "pyongyang" }
              ]
            }
          },
          {
            "label": "Korea, Repbulic of",
            "value": "korea-republic-of",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "seoul",
              "options": [
                { "label": "Seoul", "value": "seoul" }
              ]
            }
          },
          {
            "label": "Kuwait",
            "value": "kuwait",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kuwait",
              "options": [
                { "label": "Kuwait", "value": "kuwait" }
              ]
            }
          },
          {
            "label": "Kyrgyzstan",
            "value": "kyrgyzstan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bishkek",
              "options": [
                { "label": "Bishkek", "value": "bishkek" }
              ]
            }
          },
          {
            "label": "Lao People's Democratic Repbulic",
            "value": "lao-people's-democratic-repbulic",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "vientiane",
              "options": [
                { "label": "Vientiane", "value": "vientiane" }
              ]
            }
          },
          {
            "label": "Latvia",
            "value": "latvia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "riga",
              "options": [
                { "label": "Riga", "value": "riga" }
              ]
            }
          },
          {
            "label": "Lebanon",
            "value": "lebanon",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "beirut",
              "options": [
                { "label": "Beirut", "value": "beirut" }
              ]
            }
          },
          {
            "label": "Lesotho",
            "value": "lesotho",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "maseru",
              "options": [
                { "label": "Maseru", "value": "maseru" }
              ]
            }
          },
          {
            "label": "Libera",
            "value": "liberia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "monrovia",
              "options": [
                { "label": "Monrovia", "value": "monrovia" }
              ]
            }
          },
          {
            "label": "Libya",
            "value": "libya",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tripoli",
              "options": [
                { "label": "Tripoli", "value": "tripoli" }
              ]
            }
          },
          {
            "label": "Liechtenstein",
            "value": "liechtenstein",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "vaduz",
              "options": [
                { "label": "Vaduz", "value": "vaduz" }
              ]
            }
          },
          {
            "label": "Lithuania",
            "value": "lithuania",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "vilnius",
              "options": [
                { "label": "Vilnius", "value": "vilnius" }
              ]
            }
          },
          {
            "label": "Luxembourg",
            "value": "luxembourg",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "luxembourg",
              "options": [
                { "label": "Luxembourg", "value": "luxembourg" }
              ]
            }
          },
          {
            "label": "Macao",
            "value": "macao",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "macau",
              "options": [
                { "label": "Macau", "value": "macau" }
              ]
            }
          },
          {
            "label": "Macedonia, the former Yugoslav Republic of",
            "value": "macedonia-the-former-yugoslav-republic-of",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "skopje",
              "options": [
                { "label": "Skopje", "value": "skopje" }
              ]
            }
          },
          {
            "label": "Madagascar",
            "value": "madagascar",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "antananarivo",
              "options": [
                { "label": "Antananarivo", "value": "antananarivo" }
              ]
            }
          },
          {
            "label": "Malawi",
            "value": "malawi",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "blantyre",
              "options": [
                { "label": "Blantyre", "value": "blantyre" }
              ]
            }
          },
          {
            "label": "Malaysia",
            "value": "malaysia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kuala-lumpur",
              "options": [
                { "label": "Kuala Lumpur", "value": "kuala-lumpur" },
                { "label": "Kuching", "value": "kuching" }
              ]
            }
          },
          {
            "label": "Maldives",
            "value": "maldives",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "maldives",
              "options": [
                { "label": "Maldives", "value": "maldives" }
              ]
            }
          },
          {
            "label": "Mali",
            "value": "mali",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bamako",
              "options": [
                { "label": "Bamako", "value": "bamako" }
              ]
            }
          },
          {
            "label": "Malta",
            "value": "malta",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "malta",
              "options": [
                { "label": "Malta", "value": "malta" }
              ]
            }
          },
          {
            "label": "Marshall Islands",
            "value": "marshall-islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "majuro",
              "options": [
                { "label": "Majuro", "value": "majuro" },
                { "label": "Kwajalein", "value": "kwajalein" }
              ]
            }
          },
          {
            "label": "Martinique",
            "value": "martinique",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "martinique",
              "options": [
                { "label": "Martinique", "value": "martinique" }
              ]
            }
          },
          {
            "label": "Mauritania",
            "value": "mauritania",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "nouakchott",
              "options": [
                { "label": "Nouakchott", "value": "nouakchott" }
              ]
            }
          },
          {
            "label": "Mauritius",
            "value": "mauritius",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "mauritius",
              "options": [
                { "label": "Mauritius", "value": "mauritius" }
              ]
            }
          },
          {
            "label": "Mayotte",
            "value": "mayotte",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "mayotte",
              "options": [
                { "label": "Mayotte", "value": "mayotte" }
              ]
            }
          },
          {
            "label": "Mexico",
            "value": "mexico",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "mexico-city",
              "options": [
                { "label": "Mexico City", "value": "mexico-city" },
                { "label": "Cancun", "value": "cancun" },
                { "label": "Merida", "value": "merida" },
                { "label": "Monterrey", "value": "monterrey" },
                { "label": "Matamoros", "value": "matamoros" },
                { "label": "Mazatlan", "value": "mazatlan" },
                { "label": "Chihuahua", "value": "chihuahua" },
                { "label": "Ojinaga", "value": "ojinaga" },
                { "label": "Hermosillo", "value": "hermosillo" },
                { "label": "Tijuana", "value": "tijuana" },
                { "label": "Santa Isabel", "value": "santa-isabel" },
                { "label": "Bahia Banderas", "value": "bahia-banderas" }
              ]
            }
          },
          {
            "label": "Micronesia, Federated States of",
            "value": "micronesia-federated-states-of",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "chuuk",
              "options": [
                { "label": "Chuuk", "value": "chuuk" },
                { "label": "Pohnpei", "value": "pohnpei" },
                { "label": "Kosrae", "value": "kosrae" }
              ]
            }
          },
          {
            "label": "Moldova",
            "value": "moldova",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "chisinau",
              "options": [
                { "label": "Chisinau", "value": "chisinau" }
              ]
            }
          },
          {
            "label": "Monaco",
            "value": "monaco",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "monaco",
              "options": [
                { "label": "Monaco", "value": "monaco" }
              ]
            }
          },
          {
            "label": "Mongolia",
            "value": "mongolia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "ulaanbaatar",
              "options": [
                { "label": "Ulaanbaatar", "value": "naruru" },
                { "label": "Hovd", "value": "hovd" },
                { "label": "Choibalsan", "value": "choibalsan" }
              ]
            }
          },
          {
            "label": "Montenegro",
            "value": "Montenegro",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "podgorica",
              "options": [
                { "label": "Podgorica", "value": "podgorica" }
              ]
            }
          },
          {
            "label": "Montserrat",
            "value": "montserrat",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "montserrat",
              "options": [
                { "label": "Montserrat", "value": "montserrat" }
              ]
            }
          },
          {
            "label": "Morocco",
            "value": "morocco",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "casablanca",
              "options": [
                { "label": "Casablanca", "value": "casablanca" }
              ]
            }
          },
          {
            "label": "Mozambique",
            "value": "mozambique",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "maputo",
              "options": [
                { "label": "Maputo", "value": "maputo" }
              ]
            }
          },
          {
            "label": "Myanmar",
            "value": "myanmar",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "rangoon",
              "options": [
                { "label": "Rangoon", "value": "rangoon" }
              ]
            }
          },
          {
            "label": "Namibia",
            "value": "namibia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "windhoek",
              "options": [
                { "label": "Windhoek", "value": "windhoek" }
              ]
            }
          },
          {
            "label": "Nauru",
            "value": "naruru",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "naruru",
              "options": [
                { "label": "Nauru", "value": "naruru" }
              ]
            }
          },
          {
            "label": "Nepal",
            "value": "nepal",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kathmandu",
              "options": [
                { "label": "Kathmandu", "value": "kathmandu" }
              ]
            }
          },
          {
            "label": "Netherlands",
            "value": "netherlands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "amsterdam",
              "options": [
                { "label": "Amsterdam", "value": "amsterdam" }
              ]
            }
          },
          {
            "label": "New Caledonia",
            "value": "new-caledonia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "noumea",
              "options": [
                { "label": "Noumea", "value": "noumea" }
              ]
            }
          },
          {
            "label": "New Zealand",
            "value": "new-zealand",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "auckland",
              "options": [
                { "label": "Auckland", "value": "auckland" },
                { "label": "Chatham", "value": "chatham" }
              ]
            }
          },
          {
            "label": "Nicaragua",
            "value": "nicaragua",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "managua",
              "options": [
                { "label": "Managua", "value": "managua" }
              ]
            }
          },
          {
            "label": "Niger",
            "value": "niger",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "niamey",
              "options": [
                { "label": "Niamey", "value": "niamey" }
              ]
            }
          },
          {
            "label": "Nigeria",
            "value": "nigeria",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "lagos",
              "options": [
                { "label": "Lagos", "value": "lagos" }
              ]
            }
          },
          {
            "label": "Niue",
            "value": "niue",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "niue",
              "options": [
                { "label": "Niue", "value": "niue" }
              ]
            }
          },
          {
            "label": "Norfolk Island",
            "value": "norfolk-island",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "norfolk",
              "options": [
                { "label": "Norfolk", "value": "norfolk" }
              ]
            }
          },
          {
            "label": "Northen Mariana Islands",
            "value": "northen-mariana-islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "saipan",
              "options": [
                { "label": "Saipan", "value": "saipan" }
              ]
            }
          },
          {
            "label": "Norway",
            "value": "norway",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "oslo",
              "options": [
                { "label": "Oslo", "value": "oslo" }
              ]
            }
          },
          {
            "label": "Oman",
            "value": "oman",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "muscat",
              "options": [
                { "label": "Muscat", "value": "muscat" }
              ]
            }
          },
          {
            "label": "Pakistan",
            "value": "pakistan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "karachi",
              "options": [
                { "label": "Karachi", "value": "karachi" }
              ]
            }
          },
          {
            "label": "Palau",
            "value": "palau",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "palau",
              "options": [
                { "label": "Palau", "value": "palau" }
              ]
            }
          },
          {
            "label": "Palestinian Territory, Occupied",
            "value": "palestinian-territory-occupied",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "gaza",
              "options": [
                { "label": "Gaza", "value": "gaza" },
                { "label": "Hebron", "value": "hebron" }
              ]
            }
          },
          {
            "label": "Panama",
            "value": "panama",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "panama",
              "options": [
                { "label": "Panama", "value": "panama" }
              ]
            }
          },
          {
            "label": "Papua New Guinea",
            "value": "papua-new-guinea",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "port-moresby",
              "options": [
                { "label": "Port Moresby", "value": "port-moresby" }
              ]
            }
          },
          {
            "label": "Paraguay",
            "value": "paraguay",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "asuncion",
              "options": [
                { "label": "Asuncion", "value": "asuncion" }
              ]
            }
          },
          {
            "label": "Peru",
            "value": "peru",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "lima",
              "options": [
                { "label": "Lima", "value": "lima" }
              ]
            }
          },
          {
            "label": "Phillippines",
            "value": "phillippines",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "manila",
              "options": [
                { "label": "Manila", "value": "manila" }
              ]
            }
          },
          {
            "label": "Pitcairn",
            "value": "pitcairn",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "pitcairn",
              "options": [
                { "label": "Pitcairn", "value": "pitcairn" }
              ]
            }
          },
          {
            "label": "Poland",
            "value": "poland",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "warsaw",
              "options": [
                { "label": "Warsaw", "value": "warsaw" }
              ]
            }
          },
          {
            "label": "Portugal",
            "value": "portugal",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "lisbon",
              "options": [
                { "label": "Lisbon", "value": "lisbon" },
                { "label": "Madeira", "value": "madeira" },
                { "label": "Azores", "value": "azores" }
              ]
            }
          },
          {
            "label": "Puerto Rico",
            "value": "puerto-rico",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "puerto-rico",
              "options": [
                { "label": "Puerto Rico", "value": "puerto-rico" }
              ]
            }
          },
          {
            "label": "Qatar",
            "value": "qatar",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "qatar",
              "options": [
                { "label": "Qatar", "value": "qatar" }
              ]
            }
          },
          {
            "label": "Réunion",
            "value": "reunion",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "reunion",
              "options": [
                { "label": "Réunion", "value": "reunion" }
              ]
            }
          },
          {
            "label": "Romania",
            "value": "romania",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bucharest",
              "options": [
                { "label": "Bucharest", "value": "bucharest" }
              ]
            }
          },
          {
            "label": "Russian Federation",
            "value": "russian-federation",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kaliningrad",
              "options": [
                { "label": "Kaliningrad", "value": "kaliningrad" },
                { "label": "Moscow", "value": "moscow" },
                { "label": "Volgograd", "value": "volgograd" },
                { "label": "Samara", "value": "samara" },
                { "label": "Yekaterinburg", "value": "yekaterinburg" },
                { "label": "Omsk", "value": "omsk" },
                { "label": "Novosibirsk", "value": "novosibirsk" },
                { "label": "Novokuznetsk", "value": "novokuznetsk" },
                { "label": "Krasnoyarsk", "value": "krasnoyarsk" },
                { "label": "Irkutsk", "value": "irkutsk" },
                { "label": "Yakutsk", "value": "yakutsk" },
                { "label": "Vladivostok", "value": "vladivostok" },
                { "label": "Sakhalin", "value": "sakhalin" },
                { "label": "Magadan", "value": "magadan" },
                { "label": "Kamchatka", "value": "kamchatka" },
                { "label": "Anadyr", "value": "anadyr" }
              ]
            }
          },
          {
            "label": "Rwanda",
            "value": "rwanda",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kigali",
              "options": [
                { "label": "Kigali", "value": "kigali" }
              ]
            }
          },
          {
            "label": "St Barthélemy",
            "value": "st-barthelemy",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "st-barthelemy",
              "options": [
                { "label": "St Barthélemy", "value": "st-barthelemy" }
              ]
            }
          },
          {
            "label": "Saint Helena, Ascension and Tristan da Cunha",
            "value": "saint-helena-ascension-and-tristan-da-cunha",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "st-helena",
              "options": [
                { "label": "St Helena", "value": "st-helena" }
              ]
            }
          },
          {
            "label": "Saint Kitts and Nevis",
            "value": "saint-kitts-and-nevis",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "st-kitts",
              "options": [
                { "label": "St Kitts", "value": "st-kitts" }
              ]
            }
          },
          {
            "label": "Saint Lucia",
            "value": "St Lucia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "st-lucia",
              "options": [
                { "label": "St Lucia", "value": "st-lucia" }
              ]
            }
          },
          {
            "label": "Saint Martin (French part)",
            "value": "saint-martin",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "marigot",
              "options": [
                { "label": "Marigot", "value": "marigot" }
              ]
            }
          },
          {
            "label": "Saint Pierre and Miquelon",
            "value": "saint-pierre-and-miquelon",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "miquelon",
              "options": [
                { "label": "Miquelon", "value": "miquelon" }
              ]
            }
          },
          {
            "label": "Saint Vincent and the Grenadines",
            "value": "saint-vincent-and-the-grenadines",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "st-vincent",
              "options": [
                { "label": "St Vincent", "value": "st-vincent" }
              ]
            }
          },
          {
            "label": "Samoa",
            "value": "samoa",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "apia",
              "options": [
                { "label": "Apia", "value": "apia" }
              ]
            }
          },
          {
            "label": "San Marino",
            "value": "san-marino",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "san-marino",
              "options": [
                { "label": "San Marino", "value": "san-marino" }
              ]
            }
          },
          {
            "label": "Sao Tome and Principe",
            "value": "sao-tome-and-principe",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "sao-tome",
              "options": [
                { "label": "Sao Tome", "value": "sao-tome" }
              ]
            }
          },
          {
            "label": "Saudi Arabia",
            "value": "saudi-arabia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "riyadh",
              "options": [
                { "label": "Riyadh", "value": "riyadh" }
              ]
            }
          },
          {
            "label": "Senegal",
            "value": "senegal",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "dakar",
              "options": [
                { "label": "Dakar", "value": "dakar" }
              ]
            }
          },
          {
            "label": "Serbia",
            "value": "serbia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "belgrade",
              "options": [
                { "label": "Belgrade", "value": "belgrade" }
              ]
            }
          },
          {
            "label": "Seychelles",
            "value": "seychelles",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "mahe",
              "options": [
                { "label": "Mahe", "value": "mahe" }
              ]
            }
          },
          {
            "label": "Sierra Leone",
            "value": "sierra-leone",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "freetown",
              "options": [
                { "label": "Freetown", "value": "freetown" }
              ]
            }
          },
          {
            "label": "Singapore",
            "value": "singapore",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "singapore",
              "options": [
                { "label": "Singapore", "value": "singapore" }
              ]
            }
          },
          {
            "label": "Sint Maarten (Dutch part)",
            "value": "sint-maarten",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "lower-princes",
              "options": [
                { "label": "Lower Princes", "value": "lower-princes" }
              ]
            }
          },
          {
            "label": "Slovakia",
            "value": "slovakia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bratislava",
              "options": [
                { "label": "Bratislava", "value": "bratislava" }
              ]
            }
          },
          {
            "label": "Slovenia",
            "value": "slovenia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "ljubljana",
              "options": [
                { "label": "Ljubljana", "value": "ljubljana" }
              ]
            }
          },
          {
            "label": "Solomon Islands",
            "value": "Solomon Islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "guadalcanal",
              "options": [
                { "label": "Guadalcanal", "value": "guadalcanal" }
              ]
            }
          },
          {
            "label": "Somalia",
            "value": "somalia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "mogadishu",
              "options": [
                { "label": "Mogadishu", "value": "mogadishu" }
              ]
            }
          },
          {
            "label": "South Africa",
            "value": "south-africa",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "johannesburg",
              "options": [
                { "label": "Johannesburg", "value": "johannesburg" }
              ]
            }
          },
          {
            "label": "South Georgia and the South Sandwich Islands",
            "value": "south-georgia-and-the-south-sandwich-islands ",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "south-georgia",
              "options": [
                { "label": "South Georgia", "value": "south-georgia" }
              ]
            }
          },
          {
            "label": "South Sudan",
            "value": "south-sudan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "juba",
              "options": [
                { "label": "Juba", "value": "juba" }
              ]
            }
          },
          {
            "label": "Spain",
            "value": "spain",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "madrid",
              "options": [
                { "label": "Madrid", "value": "madrid" },
                { "label": "Ceuta", "value": "ceuta" },
                { "label": "Canary", "value": "canary" }
              ]
            }
          },
          {
            "label": "Sri Lanka",
            "value": "sri-lanka",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "sri-lanka",
              "options": [
                { "label": "Colombo", "value": "colombo"}
              ]
            }
          },
          {
            "label": "Sudan",
            "value": "sudan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "khartoum",
              "options": [
                { "label": "Khartoum", "value": "khartoum"}
              ]
            }
          },
          {
            "label": "Suriname",
            "value": "suriname",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "paramaribo",
              "options": [
                { "label": "Paramaribo", "value": "paramaribo"}
              ]
            }
          },
          {
            "label": "Svalbard and Jan Mayen",
            "value": "svalbard-and-jan-mayen",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "longyearbyen",
              "options": [
                { "label": "Longyearbyen", "value": "longyearbyen"}
              ]
            }
          },
          {
            "label": "Swaziland",
            "value": "swaziland",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "mbabane",
              "options": [
                { "label": "Mbabane", "value": "mbabane"}
              ]
            }
          },
          {
            "label": "Sweden",
            "value": "sweden",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "stockholm",
              "options": [
                { "label": "Stockholm", "value": "stockholm"}
              ]
            }
          },
          {
            "label": "Switzerland",
            "value": "switzerland",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "zurich",
              "options": [
                { "label": "Zurich", "value": "zurich"}
              ]
            }
          },
          {
            "label": "Sylvanland",
            "value": "sylvanland",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "monica-town",
              "options": [
                { "label": "Monicatown", "value": "monica-town" },
                { "label": "JROB'Oppolis", "value": "jrob-oppolis" }
              ]
            }
          },
          {
            "label": "Syrian Arab Republic",
            "value": "syrian-arab-republic",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "damascus",
              "options": [
                { "label": "Damascus", "value": "damascus"}
              ]
            }
          },
          {
            "label": "Taiwan, Province of China",
            "value": "taiwan-province-of-china",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "taipei",
              "options": [
                { "label": "Taipei", "value": "taipei"}
              ]
            }
          },
          {
            "label": "Tajikistan",
            "value": "tajikistan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "dushanbe",
              "options": [
                { "label": "Dushanbe", "value": "dushanbe"}
              ]
            }
          },
          {
            "label": "Tanzania, United Republic of",
            "value": "tanzania-united-republic-of",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "dar-es-salaam",
              "options": [
                { "label": "Dar es Salaam", "value": "dar-es-salaam"}
              ]
            }
          },
          {
            "label": "Thailand",
            "value": "thailand",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "bangkok",
              "options": [
                { "label": "Bangkok", "value": "bangkok"}
              ]
            }
          },
          {
            "label": "Timor-Leste",
            "value": "timor-leste",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "dili",
              "options": [
                { "label": "Dili", "value": "dili"}
              ]
            }
          },
          {
            "label": "Togo",
            "value": "togo",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "lome",
              "options": [
                { "label": "Lome", "value": "lome"}
              ]
            }
          },
          {
            "label": "Tokelau",
            "value": "tokelau",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "fakaofo",
              "options": [
                { "label": "Fakaofo", "value": "fakaofo"}
              ]
            }
          },
          {
            "label": "Tonga",
            "value": "tonga",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tongatapu",
              "options": [
                { "label": "Tongatapu", "value": "tongatapu"}
              ]
            }
          },
          {
            "label": "Trinidad and Tobago",
            "value": "trinidad-and-tobago",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "port-of-spain",
              "options": [
                { "label": "Port of Spain", "value": "port-of-spain"}
              ]
            }
          },
          {
            "label": "Tunisia",
            "value": "tunisia",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tunis",
              "options": [
                { "label": "Tunis", "value": "tunis"}
              ]
            }
          },
          {
            "label": "Turkey",
            "value": "turkey",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "istanbul",
              "options": [
                { "label": "Istanbul", "value": "istanbul"}
              ]
            }
          },
          {
            "label": "Turkmenistan",
            "value": "turkmenistan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "ashgabat",
              "options": [
                { "label": "Ashgabat", "value": "ashgabat"}
              ]
            }
          },
          {
            "label": "Turks and Caicos Islands",
            "value": "turks-and-caicos-islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "grand-turk",
              "options": [
                { "label": "Grand Turk", "value": "grand-turk"}
              ]
            }
          },
          {
            "label": "Tuvalu",
            "value": "tuvalu",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "funafuti",
              "options": [
                { "label": "Funafuti", "value": "funafuti"}
              ]
            }
          },
          {
            "label": "Uganda",
            "value": "uganda",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kampala",
              "options": [
                { "label": "Kampala", "value": "kampala"}
              ]
            }
          },
          {
            "label": "Ukraine",
            "value": "ukraine",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "kiev",
              "options": [
                { "label": "Kiev", "value": "kiev"},
                { "label": "Uzhgorod", "value": "uzhgorod"},
                { "label": "Zaporozhye", "value": "zaporozhye"},
                { "label": "Simferopol", "value": "simferopol"}
              ]
            }
          },
          {
            "label": "United Arab Emirates",
            "value": "united-arab-emirates",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "dubai",
              "options": [
                { "label": "Dubai", "value": "dubai"}
              ]
            }
          },
          {
            "label": "United Kingdom",
            "value": "united-kingdom",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "london",
              "options": [
                  { "label": "London", "value": "london" }
              ]
            }
          },
          {
            "label": "United States",
            "value": "united-states",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "new-york",
              "options": [
                { "label": "New York", "value": "new-york" },
                { "label": "Detroit", "value": "detroit" },
                { "label": "Louisville, Kentucky", "value": "louisville-kentucky" },
                { "label": "Monticello, Kentucky", "value": "monticello-kentucky" },
                { "label": "Indianapolis, Kentucky", "value": "indianpolis-kentucky" },
                { "label": "Vincennes, Indiana", "value": "vincennes-indiana" },
                { "label": "Winamac, Indiana", "value": "winamac-indiana" },
                { "label": "Marengo, Indiana", "value": "marengo-indiana" },
                { "label": "Petersburg, Indiana", "value": "petersburg-indiana" },
                { "label": "Vevay, Indiana", "value": "vevay-indiana" },
                { "label": "Chicago", "value": "chicago" },
                { "label": "Tell City, Indiana", "value": "tell-city-indiana" },
                { "label": "Knox, Indiana", "value": "knox-indiana" },
                { "label": "Menominee", "value": "Menominee" },
                { "label": "Center, North Dakota", "value": "center-north-dakota" },
                { "label": "New Salem, North Dakota", "value": "new-salem-north-dakota" },
                { "label": "Beulah, North Dakota", "value": "buelah-north-dakota" },
                { "label": "Denver", "value": "denver" },
                { "label": "Boise", "value": "boise" },
                { "label": "Shiprock", "value": "shiprock" },
                { "label": "Phoenix", "value": "phoenix" },
                { "label": "Los Angeles", "value": "los-angeles" },
                { "label": "Anchorage", "value": "anchorage" },
                { "label": "Juneau", "value": "juneau" },
                { "label": "Sitka", "value": "sitka" },
                { "label": "Yakutat", "value": "yakutat" },
                { "label": "Nome", "value": "nome" },
                { "label": "Adak", "value": "adak" },
                { "label": "Metlakatla", "value": "metlakatla" },
                { "label": "Honolulu", "value": "honolulu" }
              ]
            }
          },
          {
            "label": "United States Minor Outlying Islands",
            "value": "united-states-minor-outlying-islands",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "johnston",
              "options": [
                { "label": "Johnston", "value": "johnston" },
                { "label": "Midway", "value": "midway" },
                { "label": "Wake", "value": "wake" }
              ]
            }
          },
          {
            "label": "Uruguay",
            "value": "uruguay",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "montevideo",
              "options": [
                { "label": "Montevideo", "value": "montevideo" }
              ]
            }
          },
          {
            "label": "Uzbekistan",
            "value": "uzbekistan",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "samarkand",
              "options": [
                { "label": "Samarkand", "value": "samarkand" },
                { "label": "Tashkent", "value": "tashkent" }
              ]
            }
          },
          {
            "label": "Vanuatu",
            "value": "vanuatu",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "efate",
              "options": [
                { "label": "Efate", "value": "efate" }
              ]
            }
          },
          {
            "label": "Venezuela, Bolivarian Republic of",
            "value": "venezuela-bolivarian-republic-of",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "caracas",
              "options": [
                { "label": "Caracas", "value": "caracas" }
              ]
            }
          },
          {
            "label": "Viet Nam",
            "value": "viet-nam",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "ho-chi-min",
              "options": [
                { "label": "Ho Chi Minh", "value": "ho-chi-min" }
              ]
            }
          },
          {
            "label": "Virgin Islands, British",
            "value": "virgin-islands-british",
            "field": {
              "name": "Timezone",
              "type": "dropdown",
              "defaultValue": "tortola",
              "options": [
                { "label": "Tortola", "value": "tortola" }
              ]
            }
          }
        ]
      }
    ]
  }]
}

export default clock
