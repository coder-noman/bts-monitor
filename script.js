const bts = {
    "Dhaka North": {
        "5": "Dhaka-Uttara-BTS-Bns Tower (L3)",
        "7": "Dhaka-Mirpur-BTS-Mirpur-10 (L3)",
        "35": "Dhaka-Uttara-BTS-Uttara office (L3)",
        "31": "Dhaka-Banani-BTS-Ahmed Tower (L3)",
        "33": "Dhaka-Banani-BTS-Banani Road 27 (L3)",
        "59": "Dhaka-Gulshan-BTS-Gulshan-1 (L3)",
        "85": "Dhaka-Gulshan-BTS-Gulshan-1 (L3)",
        "62": "Dhaka-Rampura-BTS-Banasree (L3)",
        "88": "Dhaka-Rampura-BTS-Banasree (L3)",
        "42": "Dhaka-Uttara-BTS-Sector 13 (L3)",
        "279": "Dhaka-Uttara-BTS-Sector 13 (L3)",
        "146": "Tangail-Tangail Sadar-BTS-Korotia (GP)",
        "206": "Dhaka-Banani-NTTN-Aggregation (FHL)",
        "227": "Dhaka-Pallabi-BTS-Mirpur Dohs (L3)",
        "229": "Dhaka-Bhatara-BTS-Basundhara_D (L3)",
        "231": "Dhaka-Gulshan-BTS-BL Central (BL)",
        "296": "Dhaka-Gulshan-DC-Mir Telecom (L3)",
        "297": "Dhaka-Mohakhali-DR-Khaza Tower (L3)",
        "313": "Dhaka-Khilkhet-BTS-Nikunja (L3)",
        "326": "Tangail-Mirzapur-BTS-Warsi (GP)",
        "358": "Tangail-Tangail-BTS-Khan Plaza (L3)",
        "363": "Dhaka-Mirpur-BTS-East Shewrapara (L3)",
        "379": "Dhaka-Tejgaon-BTS-Tejgaon (L3)",
        "386": "Dhaka-Badda-BTS-Dit Project (L3)",
        "387": "Dhaka-Rampura-BTS-Mohanagar Project (L3)",
        "388": "Dhaka-Mirpur-BTS-Mirpur 2 (L3)",
        "434": "Tangail-Bhuapur-BTS-Bhuapur (BL)",
        "455": "Gazipur-Tongi (East)-BTS-Tongi (L3)",
        "456": "Dhaka-Gulshan-BTS-Police Plaza (L3)",
        "67": "Dhaka-Gulshan-BTS-Police Plaza (L3)",
        "489": "Gazipur-Gazipur Sadar-BTS-Sumon Complex Shimultoli (L3)",
        "497": "Dhaka-Uttara-BTS-Dakshinkhan (L3)",
        "522": "Dhaka-Bhatara-BTS-Basundhara_I (L3)",
        "547": "Dhaka-Gulshan-DC-Mir Telecom (L3)",
        "571": "Dhaka-Khilkhet-BTS-Nikunja (L3)",
        "659": "Dhaka-Tejgaon-NTTN-Aggregation (SCL)",
        "667": "Gazipur-Kaliganj-BTS-Ulukhola (BL)",
        "674": "Dhaka-Uttara-BTS-Uttara Sector 15 (SA)",
        "693": "Dhaka-Vatara-BTS-Shahjadpur (L3)",
        "704": "Gazipur-Salna-BTS-Salna (L3)",
        "705": "Tangail-Shokhipur-BTS-Shokhipur (L3)",
        "711": "Dhaka-Tejgaon-BTS-East Nakhalpara (L3)",
        "727": "Dhaka-Uttara-BTS-Uttarkhan (GP)",
        "735": "Dhaka-Gulshan-NTTN-Aggregation (Bahon)",
        "13980": "Dhaka-Gulshan-NTTN-Aggregation (BTCL)",
        "13989": "Dhaka-Tejgaon-BTS-Khawaja Tower Agg (GP)",
        "24013": "Gazipur-Kaliakair-BTS-Felicity IDC (L3)",
        "24067": "Gazipur-Konabari-BTS-Ambagh (SA)",
        "24069": "Tangail-Sakhipur-BTS-Nalua (SA)"
    },
    "Dhaka South": {
        "4": "Dhaka-Dhanmondi-BTS-Dhanmondi Office (L3)",
        "10": "Dhaka-Kalabagan-BTS-Concord (L3)",
        "11": "Dhaka-Motijheel-BTS-Malek Mension (L3)",
        "12": "Narayanganj-Chashara-BTS-Haque Plaza (L3)",
        "14": "Dhaka-Chokbazar-BTS-Imamgonj (L3)",
        "15": "Dhaka-Dohar-BTS-Joypara (L3)",
        "20": "Dhaka-Savar-BTS-Savar Epz (L3)",
        "25": "Manikganj-Manikgonj-BTS-Manikgonj (L3)",
        "29": "Dhaka-Shahbagh-BTS-Segunbagicha (L3)",
        "34": "Dhaka-Tejgaon-BTS-Karwanbazar (L3)",
        "38": "Dhaka-Savar-BTS-Savarbazar (L3)",
        "60": "Dhaka-Tejgaon-BTS-Monipuripara (L3)",
        "86": "Dhaka-Tejgaon-BTS-Monipuripara (L3)",
        "94": "Dhaka-Ramna-BTS-Easkaton (L3)",
        "147": "Munshiganj-Munshiganj-BTS-Jublee Road (L3)",
        "148": "Rajbari-Rajbari-BTS-Rajbari (BL)",
        "153": "Narsingdi-Raipura-BTS-Raipura (BL)",
        "224": "Dhaka-Jatrabari-BTS-Jatrabari (L3)",
        "225": "Dhaka-Kalabagan-BTS-Hatirpool (L3)",
        "230": "Dhaka-Mohammadpur-BTS-Probal Housing (L3)",
        "243": "Dhaka-Wari-BTS-B.C.C Road (L3)",
        "304": "Faridpur-Bhanga-BTS-Bhanga (BL)",
        "310": "Dhaka-Mohammadpur-BTS-Dhaka Uddyan (SA)",
        "336": "Dhaka-Mohammadpur-BTS-Lalmatia (L3)",
        "376": "Faridpur-Faridpur-BTS-Alafadanga (BL)",
        "385": "Narayanganj-Narayanganj-BTS-Siddhirganj (L3)",
        "389": "Dhaka-Khilgaon-BTS-Khilgaon (L3)",
        "392": "Rajbari-Pangsha-BTS-Pangsha (GP)",
        "421": "Dhaka-Ashulia-BTS-Jamgora (L3)",
        "468": "Narayanganj-Siddhirganj-BTS-Ctg Road (L3)",
        "483": "Dhaka-Motijheel-BTS-Dilkusha (L3)",
        "491": "Madaripur-Shibchar-BTS-Sadar Road (L3)",
        "494": "Munshiganj-Sreenagar-BTS-Sreenagar (BL)",
        "525": "Dhaka-Dhanmondi-BTS-Azimpur (SA)",
        "537": "Narayanganj-Fotullah-BTS-Fotullah (SA)",
        "548": "Dhaka-Mohakhali-DR-Khaza Tower (L3)",
        "568": "Dhaka-Mohammadpur-BTS-Dhaka Uddyan (SA)",
        "651": "Munshiganj-Tongibari-BTS-Tongibari (SA)",
        "655": "Narayanganj-Narayanganj Sadar-BTS-Deubhog (SA)",
        "665": "Dhaka-Mohammadpur-BTS-Lalmatia (L3)",
        "671": "Dhaka-Dhanmondi-BTS-ISPAB-15A (L3)",
        "672": "Dhaka-Dhanmondi-BTS-ISPAB-19 (L3)",
        "686": "Dhaka-Sher-E Bangla Nagar-BTS-Agargaon (L3)",
        "700": "Munshiganj-Munshiganj-BTS-Loharpul (SA)",
        "710": "Dhaka-Dhamrai-BTS-Uttar Para Dhamrai (L3)",
        "712": "Dhaka-Shahjahanpur-BTS-Shahjahanpur (L3)",
        "725": "Shariatpur-Shariatpur Sadar-BTS-Shariatpur (GP)",
        "13982": "Customer-Aggregation-Link (L3)",
        "13983": "Customer-Non connectivity-Product & Service (L3)",
        "24019": "Dhaka-Keraniganj-BTS-Atibazar (SA)",
        "24054": "Munshiganj-Munshiganj Sadar-BTS-Doyal Bazar (SA)",
        "24061": "Narayanganj-Bandar-BTS-SS Shah Road (SA)",
        "24076": "Dhaka-Ramna-DR-Borak Tower (L3)",
        "24078": "Faridpur-Bhanga-BTS-Town Court par (SA)",
        "24086": "Faridpur-Madhukhali-BTS-Nilgate Bazar (SA)",
        "24089": "Rajbari-Kalukhali-BTS-Mrigi Bazar (SA)",
        "24095": "Sunamganj-South Sunamganj-BTS-Mina Bazar (SA)"
    },
    "Chattogram": {
        "2": "Feni-Feni-BTS-Feni Tower (L3)",
        "6": "Moulvibazar-Sreemangal-BTS-Sultan Market (L3)",
        "9": "Chattogram-Bayejid Bostami-BTS-Oxygen Ctg (L3)",
        "26": "Comilla-Comilla Sadar-BTS-Sattar Khan Complex (L3)",
        "41": "Chattogram-Hathazari-BTS-Nazumiahat (L3)",
        "56": "Cox's Bazar-Coxsbazar Sadar-BTS-Eidgaon (L3)",
        "60": "Noakhali-Begumganj-BTS-Chowmohoni (L3)",
        "61": "Lakshmipur-Ramganj-BTS-Ramganj (GP)",
        "63": "Chattogram-Bandar-BTS-Ali Plaza (L3)",
        "70": "Chattogram-Double Mooring-BTS-C&F Tower (L3)",
        "71": "Chattogram-Chittagong Kotwali-BTS-MehediBag (L3)",
        "72": "Chattogram-Kotwali-BTS-Khatungonj (L3)",
        "73": "Chattogram-Khulshi-BTS-Khulshi (L3)",
        "74": "Chattogram-Pahartali-BTS-Shagorika (L3)",
        "76": "Chattogram-Lohagara-BTS-Lohagora (L3)",
        "77": "Coxs Bazar-Coxs Bazar-BTS-Coxs Bazar (L3)",
        "90": "Chattogram-Sitakunda-BTS-Bhatiari (GP)",
        "92": "Chattogram-Patenga-BTS-KEPZ (L3)",
        "93": "Chattogram-Fatikchhari-BTS-Nanupur (GP)",
        "103": "Chattogram-Boalkhali-BTS-Boalkhali (GP)",
        "108": "Chattogram-Rangunia-BTS-Rangunia (BL)",
        "110": "Chandpur-Hajiganj-BTS-Hajiganj (BL)",
        "116": "Chattogram-Sitakunda-BTS-Sitakunda (BL)",
        "123": "Chandpur-Matlabdakshin-BTS-Matlab (BL)",
        "124": "Chattogram-Raozan-BTS-Raozan (BL)",
        "128": "Chattogram-Mirershorai-BTS-Mirershorai (BL)",
        "129": "Chattogram-Sitakunda-BTS-Kumira (BL)",
        "130": "Chandpur-Chandpur-BTS-Sardar Plaza (L3)",
        "134": "Lakshmipur-Riapur-BTS-Raipur (BL)",
        "209": "Lakshmipur-Lakshmipur-BTS-Lakshmipur (BL)",
        "212": "Chattogram-Chandgaon-BTS-Kalurghat (L3)",
        "234": "Chattogram-Chandanaish-BTS-Dohazari (GP)",
        "244": "Bandarban-Bandarban-BTS-Bandarban Sadar (GP)",
        "264": "Chattogram-Sandwip-BTS-Sandwip (GP)",
        "265": "Chattogram-Mirsharai-BTS-Sakherkhali (BL)",
        "266": "Chattogram-Fatikchhari-BTS-Fatikchhari (GP)",
        "269": "Chattogram-Rangunia-BTS-Rangunia Lichubagan (GP)",
        "271": "Chattogram-Hathazari-BTS-Hathazari (GP)",
        "272": "Chattogram-Fatikchhari-BTS-Nazirhat (GP)",
        "281": "Cumilla-Debidwar-BTS-Debidwar (BL)",
        "292": "Cox's Bazar-Teknaf-BTS-Teknaf (GP)",
        "293": "Feni-Parshuram-BTS-Parshuram (BL)",
        "330": "Chattogram-Anwara-BTS-Chatarhat (GP)",
        "332": "Cox's Bazar-Chakaria-BTS-Khutakhali (GP)",
        "357": "Rangamati-Rangamati-BTS-Rangamati (BL)",
        "399": "Bandarban-Lama-BTS-Aziznagar (GP)",
        "400": "Khagrachhari-Ramgarh-BTS-Ramgarh (GP)",
        "407": "Sylhet-Zakiganj-BTS-Zakiganj (GP)",
        "412": "Chattogram-Bashkhali-BTS-Bashkhali (BL)",
        "413": "Chattogram-Raozan-BTS-Patherhat (BL)",
        "414": "Chattogram-Patenga-BTS-Ctg Airport (L3)",
        "420": "Rangamati-Kaptai-BTS-Kaptai (L3)",
        "452": "Chattogram-Patiya-BTS-Patiya (L3)",
        "459": "Noakhali-Subarnachar-BTS-Subarnachar (BL)",
        "462": "Coxs Bazar-Chokoria-BTS-Chokoria (L3)",
        "469": "Cumilla-Cumilla-BTS-Alekharchar (BL)",
        "473": "Noakhali-Senbagh-BTS-Chatrapaiya (BL)",
        "509": "Noakhali-Noakhali Sadar-BTS-Maijdee (L3)",
        "523": "Chandpur-Shahrasti-BTS-Shahrasti (SA)",
        "531": "Noakhali-Chatkhil-BTS-Khilpara (BL)",
        "572": "Khagrachari-Khagrachari-BTS-Khagrachari (L3)",
        "639": "Rangamati-Rangamati Sadar-BTS-Kallyanpur (SA)",
        "642": "Khagrachhari-Guimara-BTS-Guimara (SA)",
        "707": "Cumilla-Chauddagram-BTS-Chauddagram (L3)",
        "716": "Noakhali-Chatkhil-BTS-Chatkhil (SA)",
        "13986": "Chattogram-Double Mooring-BTS-Southland Center Agg (GP)",
        "13993": "Comilla-Comilla Sadar-BTS-Comilla Agg (BL)",
        "24037": "Chattogram-Double Mooring-NTTN-Aggregation (SCL)",
        "24038": "Chattogram-Double Mooring-NTTN-Aggregation (FHL)",
        "24083": "Chattogram-Chandanaish-BTS-Siraj market (SA)",
        "24096": "Jhenaidah-Jhenaidah Sadar-BTS-Srirampur (SA)"
    },
    "Khulna": {
        "7": "Bagerhat-Bagerhat-BTS-Bagerhat (BL)",
        "11": "Satkhira-Satkhira-BTS-Khan Market (L3)",
        "29": "Jashore-Jashore-BTS-Mk Road (L3)",
        "32": "Jashore-Sharsha-BTS-Benapole Port (L3)",
        "33": "Kushtia-Kushtia-BTS-Kushtia (BL)",
        "82": "Khulna-Khulna-BTS-Kda Avenue (L3)",
        "96": "Bhola-Charfasson-BTS-Charfasson (BL)",
        "157": "Magura-Magura Sadar-BTS-Magura (STL)",
        "162": "Bagerhat-Mongla-BTS-Mongla (STL)",
        "164": "Bagerhat-Mongla-BTS-Digraj (L3)",
        "208": "Kushtia-Kushtia-BTS-Sirajuddowla Road (L3)",
        "290": "Kushtia-Daulatpur-BTS-Daulatpur (STL)",
        "299": "Jashore-Abhaynagar-BTS-Noapara (BL)",
        "352": "Khulna-Dighalia-BTS-Gazirhat (GP)",
        "359": "Satkhira-Kaliganj-BTS-Moutola (BL)",
        "370": "Khulna-Fultala-BTS-Amir Tower (L3)",
        "372": "Bagerhat-Bagerhat-BTS-Polerhat (BL)",
        "373": "Bagerhat-Bagerhat-BTS-Sannashi (BL)",
        "431": "Chuadanga-Jibannagar-BTS-Jibannagar (GP)",
        "434": "Tangail-Bhuapur-BTS-Bhuapur (BL)",
        "437": "Chuadanga-Chuadanga-BTS-Ramdia (BL)",
        "447": "Khulna-Daulatpur-BTS-Daulatpur (L3)",
        "448": "Khulna-Khulna-BTS-Glaxomor (L3)",
        "453": "Gopalganj-Gopalganj-BTS-Theater Road (L3)",
        "485": "Gopalganj-Gopalganj Sadar-BTS-Gopalganj (BL)",
        "496": "Jhenaidah-Kotchandpur-BTS-Kotchandpur (SA)",
        "510": "Jashore-Jashore-BTS-Bosundia (SA)",
        "524": "Satkhira-Kaliganj-BTS-Kaliganj (BL)",
        "532": "Narail-Narail-BTS-Narail (BL)",
        "552": "Meherpur-Meherpur Sadar-BTS-Meherpur (STL)",
        "557": "Chuadanga-Darshana-BTS-Darshana (SA)",
        "644": "Satkhira-Debhata-BTS-Debhata (SA)",
        "662": "Jhenaidah-Jhenaidah-BTS-Moheshpur (SA)",
        "682": "Magura-Magura Sadar-BTS-Hospital Para (SA)",
        "687": "Satkhira-Kaliganj-BTS-Bishnupur (SA)",
        "728": "Jhenaidah-Kaliganj-BTS-Kaliganj (GP)",
        "13971": "Jashore-Jashore Sadar-BTS-Rabindranath Sarak (SA)",
        "13988": "Kushtia-Kushtia Sadar-BTS-Kushtia Agg (GP)",
        "13992": "Khulna-Khulna Sadar-BTS-Railway Road Agg (GP)",
        "14002": "Jashore-Jashore Sadar-BTS-Jashore Agg (BL)",
        "14028": "Khulna-Khulna Sadar-BTS-Khulna Agg (BL)",
        "24010": "Satkhira-Kaliganj-BTS-Nazimgonj Bazar (SA)",
        "24031": "Jhenaidah-Moheshpur-BTS-Gurdaha (SA)",
        "24035": "Jashore-Manirampur-BTS-Manirampur (GP)",
        "24036": "Jashore-Chougachha-BTS-Chougachha (GP)",
        "24039": "Jashore-Jashore Sadar-NTTN-Aggregation (SCL)",
        "24040": "Jashore-Jashore Sadar-NTTN-Aggregation (FHL)",
        "24042": "Jashore-Bagherpara-BTS-Bagherpara (SA)",
        "24045": "Kushtia-Kumarkhali-BTS-Kumarkhali (SA)",
        "24066": "Chuadanga-Damurhuda-BTS-Begumpur (SA)",
        "24071": "Kushtia-Mirpur-BTS-Biswas Tower (SA)",
        "24078": "Faridpur-Bhanga-BTS-Town Court par (SA)",
        "24079": "Jashore-Manirampur-BTS-Shamkur (SA)",
        "24082": "Jhenaidah-Moheshpur-BTS-Kazirbari (SA)",
        "24085": "Jashore-Jashore Sadar-BTS- Beyara (SA)",
        "24087": "Satkhira-Shyamnagar-BTS-Burigoalini (SA)",
        "24090": "Kushtia-Bheramara-BTS-Katherpool (SA)",
        "24091": "Pabna-Faridpur-BTS-Banwarinagar (SA)",
        "24092": "Kushtia-Daulatpur-BTS-Bhagjot (SA)",
        "24094": "Satkhira-Shyamnagar-BTS-Jhapa (SA)",
        "24097": "Khulna-Paikgasa-BTS-City Market (SA)",
        "24098": "Magura-Mohammadpur-BTS-Razapur (SA)"
    },
    "Rajshahi": {
        "16": "Rajshahi-Boalia-BTS-Atm Bhaban (L3)",
        "17": "Bogra-Bogra-BTS-Afsar Ali Complex (L3)",
        "22": "Rangpur-Rangpur-BTS-Station Road (L3)",
        "38": "Sirajganj-Belkuchi-BTS-Belkuchi (L3)",
        "58": "Pabna-Pabna-BTS-Kashemplaza (L3)",
        "80": "Chapainawabganj-Chapainawabganj-BTS-Chapainawabganj (L3)",
        "84": "Sirajganj-Sirajganj-BTS-Shirin Plaza (L3)",
        "91": "Naogaon-Naogaon-BTS-Naogaon (L3)",
        "172": "Natore-Gurudaspur-BTS-Gurudaspur (BL)",
        "173": "Kurigram-Kurigram-BTS-Kurigram (BL)",
        "174": "Pabna-Shathia-BTS-Shathia (BL)",
        "175": "Pabna-Aminpur-BTS-Kashinathpur (BL)",
        "176": "Sirajganj-Sirajganj-BTS-Shahebbazar (BL)",
        "177": "Pabna-Ataikula-BTS-Ataikula (L3)",
        "178": "Sirajganj-Shahjadpur-BTS-Shahjadpur (BL)",
        "180": "Joypurhat-Joypurhat-BTS-Joypurhat (L3)",
        "181": "Nilphamari-Nilphamari-BTS-Nilphamari (BL)",
        "202": "Nilphamari-Saidpur-BTS-Tr Road (L3)",
        "214": "Gaibandha-Gobindaganj-BTS-Gobindaganj (BL)",
        "216": "Lalmonirhat-Patgram-BTS-Patgram (BL)",
        "226": "Panchagarh-Panchagarh Sadar-BTS-Panchagarh (GP)",
        "267": "Chapainawabganj-Shibganj-BTS-Kansat (BL)",
        "278": "Rangpur-Mithapukur-BTS-Mithapukur (BL)",
        "306": "Lalmonirhat-Hatibandha-BTS-Hatibandha (BL)",
        "315": "Kurigram-Rajarhat-BTS-Nazimkhan (BL)",
        "329": "Bogra-Bogra-BTS-Toronir Hat (GP)",
        "334": "Sirajganj-Shahjadpur-BTS-Beltali (GP)",
        "335": "Joypurhat-Joypurhat-BTS-Matrai (GP)",
        "337": "Bogra-Nandigram-BTS-Vatara (GP)",
        "339": "Dinajpur-Dinajpur-BTS-Komolpur (GP)",
        "340": "Rangpur-Pirgacha-BTS-Paotana (GP)",
        "343": "Panchagarh-Panchagarh-BTS-Panchagarh (BL)",
        "346": "Naogaon-Sapahar-BTS-Aihai (GP)",
        "369": "Naogaon-Mohadebpur-BTS-Matajeehat (BL)",
        "378": "Sherpur-Sreebordi-BTS-Sreebordi (BL)",
        "381": "Lalmonirhat-Lalmonirhat-BTS-Lalmonirhat (BL)",
        "382": "Kurigram-Nageshwari-BTS-Nageshwari (BL)",
        "390": "Thakurgaon-Thakurgaon Sadar-BTS-Thakurgaon (L3)",
        "392": "Rajbari-Pangsha-BTS-Pangsha (GP)",
        "396": "Bogra-Gabtali-BTS-Golabari (GP)",
        "397": "Sirajganj-Raigonj-BTS-Bagatipara (GP)",
        "398": "Sirajganj-Shahjadpur-BTS-Beltali Ethernet (GP)",
        "401": "Bogra-Sonatola-BTS-Sonatola (GP)",
        "403": "Natore-Natore-BTS-Sahara Plaza (L3)",
        "425": "Thakurgaon-Ranisankail-BTS-Ranisankail (BL)",
        "426": "Dinajpur-Parbotipur-BTS-Parbotipur (BL)",
        "427": "Panchagarh-Panchagarh-BTS-Shalbonhat (BL)",
        "430": "Bogra-Gabtali-BTS-Bagbari (BL)",
        "466": "Kurigram-Kurigram-BTS-Kurigram (L3)",
        "478": "Rajshahi-Rajpara-BTS-Jhawtola (L3)",
        "479": "Pabna-Ishwardi-BTS-Ishwardi (L3)",
        "482": "Gaibandha-Gaibandha-BTS-Gaibandha (L3)",
        "486": "Rajshahi-Boalia-BTS-Monnafermor (L3)",
        "488": "Nilphamari-Jaldhaka-BTS-Jaldhaka (BL)",
        "499": "Chapainawabganj-Shibganj-BTS-Shibganj (SA)",
        "501": "Chapainawabganj-Gomostapur-BTS-Rohanpur (SA)",
        "511": "Rajshahi-Godagari-BTS-Godagari (BL)",
        "526": "Sirajganj-Kamarkhand-BTS-Kamarkhanda (SA)",
        "542": "Natore-Natore Sadar-BTS-Dighapatia (SA)",
        "549": "Sirajganj-Ullapara-BTS-Ullapara (SA)",
        "563": "Sirajganj-Tarash-BTS-Naogaon (SA)",
        "643": "Pabna-Santhia-BTS-Kashinathpur (SA)",
        "649": "Natore-Bagatipara-BTS-Bagatipara (SA)",
        "650": "Rangpur-Rangpur-BTS-Mahiganj (SA)",
        "656": "Rangpur-Badargonj-BTS-Badargonj (SA)",
        "688": "Sirajganj-Belkuchi-BTS-Ajugora (BL)",
        "699": "Sirajganj-Shahjadpur-BTS-Beltali (SA)",
        "702": "Sirajganj-Kamarkhanda-BTS-Bhadragaht bazar (SA)",
        "718": "Pabna-Chatmohar-BTS-Chatmohor (GP)",
        "733": "Sirajganj-Sirajganj Sadar-BTS-Char Raipur (L3)",
        "13972": "Joypurhat-Joypurhat Sadar-BTS-New Market (SA)",
        "13976": "Rajshahi-Paba-BTS-Paba (SA)",
        "13977": "Sirajganj-Ullapara-BTS-Banani Bazar (SA)",
        "13990": "Pabna-Pabna Sadar-BTS-Pabna Agg (BL)",
        "13997": "Dinajpur-Dinajpur Sadar-BTS-Dinajpur Agg (BL)",
        "13999": "Rangpur-Rangpur Sadar-BTS-Rangpur Agg (BL)",
        "14003": "Rajshahi-Rajshahi Sadar-BTS-Rajshahi Agg (BL)",
        "14004": "Lalmonirhat-Patgram-BTS-Rasulganj (SA)",
        "24004": "Pabna-Chatmohar-BTS-Chhaikola (SA)",
        "24009": "Naogaon-Niamatpur-BTS-Gabtoli Bazar (SA)",
        "24021": "Bogura-Gabtali-BTS-Naruamala Bazar (SA)",
        "24026": "Rajshahi-Karnahar-BTS-Karnahar (SA)",
        "24047": "Bogura-Shariakandi-BTS-Shariakandi (SA)",
        "24049": "Habiganj-Bahubal-BTS-Bahubal (SA)",
        "24054": "Kurigram-Nageshwari-BTS-Nageshwari (SA)",
        "24063": "Rajshahi-Godagari-BTS-Rajabari (SA)",
        "24070": "Chapainawabganj-Nachol-BTS-Nachol (SA)",
        "24072": "Bogura-Nondigram-BTS-Chakolma Bazar (SA)",
        "24074": "Dinajpur-Birol-BTS-Birol (SA)",
        "24084": "Kurigram-Rowmari-BTS-Rowmari (SA)",
        "24089": "Rajbari-Kalukhali-BTS-Mrigi Bazar (SA)",
        "24093": "Moulvibazar-Rajnagar-BTS-College Point (SA)"
    },
    "Barishal": {
        "19": "Barishal-Barishal-BTS-Barishal (L3)",
        "37": "Faridpur-Faridpur-BTS-Mujib Sarak (L3)",
        "97": "Patuakhali-Kalapara-BTS-Khepupara (STL)",
        "98": "Jhalokati-Jhalokati-BTS-Jhalokathi (BL)",
        "99": "Pirojpur-Mathbaria-BTS-Mathbaria (BL)",
        "100": "Bhola-Bhola-BTS-Bhola (BL)",
        "102": "Pirojpur-Nesarabad-BTS-Swarupkathi (L3)",
        "136": "Madaripur-Madaripur Sadar-BTS-Madaripur (STL)",
        "148": "Rajbari-Rajbari-BTS-Rajbari (BL)",
        "220": "Borguna-Borguna-BTS-Bazar Road (L3)",
        "240": "Barishal-Gournadi-BTS-Gournadi (GP)",
        "255": "Patuakhali-Golachipa-BTS-Golachipa (BL)",
        "304": "Faridpur-Bhanga-BTS-Bhanga (BL)",
        "307": "Patuakhali-Patuakhali-BTS-Natun Bazar (L3)",
        "349": "Shariatpur-Damudya-BTS-Damudya (BL)",
        "376": "Faridpur-Faridpur-BTS-Alafadanga (BL)",
        "422": "Barishal-Babuganj-BTS-Babuganj (GP)",
        "491": "Madaripur-Shibchar-BTS-Sadar Road (L3)",
        "560": "Pirojpur-Pirojpur-BTS-Palpara (SA)",
        "567": "Bhola-Borhan Uddin-BTS-Kunjer Hat (SA)",
        "629": "Bhola-Charfesson-BTS-College Para (SA)",
        "661": "Pirojpur-Pirojpur-BTS-Sadar Road (L3)",
        "719": "Jhalokati-Jhalokati-BTS-Shekherhat (BL)",
        "725": "Shariatpur-Shariatpur Sadar-BTS-Shariatpur (GP)",
        "13985": "Barisal-Barisal Sadar-BTS-Barisal Agg (GP)",
        "13996": "Barisal-Barisal Sadar-BTS-Barisal Agg (BL)",
        "24012": "Madaripur-Madaripur Sadar-BTS-TB Clinic Sarak (SA)",
        "24034": "Bhola-Bhola Sadar-BTS-Kalikhola (SA)",
        "24046": "Barguna-Amtali-BTS-Amtali (SA)",
        "24050": "Jhalakathi-Jhalakathi Sadar-BTS-Badamtola (SA)",
        "24060": "Jhalakathi-Nalchity-BTS-Nalchity (SA)",
        "24081": "Madaripur-Madaripur Sadar-BTS-Ghotokchor (SA)",
        "24088": "Patuakhali-Bauphal-BTS-Rifat villa (SA)",
        "24095": "Sunamganj-South Sunamganj-BTS-Mina Bazar (SA)"
    },
    "Sylhet": {
        "6": "Moulvibazar-Sreemangal-BTS-Sultan Market (L3)",
        "12": "Sylhet-Beanibazar-BTS-Beanibazar (L3)",
        "42": "Sylhet-Osmaninagar-BTS-Goalabazar (L3)",
        "43": "Sunamganj-Jagannathpur-BTS-Jagannathpur (BL)",
        "68": "Sunamganj-Jagannathpur-BTS-Jagannathpur (BL)",
        "78": "Sylhet-Sylhet Sadar-BTS-Al Hamra (L3)",
        "79": "Moulvibazar-Moulvibazar Sadar-BTS-Sikandar Ali Road (L3)",
        "104": "Sylhet-Jaintiapur-BTS-Jaintapur (BL)",
        "105": "Sylhet-Kanaighat-BTS-Kanaighat (BL)",
        "106": "Sylhet-Companiganj-BTS-Companiganj (BL)",
        "107": "Sylhet-Golapganj-BTS-Golapganj (GP)",
        "187": "Sylhet-Jaintiapur-BTS-Jaintapur (BL)",
        "188": "Sylhet-Kanaighat-BTS-Kanaighat (BL)",
        "199": "Sylhet-Companiganj-BTS-Companiganj (BL)",
        "201": "Sylhet-Golapganj-BTS-Golapganj (GP)",
        "203": "Moulvibazar-Moulvibazar Sadar-BTS-Bishwanath (L3)",
        "218": "Habiganj-Chunarughat-BTS-Chunarughat (BL)",
        "223": "Sylhet-Golapganj-BTS-Dhaka Dakkhin (BL)",
        "253": "Sylhet-Sylhet-BTS-Uposhahar (L3)",
        "291": "Habiganj-Nabiganj-BTS-Nabigonj (L3)",
        "294": "Moulvibazar-Kulaura-BTS-Kulaura (BL)",
        "317": "Sylhet-Fenchuganj-BTS-Fenchuganj (BL)",
        "320": "Habiganj-Habiganj-BTS-Habiganj (L3)",
        "366": "Moulvibazar-Rajnagar-BTS-Rajnagar (BL)",
        "367": "Sunamganj-Dowrabazar-BTS-Ambari (BL)",
        "368": "Sylhet-Sylhet-BTS-Osmani Airport (L3)",
        "406": "Sylhet-Sylhet-BTS-Khadimpara (L3)",
        "408": "Moulvibazar-Sreemangal-BTS-Shindurkhan (BL)",
        "417": "Sylhet-Sylhet-BTS-Madina Market (L3)",
        "446": "Sunamganj-Sunamganj Sadar-BTS-Sunamgonj (L3)",
        "470": "Sylhet-Sylhet-BTS-Shahi Eidgah (L3)",
        "472": "Sylhet-Sylhet-BTS-Mojumdari (L3)",
        "514": "Habiganj-Baniachong-BTS-Baniachong (SA)",
        "539": "Habiganj-Madhabpur-BTS-Madhabpur (BL)",
        "545": "Sylhet-Sylhet-BTS-Tukerbazar (SA)",
        "562": "Habiganj-Habiganj Sadar-BTS-Shaistaganj Puranbazar (SA)",
        "564": "Sunamganj-Chatak-BTS-Chatak (BL)",
        "569": "Sylhet-Jaintiapur-BTS-Jaintapur (SA)",
        "663": "Habiganj-Habiganj Sadar-BTS-Rajnagar (SA)",
        "689": "Moulvibazar-Borolekha-BTS-Borolekha (L3)",
        "708": "Sunamganj-Jagannathpur-BTS-Jagannathpur (SA)",
        "717": "Sunamganj-Derai-BTS-Derai (GP)",
        "730": "Mymensingh-Trishal-BTS-Trishal (L3)",
        "13973": "Moulvibazar-Rajnagar-BTS-Rajnagar (SA)",
        "13980": "Moulvibazar-Moulvibazar Sadar-BTS-Saleh Tower (Radio) (L3)",
        "13991": "Sylhet-Sylhet Sadar-BTS-Sylhet Agg (BL)",
        "13992": "Habiganj-Habiganj Sadar-BTS-Habiganj Agg (BL)",
        "24005": "Gaibandha-Gobindaganj-BTS-Gobindaganj (L3)",
        "24019": "Habiganj-Madhabpur-BTS-Horoshpur (SA)",
        "24052": "Gaibandha-Sundarganj-BTS-Laxmipur Bazar (SA)",
        "24055": "Sylhet-Sylhet Sadar-BTS-Taltola (BTCL)",
        "24056": "Moulvibazar-Moulvibazar Sadar-BTS-Mostofapur (BTCL)",
        "24058": "Habiganj-Bahubal-BTS-Nondonpur Bazar (SA)",
        "24064": "Moulvibazar-Kulaura-BTS-Kulaura (SA)",
        "24068": "Moulvibazar-Kulaura-BTS-Robir Bazar (SA)",
        "24075": "Habiganj-Madhabpur-BTS-Noapara (SA)",
        "24077": "Habiganj-Nabiganj-BTS-Goplar Bazar (SA)",
        "24080": "Moulvibazar-Kulaura-BTS-Pritompasha (SA)",
        "24083": "Chattogram-Chandanaish-BTS-Siraj market (SA)"
    },
    "Mymensingh": {
        "13": "Narsingdi-Palash-BTS-Ghorashal (L3)",
        "34": "Narsingdi-Narsingdi-BTS-Madhobdi (L3)",
        "117": "Brahmanbaria-Akhaura-BTS-Akhaura (L3)",
        "118": "Brahmanbaria-Brahmanbaria-BTS-Mizan Tower (L3)",
        "138": "Mymensingh-Fulbaria-BTS-Fulbaria (STL)",
        "143": "Kishoreganj-Kishoreganj Sadar-BTS-Kishoregonj (L3)",
        "146": "Mymensingh-Haluaghat-BTS-Haluaghat (BL)",
        "153": "Narsingdi-Raipura-BTS-Raipura (BL)",
        "207": "Sherpur-Sherpur-BTS-Sherpur (BL)",
        "217": "Mymensingh-Mymensingh-BTS-Ck Goss Road (L3)",
        "254": "Kishoreganj-Bhairab-BTS-Mizan Tower (L3)",
        "262": "Jamalpur-Sharishabari-BTS-Sharishabari (BL)",
        "276": "Brahmanbaria-Nobinagar-BTS-Nobinagar (BL)",
        "282": "Mymensingh-Bhaluka-BTS-Seedstore Bazar (L3)",
        "300": "Mymensingh-Mymensingh-BTS-Peyarpur (BL)",
        "301": "Jamalpur-Jamalpur Sadar-BTS-Lahirikanda (STL)",
        "302": "Mymensingh-Mymensingh-BTS-Biddaganj (BL)",
        "303": "Netrokona-Fakirer Bazar-BTS-Fakirer Bazar (BL)",
        "325": "Jamalpur-Madarganj-BTS-Balijuri (GP)",
        "327": "Jamalpur-Jamalpur-BTS-Sahbajpur (GP)",
        "350": "Sherpur-Jhenaigati-BTS-Jhenaigati (BL)",
        "378": "Sherpur-Sreebordi-BTS-Sreebordi (BL)",
        "391": "Kishoreganj-Katiadi-BTS-Katiadi (BL)",
        "392": "Mymensingh-Mymensingh-BTS-Shomvugang (GP)",
        "444": "Netrokona-Netrokona-BTS-Netrokona (BL)",
        "476": "Mymensingh-Haluaghat-BTS-Khoirakuri (L3)",
        "490": "Mymensingh-Gafargaon-BTS-Gafargaon (L3)",
        "494": "Munshiganj-Sreenagar-BTS-Sreenagar (BL)",
        "502": "Brahmanbaria-Nabinagar-BTS-Jibonganj (SA)",
        "506": "Narsingdi-Belabo-BTS-Belabo Bazar (SA)",
        "507": "Brahmanbaria-Ashuganj-BTS-Ashuganj (L3)",
        "508": "Mymensingh-Fulbaria-BTS-Fulbaria (SA)",
        "513": "Brahmanbaria-Brahmanbaria Sadar-BTS-Medda (SA)",
        "515": "Brahmanbaria-Kasba-BTS-Kasba Bishara Bari (SA)",
        "533": "Sherpur-Sherpur-BTS-Rokhonath Bazar (SA)",
        "536": "Brahmanbaria-Kasba-BTS-Nayapara (SA)",
        "540": "Sherpur-Jhenaigati-BTS-Jhenaigati (SA)",
        "545": "Brahmanbaria-Bijoynagar-BTS-Bishnupur (SA)",
        "550": "Mymensingh-Muktagacha-BTS-Muktagacha (SA)",
        "551": "Comilla-Brahmanpara-BTS-Madhobpur (SA)",
        "575": "Mymensingh-Phulpur-BTS-Phulpur (SA)",
        "639": "Rangamati-Rangamati Sadar-BTS-Kallyanpur (SA)",
        "675": "Narsingdi-Narsingdi-BTS-Court Road (SA)",
        "685": "Narsingdi-Belabo-BTS-Raipur (SA)",
        "698": "Brahmanbaria-Ashuganj-BTS-Ashuganj (SA)",
        "713": "Mymensingh-Bhaluka-BTS-Bhaluka (L3)",
        "726": "Netrokona-Netrokona Sadar-BTS-Netrakona (STL)",
        "729": "Jamalpur-Jamalpur-BTS-West Nayapara (GP)",
        "13975": "Narsingdi-Palash-BTS-Palash (SA)",
        "13978": "Kishoreganj-Kishoreganj Sadar-BTS-Ishakha Road (SA)",
        "13989": "Mymensingh-Mymensingh Sadar-BTS-Moharaja Road Agg (GP)",
        "13997": "Mymensingh-Mymensingh Sadar-BTS-Mymensingh Agg (BL)",
        "14005": "Mymensingh-Phulpur-BTS-Phulpur (SA)",
        "24008": "Mymensingh-Mymensingh Sadar-BTS-Shomvuganj (SA)",
        "24011": "Jamalpur-Madarganj-BTS-Hazi Market (SA)",
        "24015": "Mymensingh-Mymensingh Sadar-BTS-Joybangla Bazar (SA)",
        "24022": "Brahmanbaria-Kasba-BTS-Gopinathpur (SA)",
        "24023": "Sherpur-Jhenaigati-BTS-Tinani Bazar (SA)",
        "24024": "Brahmanbaria-Bijoynagar-BTS-Champaknagar (SA)",
        "24025": "Brahmanbaria-Kasba-BTS-Joynogor Bazar (SA)",
        "24033": "Comilla-Muradnagar-BTS-Moslem Market (SA)",
        "24062": "Mymensingh-Gouripur-BTS-Gouripur (SA)",
        "24067": "Gazipur-Konabari-BTS-Ambagh (SA)",
        "24069": "Tangail-Sakhipur-BTS-Nalua (SA)",
        "24086": "Faridpur-Madhukhali-BTS-Nilgate Bazar (SA)",
        "24090": "Kushtia-Bheramara-BTS-Katherpool (SA)",
        "24091": "Pabna-Faridpur-BTS-Banwarinagar (SA)",
        "24092": "Kushtia-Daulatpur-BTS-Bhagjot (SA)",
        "24095": "Sunamganj-South Sunamganj-BTS-Mina Bazar (SA)"
    },
    "Rangpur": {
        "24": "Rangpur-Rangpur-BTS-Station Road (L3)",
        "81": "Dinajpur-Dinajpur-BTS-Hasna Plaza (L3)",
        "115": "Gaibandha-Gobindaganj-BTS-Gobindaganj (BL)",
        "163": "Lalmonirhat-Hatibandha-BTS-Hatibandha (BL)",
        "214": "Gaibandha-Gobindaganj-BTS-Gobindaganj (BL)",
        "216": "Lalmonirhat-Patgram-BTS-Patgram (BL)",
        "226": "Panchagarh-Panchagarh Sadar-BTS-Panchagarh (GP)",
        "278": "Rangpur-Mithapukur-BTS-Mithapukur (BL)",
        "306": "Lalmonirhat-Hatibandha-BTS-Hatibandha (BL)",
        "315": "Kurigram-Rajarhat-BTS-Nazimkhan (BL)",
        "340": "Rangpur-Pirgacha-BTS-Paotana (GP)",
        "343": "Panchagarh-Panchagarh-BTS-Panchagarh (BL)",
        "378": "Sherpur-Sreebordi-BTS-Sreebordi (BL)",
        "381": "Lalmonirhat-Lalmonirhat-BTS-Lalmonirhat (BL)",
        "382": "Kurigram-Nageshwari-BTS-Nageshwari (BL)",
        "390": "Thakurgaon-Thakurgaon Sadar-BTS-Thakurgaon (L3)",
        "425": "Thakurgaon-Ranisankail-BTS-Ranisankail (BL)",
        "426": "Dinajpur-Parbotipur-BTS-Parbotipur (BL)",
        "427": "Panchagarh-Panchagarh-BTS-Shalbonhat (BL)",
        "466": "Kurigram-Kurigram-BTS-Kurigram (L3)",
        "482": "Gaibandha-Gaibandha-BTS-Gaibandha (L3)",
        "488": "Nilphamari-Jaldhaka-BTS-Jaldhaka (BL)",
        "520": "Thakurgaon-Pirganj-BTS-Pirganj (SA)",
        "529": "Dinajpur-Birganj-BTS-Birganj (SA)",
        "530": "Thakurgaon-Thakurgaon Sadar-BTS-Bhully (SA)",
        "553": "Panchagarh-Tetulia-BTS-Tetulia (SA)",
        "565": "Gaibandha-Sadullapur-BTS-Rasulpur (GP)",
        "570": "Dinajpur-Dinajpur Sadar-BTS-Gopalganj (SA)",
        "573": "Thakurgaon-Ranisankail-BTS-Ranisankail (SA)",
        "629": "Bhola-Charfesson-BTS-College Para (SA)",
        "639": "Rangamati-Rangamati Sadar-BTS-Kallyanpur (SA)",
        "640": "Rangpur-Pirgonj-BTS-Pirgonj (SA)",
        "641": "Thakurgaon-Haripur-BTS-Haripur (SA)",
        "642": "Khagrachhari-Guimara-BTS-Guimara (SA)",
        "645": "Panchagarh-Panchagarh Sadar-BTS-Dogrupara (SA)",
        "647": "Thakurgaon-Thakurgaon Sadar-BTS-Gobindanagar (SA)",
        "650": "Rangpur-Rangpur-BTS-Mahiganj (SA)",
        "656": "Rangpur-Badargonj-BTS-Badargonj (SA)",
        "678": "Gaibandha-Sundarganj-BTS-Pach Pir Bazar (SA)",
        "691": "Dinajpur-Chirirbandar-BTS-Binnakuri (SA)",
        "694": "Nilphamari-Nilphamari-BTS-Chowrongi Mor (SA)",
        "695": "Nilphamari-Nilphamari-BTS-Kishoreganj (SA)",
        "13969": "Gaibandha-Gaibandha Sadar-BTS-DB Road (SA)",
        "13970": "Gaibandha-Sadullapur-BTS-Sadullapur (SA)",
        "13996": "Gaibandha-Gobindaganj-BTS-Gobindaganj (SA)",
        "13998": "Dinajpur-Dinajpur Sadar-BTS-Dinajpur Agg (BL)",
        "14001": "Rangpur-Rangpur Sadar-BTS-Rangpur Agg (BL)",
        "24005": "Gaibandha-Gobindaganj-BTS-Gobindaganj (L3)",
        "24014": "Panchagarh-Boda-BTS-Mareya Bazar (SA)",
        "24020": "Panchagarh-Boda-BTS-Boda Bazar (SA)",
        "24032": "Thakurgaon-Haripur-BTS-Amgaon Bazar (SA)",
        "24041": "Thakurgaon-Baliadangi-BTS-Baliadangi (SA)",
        "24044": "Nilphamari-Domar-BTS-Domar (SA)",
        "24053": "Gaibandha-Sundarganj-BTS-Laxmipur Bazar (SA)",
        "24057": "Nilphamari-Nilphamari Sadar-BTS-Vangamalli Bazar (SA)",
        "24058": "Habiganj-Bahubal-BTS-Nondonpur Bazar (SA)",
        "24084": "Kurigram-Rowmari-BTS-Rowmari (SA)",
        "24089": "Rajbari-Kalukhali-BTS-Mrigi Bazar (SA)",
        "24095": "Sunamganj-South Sunamganj-BTS-Mina Bazar (SA)"
    }
};

