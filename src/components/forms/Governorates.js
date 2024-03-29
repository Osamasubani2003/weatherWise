const governorates = [
  { country: 'Afghanistan', cities: [
      "Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan",
      "Daykundi", "Farah", "Faryab", "Ghazni", "Ghor", "Helmand",
      "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost",
      "Kunar", "Kunduz", "Laghman", "Logar", "Nangarhar", "Nimroz",
      "Nuristan", "Paktia", "Paktika", "Panjshir", "Parwan",
      "Samangan", "Sar-e Pol", "Takhar", "Urozgan", "Wardak", "Zabul"
    ] },
    { country: 'Albania', cities: [
      'Berat', 'Dibër', 'Durrës', 'Elbasan', 'Fier',
      'Gjirokastër', 'Korçë', 'Kukës', 'Lezhë', 'Shkodër',
      'Tiranë', 'Vlorë'
    ] },
    { country: 'Algeria', cities: [
      'Adrar', 'Aïn Defla', 'Aïn Témouchent', 'Algiers', 'Annaba',
      'Batna', 'Béchar', 'Béjaïa', 'Biskra', 'Blida', 'Bordj Bou Arréridj',
      'Bouira', 'Boumerdès', 'Chlef', 'Constantine', 'Djelfa', 'El Bayadh',
      'El Oued', 'El Tarf', 'Ghardaïa', 'Guelma', 'Illizi', 'Jijel',
      'Khenchela', 'Laghouat', 'M\'Sila', 'Mascara', 'Médéa', 'Mila',
      'Mostaganem', 'Naama', 'Oran', 'Ouargla', 'Oum El Bouaghi',
      'Relizane', 'Saïda', 'Sétif', 'Sidi Bel Abbès', 'Skikda',
      'Souk Ahras', 'Tamanrasset', 'Tébessa', 'Tiaret', 'Tindouf',
      'Tipaza', 'Tissemsilt', 'Tizi Ouzou', 'Tlemcen'
    ] },
      { country: 'Andorra', cities: [
          'Canillo', 'Encamp', 'Escaldes-Engordany', 'La Massana',
          'Ordino', 'Sant Julià de Lòria'
        ] },
      { country: 'Angola', cities: [
          'Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango',
          'Cuanza Norte', 'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla',
          'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malanje', 'Moxico',
          'Namibe', 'Uíge', 'Zaire'
        ] },
      { country: 'Antigua and Barbuda', cities: [
          'Saint John', 'Saint George', 'Saint Mary', 'Saint Paul',
          'Saint Peter', 'Saint Philip', 'Barbuda'
        ] },
      { country: 'Argentina', cities: [
          'Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
          'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa',
          'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro',
          'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe',
          'Santiago del Estero', 'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
          'Tucumán'
        ] },
      { country: 'Armenia', cities: [
          'Aragatsotn', 'Ararat', 'Armavir', 'Gegharkunik', 'Kotayk',
          'Lori', 'Shirak', 'Syunik', 'Tavush', 'Vayots Dzor', 'Yerevan'
        ]},
      { country: 'Australia', cities: [
          'Australian Capital Territory', 'New South Wales', 'Northern Territory',
          'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'
          ]},
      { country: 'Austria', cities: [
          'Burgenland', 'Carinthia', 'Lower Austria', 'Upper Austria',
          'Salzburg', 'Styria', 'Tyrol', 'Vorarlberg', 'Vienna'
        ]},
      { country: 'Azerbaijan', cities: [
          'Absheron', 'Agdash', 'Agjabadi', 'Agstafa', 'Agsu', 'Astara',
          'Babek', 'Baku', 'Balakan', 'Barda', 'Beylagan', 'Bilasuvar',
          'Dashkasan', 'Fuzuli', 'Gadabay', 'Ganja', 'Goranboy', 'Goychay',
          'Goygol', 'Hadrut', 'Ismayilli', 'Jalilabad', 'Jabrayil', 'Julfa',
          'Kalbajar', 'Kangarli', 'Khachmaz', 'Khankendi', 'Khanlar', 'Khanubin',
          'Khizi', 'Khojaly', 'Khojavend', 'Kurdamir', 'Lachin', 'Lankaran',
          'Lerik', 'Masally', 'Mingachevir', 'Naftalan', 'Nakhchivan', 'Neftchala',
          'Oguz', 'Ordubad', 'Qabala', 'Qakh', 'Qazakh', 'Quba', 'Qubadli',
          'Qusar', 'Sadarak', 'Salyan', 'Samukh', 'Shabran', 'Shaki', 'Shamakhi',
          'Shamkir', 'Sharur', 'Shusha', 'Siazan', 'Sumgayit', 'Tartar', 'Tovuz',
          'Ujar', 'Yardimli', 'Yevlakh', 'Zangilan', 'Zaqatala', 'Zardab'
        ]},
      { country: 'Bahamas', cities: [
          'Acklins', 'Berry Islands', 'Bimini', 'Black Point', 'Cat Island',
          'Central Abaco', 'Central Andros', 'Central Eleuthera', 'City of Freeport',
            'Crooked Island and Long Cay', 'East Grand Bahama', 'Exuma', 'Grand Cay',
            'Harbour Island', 'Hope Town', 'Inagua', 'Long Island', 'Mangrove Cay',
            'Mayaguana', 'Moore\'s Island', 'New Providence', 'North Abaco', 'North Andros',
            'North Eleuthera', 'Ragged Island', 'Rum Cay', 'San Salvador', 'South Abaco',
            'South Andros', 'South Eleuthera', 'Spanish Wells', 'West Grand Bahama'
          ]},
          { country: 'Bahrain', cities: [
            'Capital Governorate', 'Central Governorate', 'Muharraq Governorate',
            'Northern Governorate', 'Southern Governorate'
        ] },
          { country: 'Bangladesh', cities: [
            'Barisal Division', 'Chittagong Division', 'Dhaka Division',
            'Khulna Division', 'Mymensingh Division', 'Rajshahi Division',
            'Rangpur Division', 'Sylhet Division'
        ] },
          { country: 'Barbados', cities: [
            'Christ Church', 'Saint Andrew', 'Saint George', 'Saint James',
            'Saint John', 'Saint Joseph', 'Saint Lucy', 'Saint Michael',
            'Saint Peter', 'Saint Philip', 'Saint Thomas'
        ] },
          { country: 'Belarus', cities:[
            'Brest Region', 'Gomel Region', 'Grodno Region',
            'Minsk Region', 'Mogilev Region', 'Vitebsk Region'
        ] },
          { country: 'Belgium', cities: ['Antwerp', 'East Flanders', 'Flemish Brabant', 'Limburg', 'West Flanders', 
          'Hainaut', 'Liège', 'Luxembourg', 'Namur', 'Walloon Brabant','Brussels']},
          { country: 'Belize', cities: [
            'Belize District', 'Cayo District', 'Corozal District',
            'Orange Walk District', 'Stann Creek District', 'Toledo District'
        ]},
          { country: 'Benin', cities: [
            'Alibori', 'Atakora', 'Atlantique', 'Borgou', 'Collines',
            'Couffo', 'Donga', 'Littoral', 'Mono', 'Ouémé', 'Plateau', 'Zou'
        ] },
          { country: 'Bhutan', cities: [
            'Bumthang', 'Chhukha', 'Dagana', 'Gasa', 'Haa', 'Lhuntse',
            'Mongar', 'Paro', 'Pemagatshel', 'Punakha', 'Samdrup Jongkhar',
            'Samtse', 'Sarpang', 'Thimphu', 'Trashigang', 'Trashiyangtse',
            'Trongsa', 'Tsirang', 'Wangdue Phodrang', 'Zhemgang'
        ]},
          { country: 'Bolivia', cities: [
            'Beni', 'Chuquisaca', 'Cochabamba', 'La Paz', 'Oruro',
            'Pando', 'Potosí', 'Santa Cruz', 'Tarija'
        ] },
          { country: 'Bosnia and Herzegovina', cities: [
            'Una-Sana Canton', 'Posavina Canton', 'Tuzla Canton',
            'Zenica-Doboj Canton', 'Bosnian Podrinje Canton', 'Central Bosnia Canton',
            'Herzegovina-Neretva Canton', 'West Herzegovina Canton', 'Sarajevo Canton',
            'West Bosnia Canton', 'Canton 10','Banja Luka', 'Bijeljina', 'Doboj', 'Foča', 'Mrkonjić Grad', 'Trebinje','Brčko']},
          { country: 'Botswana', cities: [
            'Central District', 'Chobe District', 'Ghanzi District', 'Kgalagadi District',
            'Kgatleng District', 'Kweneng District', 'North-East District', 'North-West District',
            'South-East District', 'Southern District'
        ] },
          { country: 'Brazil', cities: [
            'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará',
            'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
            'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
            'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
            'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins','Distrito Federal'] },
          { country: 'Brunei', cities: [
            'Belait', 'Brunei-Muara', 'Temburong', 'Tutong'
        ]},
          { country: 'Bulgaria', cities: [
            'Blagoevgrad', 'Burgas', 'Dobrich', 'Gabrovo', 'Haskovo', 'Kardzhali',
            'Kyustendil', 'Lovech', 'Montana', 'Pazardzhik', 'Pernik', 'Pleven',
            'Plovdiv', 'Razgrad', 'Ruse', 'Shumen', 'Silistra', 'Sliven', 'Smolyan',
            'Sofia (capital)', 'Sofia Province', 'Stara Zagora', 'Targovishte',
            'Varna', 'Veliko Tarnovo', 'Vidin', 'Vratsa', 'Yambol'
        ] },
          { country: 'Burkina Faso', cities: [
            'Boucle du Mouhoun', 'Cascades', 'Centre', 'Centre-Est', 'Centre-Nord',
            'Centre-Ouest', 'Centre-Sud', 'Est', 'Hauts-Bassins', 'Nord',
            'Plateau-Central', 'Sahel', 'Sud-Ouest'
        ] },
          { country: 'Burundi', cities: [
            'Bubanza', 'Bujumbura Mairie', 'Bujumbura Rural', 'Bururi', 'Cankuzo',
            'Cibitoke', 'Gitega', 'Karuzi', 'Kayanza', 'Kirundo', 'Makamba', 'Muramvya',
            'Muyinga', 'Mwaro', 'Ngozi', 'Rutana', 'Ruyigi', 'Rumonge'
        ] },
          { country: 'Cabo Verde', cities: ['Santo Antão', 'São Vicente', 'Santa Luzia', 'São Nicolau',
          'Boa Vista', 'Maio', 'Santiago', 'Fogo', 'Brava','Ribeira Grande (Santo Antão)']
        },












        
          { country: 'Jordan', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 
          'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] },
          { country: 'Jordan', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 
          'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] },
          { country: 'Jordan', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 
          'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] },
          { country: 'Jordan', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 
          'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] },
          { country: 'Jordan', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 
          'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] },
          { country: 'Jordan', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 
          'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] },
        { country: 'United States', cities: [
            "Alabama", "Alaska", "Arizona", "Arkansas", "California",
            "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
            "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
            "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
            "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
            "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
            "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
            "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
            "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
        ] },
        { country: 'Canada', cities:[
            "Alberta", "British Columbia", "Manitoba", "New Brunswick",
            "Newfoundland and Labrador", "Nova Scotia", "Ontario",
            "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories",
            "Nunavut", "Yukon"
         ] },
        { country: 'Jordan', cities: ['Ajloun', 'Amman', 'Aqaba', 'Balqa', 'Irbid', 
            'Jerash', 'Karak', 'Ma\'an', 'Madaba', 'Mafraq', 'Tafilah', 'Zarqa'] }
  ];
  
  export default governorates;