// DOM Elements
const searchInput = document.getElementById('btsSearchInput');
const searchResults = document.getElementById('searchResults');
const searchResultsList = document.getElementById('searchResultsList');
const divisionsContainer = document.getElementById('divisionsContainer');

// Function to create clickable BTS item
function createBTSItem(btsCode, btsName, division) {
    const item = document.createElement('a');
    item.className = 'bts-item';
    item.href = `dashboard/dashboard.html?location = ${btsName}`;
    item.textContent = btsName;
    item.title = `${btsName} (Code: ${btsCode})`;

    return item;
}

// Function to search BTS
function searchBTS(query) {
    const results = [];

    if (!query.trim()) {
        return results;
    }

    const searchTerm = query.toLowerCase();

    for (const [division, btsList] of Object.entries(bts)) {
        for (const [code, name] of Object.entries(btsList)) {
            if (name.toLowerCase().includes(searchTerm) || code.includes(searchTerm)) {
                results.push({
                    code: code,
                    name: name,
                    division: division
                });
            }
        }
    }

    // Sort by name
    return results.sort((a, b) => a.name.localeCompare(b.name));
}

// Function to display search results
function displaySearchResults(results) {
    searchResultsList.innerHTML = '';

    if (results.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No BTS found matching your search';
        searchResultsList.appendChild(noResults);
        searchResults.style.display = 'block';
        return;
    }

    // Limit results to 50 for performance
    const limitedResults = results.slice(0, 50);

    limitedResults.forEach(result => {
        const item = createBTSItem(result.code, result.name, result.division);
        searchResultsList.appendChild(item);
    });

    searchResults.style.display = 'block';
}

// Function to create division dropdown
function createDivisionDropdown(divisionName, btsList) {
    const dropdown = document.createElement('div');
    dropdown.className = 'division-dropdown';

    const header = document.createElement('div');
    header.className = 'division-header';
    header.innerHTML = `
        <span>${divisionName}</span>
            <i class="fas fa-chevron-down"></i>
    `;

    const content = document.createElement('div');
    content.className = 'division-content';

    // Sort BTS by name
    const sortedBTS = Object.entries(btsList).sort((a, b) => a[1].localeCompare(b[1]));

    sortedBTS.forEach(([code, name]) => {
        const item = createBTSItem(code, name, divisionName);
        content.appendChild(item);
    });

    header.addEventListener('click', function () {
        const isActive = header.classList.contains('active');

        // Close all other dropdowns
        document.querySelectorAll('.division-header.active').forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.classList.remove('active');
                otherHeader.nextElementSibling.classList.remove('show');
            }
        });

        header.classList.toggle('active');
        content.classList.toggle('show');

        // Scroll to show content if opening
        if (!isActive) {
            setTimeout(() => {
                content.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
        }
    });

    dropdown.appendChild(header);
    dropdown.appendChild(content);

    return dropdown;
}

// Function to initialize division dropdowns
function initializeDivisionDropdowns() {
    divisionsContainer.innerHTML = '';

    for (const [divisionName, btsList] of Object.entries(bts)) {
        const dropdown = createDivisionDropdown(divisionName, btsList);
        divisionsContainer.appendChild(dropdown);
    }

    // Open Dhaka division by default
    // const dhakaHeader = divisionsContainer.querySelector('.division-header:first-child');
    // if (dhakaHeader) {
    //     dhakaHeader.classList.add('active');
    //     dhakaHeader.nextElementSibling.classList.add('show');
    // }
}

// Event listener for search input
searchInput.addEventListener('input', function () {
    const query = this.value.trim();

    if (query.length > 0) {
        const results = searchBTS(query);
        displaySearchResults(results);
    } else {
        searchResults.style.display = 'none';
    }
});

// Close search results when clicking outside
document.addEventListener('click', function (event) {
    if (!searchResults.contains(event.target) && !searchInput.contains(event.target)) {
        searchResults.style.display = 'none';
    }
});

// Initialize the sidebar
initializeDivisionDropdowns();

// Search functionality
searchInput.addEventListener("input", (e) => {
    renderBTSList(e.target.value);
});
let tableDataSets = {};
// sidebar search funtionality end
//.........websocket_client code Start..............
var socket = new WebSocket("ws://27.147.170.162:81");
socket.onmessage = (event) => {
    const msg = event.data;

    if (msg.startsWith("{")) {
        // JSON message
        const json = JSON.parse(msg);
        console.log(json.payload);
        tableDataSets = JSON.parse(JSON.stringify(json.payload));

        // Update all tables with new data
        Object.keys(tableDataSets).forEach(tableName => {
            updateTable(tableName, tableDataSets[tableName]);
        });
    }
};
//.........websocket_client code end..............

// Table configuration
const tableConfig = [
    { name: "BTS Down List", icon: "fa-bolt", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "UPS1 Fail List", icon: "fa-plug", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "UPS2 Fail List", icon: "fa-plug", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "PDB Down List", icon: "fa-server", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "High Temperature List", icon: "fa-temperature-high", bts_name: "BTS Name", zone: "Zone", unit: "Temperature" },
    { name: "PDB High Voltage List", icon: "fa-bolt", bts_name: "BTS Name", zone: "Zone", unit: "Voltage" },
    { name: "PDB Low Voltage List", icon: "fa-bolt", bts_name: "BTS Name", zone: "Zone", unit: "Voltage" },
    { name: "Battery Low List 48v", icon: "fa-battery-quarter", bts_name: "BTS Name", zone: "Zone", unit: "Voltage" },
    { name: "Battery Low List 12v", icon: "fa-battery-quarter", bts_name: "BTS Name", zone: "Zone", unit: "Voltage" },
    { name: "Door Open", icon: "fa-door-open", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "Human Presence", icon: "fa-user", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "Water Leakage", icon: "fa-water", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "Generator", icon: "fa-industry", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "UPS1 CB Tripped", icon: "fa-plug", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "UPS2 CB Tripped", icon: "fa-plug", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "Main CB Tripped", icon: "fa-plug", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "LAN Communication Fail", icon: "fa-network-wired", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "All Communication Fail", icon: "fa-signal", bts_name: "BTS Name", zone: "Zone", unit: "Time" },
    { name: "Poor Network List", icon: "fa-wifi", bts_name: "BTS Name", zone: "Zone", unit: "Percentage" },
    { name: "Grounding Fail List", icon: "fa-bolt", bts_name: "BTS Name", zone: "Zone", unit: "Voltage" }
];


// Generate tables
function generateTables() {
    const container = document.getElementById('tableContainer');
    container.innerHTML = '';

    tableConfig.forEach(config => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <div class="card-header">
                <span>${config.name}</span>
                <i class="fas ${config.icon}"></i>
            </div>
        <div class="card-content">
            <table class="table" id="${config.name.replace(/\s+/g, '-')}">
                <thead>
                    <tr>
                        <th>${config.bts_name}</th>
                        <th>${config.zone}</th>
                        <th>${config.unit}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Table data will be populated by WebSocket -->
                </tbody>
            </table>
        </div>
    `;
        container.appendChild(card);
    });
}

// Generate initial tables
generateTables();

// Data sets for each table
tableDataSets = {
    "BTS Down List": [
        { btsName: "Dhaka-Uttara-BTS-Bns Tower (L3)", zone: "Dhaka North", unit: "2h 15m" },
        { btsName: "Dhaka-Mirpur-BTS-Mirpur-10 (L3)", zone: "Dhaka North", unit: "45m" },
        { btsName: "Dhaka-Kalabagan-BTS-Concord (L3)", zone: "Dhaka South", unit: "2h 15m" },
        { btsName: "Chattogram-Bandar-BTS-Ali Plaza (L3)", zone: "Chattogram", unit: "45m" },
        { btsName: "Khulna-Khulna-BTS-Kda Avenue (L3)", zone: "Khulna", unit: "2h 15m" },
        { btsName: "Rajshahi-Boalia-BTS-Atm Bhaban (L3)", zone: "Rajshahi", unit: "45m" },
        { btsName: "Sylhet-Sylhet-BTS-Uposhahar (L3)", zone: "Sylhet", unit: "2h 15m" },
        { btsName: "Mymensingh-Mymensingh-BTS-Ck Goss Road (L3)", zone: "Mymensingh", unit: "45m" }
    ],
    "UPS1 Fail List": [
        { btsName: "Dhaka-Motijheel-BTS-Malek Mension (L3)", zone: "Dhaka South", unit: "3h 20m" },
        { btsName: "Dhaka-Motijheel-BTS-Dilkusha (L3)", zone: "Dhaka South", unit: "1h 10m" },
        { btsName: "Dhaka-Chokbazar-BTS-Imamgonj (L3)", zone: "Dhaka South", unit: "45m" }
    ],
    "UPS2 Fail List": [
        { btsName: "Narayanganj-Chashara-BTS-Haque Plaza (L3)", zone: "Dhaka South", unit: "2h 5m" },
        { btsName: "Narayanganj-Siddhirganj-BTS-Ctg Road (L3)", zone: "Dhaka South", unit: "50m" }
    ],
    "PDB Down List": [
        { btsName: "Dhaka-Dohar-BTS-Joypara (L3)", zone: "Dhaka South", unit: "4h 15m" },
        { btsName: "Narsingdi-Palash-BTS-Ghorashal (L3)", zone: "Mymensingh", unit: "2h 30m" },
        { btsName: "Narsingdi-Narsingdi-BTS-Madhobdi (L3)", zone: "Mymensingh", unit: "1h 45m" }
    ],
    "High Temperature List": [
        { btsName: "Brahmanbaria-Brahmanbaria-BTS-Mizan Tower (L3)", zone: "Mymensingh", unit: "3h 20m" },
        { btsName: "Kishoreganj-Kishoreganj Sadar-BTS-Kishoregonj (L3)", zone: "Mymensingh", unit: "2h 10m" },
        { btsName: "Kishoreganj-Bhairab-BTS-Mizan Tower (L3)", zone: "Mymensingh", unit: "1h 5m" }
    ],
    "PDB High Voltage List": [
        { btsName: "Dhaka-Tejgaon-BTS-Monipuripara (L3)", zone: "Dhaka South", unit: "6h 15m" },
        { btsName: "Dhaka-Khilkhet-BTS-Nikunja (L3)", zone: "Dhaka North", unit: "4h 30m" }
    ],
    "PDB Low Voltage List": [
        { btsName: "Dhaka-Ramna-BTS-Easkaton (L3)", zone: "Dhaka South", unit: "5h 20m" },
        { btsName: "Dhaka-Rampura-BTS-Banasree (L3)", zone: "Dhaka North", unit: "3h 45m" },
        { btsName: "Gazipur-Mawna-BTS-Mawna Chowrasta (L3)", zone: "Dhaka North", unit: "2h 10m" }
    ],
    "Battery Low List 48v": [
        { btsName: "Dhaka-Kalabagan-BTS-Hatirpool (L3)", zone: "Dhaka South", unit: "8h 15m" },
        { btsName: "Dhaka-Mohammadpur-BTS-Probal Housing (L3)", zone: "Dhaka South", unit: "6h 30m" },
        { btsName: "Dhaka-Mirpur DOHS-Support Office", zone: "Dhaka North", unit: "4h 45m" }
    ],
    "Battery Low List 12v": [
        { btsName: "Dhaka-Bhatara-BTS-Basundhara_D (L3)", zone: "Dhaka North", unit: "7h 20m" },
        { btsName: "Dhaka-Bhatara-BTS-Basundhara_I (L3)", zone: "Dhaka North", unit: "5h 35m" },
        { btsName: "Dhaka-Wari-BTS-B.C.C Road (L3)", zone: "Dhaka South", unit: "3h 50m" }
    ],
    "Door Open": [
        { btsName: "Dhaka-Uttara-BTS-Sector 13 (L3)", zone: "Dhaka North", unit: "2h 15m" },
        { btsName: "Manikganj-Manikgonj-BTS-Manikgonj (L3)", zone: "Dhaka South", unit: "1h 30m" }
    ],
    "Human Presence": [
        { btsName: "Dhaka-Mirpur-BTS-Mirpur 2 (L3)", zone: "Dhaka North", unit: "45m" },
        { btsName: "Munshiganj-Munshiganj-BTS-Jublee Road (L3)", zone: "Dhaka South", unit: "30m" },
        { btsName: "Dhaka-Ashulia-BTS-Jamgora (L3)", zone: "Dhaka South", unit: "15m" }
    ],
    "Water Leakage": [
        { btsName: "Gazipur-Tongi (East)-BTS-Tongi (L3)", zone: "Dhaka North", unit: "3h 20m" },
        { btsName: "Dhaka-Mohammadpur-BTS-Lalmatia (L3)", zone: "Dhaka South", unit: "2h 45m" }
    ],
    "Generator": [
        { btsName: "Dhaka-Sher-E Bangla Nagar-BTS-Agargaon (L3)", zone: "Dhaka South", unit: "6h 15m" },
        { btsName: "Cumilla-Cumilla Sadar-BTS-Sattar Khan Complex (L3)", zone: "Chattogram", unit: "4h 30m" },
        { btsName: "Chandpur-Chandpur-BTS-Sardar Plaza (L3)", zone: "Chattogram", unit: "2h 45m" }
    ],
    "UPS1 CB Tripped": [
        { btsName: "Gazipur-Gazipur Sadar-BTS-Sumon Complex Shimultoli (L3)", zone: "Dhaka North", unit: "5h 20m" },
        { btsName: "Brahmanbaria-Akhaura-BTS-Akhaura (L3)", zone: "Mymensingh", unit: "3h 35m" }
    ],
    "UPS2 CB Tripped": [
        { btsName: "Brahmanbaria-Ashuganj-BTS-Ashuganj (L3)", zone: "Mymensingh", unit: "4h 15m" },
        { btsName: "Dhaka-Uttara-BTS-Dakshinkhan (L3)", zone: "Dhaka North", unit: "2h 30m" }
    ],
    "Main CB Tripped": [
        { btsName: "Mymensingh-Haluaghat-BTS-Haluaghat (BL)", zone: "Mymensingh", unit: "7h 20m" },
        { btsName: "Cumilla-Chauddagram-BTS-Chauddagram (L3)", zone: "Chattogram", unit: "5h 45m" },
        { btsName: "Dhaka-Mirpur-BTS-East Shewrapara (L3)", zone: "Dhaka North", unit: "3h 10m" }
    ],
    "LAN Communication Fail": [
        { btsName: "Mymensingh-Trishal-BTS-Trishal (L3)", zone: "Mymensingh", unit: "6h 15m" },
        { btsName: "Dhaka-Vatara-BTS-Shahjadpur (L3)", zone: "Dhaka North", unit: "4h 30m" }
    ],
    "All Communication Fail": [
        { btsName: "Gazipur-Salna-BTS-Salna (L3)", zone: "Dhaka North", unit: "8h 20m" },
        { btsName: "Tangail-Shokhipur-BTS-Shokhipur (L3)", zone: "Dhaka North", unit: "6h 35m" },
        { btsName: "Dhaka-Dhamrai-BTS-Uttar Para Dhamrai (L3)", zone: "Dhaka South", unit: "4h 50m" }
    ],
    "Poor Network List": [
        { btsName: "Mymensingh-Phulpur-BTS-Phulpur (SA)", zone: "Mymensingh", unit: "9h 15m" },
        { btsName: "Dhaka-Shahjahanpur-BTS-Shahjahanpur (L3)", zone: "Dhaka South", unit: "7h 30m" }
    ],
    "Grounding Fail List": [
        { btsName: "Mymensingh-Gafargaon-BTS-Gafargaon (L3)", zone: "Mymensingh", unit: "10h 20m" },
        { btsName: "Gazipur-Gazipur-BTS-Nawjor (L3)", zone: "Dhaka North", unit: "8h 45m" },
        { btsName: "Dhaka-Tejgaon-BTS-East Nakhalpara (L3)", zone: "Dhaka North", unit: "6h 10m" }
    ]
};

// Function to make tableDataSets object empty
function clearAllTableData() {
    Object.keys(tableDataSets).forEach(tableName => {
        tableDataSets[tableName] = [];
    });

    // Update all HTML tables to reflect the empty state
    Object.keys(tableDataSets).forEach(tableName => {
        updateTable(tableName, tableDataSets[tableName]);
    });
}

// Update table with specific data
function updateTable(tableName, data) {
    const table = document.getElementById(tableName.replace(/\s+/g, '-'));
    if (!table) return;

    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        const formattedName = item.btsName
            .replace(/_/g, " ")
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        row.innerHTML = `
        <td><a class="table-bts-name" href="dashboard/dashboard.html?location=${item.btsName}">${formattedName}</a></td>
            <td>${item.zone}</td>
            <td>${item.unit}</td>
    `;
        tbody.appendChild(row);
    });
}

// Initial data load for all tables
Object.keys(tableDataSets).forEach(tableName => {
    updateTable(tableName, tableDataSets[tableName]);
});

// Menu toggle functionality
document.getElementById('menuToggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
});
