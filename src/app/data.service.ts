import { Injectable } from '@angular/core';

import { Movie, Actor, Industry } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private industries: Array<Industry> = [
    {
      "Code": "Hindi",
      "Name": "Hindi"
    },
    {
      "Code": "Malayalam",
      "Name": "Malayalam"
    },
    {
      "Code": "Tamil",
      "Name": "Tamil"
    }
  ];

  private actors: Array<Actor> = [
    {
      "Code": "Aamir",
      "Name": "Aamir Khan",
      "Industry": "Hindi"
    },
    {
      "Code": "Amitabh",
      "Name": "Amitabh Bachchan",
      "Industry": "Hindi"
    },
    {
      "Code": "Kamal",
      "Name": "Kamal Hassan",
      "Industry": "Tamil"
    },
    {
      "Code": "Mammootty",
      "Name": "Mammootty",
      "Industry": "Malayalam"
    },
    {
      "Code": "Mohanlal",
      "Name": "Mohan Lal",
      "Industry": "Malayalam"
    },
    {
      "Code": "Rajini",
      "Name": "Rajini Kanth",
      "Industry": "Tamil"
    },
    {
      "Code": "Shahrukh",
      "Name": "Shahrukh Khan",
      "Industry": "Hindi"
    }
  ];

  private mohanlal: Array<Movie> = [
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1980,
      "Title": "Manjil Virinja Pookkal",
      "Role": "Narendran",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1981,
      "Title": "Sanchari",
      "Role": "Dr. Sekhar",
      "Director": "Boban Kunchacko",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1981,
      "Title": "Thakilu Kottampuram",
      "Role": "Advocate Paul",
      "Director": "Balu Kiriyath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1981,
      "Title": "Dhanya",
      "Role": "Mohanlal",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1981,
      "Title": "Dhruvasangamam",
      "Role": "Sankarankutty",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1981,
      "Title": "Attimari",
      "Role": "Shan",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1981,
      "Title": "Oothikachiya Ponnu",
      "Role": "Nandan",
      "Director": "P. K. Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1981,
      "Title": "Thenum Vayambum",
      "Role": "Varma",
      "Director": "Ashok Kumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1981,
      "Title": "Ahimsa",
      "Role": "Mohan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Madrasile Mon",
      "Role": "Mohanlal",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Football",
      "Role": "Balakrishnan",
      "Director": "Radhakrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Kelkkaatha Sabdham",
      "Role": "Babu",
      "Director": "Balachandra Menon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Padayottam",
      "Role": "Kannan",
      "Director": "Jijo",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Enikkum Oru Divasam",
      "Role": "Babu",
      "Director": "Sreekumaran Thampi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Aakrosham",
      "Role": "Mohanachandran",
      "Director": "A. B. Raj",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Enthino Pookunna Pookkal",
      "Role": "Surendran",
      "Director": "Gopinath Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Sindoora Sandhyakku Mounam",
      "Role": "Kishore",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Ente Mohangal Poovaninju",
      "Role": "Jayan",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Njan Onnu Parayatte",
      "Role": "Shekharankutty",
      "Director": "K. A. Venugopal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Aa Divasam",
      "Role": "—",
      "Director": "M. Mani",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Kaliyamardanam",
      "Role": "Johny",
      "Director": "J. Williams",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Sree Ayyappanum Vavarum",
      "Role": "Kadutha",
      "Director": "N. P. Suresh",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1982,
      "Title": "Kurukkante Kalyanam",
      "Role": "Sainaba's husband",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Visa",
      "Role": "Sunny",
      "Director": "Balu Kiriyath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Hello Madras Girl",
      "Role": "Lal",
      "Director": "J. Williams",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Ente Katha",
      "Role": "Ramesh",
      "Director": "P. K. Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Bhookambam",
      "Role": "Raghu",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Guru Dakshina",
      "Role": "Minister Prabhakaran",
      "Director": "Baby",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Naseema",
      "Role": "Saithali",
      "Director": "A. Sheriff",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Kolakkomban",
      "Role": "Gopi",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Kuyiline Thedi",
      "Role": "Thampuran Kutty",
      "Director": "M. Mani",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Himavahini",
      "Role": "Pappy",
      "Director": "P. G. Vishwambaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Arabikkadal",
      "Role": "—",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Sesham Kazhchayil",
      "Role": "Police Inspector",
      "Director": "Balachandra Menon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Marakkillorikkalum",
      "Role": "Murali",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Sandhyakku Virinja Poovu",
      "Role": "Ramu",
      "Director": "P. G. Vishwambaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Thaavalam",
      "Role": "Rajappan",
      "Director": "Thambi Kannanthanam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Aadhipathyam",
      "Role": "Mohan",
      "Director": "Sreekumaran Thampi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Chakravalam Chuvannappol",
      "Role": "Surendran",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Engane Nee Marakkum",
      "Role": "Shambu",
      "Director": "M. Mani",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Iniyengilum",
      "Role": "Ravi",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Attakkalasam",
      "Role": "Santhosh Babu",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Kattathe Kilikkoodu",
      "Role": "Unni Krishnan",
      "Director": "Bharathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Asthram",
      "Role": "Das",
      "Director": "P. N. Menon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Changatham",
      "Role": "S. T. Daniel",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Oru Mukham Pala Mukham",
      "Role": "Sukumaran Thampi",
      "Director": "P. K. Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Nanayam",
      "Role": "Babu",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Ente Mamattikkuttiyammakku",
      "Role": "Alex",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1983,
      "Title": "Pinnilavu",
      "Role": "Raghu",
      "Director": "P. G. Vishwambaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Akkare",
      "Role": "Sudhakaran",
      "Director": "K. N. Sasidharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Onnanu Nammal",
      "Role": "Nanda Gopal",
      "Director": "P. G. Vishwambaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Swanthamevide Bandhamevide",
      "Role": "Rajendran",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Vanitha Police",
      "Role": "Achuthan",
      "Director": "Alleppey Ashraf",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Appunni",
      "Role": "Menon Mash",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Athirathram",
      "Role": "Prasad",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Unaru",
      "Role": "Ramu",
      "Director": "Mani Ratnam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Kaliyil Alpam Karyam",
      "Role": "Vinayan",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Poochakkoru Mookkuthi",
      "Role": "Gopala Krishnan",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Pavam Poornima",
      "Role": "Annan Thampuran",
      "Director": "Balu Kiriyath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Lakshmana Rekha",
      "Role": "Sudhakaran Nair",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Aalkkoottathil Thaniye",
      "Role": "Anil Kumar",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Vetta",
      "Role": "Balan",
      "Director": "Mohanroop",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Ivide Thudangunnu",
      "Role": "Krishna Kumar",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Kurishuyudham",
      "Role": "Johny",
      "Director": "Baby",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Manasariyathe",
      "Role": "Mammootty",
      "Director": "Soman Ambaat",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Thirakal",
      "Role": "James George",
      "Director": "K. Vijayan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Kilikkonchal",
      "Role": "Ratheesh",
      "Director": "V. Ashok Kumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Itha Innu Muthal",
      "Role": "Himself",
      "Director": "T. S. Suresh Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Sreekrishna Parunthu",
      "Role": "Kumaran",
      "Director": "A. Vincent",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Aduthaduthu",
      "Role": "Vishnu Mohan",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Ariyaatha Veethikal",
      "Role": "Balan",
      "Director": "K. S. Sethumadhavan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Uyarangalil",
      "Role": "P. K. Jayarajan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Adiyozhukkukal",
      "Role": "Gopi",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1984,
      "Title": "Oru Kochu Swapnam",
      "Role": "—",
      "Director": "Vipindas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Avidathepole Ivideyum",
      "Role": "Sukumaran",
      "Director": "K. S. Sethumadhavan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Nokketha Doorathu Kannum Nattu",
      "Role": "Sreekumar",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Ormikkaan Omanikkaan",
      "Role": "Deva Kumar",
      "Director": "A. B. Raj",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Aram + Aram = Kinnaram",
      "Role": "Narayanan Kutty",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Nayakan",
      "Role": "Krishnadas",
      "Director": "Balu Kiriyath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Njan Piranna Nattil",
      "Role": "Inspector Rajasekharan",
      "Director": "P. Chandrakumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Onnanam Kunnil Oradi Kunnil",
      "Role": "Nithin",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Anubandham",
      "Role": "Bhaskaran",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Mulamoottil Adima",
      "Role": "Adimakanne",
      "Director": "P. K. Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Vasantha Sena",
      "Role": "Devan",
      "Director": "K. Vijayan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Guruji Oru Vakku",
      "Role": "Sudhakaran Nair",
      "Director": "Rajan Shankaradi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Parayanumvayya Parayathirikkanumvayya",
      "Role": "Current Hamsa",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Angadikkappurathu",
      "Role": "Babu",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Koodum Thedi",
      "Role": "Peter",
      "Director": "Paul Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Jeevante Jeevan",
      "Role": "Jayan",
      "Director": "J. Williams",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Adhyayam Onnu Muthal",
      "Role": "Vishnu",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Azhiyatha Bandhangal",
      "Role": "Balakrishnan",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Boeing Boeing",
      "Role": "Shyam",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Karimpinpoovinakkare",
      "Role": "Bhadran",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Uyarum Njan Nadake",
      "Role": "Darappan",
      "Director": "P. Chandrakumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Idanilangal",
      "Role": "Balan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Pathamudayam",
      "Role": "Jayamohan, Vikraman",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Rangam",
      "Role": "Appunni",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Ezhu Muthal Onpathu Vare",
      "Role": "Anand",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1985,
      "Title": "Kandu Kandarinju",
      "Role": "Krishnan Unni",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Ninnishtam Ennishtam",
      "Role": "Srikumar",
      "Director": "Alleppey Ashraf",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Pappan Priyappetta Pappan",
      "Role": "Inspector Devadas",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Oppam Oppathinoppam",
      "Role": "Krishnan Kutty",
      "Director": "Soman Ambaat",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Mazha Peyyunnu Maddalam Kottunnu",
      "Role": "Shambu",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Panchagni",
      "Role": "Rasheed",
      "Director": "Hariharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Kariyilakkattupole",
      "Role": "Inspector Achuthankutty",
      "Director": "Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Abhayam Thedi",
      "Role": "Appu",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Vartha",
      "Role": "Parol Vasu",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Geetham",
      "Role": "Jagadeesh Nair",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Hello My Dear Wrong Number",
      "Role": "Venugopal",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Neram Pularumbol",
      "Role": "Godfree",
      "Director": "K. P. Kumaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Iniyum Kurukshetrum",
      "Role": "Suresh Babu",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Kaveri",
      "Role": "Balachandran Nair",
      "Director": "Rajeevnath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Mizhineerppoovukal",
      "Role": "Richard",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Poomukhappadiyil Ninneyum Kathu",
      "Role": "Pauly",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Nimishangal",
      "Role": "Murali",
      "Director": "P. K. Abraham",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Doore Doore Oru Koodu Koottam",
      "Role": "Diwakaran",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Yuvajanotsavam",
      "Role": "Jayan",
      "Director": "Sreekumaran Thampi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Shobaraj",
      "Role": "Shobaraj, Dharmaraj",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Onnu Muthal Poojyam Vare",
      "Role": "Telephone Uncle",
      "Director": "Raghunath Paleri",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Ente Entethu Mathram",
      "Role": "Mr. Menon",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Padayani",
      "Role": "Ramesh",
      "Director": "T. S. Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Manasilloru Manimuthu",
      "Role": "Mohan",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Sanmanassullavarkku Samadhanam",
      "Role": "Gopalakrishna Panicker",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Adiverukal",
      "Role": "Balakrishnan",
      "Director": "P. Anil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Deshadanakkili Karayarilla",
      "Role": "Harishankar",
      "Director": "Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Revathikkoru Pavakkutty",
      "Role": "Dr. Madhavankutty",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Kunjattakkilikal",
      "Role": "Balakrishnan",
      "Director": "J. Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "T. P. Balagopalan M.A.",
      "Role": "Balagopalan",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Gandhinagar 2nd Street",
      "Role": "Sethu / Ram Singh",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Rajavinte Makan",
      "Role": "Vincent Gomez",
      "Director": "Thambi Kannanthanam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Namukku Parkkan Munthirithoppukal",
      "Role": "Solomon",
      "Director": "Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Sukhamo Devi",
      "Role": "Sunny",
      "Director": "Venu Nagavalli",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1986,
      "Title": "Thalavattam",
      "Role": "Vinod",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "January Oru Orma",
      "Role": "Raju",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Amrutham Gamaya",
      "Role": "Dr. P. K. Haridas",
      "Director": "Hariharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Adimakal Udamakal",
      "Role": "Mohan Cheriyan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Sarvakalashala",
      "Role": "Lal",
      "Director": "Venu Nagavalli",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Irupatham Noottandu",
      "Role": "Sagar Alias Jacky",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Bhoomiyile Rajakkanmar",
      "Role": "Raja Mahindra Varma",
      "Director": "Thambi Kannanthanam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Unnikale Oru Kadha Parayam",
      "Role": "Aby",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Thoovanathumbikal",
      "Role": "Mannarathodi Jayakrishnan",
      "Director": "Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Kaiyethum Doorathu",
      "Role": "Vinod",
      "Director": "K. Ramachandran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Vazhiyorakkazhcakal",
      "Role": "Raghvan / Antony Isaac",
      "Director": "Thambi Kannanthanam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Cheppu",
      "Role": "Ramachandran",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Nadodikkattu",
      "Role": "Rama\"Dasan",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1987,
      "Title": "Ivide Ellavarkum Sugham",
      "Role": "Appu",
      "Director": "Jeassy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Mukunthetta Sumitra Vilikkunnu",
      "Role": "Mukundan K. Kartha",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Ayitham",
      "Role": "Sankaran",
      "Director": "Venu Nagavalli",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Manu Uncle",
      "Role": "Himself",
      "Director": "Dennis Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Orkkappurathu",
      "Role": "Freddy Nicholas",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Paadha Mudra",
      "Role": "Mathu Pandaram, Soap Kuttappan",
      "Director": "R. Sukumaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Pattanapravesham",
      "Role": "C. I. D Ramdas",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Anuragi",
      "Role": "Samu",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Aryan",
      "Role": "Devanarayanan",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Moonnam Mura",
      "Role": "Ali Imran",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Vellanakalude Nadu",
      "Role": "C. Pavithran \"C. P.\" Nair",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Ulsavapittennu",
      "Role": "Aniyankuttan",
      "Director": "Bharath Gopi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1988,
      "Title": "Chithram",
      "Role": "Vishnu",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Lal Americayil",
      "Role": "Lal",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Douthyam",
      "Role": "Capt. Roy Jacob Thomas",
      "Director": "P. Anil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Season",
      "Role": "Jeevan",
      "Director": "Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Varavelpu",
      "Role": "Muralidharan",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Naduvazhikal",
      "Role": "Arjun",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Peruvannapurathe Visheshangal",
      "Role": "Achutha Kurup",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Kireedam",
      "Role": "Sethumadhavan",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Vandanam",
      "Role": "Unnikrishnan",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Adhipan",
      "Role": "Adv. Shyam Prakash",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1989,
      "Title": "Dasharatham",
      "Role": "Rajiv Menon",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "Aye Auto",
      "Role": "Sudhi",
      "Director": "Venu Nagavalli",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "Akkare Akkare Akkare",
      "Role": "C. I. D Ramdas",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "No.20 Madras Mail",
      "Role": "Tony Kurishingal",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "His Highness Abdullah",
      "Role": "Abdullah / Anandhan Nampoothiri",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "Mukham",
      "Role": "Hariprasad",
      "Director": "Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "Kadathanadan Ambadi",
      "Role": "Kadathanadan Ambadi",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "Thazhvaram",
      "Role": "Balan",
      "Director": "Bharathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "Arhatha",
      "Role": "Devaraaj",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "Indrajaalam",
      "Role": "Kannan Nair",
      "Director": "Thambi Kannanthanam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "Appu",
      "Role": "Appu",
      "Director": "Dennis Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1990,
      "Title": "Lal Salam",
      "Role": "Nettoor Stephan",
      "Director": "Venu Nagavalli",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Dhanam",
      "Role": "Sivashankaran",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Bharatham",
      "Role": "Kalloor Gopinathan",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Vasthuhara",
      "Role": "Venugopal",
      "Director": "G. Aravindan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Vishnulokam",
      "Role": "Shanku",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Uncle Bun",
      "Role": "Charlie Chacko",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Kilukkam",
      "Role": "Joji",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Ulladakkam",
      "Role": "Dr. Sunny",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Kizhakkunarum Pakshi",
      "Role": "Ananth Moorthy",
      "Director": "Venu Nagavalli",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Abhimanyu",
      "Role": "Hari Krishnan",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1992,
      "Title": "Sadayam",
      "Role": "Sathyanadhan",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1992,
      "Title": "Kamaladalam",
      "Role": "Nandagopan",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1992,
      "Title": "Aham",
      "Role": "Sidharthan",
      "Director": "Rajeevnath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1992,
      "Title": "Rajashilpi",
      "Role": "Shambhu",
      "Director": "R. Sukumaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1992,
      "Title": "Yoddha",
      "Role": "Thaiparambil Ashokan",
      "Director": "Sangeeth Sivan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1992,
      "Title": "Adhwaytham",
      "Role": "Sivaprasad",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1992,
      "Title": "Soorya Gayathri",
      "Role": "Dr. Balasubramaniam",
      "Director": "P. Anil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1992,
      "Title": "Naadody",
      "Role": "Sachidanandan, Balakrishnan Bhagavathar",
      "Director": "Thambi Kannanthanam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1992,
      "Title": "Vietnam Colony",
      "Role": "G. Krishnamurthy",
      "Director": "Siddique-Lal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1993,
      "Title": "Mithunam",
      "Role": "Sedhumadhavan",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1993,
      "Title": "Devaasuram",
      "Role": "Mangalassery Neelakandan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1993,
      "Title": "Butterflies",
      "Role": "Prince",
      "Director": "Rajiv Anchal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1993,
      "Title": "Maya Mayooram",
      "Role": "Krishnan Unni, Narendran",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1993,
      "Title": "Gandharvam",
      "Role": "Samuel Alexander",
      "Director": "Sangeeth Sivan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1993,
      "Title": "Chenkol",
      "Role": "Sedhumadhavan",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1993,
      "Title": "Kalippattam",
      "Role": "Venu",
      "Director": "Venu Nagavally",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1993,
      "Title": "Manichithrathazhu",
      "Role": "Dr. Sunny Joseph",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1994,
      "Title": "Pavithram",
      "Role": "Unnikrishnan",
      "Director": "T. K. Rajeev Kumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1994,
      "Title": "Thenmavin Kombath",
      "Role": "Manikyan",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1994,
      "Title": "Pingami",
      "Role": "Captain Vijay Menon",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1994,
      "Title": "Pakshe",
      "Role": "Balachandran",
      "Director": "Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1994,
      "Title": "Minnaram",
      "Role": "Boby",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1995,
      "Title": "Nirnayam",
      "Role": "Dr. Roy Alex",
      "Director": "Sangeeth Sivan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1995,
      "Title": "Sphadikam",
      "Role": "Thomas \"Aadu Thoma\" Chacko",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1995,
      "Title": "Thacholi Varghese Chekavar",
      "Role": "Thacholi Varghese Chekavar",
      "Director": "T. K. Rajeev Kumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1995,
      "Title": "Manthrikam",
      "Role": "Stephen Ronald / Alby Romeo Higuitta",
      "Director": "Thambi Kannanthanam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1995,
      "Title": "Agnidevan",
      "Role": "Aniyankuttan / Ravi Varma",
      "Director": "Venu Nagavalli",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1996,
      "Title": "Kaalapani",
      "Role": "Dr. Govardhan",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1996,
      "Title": "The Prince",
      "Role": "Jeeva",
      "Director": "Suresh Krishna",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1997,
      "Title": "Varnapakittu",
      "Role": "Sunny Palamattom",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1997,
      "Title": "Oru Yathramozhi",
      "Role": "Govindankutty",
      "Director": "Prathap Pothan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1997,
      "Title": "Chandralekha",
      "Role": "Appukuttan / Alfy",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1997,
      "Title": "Guru",
      "Role": "Reghuraman",
      "Director": "Rajiv Anchal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1997,
      "Title": "Aaraam Thampuran",
      "Role": "Jagannadhan",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1998,
      "Title": "Kanmadam",
      "Role": "Vishwanathan",
      "Director": "Lohithadas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1998,
      "Title": "Harikrishnans",
      "Role": "Adv. Krishnan",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1998,
      "Title": "Rakthasakshikal Sindabad",
      "Role": "Siva Subrahmanya Iyyer",
      "Director": "Venu Nagavalli",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1998,
      "Title": "Ayal Kadha Ezhuthukayanu",
      "Role": "Sagar Kottappuram / Vidyasagar",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1998,
      "Title": "Summer in Bethlahem",
      "Role": "Niranjan",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1999,
      "Title": "Ustaad",
      "Role": "Parameswaran / Ustaad",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1999,
      "Title": "Olympiyan Anthony Adam",
      "Role": "Chakkummoottil Varghese Antony",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1999,
      "Title": "Vanaprastham",
      "Role": "Kunjikuttan",
      "Director": "Shaji N. Karun",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2000,
      "Title": "Narasimham",
      "Role": "Poovalli Indrachoodan",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2000,
      "Title": "Life is Beautiful",
      "Role": "Vinaya Chandran",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2000,
      "Title": "Sraddha",
      "Role": "Gangaprasad IPS",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2000,
      "Title": "Devadoothan",
      "Role": "Vishal Krishnamoorthy",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2001,
      "Title": "Kakkakuyil",
      "Role": "Sivaraman",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2001,
      "Title": "Ravanaprabhu",
      "Role": "Mangalassery Neelakandan, Karthikeyan",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2001,
      "Title": "Praja",
      "Role": "Zakir Ali Hussain",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2001,
      "Title": "Unnathangalil",
      "Role": "Rakshakan",
      "Director": "Jomon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2001,
      "Title": "Achaneyanenikkishtam",
      "Role": "Mahadevan",
      "Director": "Suresh Krishna",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2002,
      "Title": "Onnaman",
      "Role": "Ravishankar",
      "Director": "Thambi Kannanthanam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2002,
      "Title": "Thandavam",
      "Role": "Kashinathan",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2002,
      "Title": "Chathurangam",
      "Role": "Aatiprackal Jimmy Jacob",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2003,
      "Title": "Mr. Brahmachari",
      "Role": "Ananthan Thampi",
      "Director": "Thulasidas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2003,
      "Title": "Kilichundan Mampazham",
      "Role": "Abdul Khader",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2003,
      "Title": "Balettan",
      "Role": "Athaniparambil Balachandran",
      "Director": "V. M. Vinu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2003,
      "Title": "Hariharan Pillai Happy Aanu",
      "Role": "Hariharan Pillai",
      "Director": "Viswanathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2003,
      "Title": "Thiranottam",
      "Role": "Kuttappan",
      "Director": "Ashokkumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2004,
      "Title": "Vamanapuram Bus Route",
      "Role": "Lever Johny",
      "Director": "Sonu Shishupal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2004,
      "Title": "Vismayathumbathu",
      "Role": "Sreekumar",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2004,
      "Title": "Wanted",
      "Role": "Narayana Swamy",
      "Director": "Murali Nagavally",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2004,
      "Title": "Natturajavu",
      "Role": "Pulikkattil Charlie",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2004,
      "Title": "Mampazhakkalam",
      "Role": "Puramanayil Chandran",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2005,
      "Title": "Udayananu Tharam",
      "Role": "Udayabhanu",
      "Director": "Rosshan Andrrews",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2005,
      "Title": "Chandrolsavam",
      "Role": "Chirakkal Sreehari",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2005,
      "Title": "Udayon",
      "Role": "Shooranad Pappoyi, Shooranad Kunju",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2005,
      "Title": "Naran",
      "Role": "Mullankolli Velayudhan",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2005,
      "Title": "Thanmathra",
      "Role": "Rameshan Nair",
      "Director": "Blessy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2006,
      "Title": "Kilukkam Kilukilukkam",
      "Role": "Joji",
      "Director": "Sandhya Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2006,
      "Title": "Rasathanthram",
      "Role": "Premachandran",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2006,
      "Title": "Vadakkumnathan",
      "Role": "Iringannoor Bharatha Pisharadi",
      "Director": "Shajoon Kariyal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2006,
      "Title": "Keerthi Chakra",
      "Role": "Major Mahadevan",
      "Director": "Major Ravi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2006,
      "Title": "Mahasamudram",
      "Role": "Isahak",
      "Director": "Dr. S. Janardhanan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2006,
      "Title": "Photographer",
      "Role": "Dijo John, Joy John",
      "Director": "Ranjan Pramod",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2006,
      "Title": "Baba Kalyani",
      "Role": "Baba Kalyani",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2007,
      "Title": "Chotta Mumbai",
      "Role": "Vasco da \"Thala\" Gama",
      "Director": "Anwar Rasheed",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2007,
      "Title": "Hallo",
      "Role": "Sivaraman",
      "Director": "Rafi Mecartin",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2007,
      "Title": "Alibhai",
      "Role": "Anwar \"Ali Bhai\" Ali",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2007,
      "Title": "Paradesi",
      "Role": "Valiyakathu Moosa",
      "Director": "P. T. Kunju Muhammed",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2007,
      "Title": "Rock N' Roll",
      "Role": "Chandramouli",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2007,
      "Title": "Flash",
      "Role": "Dr. Midhun Madhav",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2008,
      "Title": "College Kumaran",
      "Role": "Captain Sree Kumar",
      "Director": "Thulasidas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2008,
      "Title": "Innathe Chintha Vishayam",
      "Role": "Gopakumar \"G. K.",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2008,
      "Title": "Mizhikal Sakshi",
      "Role": "Prof. Saeed Ahmed",
      "Director": "Ashok R. Nath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2008,
      "Title": "Madampi",
      "Role": "Putthanpurakkal Gopalakrishna Pillai",
      "Director": "B. Unnikrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2008,
      "Title": "Aakasha Gopuram",
      "Role": "Albert Samson",
      "Director": "K. P. Kumaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2008,
      "Title": "Kurukshetra",
      "Role": "Colonel Mahadevan",
      "Director": "Major Ravi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2008,
      "Title": "Twenty:20",
      "Role": "Devaraja Prathapa Varma",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2008,
      "Title": "Pakal Nakshatrangal",
      "Role": "Sidharthan",
      "Director": "Rajeevnath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2009,
      "Title": "Red Chillies",
      "Role": "Oyyarathu Madathil \"O. M. R\" Ramanathan",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2009,
      "Title": "Sagar Alias Jacky Reloaded",
      "Role": "Sagar Alias Jacky",
      "Director": "Amal Neerad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2009,
      "Title": "Bhagavan",
      "Role": "Dr. Balagopalan",
      "Director": "Prasanth Mampully",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2009,
      "Title": "Bhramaram",
      "Role": "Sivankutty",
      "Director": "Blessy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2009,
      "Title": "Angel John",
      "Role": "Angel John",
      "Director": "S. L. Puram Jayasurya",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2009,
      "Title": "Evidam Swargamanu",
      "Role": "Mathews Jeremias",
      "Director": "Rosshan Andrrews",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2010,
      "Title": "Janakan",
      "Role": "Adv. Surya Narayanan",
      "Director": "N. R. Sanjeev",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2010,
      "Title": "Alexander the Great",
      "Role": "Alexander Varma",
      "Director": "Murali Nagavally",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2010,
      "Title": "Oru Naal Varum",
      "Role": "Kulappulli Sukumaran / DYSP Nandhakumar",
      "Director": "T. K. Rajeev Kumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2010,
      "Title": "Shikkar",
      "Role": "Balaraman",
      "Director": "M. Padmakumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2010,
      "Title": "Kandahar",
      "Role": "Major Mahadevan",
      "Director": "Major Ravi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2011,
      "Title": "Christian Brothers",
      "Role": "Christy Varghese Mappila",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2011,
      "Title": "China Town",
      "Role": "Mathukutty",
      "Director": "Rafi Mecartin",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2011,
      "Title": "Pranayam",
      "Role": "Mathews",
      "Director": "Blessy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2011,
      "Title": "Snehaveedu",
      "Role": "Ajayan",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2011,
      "Title": "Oru Marubhoomikkadha",
      "Role": "P. Madhavan Nair",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2012,
      "Title": "Casanovva",
      "Role": "Casanovva",
      "Director": "Rosshan Andrrews",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2012,
      "Title": "Grandmaster",
      "Role": "Chandrasekhar",
      "Director": "B. Unnikrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2012,
      "Title": "Spirit",
      "Role": "Raghu Nandan",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2012,
      "Title": "Run Baby Run",
      "Role": "Venu",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2012,
      "Title": "Karmayodha",
      "Role": "Madhava \"Mad Maddy\" Menon",
      "Director": "Major Ravi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2013,
      "Title": "Lokpal",
      "Role": "Nandagopal / Lokpal",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2013,
      "Title": "Red Wine",
      "Role": "A. C. P Ratheesh Vasudevan",
      "Director": "Salam Bappu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2013,
      "Title": "Ladies and Gentleman",
      "Role": "Chandrabose",
      "Director": "Siddique",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2013,
      "Title": "Kadal Kadannu Oru Maathukutty",
      "Role": "Himself",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2013,
      "Title": "Geethaanjali",
      "Role": "Dr. Sunny Joseph",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2013,
      "Title": "Drishyam",
      "Role": "Georgekutty",
      "Director": "Jeethu Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2014,
      "Title": "Mr. Fraud",
      "Role": "Bhai Ji",
      "Director": "B. Unnikrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2014,
      "Title": "Koothara",
      "Role": "Usthad Saali",
      "Director": "Srinath Rajendran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2014,
      "Title": "Peruchazhi",
      "Role": "Jagannathan",
      "Director": "Arun Vaidyanathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2015,
      "Title": "Rasam",
      "Role": "Himself",
      "Director": "Rajeevnath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2015,
      "Title": "Ennum Eppozhum",
      "Role": "Vineeth N. Pillai",
      "Director": "Sathyan Anthikad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2015,
      "Title": "Lailaa O Lailaa",
      "Role": "Jai Mohan",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2015,
      "Title": "Loham",
      "Role": "Rajeev \"Raju\" Sathyamoorthy",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2015,
      "Title": "Kanal",
      "Role": "John David",
      "Director": "M. Padmakumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2016,
      "Title": "Oppam",
      "Role": "Jayaraman",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2016,
      "Title": "Pulimurugan",
      "Role": "Murugan",
      "Director": "Vysakh",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2017,
      "Title": "Munthirivallikal Thalirkkumbol",
      "Role": "Ulahannan \"Unnachan",
      "Director": "Jibu Jacob",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2017,
      "Title": "1971: Beyond Borders",
      "Role": "Col. Mahadevan / Major Sahadevan",
      "Director": "Major Ravi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2017,
      "Title": "Velipadinte Pusthakam",
      "Role": "Michael Idicula",
      "Director": "Lal Jose",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2017,
      "Title": "Villain",
      "Role": "Mathew Manjooran",
      "Director": "B. Unnikrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2018,
      "Title": "Aadhi",
      "Role": "Himself",
      "Director": "Jeethu Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2018,
      "Title": "Neerali",
      "Role": "Sunny George",
      "Director": "Ajoy Varma",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2018,
      "Title": "Kayamkulam Kochunni",
      "Role": "Ithikkara Pakki",
      "Director": "Rosshan Andrrews",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2018,
      "Title": "Drama",
      "Role": "Rajagopal",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2018,
      "Title": "Odiyan",
      "Role": "Odiyan Manickyan",
      "Director": "V. A. Shrikumar Menon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2019,
      "Title": "Lucifer",
      "Role": "Stephen Nedumpally / Khureshi Ab'ram",
      "Director": "Prithviraj Sukumaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2019,
      "Title": "Ittymaani: Made in China",
      "Role": "Ittymaani / Ittymaathan",
      "Director": "Jibi-Joju",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2020,
      "Title": "Big Brother",
      "Role": "Sachidanandan",
      "Director": "Siddique",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1991,
      "Title": "Gopura Vasalile",
      "Role": "Accordionist",
      "Director": "Priyadarshan",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1994,
      "Title": "Gandeevam",
      "Role": "Ship captain",
      "Director": "Priyadarshan",
      "Language": "Telugu"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 1997,
      "Title": "Iruvar",
      "Role": "Anandan",
      "Director": "Mani Ratnam",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2002,
      "Title": "Company",
      "Role": "Veerappalli Srinivasan IPS",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2003,
      "Title": "Pop Corn",
      "Role": "Vikramaditya",
      "Director": "Nassar",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2004,
      "Title": "Love",
      "Role": "Mohan Nair",
      "Director": "Rajendra Singh Babu",
      "Language": "Kannada"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2007,
      "Title": "Aag",
      "Role": "Narasimha",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2009,
      "Title": "Unnaipol Oruvan",
      "Role": "Commissioner Raghavan Maarar IPS",
      "Director": "Chakri Toleti",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2012,
      "Title": "Tezz",
      "Role": "Shivan Menon",
      "Director": "Priyadarshan",
      "Language": "Hindi"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2014,
      "Title": "Jilla",
      "Role": "Shivan",
      "Director": "R. T. Neason",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2015,
      "Title": "Mythri",
      "Role": "Mahadev Godke",
      "Director": "B. M. Giriraj",
      "Language": "Kannada"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2016,
      "Title": "Manamantha",
      "Role": "Sai Ram",
      "Director": "Chandra Sekhar Yeleti",
      "Language": "Telugu"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2016,
      "Title": "Janatha Garage",
      "Role": "Sathyam",
      "Director": "Koratala Siva",
      "Language": "Telugu"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2019,
      "Title": "Kaappaan",
      "Role": "Chandrakanth Varma",
      "Director": "K. V. Anand",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2021,
      "Title": "Drishyam 2",
      "Role": "Georgekutty",
      "Director": "Jeethu Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2021,
      "Title": "Marakkar: Arabikadalinte Simham",
      "Role": "Kunjali Marakkar",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2022,
      "Title": "Bro Daddy",
      "Role": "John Chacko Kattadi",
      "Director": "Prithviraj Sukumaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2022,
      "Title": "Aaraattu",
      "Role": "Ganabushanam Neyyattinkara Gopan/Agent X",
      "Director": "B. Unnikrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mohanlal",
      "Year": 2022,
      "Title": "12th Man",
      "Role": "ACP Chandrashekhar IPS",
      "Director": "Jeethu Joseph",
      "Language": "Malayalam"
    },
  ];

  private mammootty: Array<Movie> = [
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1973,
      "Title": "Kaalachakram",
      "Role": "Balakrishnan",
      "Director": "K. Narayanan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1971,
      "Title": "Anubhavangal Paalichakal",
      "Role": "Uncredited (Junior artist)",
      "Director": "K. S. Sethumadhavan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Mrighaya",
      "Role": "Varunni umair",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Mahayanam",
      "Role": "Chandran",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Nair Saab",
      "Role": "Captain Ravindran Nair",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Jagratha",
      "Role": "Sethurama Iyer",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Artham",
      "Role": "Ben Narendran",
      "Director": "Sathyan Anthikkad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Carnival",
      "Role": "Bharathan",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Adharvam",
      "Role": "Anantha Padmanabhan",
      "Director": "Dennis Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Utharam",
      "Role": "Balachandran Nair",
      "Director": "Pavithran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Oru Vadakkan Veeragatha",
      "Role": "Chanthu Chekavar",
      "Director": "T. Hariharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Adikkurippu",
      "Role": "Bhaskara Pillai",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Mudra",
      "Role": "Ramabhadran",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1989,
      "Title": "Charithram",
      "Role": "Philipose Manavalan",
      "Director": "G. S. Vijayan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Sanghanadam",
      "Role": "Chandran",
      "Director": "T. S. Suresh Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Mukthi",
      "Role": "Haridas",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Thanthram",
      "Role": "George Korah Vettickal",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "1921",
      "Role": "Naik Khader",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Mattoral",
      "Role": "Balan",
      "Director": "K. G. George",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "1-Aug",
      "Role": "Perumal",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Sangham",
      "Role": "Kuttappai",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Abkari",
      "Role": "Vasu",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Oru CBI Diary Kurippu",
      "Role": "Sethurama Iyer",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Dhinarathrangal",
      "Role": "Aravindan",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Vicharana",
      "Role": "Sethumadhavan",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1988,
      "Title": "Manu Uncle",
      "Role": "Manu Uncle",
      "Director": "Dennis Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Nalkkavala",
      "Role": "Babu",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Anantaram",
      "Role": "Dr. Balu",
      "Director": "Adoor Gopalakrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Aankiliyude Tharattu",
      "Role": "Haridas",
      "Director": "Cochin Haneefa",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Manivathoorile Aayiram Sivarathrikal",
      "Role": "Dr. Vinayachandran",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Thaniyavarthanam",
      "Role": "Balan Mash",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "New Delhi",
      "Role": "G. Krishnamoorthy",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Kalam Mari Katha Mari",
      "Role": "Kamarudden",
      "Director": "M. Krishnan Nair",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Athinumappuram",
      "Role": "Ravindran",
      "Director": "Thevalakkara Chellappan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Adimakal Udamakal",
      "Role": "Raghavan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Nombarathi Poovu",
      "Role": "Dr. Padmanabhan",
      "Director": "P. Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Ithrayum Kalam",
      "Role": "Varghese",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Sreedharante Onnam Thirumurivu",
      "Role": "Sreedharan",
      "Director": "Sathyan Anthikkad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Oru Sindoora Pottinte Ormakku",
      "Role": "Roy Thampi",
      "Director": "Cochin Haneefa",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Kathakku Pinnil",
      "Role": "Thampi",
      "Director": "K. G. George",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1987,
      "Title": "Kottum Kuravayum",
      "Role": "Damu",
      "Director": "Alleppey Ashraf",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Ennu Nathante Nimmi",
      "Role": "Mahesh",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Rareeram",
      "Role": "Nandakumar",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Kochu Themmadi",
      "Role": "Sekharan Master",
      "Director": "A. Vincent",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Aval Kaathirunnu Avanum....",
      "Role": "Gopinath",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Rakkuyilin Ragasadassil",
      "Role": "Viswanathan",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Sayam Sandhya",
      "Role": "Sivaprasad",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Padayani",
      "Role": "Sudhakaran",
      "Director": "T. S. Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Pranamam",
      "Role": "Prathapan",
      "Director": "Bharathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Geetham",
      "Role": "Yatheendran",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Veendum",
      "Role": "Vijaya Chandran",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Ee Kaikalil",
      "Role": "Sultan Abdul Razak",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Nyayavidhi",
      "Role": "Paramu",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Aavanazhi",
      "Role": "Balram",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Poovinnu Puthiya Poonthennal",
      "Role": "Kiran",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Ice Cream",
      "Role": "Thampi",
      "Director": "Antony Eastman",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Aayiram Kannukal",
      "Role": "Dr. Sam",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Moonnu Masangalkku Munpu",
      "Role": "Dr. Rajasekhran",
      "Director": "Cochin Haneefa",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Nandi Veendum Varika",
      "Role": "Mohandas",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Gandhinagar 2nd Street",
      "Role": "Balachandran",
      "Director": "Sathyan Anthikkad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Adukkan Entheluppam",
      "Role": "Srinivasan Nair",
      "Director": "Jeassy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Snehamulla Simham",
      "Role": "Vaishakhan",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Kaveri",
      "Role": "Dr. Hari",
      "Director": "Rajeev Nath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Neram Pularumbol",
      "Role": "Lawrence",
      "Director": "K. P. Kumaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Poomukhappadiyil Ninneyum Kathu",
      "Role": "Isacc Peter",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Arappatta Kettiya Gramathil",
      "Role": "Zacharia",
      "Director": "P. Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Prathyekam Sradhikuka",
      "Role": "Suresh",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Kshamichu Ennoru Vakku",
      "Role": "Adv. Ravindranath",
      "Director": "Joshiy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Malarum Kiliyum",
      "Role": "Balachandran",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Kariyila Kattu Pole",
      "Role": "Harikrishnan",
      "Director": "P. Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Vartha",
      "Role": "Madhavan Kutty",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Aalorungi Arangorungi",
      "Role": "Rajan",
      "Director": "Chellappan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Mazha Peyyunnu Maddalam Kottunnu",
      "Role": "Guest appearance",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Ithile Iniyum Varu",
      "Role": "Aravindan",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Shyama",
      "Role": "Viswanathan",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1986,
      "Title": "Oru Katha Oru Nunnakkatha",
      "Role": "Prof. Mohandas",
      "Director": "Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Akalathe Ambili",
      "Role": "Ajayan",
      "Director": "Jeassy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Kandu Kandarinju",
      "Role": "Sreedharan",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Kathodu Kathoram",
      "Role": "Louis",
      "Director": "Bharathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Upaharam",
      "Role": "Dr. Jeevan Thomas",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Karimbinpoovinakkare",
      "Role": "Sivan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Aa Neram Alppa Dooram",
      "Role": "Jameskutty",
      "Director": "Thampi Kannanthanam",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Puli Varunne Puli",
      "Role": "Jayaraman",
      "Director": "Harikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Vilichu Vilikettu",
      "Role": "Vijayan",
      "Director": "Sreekumaran Thampi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Kanathaya Penkutty",
      "Role": "Rajmohan",
      "Director": "K. N. Sasidharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Ee Lokam Ivide Kure Manushyar",
      "Role": "Ummer",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Yathra",
      "Role": "Unnikrishnan",
      "Director": "Balu Mahendra",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Nirakkoottu",
      "Role": "Ravi Varma",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Idanilangal",
      "Role": "Vijayan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Iniyum Katha Thudarum",
      "Role": "Ravindran",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Puzhayozhukum Vazhi",
      "Role": "Gopan",
      "Director": "M. Krishnan Nair",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Ente Kaanakkuyil",
      "Role": "Mohan Kumar",
      "Director": "Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Angadikkappurath",
      "Role": "Jose",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Ayanam",
      "Role": "Johny",
      "Director": "Harikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Oru Nokku Kanan",
      "Role": "Jayadevan",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Onningu Vannengil",
      "Role": "Mohandas",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Manya Mahajanangale",
      "Role": "Devan",
      "Director": "A. T. Abu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Oru Sandesam Koodi",
      "Role": "Vijayan",
      "Director": "Cochin Haneefa",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Katha Ithuvare",
      "Role": "Balachandran",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Ee Sabdam Innathe Sabdam",
      "Role": "Dr. Ramachandran",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Anubandham",
      "Role": "Muraleedharan Master",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Oduvil Kittiya Vartha",
      "Role": "Gopalan Kutty",
      "Director": "Yatheendradas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Makan Ente Makan",
      "Role": "Prakasan",
      "Director": "Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Thammil Thammil",
      "Role": "Dr. Rajagopal",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Eeran Sandhya",
      "Role": "Madhavankutty",
      "Director": "Jeassy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Avidathepole Ivideyum",
      "Role": "Anirudhan",
      "Director": "K. S. Sethumadhavan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Ee Thanalil Ithiri Neram",
      "Role": "Vijayan",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Muhurtham Pathnonnu Muppathinu",
      "Role": "Dr. M. K. Haridas",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Parayanumvayya Parayathirikkanumvayya",
      "Role": "Sreekumar",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1985,
      "Title": "Thinkalazhcha Nalla Divasam",
      "Role": "Gopan",
      "Director": "P. Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Kodathi",
      "Role": "Rajendran",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Aalkkoottathil Thaniye",
      "Role": "Rajan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Aarorumariyathe",
      "Role": "Venugopal",
      "Director": "K. S. Sethumadhavan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Aattuvanchi Ulanjappol",
      "Role": "Balachandran",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Aayiram Abilashangal",
      "Role": "Devadasan",
      "Director": "Soman Ambatt",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Adiyozhukkukal",
      "Role": "Karunan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Akkare",
      "Role": "Ismail",
      "Director": "K. N. Sasidharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Aksharangal",
      "Role": "Jayadevan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Alakadalinakkare",
      "Role": "Anand",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Anithichuvappu",
      "Role": "George Kutty",
      "Director": "Kurien Varnassala",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Ariyaatha Veethikal",
      "Role": "Ravi",
      "Director": "K. S. Sethumadhavan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Athirathram",
      "Role": "Tharadas",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Chakkarayumma",
      "Role": "Babu",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Idavelakku Sesham",
      "Role": "Jayadevan",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Engane Undasane",
      "Role": "Gopikuttan Pillai",
      "Director": "Balu Kiriyath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Ente Upasana",
      "Role": "Arjunan",
      "Director": "Bharathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Ethirppukal",
      "Role": "Kochu Baby",
      "Director": "Unni Aranmula",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Itha Innu Muthal",
      "Role": "Adv. Jayamohan",
      "Director": "T. S. Suresh Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Ithiri Poove Chuvannapoove",
      "Role": "Balagopalan",
      "Director": "Bharathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Kanamarayathu",
      "Role": "Roy Varghese",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Koottinilamkili",
      "Role": "Krishnanunni",
      "Director": "Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Lakshmana Rekha",
      "Role": "Sukumaran Nair",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Mangalam Nerunnu",
      "Role": "Babu",
      "Director": "Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Manithali",
      "Role": "Zulfikar",
      "Director": "M. Krishnan Nair",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Onnanu Nammal",
      "Role": "Sethu",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Onnum Mindatha Bharya",
      "Role": "Achuthan Nair",
      "Director": "Balu Kiriyath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Oru Kochukatha Aarum Parayatha Katha",
      "Role": "Dr. Surendran",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Pavam Poornima",
      "Role": "Jayaraj",
      "Director": "Balu Kiriyath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Sandhyakenthinu Sindooram",
      "Role": "Raghunathan",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Sandarbham",
      "Role": "Ravi",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Thirakil Alppam Samayam",
      "Role": "Jose",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Veendum Chalikkunna Chakram",
      "Role": "Jose",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Vetta",
      "Role": "Rathish",
      "Director": "Mohan Roop",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1984,
      "Title": "Vikatakavi",
      "Role": "Usman",
      "Director": "T. Hariharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Eettillam",
      "Role": "Sivan",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Aa Rathri",
      "Role": "Balu",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Aadaminte Vaariyellu",
      "Role": "Jose",
      "Director": "K. G. George",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "America America",
      "Role": "Ramesh",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Asthram",
      "Role": "Balu",
      "Director": "P. N. Menon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Chakravalam Chuvannappol",
      "Role": "Vasu",
      "Director": "Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Changatham",
      "Role": "Tony Francis",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Coolie",
      "Role": "Kunchali",
      "Director": "Ashok Kumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Ente Katha",
      "Role": "Babu",
      "Director": "P. K. Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Guru Dakshina",
      "Role": "John",
      "Director": "Baby",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Himavahini",
      "Role": "Gopi",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Iniyenkilum",
      "Role": "Divakaran",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Kattaruvi",
      "Role": "Vasu",
      "Director": "Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Kinnaram",
      "Role": "Balachandran",
      "Director": "Sathyan Anthikkad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Kodunkattu",
      "Role": "Musthafa",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Koodevide",
      "Role": "Captain Thomas",
      "Director": "Padmarajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Lekhayude Maranam Oru Flashback",
      "Role": "Prem Sagar",
      "Director": "K. G. George",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Maniyara",
      "Role": "Shameer",
      "Director": "P. K. Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Manassoru Mahasamudram",
      "Role": "Venugopal",
      "Director": "P. K. Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Marakkillorikkalum",
      "Role": "Cameo",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Nanayam",
      "Role": "Raju",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Nadi Muthal Nadi Vare",
      "Role": "Raju",
      "Director": "Vijayanand",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Onnu Chirikku",
      "Role": "Unnikrishnan",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Oru Madapravinte Katha",
      "Role": "Balachandran",
      "Director": "Alleppey Ashraf",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Oru Mukham Pala Mukham",
      "Role": "Muralidhran Thambi",
      "Director": "P. K. Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Oru Swakaryam",
      "Role": "Usman",
      "Director": "Hari Kumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Pinnilavu",
      "Role": "Unni",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Prathijnja",
      "Role": "Hamsa",
      "Director": "Sundaram P. N.",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Rachana",
      "Role": "Gopi",
      "Director": "Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Rugma",
      "Role": "Raghu",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Saagaram Shaantham",
      "Role": "Ananthan",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Sandhyakku Virinja Poovu",
      "Role": "Jayamohan",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Sesham Kazhchayil",
      "Role": "Jagadish",
      "Director": "Balachandra Menon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Theeram Thedunna Thira",
      "Role": "Madhu",
      "Director": "A. Vincent",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1983,
      "Title": "Visa",
      "Role": "Shereef",
      "Director": "Balu Kiriyath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Innallenkil Naale",
      "Role": "Rahim",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Balloon",
      "Role": "Muthukoya",
      "Director": "Ravigupthan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Aa Divasam",
      "Role": "Balachandran",
      "Director": "M Mani",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Amrutha Geetham",
      "Role": "Suresh",
      "Director": "Baby",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Chambalkadu",
      "Role": "Beeran",
      "Director": "K. G. Rajasekharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Chiriyo Chiri",
      "Role": "Mammootty",
      "Director": "Balachandra Menon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Ee Nadu",
      "Role": "Salim",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Enthino Pookunna Pookal",
      "Role": "Sivaraman",
      "Director": "Gopinath Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Idiyum Minnalum",
      "Role": "Prabhakaran",
      "Director": "P G Vishwambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "John Jaffer Janardhanan",
      "Role": "Janardhanan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Keni",
      "Role": "Babu",
      "Director": "Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Komaram",
      "Role": "Babu",
      "Director": "J. C. George",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Oru Thira Pinneyum Thira",
      "Role": "Jayadevan",
      "Director": "Dr. Pavithran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Padayottam",
      "Role": "Kammaran",
      "Director": "Jijo Punnoose",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Ponnum Poovum",
      "Role": "Salim",
      "Director": "A. Vincent",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Pooviriyum Pulari",
      "Role": "Ramesh",
      "Director": "G. Premkumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Post Mortem",
      "Role": "Johny",
      "Director": "Sasikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Sara Varsham",
      "Role": "Rajashekharan",
      "Director": "S. Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Sindoora Sandhyakku Mounam",
      "Role": "Bitpart",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Thadaakam",
      "Role": "Jabbar",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Veedu",
      "Role": "Rajasekhara Menon",
      "Director": "Rasheed Karapuzha",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Vidhichathum Kothichathum",
      "Role": "Vasu",
      "Director": "T. S. Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1982,
      "Title": "Yavanika",
      "Role": "Jacob Eerally",
      "Director": "K. G. George",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1981,
      "Title": "Ahimsa",
      "Role": "Vasu",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1981,
      "Title": "Oothikachiya Ponnu",
      "Role": "Thoman Kutty",
      "Director": "P. K. Joseph",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1981,
      "Title": "Thrishna",
      "Role": "Krishna Das",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1981,
      "Title": "Munnettam",
      "Role": "Rajappan",
      "Director": "Sreekumaran Thampi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1981,
      "Title": "Sphodanam",
      "Role": "Thankappan",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1980,
      "Title": "Mela",
      "Role": "Vijayan",
      "Director": "K. G. George",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1980,
      "Title": "Vilkkanundu Swapnangal",
      "Role": "Madhavan Kutty",
      "Director": "Azad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1999,
      "Title": "Pallavur Devanarayanan",
      "Role": "Pallavur Devanarayana Pothuval",
      "Director": "V. M. Vinu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1999,
      "Title": "Prem Poojari",
      "Role": "Cameo",
      "Director": "Hariharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1999,
      "Title": "Ezhupunna Tharakan",
      "Role": "Ezhupunna Sunny Tharakan",
      "Director": "P. G. Viswambharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1999,
      "Title": "Thachiledathu Chundan",
      "Role": "Kochu Kunju",
      "Director": "Shajoon Karyal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1999,
      "Title": "Megham",
      "Role": "Col. Ravivarma Thampuran",
      "Director": "Priyadarshan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1999,
      "Title": "Stalin Sivadas",
      "Role": "Sivadas",
      "Director": "T. S. Suresh Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1999,
      "Title": "The Godman",
      "Role": "Amarnath",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1998,
      "Title": "Elavamkodu Desam",
      "Role": "Jathavethan",
      "Director": "K. G. George",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1998,
      "Title": "Harikrishnans",
      "Role": "Hari",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1998,
      "Title": "Sidhartha",
      "Role": "Sidhartha",
      "Director": "Joemon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1998,
      "Title": "Oru Maravathoor Kanavu",
      "Role": "Chandy",
      "Director": "Lal Jose",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1998,
      "Title": "The Truth",
      "Role": "Bharath Patteri",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1997,
      "Title": "Bhoothakkannadi",
      "Role": "Vidyadharan",
      "Director": "Lohithadas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1997,
      "Title": "Vamsam",
      "Role": "",
      "Director": "Baiju Kottarakara",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1997,
      "Title": "Kaliyoonjal",
      "Role": "Nandagopalan",
      "Director": "Anil-Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1997,
      "Title": "Oral Mathram",
      "Role": "Hareendran",
      "Director": "Sathyan Anthikkad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1996,
      "Title": "Udhyanapalakan",
      "Role": "Sudhakaran Nair",
      "Director": "Harikumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1996,
      "Title": "Indraprastham",
      "Role": "Sathish Menon",
      "Director": "Haridas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1996,
      "Title": "Aayiram Naavulla Ananthan",
      "Role": "Dr. Anantha Padmanabhan",
      "Director": "Thulasidas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1996,
      "Title": "Hitler",
      "Role": "Madhavan Kutty",
      "Director": "Siddique",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1996,
      "Title": "Azhakiya Ravanan",
      "Role": "Sanker Das",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1995,
      "Title": "The King",
      "Role": "Thevalliparambil Joseph Alex",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1995,
      "Title": "Ormakal Undayirikkanam",
      "Role": "Bhasi",
      "Director": "T. V. Chandran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1995,
      "Title": "No. 1 Snehatheeram Bangalore North",
      "Role": "Vijaya Bhasker",
      "Director": "Sathyan Anthikkad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1995,
      "Title": "Oru Abhibhashakante Case Diary",
      "Role": "Aniyan Kuruvilla",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1995,
      "Title": "Mazhayethum Munpe",
      "Role": "Nandakumar Varma",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1994,
      "Title": "Sukrutham",
      "Role": "Ravishankar",
      "Director": "Hari Kumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1994,
      "Title": "Sainyam",
      "Role": "Captain Eswar",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1994,
      "Title": "Sagaram Sakshi",
      "Role": "Balachandran",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1994,
      "Title": "Vishnu",
      "Role": "Vishnu",
      "Director": "P. Sreekumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1994,
      "Title": "Ponthan Mada",
      "Role": "Mada",
      "Director": "T. V. Chandran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1994,
      "Title": "Vidheyan",
      "Role": "Bhaskar Patelar",
      "Director": "Adoor Gopalakrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1993,
      "Title": "Golanthara Vartha",
      "Role": "Ramesan Nair",
      "Director": "Sathyan Anthikkad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1993,
      "Title": "Padheyam",
      "Role": "Chandradas",
      "Director": "Bharathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1993,
      "Title": "Sarovaram",
      "Role": "Devadathan",
      "Director": "Jeassy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1993,
      "Title": "Jackpot",
      "Role": "Gautham Krishna",
      "Director": "Jomon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1993,
      "Title": "Valtsalyam",
      "Role": "Meledathu Raghvan Nair",
      "Director": "Cochin Haneefa",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1993,
      "Title": "Aayirappara",
      "Role": "Shouwri",
      "Director": "Venu Nagavalli",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1993,
      "Title": "Dhruvam",
      "Role": "Narasimha Mannadiyar",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1992,
      "Title": "Pappayude Swantham Appoos",
      "Role": "Balachandran",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1992,
      "Title": "Kizhakkan Pathrose",
      "Role": "Pathrose",
      "Director": "T. S. Suresh Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1992,
      "Title": "Mahanagaram",
      "Role": "Chanthakkadu Viswan",
      "Director": "T. K. Rajeev Kumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1992,
      "Title": "Johnnie Walker",
      "Role": "John Varghese",
      "Director": "Jayaraaj",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1992,
      "Title": "Soorya Manasam",
      "Role": "Putturumees",
      "Director": "Viji Thampi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1992,
      "Title": "Kauravar",
      "Role": "Antony",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1991,
      "Title": "Neelagiri",
      "Role": "Sivan",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1991,
      "Title": "Anaswaram",
      "Role": "Daniel D'Souza",
      "Director": "Jomon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1991,
      "Title": "Kanalkkattu",
      "Role": "Nathu Narayanan",
      "Director": "Sathyan Anthikkad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1991,
      "Title": "Adayalam",
      "Role": "Hariharan",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1991,
      "Title": "Inspector Balram",
      "Role": "Inspector Balram",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1991,
      "Title": "Nayam Vyakthamakkunnu",
      "Role": "Sukumaran",
      "Director": "Balachandra Menon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1991,
      "Title": "Amaram",
      "Role": "Achootty",
      "Director": "Bharathan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Parampara",
      "Role": "Lawrence/Johny",
      "Director": "Sibi Malayil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "No.20 Madras Mail",
      "Role": "Himself (cameo)",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Ee Thanutha Veluppan Kalathu",
      "Role": "Haridas Damodaran",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Iyer the Great",
      "Role": "Soorya Narayana Iyer",
      "Director": "Bhadran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Oliyampukal",
      "Role": "Arackal Baby Mathew",
      "Director": "Hariharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Kalikkalam",
      "Role": "Thief",
      "Director": "Sathyan Anthikkad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Samrajyam",
      "Role": "Alexander",
      "Director": "Jomon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Mathilukal",
      "Role": "Vaikom Muhammad Basheer",
      "Director": "Adoor Gopalakrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Midhya",
      "Role": "Venugopal",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Kuttettan",
      "Role": "Vishnu Narayanan",
      "Director": "Joshi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Kottayam Kunjachan",
      "Role": "Kunjachan",
      "Director": "T. S. Suresh Babu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Purappadu",
      "Role": "Viswanathan",
      "Director": "Jeassy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2009,
      "Title": "Chattambinaadu",
      "Role": "Virendra Mallayya",
      "Director": "Shafi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2009,
      "Title": "Paleri Manikyam: Oru Pathirakolapathakathinte Katha",
      "Role": "Haridas/Ahmed Haji/Khalid Ahmed",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2009,
      "Title": "Kerala Cafe",
      "Role": "Unnamed",
      "Director": "Lal Jose, Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2009,
      "Title": "Pazhassi Raja",
      "Role": "Kerala Varma Pazhassi Raja",
      "Director": "Hariharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2009,
      "Title": "Loudspeaker",
      "Role": "Philipose aka 'Mike'",
      "Director": "Jayaraj",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2009,
      "Title": "Daddy Cool",
      "Role": "Antony Simon",
      "Director": "Ashique Abu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2009,
      "Title": "Ee Pattanathil Bhootham",
      "Role": "Jimmy/Genie\n(Double Role)",
      "Director": "Johny Antony",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2009,
      "Title": "Love In Singapore",
      "Role": "Machu",
      "Director": "Rafi Mekartin",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2008,
      "Title": "Twenty:20",
      "Role": "Advt. Ramesh Nambiar",
      "Director": "Joshy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2008,
      "Title": "Mayabazar",
      "Role": "Rameshan/Swami\n(Double Role)",
      "Director": "Thomas Sebastian",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2008,
      "Title": "One Way Ticket",
      "Role": "Himself (cameo)",
      "Director": "Bipin Prabhakar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2008,
      "Title": "Parunthu",
      "Role": "Parunthu Purushothaman",
      "Director": "M Padmakumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2008,
      "Title": "Annan Thambi",
      "Role": "Appu/Achu",
      "Director": "Anwar Rasheed",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2008,
      "Title": "Roudram",
      "Role": "ACP Narendran",
      "Director": "Renji Panicker",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2007,
      "Title": "Kadha Parayumbol",
      "Role": "Ashok Raj",
      "Director": "Mohan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2007,
      "Title": "Nazrani",
      "Role": "David John Kottarathil",
      "Director": "Joshi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2007,
      "Title": "Ore Kadal",
      "Role": "Dr. S. R. Nathan",
      "Director": "Shyamaprasad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2007,
      "Title": "Mission 90 Days",
      "Role": "Major Sivaram",
      "Director": "Major Ravi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2007,
      "Title": "Big B",
      "Role": "Bilal John Kurishinkal",
      "Director": "Amal Neerad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2007,
      "Title": "Mayavi",
      "Role": "Mahi aka Mayavi",
      "Director": "Shafi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2007,
      "Title": "Kaiyoppu",
      "Role": "Balachandran",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2006,
      "Title": "Palunku",
      "Role": "Monichan",
      "Director": "Blessy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2006,
      "Title": "Karutha Pakshikal",
      "Role": "Murugan",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2006,
      "Title": "Pothen Vava",
      "Role": "Pothen Vava",
      "Director": "Joshi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2006,
      "Title": "Bhargava Charitham Moonam Khandam",
      "Role": "Current Bharghavan",
      "Director": "Joemon",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2006,
      "Title": "Prajapathi",
      "Role": "Devarmadam Narayanan",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2006,
      "Title": "Balram vs. Tharadas",
      "Role": "Balaram/Tharadas",
      "Director": "I. V. Sasi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2006,
      "Title": "Thuruppu Gulan",
      "Role": "Kunjumon aka Gulan",
      "Director": "Johny Antony",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2005,
      "Title": "Bus Conductor",
      "Role": "Zakir Hussain",
      "Director": "V. M. Vinu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2005,
      "Title": "Rajamanikyam",
      "Role": "Bellary Raja",
      "Director": "Anwar Rasheed",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2005,
      "Title": "Nerariyan CBI",
      "Role": "Sethurama Iyer",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2005,
      "Title": "Rappakal",
      "Role": "Krishnan",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2005,
      "Title": "Thaskara Veeran",
      "Role": "Arakkal Baby",
      "Director": "Pramod Pappan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2005,
      "Title": "Thommanum Makkalum",
      "Role": "Sivan",
      "Director": "Shafi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2004,
      "Title": "Vesham",
      "Role": "Appu",
      "Director": "V. M. Vinu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2004,
      "Title": "Black",
      "Role": "Karikkamuri Shanmukhan",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2004,
      "Title": "Kaazhcha",
      "Role": "Madhavan",
      "Director": "Blessy",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2004,
      "Title": "Aparichithan",
      "Role": "Raghuram",
      "Director": "Sanjiv Sivan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2004,
      "Title": "Vajram",
      "Role": "Devarajan",
      "Director": "Pramod Pappan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2004,
      "Title": "Sethurama Iyer CBI",
      "Role": "Sethurama Iyer",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2003,
      "Title": "Pattalam",
      "Role": "Pattabhi Raman",
      "Director": "Lal Jose",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2003,
      "Title": "Chronic Bachelor",
      "Role": "Sathyaprathapan",
      "Director": "Siddique",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2002,
      "Title": "Dany",
      "Role": "Danniel Thomson",
      "Director": "T. V. Chandran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2002,
      "Title": "Kai Ethum Doorathu",
      "Role": "Gopinathan",
      "Director": "Fazil",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2002,
      "Title": "Phantom",
      "Role": "Phantom Phaliey",
      "Director": "Biju Varkey",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2001,
      "Title": "Dubai",
      "Role": "Ravi Mamman",
      "Director": "Joshi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2001,
      "Title": "Rakshasa Rajav",
      "Role": "Ramanadhan IPS",
      "Director": "Vinayan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2000,
      "Title": "Dada Sahib",
      "Role": "Abubacker/Dada Sahib",
      "Director": "Vinayan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2000,
      "Title": "Valliettan",
      "Role": "Arackal Madhavanunni",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2000,
      "Title": "Narasimham",
      "Role": "Nandagopal Marar (cameo)",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2000,
      "Title": "Arayannagalude Veedu",
      "Role": "Ravindranath",
      "Director": "Lohithadas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2019,
      "Title": "Mamangam",
      "Role": "Chandroth Valiya Panicker",
      "Director": "M. Padmakumar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2019,
      "Title": "Ganagandharvan",
      "Role": "Kalasadhan Ullas",
      "Director": "Ramesh Pisharody",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2019,
      "Title": "Pathinettam Padi",
      "Role": "John Abraham Palackal",
      "Director": "Shankar Ramakrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2019,
      "Title": "Unda",
      "Role": "S. I. Manikandan C.P.",
      "Director": "Khalid Rahman",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2019,
      "Title": "Madhura Raja",
      "Role": "'Madhura' Raja",
      "Director": "Vysakh",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2018,
      "Title": "Oru Kuttanadan Blog",
      "Role": "Nediyedath Hari",
      "Director": "Sethu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2018,
      "Title": "Abrahaminte Santhathikal",
      "Role": "Derick Abraham",
      "Director": "Shaji Padoor",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2018,
      "Title": "Uncle",
      "Role": "Krishna Kumar",
      "Director": "Gireesh Damodar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2018,
      "Title": "Parole",
      "Role": "Comrade Alex",
      "Director": "Sharrath Sandith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2018,
      "Title": "Captain",
      "Role": "Himself",
      "Director": "Prajesh Sen",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2018,
      "Title": "Street Lights",
      "Role": "CI James Abraham",
      "Director": "Shamdat Zainudheen",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2017,
      "Title": "Masterpiece",
      "Role": "Anto Antony IPS",
      "Director": "Ajai Vasudev",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2017,
      "Title": "Pullikkaran Staraa",
      "Role": "K. Rajakumaran",
      "Director": "Syamdhar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2017,
      "Title": "Puthan Panam",
      "Role": "Nithyananda Shenoy",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2017,
      "Title": "The Great Father",
      "Role": "David Nainan",
      "Director": "Haneef Adeni",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2016,
      "Title": "Thoppil Joppan",
      "Role": "Thoppil Joppan",
      "Director": "Johny Antony",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2016,
      "Title": "White",
      "Role": "Prakash Roy",
      "Director": "Uday Ananthan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2016,
      "Title": "Kasaba",
      "Role": "Rajan Zachariah",
      "Director": "Nithin Renji Panicker",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2016,
      "Title": "Puthiya Niyamam",
      "Role": "Adv. Louis Pothen",
      "Director": "A. K. Sajan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2015,
      "Title": "Pathemari",
      "Role": "Pallikal Narayanan",
      "Director": "Salim Ahamed",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2015,
      "Title": "Utopiayile Rajavu",
      "Role": "C.P. Swathanthran",
      "Director": "Kamal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2015,
      "Title": "Acha Dhin",
      "Role": "Durgadas",
      "Director": "G. Marthandan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2015,
      "Title": "Bhaskar the Rascal",
      "Role": "Bhaskar",
      "Director": "Siddique",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2015,
      "Title": "Fireman",
      "Role": "Vijay",
      "Director": "Deepu Karunakaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2014,
      "Title": "Varsham",
      "Role": "P.K.Venugopal",
      "Director": "Ranjith Sankar",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2014,
      "Title": "RajadhiRaja",
      "Role": "Shekharan Kutty aka Rajashekhar/ Raja",
      "Director": "Ajai Vasudev",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2014,
      "Title": "Munnariyippu",
      "Role": "CK Raghavan",
      "Director": "Venu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2014,
      "Title": "Manglish",
      "Role": "Malik Bhai",
      "Director": "Salam Bappu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2014,
      "Title": "Gangster",
      "Role": "Akbar Ali Khan",
      "Director": "Aashiq Abu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2014,
      "Title": "Praise the Lord",
      "Role": "Joy",
      "Director": "Shibu Gangadharan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2014,
      "Title": "Balyakalasakhi",
      "Role": "Majeed/Majeed's father",
      "Director": "Pramod Payyannur",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2013,
      "Title": "Silence",
      "Role": "Aravind Chandrasekhar",
      "Director": "V. K. Prakash",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2013,
      "Title": "Daivathinte Swantham Cleetus",
      "Role": "Cleetus",
      "Director": "G. Marthandan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2013,
      "Title": "Kunjananthante Kada",
      "Role": "Kunjananthan",
      "Director": "Salim Ahamed",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2013,
      "Title": "Kadal Kadannoru Mathukkutty",
      "Role": "Matthew George aka Mathukkutty",
      "Director": "Renjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2013,
      "Title": "Immanuel",
      "Role": "Immanuel",
      "Director": "Lal Jose",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2013,
      "Title": "Proprietors: Kammath & Kammath",
      "Role": "Raja Raja Kammath",
      "Director": "Thomson",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2012,
      "Title": "Bavuttiyude Namathil",
      "Role": "Bavutty",
      "Director": "G. S. Vijayan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2012,
      "Title": "Face2Face",
      "Role": "Balachandran",
      "Director": "V. M. Vinu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2012,
      "Title": "Jawan of Vellimala",
      "Role": "Gopi Krishan",
      "Director": "Anoop Kannan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2012,
      "Title": "Thappana",
      "Role": "Samson",
      "Director": "Johny Antony",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2012,
      "Title": "Cobra",
      "Role": "Raja/Shivadas Naidu",
      "Director": "Lal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2012,
      "Title": "The King & the Commissioner",
      "Role": "Joseph Alex Thevliparambil",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2012,
      "Title": "Shikari",
      "Role": "Abhijeet/Aruna",
      "Director": "Abhaya Simha",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2011,
      "Title": "Venicile Vyapari",
      "Role": "Pavithran",
      "Director": "Shafi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2011,
      "Title": "Bombay March 12",
      "Role": "Sameer (Sanathanan Bhat)",
      "Director": "Babu Janardhanan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2011,
      "Title": "The Train",
      "Role": "Kedarnath",
      "Director": "Jayaraj",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2011,
      "Title": "Doubles",
      "Role": "Giri",
      "Director": "Sohan Seenulal",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2011,
      "Title": "15-Aug",
      "Role": "Perumal",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Best Actor",
      "Role": "Mohan",
      "Director": "Martin Prakkat",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Best of Luck",
      "Role": "Himself (cameo)",
      "Director": "M. A. Nishad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Vandae Maatharam",
      "Role": "Gopikrishnan",
      "Director": "T. Aravind",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Pranchiyettan & the Saint",
      "Role": "Chirammal Enashu Francis",
      "Director": "Ranjith",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Kutty Srank",
      "Role": "Kutty Shranku",
      "Director": "Shaji N. Karun",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Pokkiri Raja",
      "Role": "Madhurai Raja",
      "Director": "Vysakh",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Pramaani",
      "Role": "Vishwanatha Panicker",
      "Director": "B. Unnikrishnan",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Yugapurushan",
      "Role": "K C Kuttan",
      "Director": "R. Sukumaran",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Drona 2010",
      "Role": "Madhavan/Kunjunni",
      "Director": "Shaji Kailas",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2020,
      "Title": "Shylock",
      "Role": "Boss / Vaal / Shylock",
      "Director": "Ajai Vasudev",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2000,
      "Title": "Dr. Babasaheb Ambedkar",
      "Role": "B. R. Ambedkar",
      "Director": "Jabbar Patel",
      "Language": "Engilsh"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2008,
      "Title": "Halla Bol",
      "Role": "Guest Appearance",
      "Director": "Rajkumar Santhoshi",
      "Language": "Hindi"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2005,
      "Title": "Sau Jhooth Ek Sach - The Uninvited",
      "Role": "Inspector Vivek",
      "Director": "Bappaditya Roy",
      "Language": "Hindi"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1998,
      "Title": "Swami Vivekananda",
      "Role": "Guest Appearance",
      "Director": "G V Iyer",
      "Language": "Hindi"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1993,
      "Title": "Dhartiputra",
      "Role": "Kapil Dev Singh",
      "Director": "Iqbal Durrani",
      "Language": "Hindi"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Triyathri",
      "Role": "Mathew",
      "Director": "Parvati Menon",
      "Language": "Hindi"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2012,
      "Title": "Shikari",
      "Role": "Abhijeet/Aruna",
      "Director": "Abhaya Simha",
      "Language": "Kannada"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2019,
      "Title": "Peranbu",
      "Role": "Amuthavan",
      "Director": "Ram",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2010,
      "Title": "Vandae Maatharam",
      "Role": "Gopikrishnan IPS",
      "Director": "D. Arvind",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2004,
      "Title": "Vishwa Thulasi",
      "Role": "Vishwa",
      "Director": "Sumathy Ram",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2002,
      "Title": "Karmegham",
      "Role": "Karmegham",
      "Director": "S. P. Rajkumar",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2002,
      "Title": "Junior Senior",
      "Role": "Santhosh",
      "Director": "Suresh",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2001,
      "Title": "Aanandham",
      "Role": "Thirupathi",
      "Director": "N. Lingusamy",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2000,
      "Title": "Kandukondain Kandukondain",
      "Role": "Major Bala",
      "Director": "Rajiv Menon",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1999,
      "Title": "Edhirum Pudhirum",
      "Role": "Kannan",
      "Director": "V.C Ramani",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1998,
      "Title": "Marumalarchi",
      "Role": "Rasu Padayachi",
      "Director": "K. Bharathi",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1997,
      "Title": "Arasiyal",
      "Role": "Chandrasekhar",
      "Director": "R. K. Selvamani",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1997,
      "Title": "Pudhayal",
      "Role": "Captain Vishwanath",
      "Director": "Selva",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1995,
      "Title": "Makkal Aatchi",
      "Role": "Sethupathi",
      "Director": "R. K. Selvamani",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1993,
      "Title": "Kilipetchu Ketkava",
      "Role": "Chidambaram",
      "Director": "Fazil",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1991,
      "Title": "Thalapathi",
      "Role": "Devaraj",
      "Director": "Mani Ratnam",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1991,
      "Title": "Azhagan",
      "Role": "Azhakappan",
      "Director": "K. Balachander",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1990,
      "Title": "Mounam Sammadham",
      "Role": "Raja",
      "Director": "K. Madhu",
      "Language": "Tamil"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2019,
      "Title": "Yatra",
      "Role": "Y. S. Rajasekhara Reddy",
      "Director": "Mahi V. Raghav",
      "Language": "Telugu"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1998,
      "Title": "Railway Coolie",
      "Role": "Prabhu",
      "Director": "Kodi Ramakrishna",
      "Language": "Telugu"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1996,
      "Title": "Surya Putrulu",
      "Role": "Prakash",
      "Director": "C. Umamaheswara Rao",
      "Language": "Telugu"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 1992,
      "Title": "Swathi Kiranam",
      "Role": "Anantha Rama Sharma",
      "Director": "K Vishwanath",
      "Language": "Telugu"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2021,
      "Title": "The Priest",
      "Role": "Father Carmen Benedict",
      "Director": "Jofin.T.Chacko",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2021,
      "Title": "One",
      "Role": "Kadakkal Chandran",
      "Director": "Santhosh Viswanath",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2022,
      "Title": "Bheeshma Parvam",
      "Role": "Michael",
      "Director": "Amal Neerad",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2022,
      "Title": "CBI 5: The Brain",
      "Role": "Sethurama Iyer",
      "Director": "K. Madhu",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2022,
      "Title": "Puzhu",
      "Role": "Kuttan",
      "Director": "Ratheena",
      "Language": "Malayalam"
    },
    {
      "Industry": "Malayalam",
      "Actor": "Mammootty",
      "Year": 2022,
      "Title": "Priyan Ottathilanu",
      "Role": "Himself",
      "Director": "Antony Sony",
      "Language": "Malayalam"
    },
  ];

  private rajini: Array<Movie> = [
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1975,
      "Title": "Apoorva Raagangal",
      "Role": "Pandiyan",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1976,
      "Title": "Katha Sangama",
      "Role": "Kondaji",
      "Language": "Kannada",
      "Director": "Puttanna Kanagal"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1976,
      "Title": "Anthuleni Katha",
      "Role": "Murthy",
      "Language": "Telugu",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1976,
      "Title": "Moondru Mudichu",
      "Role": "Prasad",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1976,
      "Title": "Baalu Jenu",
      "Role": "Vasu",
      "Language": "Kannada",
      "Director": "Balan Kunigal Nagabushan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Avargal",
      "Role": "Ramanathan",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Kavikkuyil",
      "Role": "Murugan",
      "Language": "Tamil",
      "Director": "Devaraj Mohan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Raghupathi Raghavan Rajaram",
      "Role": "Veeraiyan",
      "Language": "Tamil",
      "Director": "Durai"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Chilakamma Cheppindi",
      "Role": "Ravi",
      "Language": "Telugu",
      "Director": "Eranki Sharma"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Bhuvana Oru Kelvi Kuri",
      "Role": "Sampath",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Ondu Premada Kathe",
      "Role": "Local school chairman",
      "Language": "Kannada",
      "Director": "S. M. Joe Simon"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "16 Vayathinile",
      "Role": "Parattai",
      "Language": "Tamil",
      "Director": "P. Bharathiraja"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Sahodarara Savaal",
      "Role": "Shekhar",
      "Language": "Kannada",
      "Director": "K. S. R. Das"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Aadu Puli Attam",
      "Role": "Rajni",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Gaayathri",
      "Role": "Rajarathnam",
      "Language": "Tamil",
      "Director": "R. Pattabhiraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Kumkuma Rakshe",
      "Role": "Murali",
      "Language": "Kannada",
      "Director": "S. K. A. Chari"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Aarupushpangal",
      "Role": "Ravi",
      "Language": "Tamil",
      "Director": "K. M. Balakrishnan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Tholireyi Gadichindi",
      "Role": "Chitti Babu",
      "Language": "Telugu",
      "Director": "K. S. Rami Reddy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Aame Katha",
      "Role": "Unknown",
      "Language": "Telugu",
      "Director": "K. Raghavendra Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1977,
      "Title": "Galate Samsara",
      "Role": "Sundar",
      "Language": "Kannada",
      "Director": "C. V. Rajendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Shankar Salim Simon",
      "Role": "Simon",
      "Language": "Tamil",
      "Director": "P. Madhavan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Kiladi Kittu",
      "Role": "Srikanth",
      "Language": "Kannada",
      "Director": "K. S. R. Das"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Annadammula Savaal",
      "Role": "Rangababu",
      "Language": "Telugu",
      "Director": "K. S. R. Das"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Aayiram Jenmangal",
      "Role": "Ramesh",
      "Language": "Tamil",
      "Director": "Durai"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Maathu Tappada Maga",
      "Role": "Chandru",
      "Language": "Kannada",
      "Director": "Peketi Sivaram"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Mangudi Minor",
      "Role": "Kumar",
      "Language": "Tamil",
      "Director": "V. C. Guhanathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Bairavi",
      "Role": "Mookaiah",
      "Language": "Tamil",
      "Director": "M. Bhaskar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Ilamai Oonjal Aadukirathu",
      "Role": "Murali",
      "Language": "Tamil",
      "Director": "C. V. Sridhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Sadhurangam",
      "Role": "Sundaresan",
      "Language": "Tamil",
      "Director": "Durai"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Vanakkatukuriya Kathaliye",
      "Role": "Joe",
      "Language": "Tamil",
      "Director": "A. C. Tirulokchandar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Vayasu Pilichindi",
      "Role": "Murali",
      "Language": "Telugu",
      "Director": "C. V. Sridhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Mullum Malarum",
      "Role": "Kaali",
      "Language": "Tamil",
      "Director": "J. Mahendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Iraivan Kodutha Varam",
      "Role": "Rajnikanth",
      "Language": "Tamil",
      "Director": "A. Bhimsingh"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Thappida Thala",
      "Role": "Devu",
      "Language": "Kannada",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Thappu Thalangal",
      "Role": "Deva",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Aval Appadithan",
      "Role": "Thyagu",
      "Language": "Tamil",
      "Director": "C. Rudhraiya"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Thai Meethu Sathiyam",
      "Role": "Babu",
      "Language": "Tamil",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "En Kelvikku Enna Bathil",
      "Role": "Saravana",
      "Language": "Tamil",
      "Director": "P. Madhavan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Paavathin Sambalam",
      "Role": "Himself",
      "Language": "Tamil",
      "Director": "Durai"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Justice Gopinath",
      "Role": "Ravi",
      "Language": "Tamil",
      "Director": "Dasari Yoganand"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Priya",
      "Role": "Ganesh",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1978,
      "Title": "Priya",
      "Role": "Ganesh",
      "Language": "Kannada",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Kuppathu Raja",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "T. R. Ramanna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Iddaru Asadhyule",
      "Role": "Bhaskar",
      "Language": "Telugu",
      "Director": "K. S. R. Das"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Allauddinum Albhutha Vilakkum",
      "Role": "Kamruddin",
      "Language": "Malayalam",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Allaudinaum Arputha Vilakkum",
      "Role": "Kamruddin",
      "Language": "Tamil",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Ninaithale Inikkum",
      "Role": "Deepak",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Andamaina Anubhavam",
      "Role": "Dileep",
      "Language": "Telugu",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Thaayillamal Naan Illai",
      "Role": "Bichwa Bakri",
      "Language": "Tamil",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Dharma Yuddham",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "R. C. Sakthi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Naan Vazhavaippen",
      "Role": "Michael D'Souza",
      "Language": "Tamil",
      "Director": "Dasari Yoganand"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Tiger",
      "Role": "Rashid",
      "Language": "Telugu",
      "Director": "N. Ramesh"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Aarilirunthu Arubathu Varai",
      "Role": "Santhanam",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Annai Oru Aalayam",
      "Role": "Vijay",
      "Language": "Tamil",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1979,
      "Title": "Amma Evarikkaina Amma",
      "Role": "Vijay",
      "Language": "Telugu",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Billa",
      "Role": "David Billa, Rajappa",
      "Language": "Tamil",
      "Director": "R. Krishnamurthy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Natchathiram",
      "Role": "Himself",
      "Language": "Tamil",
      "Director": "Dasari Narayana Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Ram Robert Rahim",
      "Role": "Ram",
      "Language": "Telugu",
      "Director": "Vijaya Nirmala"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Anbukku Naan Adimai",
      "Role": "Gopinath",
      "Language": "Tamil",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Kaali",
      "Role": "Kaali",
      "Language": "Tamil",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Kaali",
      "Role": "Kaali",
      "Language": "Telugu",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Mayadari Krishnudu",
      "Role": "Krishnudu",
      "Language": "Telugu",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Naan Potta Savaal",
      "Role": "Ram",
      "Language": "Tamil",
      "Director": "Puratchidasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Johnny",
      "Role": "Johnny, Vidyasagar",
      "Language": "Tamil",
      "Director": "J. Mahendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Ellam Un Kairasi",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "M. A. Thirumugam"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Polladhavan",
      "Role": "Manohar",
      "Language": "Tamil",
      "Director": "Muktha V. Srinivasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1980,
      "Title": "Murattu Kalai",
      "Role": "Kalaiyan",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1981,
      "Title": "Thee",
      "Role": "Rajashekar",
      "Language": "Tamil",
      "Director": "R. Krishnamurthy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1981,
      "Title": "Kazhugu",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1981,
      "Title": "Thillu Mullu",
      "Role": "Chandran (Indiran)",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1981,
      "Title": "Garjanai",
      "Role": "Vijay",
      "Language": "Tamil",
      "Director": "C. V. Rajendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1981,
      "Title": "Garjanam",
      "Role": "Vijay",
      "Language": "Malayalam",
      "Director": "C. V. Rajendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1981,
      "Title": "Garjane",
      "Role": "Vijay",
      "Language": "Kannada",
      "Director": "C. V. Rajendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1981,
      "Title": "Netrikkan",
      "Role": "Chakravarthi, Santhosh",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1981,
      "Title": "Ranuva Veeran",
      "Role": "Raghu",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1982,
      "Title": "Pokkiri Raja",
      "Role": "Ramesh, Raja",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1982,
      "Title": "Thanikattu Raja",
      "Role": "Suryaprakash",
      "Language": "Tamil",
      "Director": "V. C. Guhanathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1982,
      "Title": "Ranga",
      "Role": "Ranganathan",
      "Language": "Tamil",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1982,
      "Title": "Puthukavithai",
      "Role": "Anand",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1982,
      "Title": "Nandri, Meendum Varuga",
      "Role": "Himself",
      "Language": "Tamil",
      "Director": "T. S. B. K. Moulee"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1982,
      "Title": "Enkeyo Ketta Kural",
      "Role": "Kumaran",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1982,
      "Title": "Moondru Mugam",
      "Role": "Alex Pandian, Arun, John",
      "Language": "Tamil",
      "Director": "A. Jagannathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1982,
      "Title": "Agni Sakshi",
      "Role": "Himself",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1983,
      "Title": "Paayum Puli",
      "Role": "Bharani",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1983,
      "Title": "Uruvangal Maralam",
      "Role": "Himself (Raghavendrar)",
      "Language": "Tamil",
      "Director": "S. V. Ramanan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1983,
      "Title": "Thudikkum Karangal",
      "Role": "Gopi",
      "Language": "Tamil",
      "Director": "C. V. Sridhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1983,
      "Title": "Andha Kanoon",
      "Role": "Vijay Kumar Singh",
      "Language": "Hindi",
      "Director": "Tatineni Rama Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1983,
      "Title": "Thai Veedu",
      "Role": "Raju",
      "Language": "Tamil",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1983,
      "Title": "Sivappu Sooriyan",
      "Role": "Vijay",
      "Language": "Tamil",
      "Director": "Muktha V. Srinivasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1983,
      "Title": "Jeet Hamaari",
      "Role": "Raju",
      "Language": "Hindi",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1983,
      "Title": "Adutha Varisu",
      "Role": "Kannan",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1983,
      "Title": "Thanga Magan",
      "Role": "Arun",
      "Language": "Tamil",
      "Director": "A. Jagannathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1984,
      "Title": "Meri Adaalat",
      "Role": "Ashok",
      "Language": "Hindi",
      "Director": "A. T. Raghu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1984,
      "Title": "Naan Mahan Alla",
      "Role": "Vishwanath",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1984,
      "Title": "Thambikku Entha Ooru",
      "Role": "Balu",
      "Language": "Tamil",
      "Director": "Rajasekhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1984,
      "Title": "Kai Kodukkum Kai",
      "Role": "Kaalimuthu",
      "Language": "Tamil",
      "Director": "J. Mahendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1984,
      "Title": "Ethe Naasaval",
      "Role": "Ram",
      "Language": "Telugu",
      "Director": "Puratchidasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1984,
      "Title": "Anbulla Rajinikanth",
      "Role": "Himself",
      "Language": "Tamil",
      "Director": "K. Natraj"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1984,
      "Title": "Gangvaa",
      "Role": "Gangvaa",
      "Language": "Hindi",
      "Director": "Rajasekhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1984,
      "Title": "Nallavanukku Nallavan",
      "Role": "Manikkam",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1984,
      "Title": "John Jani Janardhan",
      "Role": "John A. Mendez, Janardhan B. Gupta, Jani",
      "Language": "Hindi",
      "Director": "Tatineni Rama Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Nyayam Meere Cheppali",
      "Role": "Aathmaram",
      "Language": "Telugu",
      "Director": "G. Rammohan Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Naan Sigappu Manithan",
      "Role": "Vijay",
      "Language": "Tamil",
      "Director": "S.A. Chandrasekhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Mahaguru",
      "Role": "Vijay (Maha Guru)",
      "Language": "Hindi",
      "Director": "S. S. Ravichandra"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Un Kannil Neer Vazhindal",
      "Role": "Ravi",
      "Language": "Tamil",
      "Director": "Balu Mahendra"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Wafadaar",
      "Role": "Ranga",
      "Language": "Hindi",
      "Director": "Dasari Narayana Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Sri Raghavendrar",
      "Role": "Sri Raghavendrar",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Geraftaar",
      "Role": "Hussain",
      "Language": "Hindi",
      "Director": "Prayag Raj"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Yaar?",
      "Role": "Himself",
      "Language": "Tamil",
      "Director": "Sakthi–Kannan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Bewafai",
      "Role": "Ranvir",
      "Language": "Hindi",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1985,
      "Title": "Padikkadavan",
      "Role": "Rajendran",
      "Language": "Tamil",
      "Director": "Rajasekhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1986,
      "Title": "Mr. Bharath",
      "Role": "Bharath",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1986,
      "Title": "Naan Adimai Illai",
      "Role": "Vijay",
      "Language": "Tamil",
      "Director": "Dwarakish"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1986,
      "Title": "Jeevana Poratam",
      "Role": "Ravi",
      "Language": "Telugu",
      "Director": "Rajachandra"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1986,
      "Title": "Viduthalai",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "K. Vijayan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1986,
      "Title": "Bhagwaan Dada",
      "Role": "Bhagwan Dada",
      "Language": "Hindi",
      "Director": "J. Om Prakash"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1986,
      "Title": "Kodai Mazhai",
      "Role": "Himself",
      "Language": "Tamil",
      "Director": "Muktha S. Sundar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1986,
      "Title": "Asli Naqli",
      "Role": "Birju Ustad",
      "Language": "Hindi",
      "Director": "Sudarsan Nag"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1986,
      "Title": "Dosti Dushmani",
      "Role": "Ranjith",
      "Language": "Hindi",
      "Director": "Tatineni Rama Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1986,
      "Title": "Maaveeran",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "Rajasekhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1987,
      "Title": "Daku Hasina",
      "Role": "Mangal Singh",
      "Language": "Hindi",
      "Director": "Ashok Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1987,
      "Title": "Velaikaran",
      "Role": "Raghupathi",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1987,
      "Title": "Insaaf Kaun Karega",
      "Role": "Vikram Singh",
      "Language": "Hindi",
      "Director": "Sudarsan Nag"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1987,
      "Title": "Oorkavalan",
      "Role": "Kangeyan",
      "Language": "Tamil",
      "Director": "Manobala"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1987,
      "Title": "Manithan",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1987,
      "Title": "Manathil Uruthi Vendum",
      "Role": "Himself",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1987,
      "Title": "Uttar Dakshin",
      "Role": "Shankar",
      "Language": "Hindi",
      "Director": "Prabhat Khanna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1988,
      "Title": "Tamacha",
      "Role": "Vikram Pratap Singh",
      "Language": "Hindi",
      "Director": "Ramesh Ahuja"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1988,
      "Title": "Guru Sishyan",
      "Role": "Raja (Guru)",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1988,
      "Title": "Dharmathin Thalaivan",
      "Role": "Balasubramanian, Shankar",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1988,
      "Title": "Bloodstone",
      "Role": "Shyam Sabu",
      "Language": "English",
      "Director": "Dwight H. Little"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1988,
      "Title": "Kodi Parakuthu",
      "Role": "Erode Shivagiri",
      "Language": "Tamil",
      "Director": "P. Bharathiraja"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1989,
      "Title": "Rajadhi Raja",
      "Role": "Rajashekar, Chinnarasu",
      "Language": "Tamil",
      "Director": "R. Sundarrajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1989,
      "Title": "Gair Kanooni",
      "Role": "Azam Khan",
      "Language": "Hindi",
      "Director": "Prayag Raj"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1989,
      "Title": "Siva",
      "Role": "Siva (Tiger)",
      "Language": "Tamil",
      "Director": "Ameerjan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1989,
      "Title": "Raja Chinna Roja",
      "Role": "Raja /Kumar",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1989,
      "Title": "Mappillai",
      "Role": "Aarumugam",
      "Language": "Tamil",
      "Director": "Rajasekhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1989,
      "Title": "Bhrashtachar",
      "Role": "Abdul Sattar",
      "Language": "Hindi",
      "Director": "Ramesh Sippy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1989,
      "Title": "ChaalBaaz",
      "Role": "Jaggu",
      "Language": "Hindi",
      "Director": "Pankaj Parashar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1990,
      "Title": "Panakkaran",
      "Role": "Muthu",
      "Language": "Tamil",
      "Director": "P. Vasu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1990,
      "Title": "Periya Idathu Pillai",
      "Role": "Rajinikanth",
      "Language": "Tamil",
      "Director": "Senthilnathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1990,
      "Title": "Athisaya Piravi",
      "Role": "Kaalai, Balu",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1991,
      "Title": "Dharma Durai",
      "Role": "Dharma Durai",
      "Language": "Tamil",
      "Director": "Rajasekhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1991,
      "Title": "Hum",
      "Role": "Kumar Malhotra",
      "Language": "Hindi",
      "Director": "Mukul S. Anand"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1991,
      "Title": "Farishtay",
      "Role": "Arjun Thange",
      "Language": "Hindi",
      "Director": "Anil Sharma"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1991,
      "Title": "Khoon Ka Karz",
      "Role": "Kishan",
      "Language": "Hindi",
      "Director": "Mukul S. Anand"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1991,
      "Title": "Phool Bane Angaray",
      "Role": "Ranjit Singh",
      "Language": "Hindi",
      "Director": "K. C. Bokadia"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1991,
      "Title": "Nattukku Oru Nallavan",
      "Role": "Subhash",
      "Language": "Tamil",
      "Director": "V. Ravichandran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1991,
      "Title": "Thalapathi",
      "Role": "Surya",
      "Language": "Tamil",
      "Director": "Mani Ratnam"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1992,
      "Title": "Mannan",
      "Role": "Krishnan",
      "Language": "Tamil",
      "Director": "P. Vasu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1992,
      "Title": "Tyagi",
      "Role": "Shankar G. \"Dadhu\" Dayal",
      "Language": "Hindi",
      "Director": "K. C. Bokadia"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1992,
      "Title": "Annaamalai",
      "Role": "Annaamalai",
      "Language": "Tamil",
      "Director": "Suresh Krissna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1992,
      "Title": "Pandian",
      "Role": "Pandian",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1993,
      "Title": "Insaniyat Ke Devta",
      "Role": "Anwar",
      "Language": "Hindi",
      "Director": "K. C. Bokadia"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1993,
      "Title": "Ejamaan",
      "Role": "Kanthavelu Vaanavarayan (Yajaman)",
      "Language": "Tamil",
      "Director": "R. V. Udayakumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1993,
      "Title": "Uzhaippali",
      "Role": "Thamizharasan",
      "Language": "Tamil",
      "Director": "P. Vasu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1993,
      "Title": "Valli",
      "Role": "Veeraiyan",
      "Language": "Tamil",
      "Director": "K. Natraj"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1994,
      "Title": "Veera",
      "Role": "Muthuveerappan",
      "Language": "Tamil",
      "Director": "Suresh Krissna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1995,
      "Title": "Baashha",
      "Role": "Manikkam / Manik Baashha",
      "Language": "Tamil",
      "Director": "Suresh Krissna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1995,
      "Title": "Pedarayudu",
      "Role": "Paparayudu",
      "Language": "Telugu",
      "Director": "Ravi Raja Pinisetty"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1995,
      "Title": "Aatank Hi Aatank",
      "Role": "Munna",
      "Language": "Hindi",
      "Director": "Dilip Shankar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1995,
      "Title": "Muthu",
      "Role": "Muthuvel, Zamindar Rajalingam",
      "Language": "Tamil",
      "Director": "K. S. Ravikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1995,
      "Title": "Bhagya Debata",
      "Role": "Singer",
      "Language": "Bengali",
      "Director": "Raghuram"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1997,
      "Title": "Arunachalam",
      "Role": "Arunachalam, Vedachalam",
      "Language": "Tamil",
      "Director": "Sundar C."
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 1999,
      "Title": "Padayappa",
      "Role": "Aarupadayappan",
      "Language": "Tamil",
      "Director": "K. S. Ravikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2000,
      "Title": "Bulandi",
      "Role": "Ghajraj Thakur",
      "Language": "Hindi",
      "Director": "Tatineni Rama Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2002,
      "Title": "Baba",
      "Role": "Baba, Mahavatar Babaji (voice only)",
      "Language": "Tamil",
      "Director": "Suresh Krissna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2005,
      "Title": "Chandramukhi",
      "Role": "Saravanan, Vettaiyan Raja",
      "Language": "Tamil",
      "Director": "P. Vasu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2007,
      "Title": "Sivaji",
      "Role": "Sivaji (M. G. Ravichandran)",
      "Language": "Tamil",
      "Director": "S. Shankar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2008,
      "Title": "Kuselan",
      "Role": "Ashok Kumar",
      "Language": "Tamil",
      "Director": "P. Vasu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2008,
      "Title": "Kathanayakudu",
      "Role": "Ashok Kumar",
      "Language": "Telugu",
      "Director": "P. Vasu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2010,
      "Title": "Enthiran",
      "Role": "Vaseegaran, Chitti",
      "Language": "Tamil",
      "Director": "S. Shankar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2011,
      "Title": "Ra.One",
      "Role": "Chitti",
      "Language": "Hindi",
      "Director": "Anubhav Sinha"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2014,
      "Title": "Kochadaiiyaan",
      "Role": "Kochadaiiyaan, Rana, Sena",
      "Language": "Tamil",
      "Director": "Soundarya Rajinikanth"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2014,
      "Title": "Lingaa",
      "Role": "Raja Lingeswaran, Lingaa",
      "Language": "Tamil",
      "Director": "K. S. Ravikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2016,
      "Title": "Kabali",
      "Role": "Kabaleeswaran (Kabali)",
      "Language": "Tamil",
      "Director": "Pa. Ranjith"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2017,
      "Title": "Cinema Veeran",
      "Role": "Himself (voice-over)",
      "Language": "Tamil",
      "Director": "Aishwarya R. Dhanush"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2018,
      "Title": "Kaala",
      "Role": "Karikaalan (Kaala)",
      "Language": "Tamil",
      "Director": "Pa. Ranjith"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2018,
      "Title": "2.0",
      "Role": "Vaseegaran, Chitti, Kutty Chitti",
      "Language": "Tamil",
      "Director": "S. Shankar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2019,
      "Title": "Petta",
      "Role": "'Petta' Velan / Kaali",
      "Language": "Tamil",
      "Director": "Karthik Subbaraj"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2020,
      "Title": "Darbar",
      "Role": "Aaditya Arunachalam",
      "Language": "Tamil",
      "Director": "AR Murugadoss"
    },
    {
      "Industry": "Tamil",
      "Actor": "Rajini",
      "Year": 2021,
      "Title": "Annaatthe",
      "Role": "Kaalaiyaan (Annaatthe)",
      "Language": "Tamil",
      "Director": "Siva"
    }
  ];

  private kamal: Array<Movie> = [
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1960,
      "Title": "Kalathur Kannamma",
      "Role": "Selvam",
      "Language": "Tamil",
      "Director": "A. Bhimsingh"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1962,
      "Title": "Paarthaal Pasi Theerum",
      "Role": "Babu & Kumar",
      "Language": "Tamil",
      "Director": "A. Bhimsingh"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1962,
      "Title": "Paadha Kaanikkai",
      "Role": "Ravi",
      "Language": "Tamil",
      "Director": "K. Shankar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1962,
      "Title": "Kannum Karalum",
      "Role": "Babu",
      "Language": "Malayalam",
      "Director": "K. S. Sethumadhavan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1963,
      "Title": "Vanambadi",
      "Role": "Ravi",
      "Language": "Tamil",
      "Director": "G. R. Nathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1963,
      "Title": "Anandha Jodhi",
      "Role": "Balu",
      "Language": "Tamil",
      "Director": "V. N. Reddy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1970,
      "Title": "Maanavan",
      "Role": "",
      "Language": "Tamil",
      "Director": "M. A. Thirumugam"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1971,
      "Title": "Annai Velankanni",
      "Role": "Jesus",
      "Language": "Tamil",
      "Director": "Thankappan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1972,
      "Title": "Kurathi Magan",
      "Role": "",
      "Language": "Tamil",
      "Director": "K. S. Gopalakrishnan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1973,
      "Title": "Arangetram",
      "Role": "Thiagu",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1973,
      "Title": "Sollathaan Ninaikkiren",
      "Role": "Kamal",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1974,
      "Title": "Paruva Kaalam",
      "Role": "Chandran",
      "Language": "Tamil",
      "Director": "Jos A.N. Fernando"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1974,
      "Title": "Gumasthavin Magal",
      "Role": "Mani",
      "Language": "Tamil",
      "Director": "A. P. Nagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1974,
      "Title": "Naan Avanillai",
      "Role": "",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1974,
      "Title": "Kanyakumari",
      "Role": "Sankaran",
      "Language": "Malayalam",
      "Director": "K. S. Sethumadhavan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1974,
      "Title": "Anbu Thangai",
      "Role": "Buddha",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1974,
      "Title": "Vishnu Vijayam",
      "Role": "Vishnu",
      "Language": "Malayalam",
      "Director": "N. Sankaran Nair"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1974,
      "Title": "Aval Oru Thodar Kathai",
      "Role": "Prasad",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1974,
      "Title": "Panathukkaga",
      "Role": "Kumar",
      "Language": "Tamil",
      "Director": "M. S. Senthil"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Cinema Paithiyam",
      "Role": "Natarajan",
      "Language": "Tamil",
      "Director": "Muktha Srinivasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Pattampoochi",
      "Role": "Siva",
      "Language": "Tamil",
      "Director": "A. S. Pragasam"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Aayirathil Oruthi",
      "Role": "Kamal",
      "Language": "Tamil",
      "Director": "Avinashi Mani"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Then Sindhudhe Vaanam",
      "Role": "",
      "Language": "Tamil",
      "Director": "R. A. Sankaran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Melnaattu Marumagal",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "A. P. Nagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Thangathile Vairam",
      "Role": "Kumar",
      "Language": "Tamil",
      "Director": "K. Sornam"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Pattikkaattu Raja",
      "Role": "Mahesh",
      "Language": "Tamil",
      "Director": "K. Shanmugam"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Njan Ninne Premikkunnu",
      "Role": "Suresh",
      "Language": "Malayalam",
      "Director": "K. S. Gopalakrishnan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Maalai Sooda Vaa",
      "Role": "",
      "Language": "Tamil",
      "Director": "C. V. Rajendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Apoorva Raagangal",
      "Role": "Prasanna",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Thiruvonam",
      "Role": "Prem Kumar",
      "Language": "Malayalam",
      "Director": "Sreekumaran Thampi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Mattoru Seetha",
      "Role": "",
      "Language": "Malayalam",
      "Director": "P. Bhaskaran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Raasaleela",
      "Role": "",
      "Language": "Malayalam",
      "Director": "N. Sankaran Nair"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1975,
      "Title": "Andharangam",
      "Role": "Kaanthan",
      "Language": "Tamil",
      "Director": "Muktha Srinivasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Agni Pushpam",
      "Role": "Somu",
      "Language": "Malayalam",
      "Director": "Jeassy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Appooppan",
      "Role": "Babumon",
      "Language": "Malayalam",
      "Director": "P. Bhaskaran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Samasya",
      "Role": "",
      "Language": "Malayalam",
      "Director": "K. Thankappan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Manmadha Leelai",
      "Role": "Madhu",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Anthuleni Katha",
      "Role": "Arun",
      "Language": "Telugu",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Swimming Pool",
      "Role": "",
      "Language": "Malayalam",
      "Director": "J. Sasikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Aruthu",
      "Role": "",
      "Language": "Malayalam",
      "Director": "Ravi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Satyam",
      "Role": "Kumaran",
      "Language": "Tamil",
      "Director": "S. A. Kannan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Oru Oodhappu Kan Simittugiradhu",
      "Role": "Ravi",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Unarchigal",
      "Role": "Selvam",
      "Language": "Tamil",
      "Director": "R. C. Sakthi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Kuttavum Shikshayum",
      "Role": "",
      "Language": "Malayalam",
      "Director": "M. Masthan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Kumaara Vijayam",
      "Role": "Kumar",
      "Language": "Tamil",
      "Director": "A. Jagannathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Idhaya Malar",
      "Role": "Mohan",
      "Language": "Tamil",
      "Director": "Gemini Ganesan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Ponni",
      "Role": "Maran",
      "Language": "Malayalam",
      "Director": "Thoppil Bhasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Nee Ente Lahari",
      "Role": "",
      "Language": "Malayalam",
      "Director": "P. G. Viswambharan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Moondru Mudichu",
      "Role": "Balaji",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Mogam Muppadhu Varusham",
      "Role": "Ramesh",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1976,
      "Title": "Lalitha",
      "Role": "Balu",
      "Language": "Tamil",
      "Director": "Valampuri Somanathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Uyarndhavargal",
      "Role": "Aarumugam",
      "Language": "Tamil",
      "Director": "T. N. Balu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Siva Thandavum",
      "Role": "",
      "Language": "Malayalam",
      "Director": "N. Sankaran Nair"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Aasheervaadam",
      "Role": "",
      "Language": "Malayalam",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Avargal",
      "Role": "Janardhan (Johnny)",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Madhura Swapanam",
      "Role": "",
      "Language": "Malayalam",
      "Director": "M. Krishnan Nair"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Aaina",
      "Role": "Prem Kapoor",
      "Language": "Hindi",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Sreedevi",
      "Role": "Venugopal",
      "Language": "Malayalam",
      "Director": "N. Sankaran Nair"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Unnai Suttrum Ulagam",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "G. Subramanya Reddiar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Kabita",
      "Role": "Gopal",
      "Language": "Bengali",
      "Director": "Bharat Shamsher"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Ashtamangalyam",
      "Role": "",
      "Language": "Malayalam",
      "Director": "P. Gopikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Nirakudam",
      "Role": "Devan",
      "Language": "Malayalam",
      "Director": "A. Bhimsingh"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Ormakal Marikkumo",
      "Role": "Chandrasekharan",
      "Language": "Malayalam",
      "Director": "K. S. Sethumadhavan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "16 Vayathinile",
      "Role": "Gopalakrishnan (Chappani)",
      "Language": "Tamil",
      "Director": "P. Bharathiraja"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Aadu Puli Attam",
      "Role": "Madan",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Aanandham Paramaanandham",
      "Role": "Babu",
      "Language": "Malayalam",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Naam Pirandha Mann",
      "Role": "Ranjith",
      "Language": "Tamil",
      "Director": "A. Vincent"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Kokila",
      "Role": "Vijaykumar",
      "Language": "Kannada",
      "Director": "Balu Mahendra"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Satyavan Savithri",
      "Role": "Sathyavan",
      "Language": "Malayalam",
      "Director": "P. G. Viswambharan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1977,
      "Title": "Aadhya Paadam",
      "Role": "",
      "Language": "Malayalam",
      "Director": "Adoor Bhasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Madanolsavam",
      "Role": "Raju",
      "Language": "Malayalam",
      "Director": "N. Sankaran Nair"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Kaathirunna Nimisham",
      "Role": "Raju",
      "Language": "Malayalam",
      "Director": "Baby"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Anumodhanam",
      "Role": "",
      "Language": "Malayalam",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Avalude Ravukal",
      "Role": "Unknown",
      "Language": "Malayalam",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Nizhal Nijamagiradhu",
      "Role": "Sanjeevi",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Aval Viswasthayayirunnu",
      "Role": "Anto",
      "Language": "Malayalam",
      "Director": "Jeassy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Maro Charitra",
      "Role": "Balu",
      "Language": "Telugu",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Ilamai Oonjal Aadukirathu",
      "Role": "Prabhu",
      "Language": "Tamil",
      "Director": "C. V. Sridhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Amara Prema",
      "Role": "Raju",
      "Language": "Telugu",
      "Director": "T. Rama Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Sattam En Kaiyil",
      "Role": "Babu & Rathinam",
      "Language": "Tamil",
      "Director": "T. N. Balu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Padakuthira",
      "Role": "",
      "Language": "Malayalam",
      "Director": "P. G Vasudevan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Vayasu Pilichindi",
      "Role": "Raja",
      "Language": "Telugu",
      "Director": "C. V. Sridhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Vayanadan Thamban",
      "Role": "Vayanadan Thamban",
      "Language": "Malayalam",
      "Director": "A. Vincent"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Sakka Podu Podu Raja",
      "Role": "Unknown",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Sigappu Rojakkal",
      "Role": "Dileep",
      "Language": "Tamil",
      "Director": "P. Bharathiraja"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Manidharil Ithanai Nirangala",
      "Role": "Velu",
      "Language": "Tamil",
      "Director": "R. C. Sakthi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Aval Appadithan",
      "Role": "Arun",
      "Language": "Tamil",
      "Director": "C. Rudhraiya"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Thappida Thala",
      "Role": "Amrit Lal",
      "Language": "Kannada",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Thappu Thalangal",
      "Role": "Amrit Lal",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1978,
      "Title": "Yaetta",
      "Role": "Ramu",
      "Language": "Malayalam",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Sommokadidi Sokokadidi",
      "Role": "Rangadu & Shekar",
      "Language": "Telugu",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Sigappukkal Mookkuthi",
      "Role": "",
      "Language": "Tamil",
      "Director": "Valampuri Somanathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Neeya?",
      "Role": "Kamal",
      "Language": "Tamil",
      "Director": "Durai"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Allauddinum Albhutha Vilakkum",
      "Role": "Alauddin",
      "Language": "Malayalam",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Allaudinaum Arputha Vilakkum",
      "Role": "Alauddin",
      "Language": "Tamil",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Thaayillamal Naan Illai",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Ninaithale Inikkum",
      "Role": "Chandru",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Andamaina Anubhavam",
      "Role": "Chandru",
      "Language": "Telugu",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Idi Katha Kaadu",
      "Role": "Janardhan",
      "Language": "Telugu",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Kalyanaraman",
      "Role": "Raman & Kalyanam",
      "Language": "Tamil",
      "Director": "G. N. Rangarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Nool Veli",
      "Role": "Kamal Haasan",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Guppedu Manasu",
      "Role": "Kamal Haasan",
      "Language": "Telugu",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Mangala Vaathiyam",
      "Role": "",
      "Language": "Tamil",
      "Director": "K. Shankar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Neela Malargal",
      "Role": "Chandran",
      "Language": "Tamil",
      "Director": "Krishnan Panju"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Azhiyatha Kolangal",
      "Role": "Gowrishankar",
      "Language": "Tamil",
      "Director": "Balu Mahendra"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1979,
      "Title": "Pasi",
      "Role": "Kamal Haasan",
      "Language": "Tamil",
      "Director": "Durai"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1980,
      "Title": "Ullasa Paravaigal",
      "Role": "Ravi",
      "Language": "Tamil",
      "Director": "C. V. Rajendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1980,
      "Title": "Natchathiram",
      "Role": "Kamal Haasan",
      "Language": "Tamil",
      "Director": "Dasari Narayana Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1980,
      "Title": "Guru",
      "Role": "Guru",
      "Language": "Tamil",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1980,
      "Title": "Guru",
      "Role": "Guru",
      "Language": "Telugu",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1980,
      "Title": "Varumayin Niram Sivappu",
      "Role": "Rangan",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1980,
      "Title": "Maria, My Darling",
      "Role": "Raghu",
      "Language": "Kannada",
      "Director": "Durai"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1980,
      "Title": "Maria, My Darling",
      "Role": "Raghu",
      "Language": "Tamil",
      "Director": "Durai"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1980,
      "Title": "Saranam Ayyappa",
      "Role": "",
      "Language": "Tamil",
      "Director": "Dasarathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Aakali Rajyam",
      "Role": "J. Ranga Rao",
      "Language": "Telugu",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Meendum Kokila",
      "Role": "Manian",
      "Language": "Tamil",
      "Director": "G. N. Rangarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Prema Pitchi",
      "Role": "Ravi",
      "Language": "Telugu",
      "Director": "C. V. Rajendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Ram Lakshman",
      "Role": "Ram",
      "Language": "Tamil",
      "Director": "R. Thyagarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Raja Paarvai",
      "Role": "Raghu",
      "Language": "Tamil",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Thillu Mullu",
      "Role": "Charu Haasan",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Kadal Meengal",
      "Role": "Selvanayagam & Rajan",
      "Language": "Tamil",
      "Director": "G. N. Rangarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Ek Duuje Ke Liye",
      "Role": "Vasu",
      "Language": "Hindi",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Savaal",
      "Role": "P. P. Raja",
      "Language": "Tamil",
      "Director": "R. Krishnamoorthy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Sankarlal",
      "Role": "Dharmalingam & Mohan",
      "Language": "Tamil",
      "Director": "T. N. Balu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Amavasya Chandrudu",
      "Role": "Raghu",
      "Language": "Telugu",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Tik Tik Tik",
      "Role": "Dilip",
      "Language": "Tamil",
      "Director": "P. Bharathiraja"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1981,
      "Title": "Ellam Inba Mayyam",
      "Role": "Velu",
      "Language": "Tamil",
      "Director": "G. N. Rangarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Vazhvey Maayam",
      "Role": "Raja",
      "Language": "Tamil",
      "Director": "R. Krishnamoorthy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Andagaadu",
      "Role": "Dharmalingam & Mohan",
      "Language": "Telugu",
      "Director": "T. N. Balu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Anthiveyilile Ponnu",
      "Role": "",
      "Language": "Malayalam",
      "Director": "Radhakrishnan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Neethi Devan Mayakkam",
      "Role": "Military officer",
      "Language": "Tamil",
      "Director": "Bapu"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Moondram Pirai",
      "Role": "Srinivasan (Seenu)",
      "Language": "Tamil",
      "Director": "Balu Mahendra"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Maattuvin Chattangale",
      "Role": "Unknown",
      "Language": "Malayalam",
      "Director": "K. G. Rajasekharan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Simla Special",
      "Role": "Gopu",
      "Language": "Tamil",
      "Director": "Muktha Srinivasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Sanam Teri Kasam",
      "Role": "Sunil Sharma",
      "Language": "Hindi",
      "Director": "Narendra Bedi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Sakalakala Vallavan",
      "Role": "Velu",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Ezham Rathri",
      "Role": "",
      "Language": "Malayalam",
      "Director": "Krishnakumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Rani Theni",
      "Role": "Miller",
      "Language": "Tamil",
      "Director": "G. N. Rangarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Yeh To Kamaal Ho Gaya",
      "Role": "Ratan Chander & Ajay Saxena",
      "Language": "Hindi",
      "Director": "Tatineni Rama Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Pagadai Panirendu",
      "Role": "Anand",
      "Language": "Tamil",
      "Director": "Dhamodharan. N"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1982,
      "Title": "Agni Sakshi",
      "Role": "Kamal Haasan",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1983,
      "Title": "Zara Si Zindagi",
      "Role": "Rakesh Kumar Shastri",
      "Language": "Hindi",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1983,
      "Title": "Uruvangal Maralam",
      "Role": "Kamal Haasan",
      "Language": "Tamil",
      "Director": "S. V. Ramanan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1983,
      "Title": "Sattam",
      "Role": "Inspector Raja",
      "Language": "Tamil",
      "Director": "K. Vijayan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1983,
      "Title": "Sagara Sangamam",
      "Role": "Balakrishna",
      "Language": "Telugu",
      "Director": "K. Viswanath"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1983,
      "Title": "Sadma",
      "Role": "Somu",
      "Language": "Hindi",
      "Director": "Balu Mahendra"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1983,
      "Title": "Poikkal Kudhirai",
      "Role": "Unknown",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1983,
      "Title": "Benkiyalli Aralida Hoovu",
      "Role": "Unknown",
      "Language": "Kannada",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1983,
      "Title": "Thoongathey Thambi Thoongathey",
      "Role": "Gopi & Vinoth",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1984,
      "Title": "Yeh Desh",
      "Role": "Mathur",
      "Language": "Hindi",
      "Director": "Tatineni Rama Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1984,
      "Title": "Ek Nai Paheli",
      "Role": "Sandeep",
      "Language": "Hindi",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1984,
      "Title": "Yaadgar",
      "Role": "Rajnath",
      "Language": "Hindi",
      "Director": "Dasari Narayana Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1984,
      "Title": "Raaj Tilak",
      "Role": "Suraj",
      "Language": "Hindi",
      "Director": "Rajkumar Kohli"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1984,
      "Title": "Enakkul Oruvan",
      "Role": "Madhan & Upendhra",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1984,
      "Title": "Karishmaa",
      "Role": "Sunny",
      "Language": "Hindi",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1985,
      "Title": "Oru Kaidhiyin Diary",
      "Role": "David & Inspector Shankar",
      "Language": "Tamil",
      "Director": "P. Bharathiraja"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1985,
      "Title": "Kaakki Sattai",
      "Role": "Murali",
      "Language": "Tamil",
      "Director": "Rajasekhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1985,
      "Title": "Andha Oru Nimidam",
      "Role": "Kumar",
      "Language": "Tamil",
      "Director": "Major Sundarrajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1985,
      "Title": "Uyarndha Ullam",
      "Role": "Anandh",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1985,
      "Title": "Saagar",
      "Role": "Raja",
      "Language": "Hindi",
      "Director": "Ramesh Sippy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1985,
      "Title": "Geraftaar",
      "Role": "Kishan Kumar Khanna",
      "Language": "Hindi",
      "Director": "Prayag Raaj"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1985,
      "Title": "Mangamma Sapatham",
      "Role": "Ashok & Raja",
      "Language": "Tamil",
      "Director": "K. Vijayan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1985,
      "Title": "Japanil Kalyanaraman",
      "Role": "Kalyanam & Raman",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1985,
      "Title": "Dekha Pyar Tumhara",
      "Role": "Vishal",
      "Language": "Hindi",
      "Director": "Virendra Sharma"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1986,
      "Title": "Swati Mutyam",
      "Role": "Sivaiah",
      "Language": "Telugu",
      "Director": "K. Viswanath"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1986,
      "Title": "Naanum Oru Thozhilali",
      "Role": "Bharath",
      "Language": "Tamil",
      "Director": "C. V. Sridhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1986,
      "Title": "Vikram",
      "Role": "Vikram",
      "Language": "Tamil",
      "Director": "Rajasekhar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1986,
      "Title": "Manakanakku",
      "Role": "Film director",
      "Language": "Tamil",
      "Director": "R. C. Sakthi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1986,
      "Title": "Oka Radha Iddaru Krishnulu",
      "Role": "Krishna",
      "Language": "Telugu",
      "Director": "A. Kodandarami Reddy"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1986,
      "Title": "Punnagai Mannan",
      "Role": "Sethu & Chaplin Chellappa",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1987,
      "Title": "Kadhal Parisu",
      "Role": "Mohan",
      "Language": "Tamil",
      "Director": "A. Jagannathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1987,
      "Title": "Vrutham",
      "Role": "Balu",
      "Language": "Malayalam",
      "Director": "I. V. Sasi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1987,
      "Title": "Kadamai Kanniyam Kattupaadu",
      "Role": "Kamal Haasan",
      "Language": "Tamil",
      "Director": "Santhana Bharathi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1987,
      "Title": "Per Sollum Pillai",
      "Role": "Ramu",
      "Language": "Tamil",
      "Director": "S. P. Muthuraman"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1987,
      "Title": "Nayakan",
      "Role": "Sakthivelu (Velu Naicker)",
      "Language": "Tamil",
      "Director": "Mani Ratnam"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1987,
      "Title": "Pushpaka Vimana",
      "Role": "Unemployed graduate",
      "Language": "Silent",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1988,
      "Title": "Sathya",
      "Role": "Sathyamurthy",
      "Language": "Tamil",
      "Director": "Suresh Krissna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1988,
      "Title": "Daisy",
      "Role": "James",
      "Language": "Malayalam",
      "Director": "Pratap K. Pothen"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1988,
      "Title": "Soora Samhaaram",
      "Role": "ACP Pandiyan",
      "Language": "Tamil",
      "Director": "Chitra Lakshmanan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1988,
      "Title": "Unnal Mudiyum Thambi",
      "Role": "Udhayamoorthy",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1989,
      "Title": "Apoorva Sagodharargal",
      "Role": "Inspector Sethupathi, Appukutty & Rajadurai",
      "Language": "Tamil",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1989,
      "Title": "Chanakyan",
      "Role": "Johnson",
      "Language": "Malayalam",
      "Director": "T. K. Rajeev Kumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1989,
      "Title": "Vetri Vizha",
      "Role": "Vetrivel IPS",
      "Language": "Tamil",
      "Director": "Prathap Pothan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1989,
      "Title": "Indrudu Chandrudu",
      "Role": "G. K. Rayudu & Chandru",
      "Language": "Telugu",
      "Director": "Suresh Krissna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1990,
      "Title": "Michael Madana Kama Rajan",
      "Role": "Michael,\nMadhanagopal,\nKameshwaran,\nRaju",
      "Language": "Tamil",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1991,
      "Title": "Gunaa",
      "Role": "Gunasekharan",
      "Language": "Tamil",
      "Director": "Santhana Bharathi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1992,
      "Title": "Singaravelan",
      "Role": "Singaravelan",
      "Language": "Tamil",
      "Director": "R. V. Udayakumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1992,
      "Title": "Thevar Magan",
      "Role": "Shakthivel",
      "Language": "Tamil",
      "Director": "Bharathan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1993,
      "Title": "Maharasan",
      "Role": "Vadivelu",
      "Language": "Tamil",
      "Director": "G. N. Rangarajan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1993,
      "Title": "Kalaignan",
      "Role": "Indrajith",
      "Language": "Tamil",
      "Director": "G. B. Vijay"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1994,
      "Title": "Mahanadhi",
      "Role": "Krishnaswamy",
      "Language": "Tamil",
      "Director": "Santhana Bharathi"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1994,
      "Title": "Magalir Mattum",
      "Role": "",
      "Language": "Tamil",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1994,
      "Title": "Nammavar",
      "Role": "Selvam",
      "Language": "Tamil",
      "Director": "K. S. Sethumadhavan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1995,
      "Title": "Sathi Leelavathi",
      "Role": "Shakthivel",
      "Language": "Tamil",
      "Director": "Balu Mahendra"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1995,
      "Title": "Subha Sankalpam",
      "Role": "Dasu",
      "Language": "Telugu",
      "Director": "K. Viswanath"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1995,
      "Title": "Kuruthipunal",
      "Role": "Adhi Narayanan IPS",
      "Language": "Tamil",
      "Director": "P. C. Sreeram"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1996,
      "Title": "Indian",
      "Role": "Senapathy & Chandrabose",
      "Language": "Tamil",
      "Director": "S. Shankar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1996,
      "Title": "Avvai Shanmughi",
      "Role": "Pandian\n(Avvai Shanmughi)",
      "Language": "Tamil",
      "Director": "K. S. Ravikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1997,
      "Title": "Chachi 420",
      "Role": "Jaiprakash Paswan\n(Lakshmi Godbhole)",
      "Language": "Hindi",
      "Director": "Kamal Haasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 1998,
      "Title": "Kaathala Kaathala",
      "Role": "Ramalingam",
      "Language": "Tamil",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2000,
      "Title": "Hey Ram",
      "Role": "Saket Ram",
      "Language": "Tamil",
      "Director": "Kamal Haasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2000,
      "Title": "Hey Ram",
      "Role": "Saket Ram",
      "Language": "Hindi",
      "Director": "Kamal Haasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2000,
      "Title": "Thenali",
      "Role": "Thenali Soman",
      "Language": "Tamil",
      "Director": "K. S. Ravikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2001,
      "Title": "Aalavandhan",
      "Role": "Major Vijay Kumar and Nandha Kumar",
      "Language": "Tamil",
      "Director": "Suresh Krissna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2001,
      "Title": "Abhay",
      "Role": "Major Vijay and Abhay",
      "Language": "Hindi",
      "Director": "Suresh Krissna"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2001,
      "Title": "Paarthale Paravasam",
      "Role": "Kamal Haasan",
      "Language": "Tamil",
      "Director": "K. Balachander"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2002,
      "Title": "Pammal K. Sambandam",
      "Role": "Pammal Kalyana Sambandham",
      "Language": "Tamil",
      "Director": "T. S. B. K. Moulee"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2002,
      "Title": "Panchatanthiram",
      "Role": "Ramachandramurthy",
      "Language": "Tamil",
      "Director": "K. S. Ravikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2003,
      "Title": "Anbe Sivam",
      "Role": "Nallasivam",
      "Language": "Tamil",
      "Director": "Sundar. C"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2003,
      "Title": "Nala Damayanthi",
      "Role": "Kamal Haasan",
      "Language": "Tamil",
      "Director": "T. S. B. K. Moulee"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2004,
      "Title": "Virumaandi",
      "Role": "Virumaandi",
      "Language": "Tamil",
      "Director": "Kamal Haasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2004,
      "Title": "Vasool Raja MBBS",
      "Role": "Rajaraman",
      "Language": "Tamil",
      "Director": "Saran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2005,
      "Title": "Mumbai Xpress",
      "Role": "Avinasi",
      "Language": "Tamil",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2005,
      "Title": "Mumbai Xpress",
      "Role": "Avinash",
      "Language": "Hindi",
      "Director": "Singeetam Srinivasa Rao"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2005,
      "Title": "Rama Shama Bhama",
      "Role": "Dr. Shyam Sajjan",
      "Language": "Kannada",
      "Director": "Ramesh Aravind"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2006,
      "Title": "Vettaiyaadu Vilaiyaadu",
      "Role": "DCP Raghavan",
      "Language": "Tamil",
      "Director": "Gautham Menon"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2008,
      "Title": "Dasavathaaram",
      "Role": "10 Different Roles",
      "Language": "Tamil",
      "Director": "K. S. Ravikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2009,
      "Title": "Unnaipol Oruvan",
      "Role": "Common man",
      "Language": "Tamil",
      "Director": "Chakri Toleti"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2009,
      "Title": "Eenadu",
      "Role": "Common man",
      "Language": "Telugu",
      "Director": "Chakri Toleti"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2010,
      "Title": "Four Friends",
      "Role": "Kamal Haasan",
      "Language": "Malayalam",
      "Director": "Saji Surendran"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2010,
      "Title": "Manmadan Ambu",
      "Role": "Raja Mannar",
      "Language": "Tamil",
      "Director": "K. S. Ravikumar"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2013,
      "Title": "Vishwaroopam",
      "Role": "Wisam Ahmed Kashmiri",
      "Language": "Tamil",
      "Director": "Kamal Haasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2013,
      "Title": "Vishwaroop",
      "Role": "Wisam Ahmed Kashmiri",
      "Language": "Hindi",
      "Director": "Kamal Haasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2015,
      "Title": "Uttama Villain",
      "Role": "Manoranjan",
      "Language": "Tamil",
      "Director": "Ramesh Aravind"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2015,
      "Title": "Papanasam",
      "Role": "Suyambulingam",
      "Language": "Tamil",
      "Director": "Jeethu Joseph"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2015,
      "Title": "Thoongaa Vanam",
      "Role": "C. K. Diwakar",
      "Language": "Tamil",
      "Director": "Rajesh Selva"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2015,
      "Title": "Cheekati Rajyam",
      "Role": "C. K. Diwakar",
      "Language": "Telugu",
      "Director": "Rajesh Selva"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2016,
      "Title": "Meen Kuzhambum Mann Paanaiyum",
      "Role": "Swami",
      "Language": "Tamil",
      "Director": "Amudeshver"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2018,
      "Title": "Vishwaroopam II",
      "Role": "Wisam Ahmed Kashmiri",
      "Language": "Tamil",
      "Director": "Kamal Haasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2018,
      "Title": "Vishwaroop II",
      "Role": "Wisam Ahmed Kashmiri",
      "Language": "Hindi",
      "Director": "Kamal Haasan"
    },
    {
      "Industry": "Tamil",
      "Actor": "Kamal",
      "Year": 2022,
      "Title": "Vikram",
      "Role": "Arun Kumar Vikram",
      "Language": "Tamil",
      "Director": "Lokesh Kanagaraj"
    }
  ];

  private aamir: Array<Movie> = [
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Yaadon Ki Baaraat",
      "Year": 1973,
      "Role": "Young Ratan",
      "Director": "Nasir Hussain",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Madhosh",
      "Year": 1974,
      "Role": "Young Raj",
      "Director": "Desh Gautam",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Paranoia",
      "Year": 1983,
      "Role": "Unknown",
      "Director": "Aditya Bhattacharya",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Holi",
      "Year": 1984,
      "Role": "Madan Sharma",
      "Director": "Ketan Mehta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Qayamat Se Qayamat Tak",
      "Year": 1988,
      "Role": "Raj",
      "Director": "Mansoor Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Raakh",
      "Year": 1989,
      "Role": "Amir Hussein",
      "Director": "Aditya Bhattacharya",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Love Love Love",
      "Year": 1989,
      "Role": "Amit",
      "Director": "Babbar Subash",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Awwal Number",
      "Year": 1990,
      "Role": "Sunny",
      "Director": "Dev Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Tum Mere Ho",
      "Year": 1990,
      "Role": "Shiva",
      "Director": "Tahir Hussain",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Dil",
      "Year": 1990,
      "Role": "Raja",
      "Director": "Indra Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Deewana Mujh Sa Nahin",
      "Year": 1990,
      "Role": "Ajay Sharma",
      "Director": "Y. Nageshwar Rao",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Jawani Zindabad",
      "Year": 1990,
      "Role": "Shashi Sharma",
      "Director": "Arun Bhatt",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Afsana Pyaar Ka",
      "Year": 1991,
      "Role": "Raj",
      "Director": "M. R. Shahjahan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Dil Hai Ke Manta Nahin",
      "Year": 1991,
      "Role": "Raghu Jetley",
      "Director": "Mahesh Bhatt",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Isi Ka Naam Zindagi",
      "Year": 1992,
      "Role": "Chotu",
      "Director": "Kalidas",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Daulat Ki Jung",
      "Year": 1992,
      "Role": "Rajesh Chaudhry",
      "Director": "S. A. Kader",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Jo Jeeta Wohi Sikandar",
      "Year": 1992,
      "Role": "Sanjaylal Sharma",
      "Director": "Mansoor Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Pehla Nasha",
      "Year": 1993,
      "Role": "Himself",
      "Director": "Ashutosh Gowariker",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Parampara",
      "Year": 1993,
      "Role": "Ranbir Prithvi Singh",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Damini",
      "Year": 1993,
      "Role": "Himself",
      "Director": "Rajkumar Santoshi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Hum Hain Rahi Pyar Ke",
      "Year": 1993,
      "Role": "Rahul Malhotra",
      "Director": "Mahesh Bhatt",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Andaz Apna Apna",
      "Year": 1994,
      "Role": "Amar Manohar",
      "Director": "Rajkumar Santoshi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Baazi",
      "Year": 1995,
      "Role": "Amar Damjee",
      "Director": "Ashutosh Gowariker",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Aatank Hi Aatank",
      "Year": 1995,
      "Role": "Rohan",
      "Director": "Dilip Shankar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Rangeela",
      "Year": 1995,
      "Role": "Munna",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Akele Hum Akele Tum",
      "Year": 1995,
      "Role": "Rohit Kumar",
      "Director": "Mansoor Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Raja Hindustani",
      "Year": 1996,
      "Role": "Raja Hindustani",
      "Director": "Dharmesh Darshan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Ishq",
      "Year": 1997,
      "Role": "Raja Ahlawat",
      "Director": "Indra Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Ghulam",
      "Year": 1998,
      "Role": "Siddharth Marathe",
      "Director": "Vikram Bhatt",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Earth",
      "Year": 1998,
      "Role": "Dil Navaz",
      "Director": "Deepa Mehta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Sarfarosh",
      "Year": 1999,
      "Role": "Ajay Singh Rathod",
      "Director": "John Matthew Matthan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Mann",
      "Year": 1999,
      "Role": "Dev Karan Singh",
      "Director": "Indra Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Mela",
      "Year": 2000,
      "Role": "Kishan Pyare",
      "Director": "Dharmesh Darshan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Lagaan",
      "Year": 2001,
      "Role": "Bhuvan",
      "Director": "Ashutosh Gowariker",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Dil Chahta Hai",
      "Year": 2001,
      "Role": "Akash Malhotra",
      "Director": "Farhan Akhtar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Madness in the Desert",
      "Year": 2004,
      "Role": "Himself",
      "Director": "Satyajit Bhatkal",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Mangal Pandey: The Rising",
      "Year": 2005,
      "Role": "Mangal Pandey",
      "Director": "Ketan Mehta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Rang De Basanti",
      "Year": 2006,
      "Role": "Daljit \"DJ\" Singh/\nChandrashekhar Azad",
      "Director": "Rakeysh Omprakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Fanaa",
      "Year": 2006,
      "Role": "Rehan Quadri",
      "Director": "Kunal Kohli",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Taare Zameen Par",
      "Year": 2007,
      "Role": "Ram Shankar Nikumbh",
      "Director": "Aamir Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Ghajini",
      "Year": 2008,
      "Role": "Sanjay Singhania",
      "Director": "A.R. Murugadoss",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Luck by Chance",
      "Year": 2009,
      "Role": "Himself",
      "Director": "Zoya Akhtar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "3 Idiots",
      "Year": 2009,
      "Role": "Ranchhoddas \"Rancho\" Shamaldas Chanchad/\nPhunsukh Wangdu",
      "Director": "Rajkumar Hirani",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Dhobi Ghat",
      "Year": 2011,
      "Role": "Arun",
      "Director": "Kiran Rao",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Big in Bollywood",
      "Year": 2011,
      "Role": "Himself",
      "Director": "Kenny Meehan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Delhi Belly",
      "Year": 2011,
      "Role": "Disco Fighter",
      "Director": "Abhinay Deo",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Talaash: The Answer Lies Within",
      "Year": 2012,
      "Role": "Surjan Singh Shekhawat",
      "Director": "Reema Kagti",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Bombay Talkies",
      "Year": 2013,
      "Role": "Himself",
      "Director": "Multiple",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Ru-Ba-Ru",
      "Year": 2013,
      "Role": "Himself",
      "Director": "P. S. Bharathi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Dhoom 3",
      "Year": 2013,
      "Role": "Sahir Khan/Samar Khan",
      "Director": "Vijay Krishna Acharya",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "PK",
      "Year": 2014,
      "Role": "PK",
      "Director": "Rajkumar Hirani",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Dil Dhadakne Do",
      "Year": 2015,
      "Role": "Pluto Mehra",
      "Director": "Zoya Akhtar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Dangal",
      "Year": 2016,
      "Role": "Mahavir Singh Phogat",
      "Director": "Nitesh Tiwari",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Secret Superstar",
      "Year": 2017,
      "Role": "Shakti Kumar",
      "Director": "Advait Chandan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Thugs of Hindostan",
      "Year": 2018,
      "Role": "Firangi Mallah",
      "Director": "Vijay Krishna Acharya",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Koi Jaane Na",
      "Year": 2021,
      "Role": "Guest",
      "Director": "Amin Hajee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Aamir",
      "Title": "Laal Singh Chaddha",
      "Year": 2022,
      "Role": "Laal Singh Chaddha",
      "Director": "Advait Chandan",
      "Language": "Hindi"
    }
  ];

  private amitabh: Array<Movie> = [
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1969,
      "Title": "Saat Hindustani",
      "Role": "Anwar Ali",
      "Director": "Khwaja Ahmad Abbas",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1969,
      "Title": "Bhuvan Shome",
      "Role": "Narrator",
      "Director": "Mrinal Sen",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1970,
      "Title": "Bombay Talkie",
      "Role": "Himself",
      "Director": "James Ivory",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1971,
      "Title": "Parwana",
      "Role": "Kumar Sen",
      "Director": "Jyoti Swaroop",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1971,
      "Title": "Anand",
      "Role": "Dr. Bhaskar Banerjee a.k.a. Babu Moshaye",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1971,
      "Title": "Pyar Ki Kahani",
      "Role": "Ram Chand",
      "Director": "Ravikant Nagaich",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1971,
      "Title": "Reshma Aur Shera",
      "Role": "Chotu",
      "Director": "Sunil Dutt",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1971,
      "Title": "Guddi",
      "Role": "Himself",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1972,
      "Title": "Sanjog",
      "Role": "Mohan",
      "Director": "S. S. Balan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1972,
      "Title": "Piya Ka Ghar",
      "Role": "",
      "Director": "Basu Chatterjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1972,
      "Title": "Bombay to Goa",
      "Role": "Ravi Kumar",
      "Director": "S. Ramanathan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1972,
      "Title": "Bawarchi",
      "Role": "Narrator",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1972,
      "Title": "Bansi Birju",
      "Role": "Birju",
      "Director": "Prakash Verma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1972,
      "Title": "Ek Nazar",
      "Role": "Manmohan Akash Tyagi",
      "Director": "B. R. Ishara",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1972,
      "Title": "Raaste Kaa Patthar",
      "Role": "Jai Shankar Rai",
      "Director": "Mukul Dutt",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1972,
      "Title": "Garam Masala",
      "Role": "Robert Taylor",
      "Director": "Aspi Irani",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1972,
      "Title": "Jaban",
      "Role": "Dalaljit",
      "Director": "Palash Banerjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1973,
      "Title": "Zanjeer",
      "Role": "Inspector Vijay Khanna",
      "Director": "Prakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1973,
      "Title": "Bandhe Haath",
      "Role": "Shyam /Deepak",
      "Director": "O. P. Goyle",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1973,
      "Title": "Gehri Chaal",
      "Role": "Ratan",
      "Director": "C. V. Sridhar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1973,
      "Title": "Abhimaan",
      "Role": "Subir Kumar",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1973,
      "Title": "Saudagar",
      "Role": "Moti",
      "Director": "Sudhendu Roy",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1973,
      "Title": "Namak Haraam",
      "Role": "Vikram Maharaj 'Vicky'",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1973,
      "Title": "Bada Kabutar",
      "Role": "",
      "Director": "Deven Verma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1974,
      "Title": "Dost",
      "Role": "Anand",
      "Director": "Dulal Guha",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1974,
      "Title": "Kasauti",
      "Role": "Amitabh Sharma",
      "Director": "Aravind Sen",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1974,
      "Title": "Benaam",
      "Role": "Amit Srivastav",
      "Director": "Narendra Bedi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1974,
      "Title": "Roti Kapda Aur Makaan",
      "Role": "Vijay",
      "Director": "Manoj Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1974,
      "Title": "Kunwara Baap",
      "Role": "Anthony",
      "Director": "Mehmood Ali",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1974,
      "Title": "Majboor",
      "Role": "Ravi Khanna",
      "Director": "Ravi Tandon",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1975,
      "Title": "Deewaar",
      "Role": "Vijay Verma",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1975,
      "Title": "Zameer",
      "Role": "Baadal",
      "Director": "Ravi Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1975,
      "Title": "Sholay",
      "Role": "Jai (Jaidev)",
      "Director": "Ramesh Sippy",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1975,
      "Title": "Faraar",
      "Role": "Rajesh (Raj)",
      "Director": "Shankar Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1975,
      "Title": "Chhoti Si Baat",
      "Role": "Guest appearance",
      "Director": "Basu Chatterjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1975,
      "Title": "Chupke Chupke",
      "Role": "Sukumar Sinha / Parimal Tripathi",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1975,
      "Title": "Mili",
      "Role": "Shekhar Dayal",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1976,
      "Title": "Do Anjaane",
      "Role": "Amit Roy/Naresh Dutta",
      "Director": "Dulal Guha",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1976,
      "Title": "Kabhie Kabhie",
      "Role": "Amitabh Malhotra",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1976,
      "Title": "Hera Pheri",
      "Role": "Vijay / Inspector Hirachand",
      "Director": "Prakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1976,
      "Title": "Adalat",
      "Role": "Thakur Dharam Chand / Raju",
      "Director": "Narendra Bedi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1976,
      "Title": "Balika Badhu",
      "Role": "Voice-over",
      "Director": "Tarun Majumdar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1977,
      "Title": "Charandas",
      "Role": "Qawwali singer",
      "Director": "B. S. Thapa",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1977,
      "Title": "Amar Akbar Anthony",
      "Role": "Anthony Gonzalves",
      "Director": "Manmohan Desai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1977,
      "Title": "Immaan Dharam",
      "Role": "Ahmed Raza",
      "Director": "Desh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1977,
      "Title": "Khoon Pasina",
      "Role": "Shiva / Tiger",
      "Director": "Rakesh Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1977,
      "Title": "Shatranj Ke Khilari",
      "Role": "Narrator",
      "Director": "Satyajit Ray",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1977,
      "Title": "Parvarish",
      "Role": "Amit",
      "Director": "Manmohan Desai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1977,
      "Title": "Chala Murari Hero Banne",
      "Role": "Himself",
      "Director": "Asrani",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1977,
      "Title": "Alaap",
      "Role": "Alok Prasad",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1978,
      "Title": "Ganga Ki Saugandh",
      "Role": "Jeeva",
      "Director": "Sultan Ahmed",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1978,
      "Title": "Kasme Vaade",
      "Role": "Amit / Shankar",
      "Director": "Ramesh Behl",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1978,
      "Title": "Besharam",
      "Role": "Ram Kumar Chandra/Prince Chandrashekar",
      "Director": "Deven Verma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1978,
      "Title": "Trishul",
      "Role": "Vijay Kumar",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1978,
      "Title": "Don",
      "Role": "Don / Vijay",
      "Director": "Chandra Barot",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1978,
      "Title": "Muqaddar Ka Sikandar",
      "Role": "Sikandar",
      "Director": "Prakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1979,
      "Title": "The Great Gambler",
      "Role": "Jay / Inspector Vijay",
      "Director": "Shakti Samanta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1979,
      "Title": "Gol Maal",
      "Role": "Himself",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1979,
      "Title": "Ahsaas",
      "Role": "Himself",
      "Director": "Surinder Suri",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1979,
      "Title": "Jurmana",
      "Role": "Inder Saxena",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1979,
      "Title": "Manzil",
      "Role": "Ajay Chandra",
      "Director": "Basu Chatterjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1979,
      "Title": "Mr. Natwarlal",
      "Role": "Natwarlal / Avtar Singh",
      "Director": "Rakesh Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1979,
      "Title": "Kaala Patthar",
      "Role": "Vijay Pal Singh",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1979,
      "Title": "Suhaag",
      "Role": "Amit Kapoor",
      "Director": "Manmohan Desai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1979,
      "Title": "Cinema Cinema",
      "Role": "Himself",
      "Director": "Krishna Shah",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1980,
      "Title": "Do Aur Do Paanch",
      "Role": "Vijay/Ram",
      "Director": "Rakesh Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1980,
      "Title": "Dostana",
      "Role": "Vijay Varma",
      "Director": "Raj Khosla",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1980,
      "Title": "Ram Balram",
      "Role": "Balram Singh",
      "Director": "Vijay Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1980,
      "Title": "Shaan",
      "Role": "Vijay Kumar",
      "Director": "Ramesh Sippy",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Commander",
      "Role": "Truck driver",
      "Director": "Rakesh Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Yaarana",
      "Role": "Kishan Kumar",
      "Director": "Rakesh Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Barsaat Ki Ek Raat",
      "Role": "ACP Abhijeet Rai",
      "Director": "Shakti Samanta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Anusandhan",
      "Role": "ACP Abhijeet Rai",
      "Director": "Shakti Samanta",
      "Language": "Bengali"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Naseeb",
      "Role": "Johnny",
      "Director": "Manmohan Desai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Chashme Buddoor",
      "Role": "Himself",
      "Director": "Sai Paranjpye",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Lawaaris",
      "Role": "Heera",
      "Director": "Prakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Silsila",
      "Role": "Amit Malhotra",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Kaalia",
      "Role": "Kallu / Kaalia",
      "Director": "Tinnu Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1981,
      "Title": "Vilayati Babu",
      "Role": "",
      "Director": "Dharam Kumar",
      "Language": "Panjabi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1982,
      "Title": "Satte Pe Satta",
      "Role": "Ravi Anand / Babu",
      "Director": "Raj N. Sippy",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1982,
      "Title": "Bemisal",
      "Role": "Dr. Sudhir Roy / Adhir Roy",
      "Director": "Hrishikesh Mukherjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1982,
      "Title": "Desh Premee",
      "Role": "Master Dinanath / Raju",
      "Director": "Manmohan Desai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1982,
      "Title": "Namak Halaal",
      "Role": "Arjun Singh",
      "Director": "Prakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1982,
      "Title": "Khud-Daar",
      "Role": "Govind Srivastava / Chhotu Ustaad",
      "Director": "Ravi Tandon",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1982,
      "Title": "Shakti",
      "Role": "Vijay Kumar",
      "Director": "Ramesh Sippy",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1983,
      "Title": "Nastik",
      "Role": "Shankar",
      "Director": "Pramod Chakravorty",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1983,
      "Title": "Andha Kanoon",
      "Role": "Jan Nissar Akhtar Khan",
      "Director": "Tatineni Rama Rao",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1983,
      "Title": "Mahaan",
      "Role": "Rana Ranveer / Guru / Inspector Shankar",
      "Director": "S. Ramanathan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1983,
      "Title": "Pukar",
      "Role": "Ramdas",
      "Director": "Ramesh Behl",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1983,
      "Title": "Coolie",
      "Role": "Iqbal A. Khan",
      "Director": "Manmohan Desai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1984,
      "Title": "Inquilaab",
      "Role": "Amarnath",
      "Director": "Tatineni Rama Rao",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1984,
      "Title": "Khabardar",
      "Role": "Unknown",
      "Director": "Tatineni Rama Rao",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1984,
      "Title": "Kanoon Kya Karega",
      "Role": "Narrator",
      "Director": "Mukul S. Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1984,
      "Title": "Paan Khaye Saiyan Hamaar",
      "Role": "Himself",
      "Director": "Sujit Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1984,
      "Title": "Pet Pyaar Aur Paap",
      "Role": "Himself",
      "Director": "Durai (director)",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1984,
      "Title": "Sharaabi",
      "Role": "Vicky Kapoor",
      "Director": "Prakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1985,
      "Title": "Geraftaar",
      "Role": "Insp. Karan Kumar Khanna",
      "Director": "Prayag Raaj",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1985,
      "Title": "Ghulami",
      "Role": "Narrator",
      "Director": "J. P. Dutta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1985,
      "Title": "Mard",
      "Role": "Raju",
      "Director": "Manmohan Desai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1986,
      "Title": "Aakhree Raasta",
      "Role": "David D'Costa / Vijay Sandaliya",
      "Director": "K. Bhagyaraj",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1987,
      "Title": "Jalwa",
      "Role": "Himself",
      "Director": "Pankaj Parashar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1988,
      "Title": "Kaun Jeeta Kaun Haara",
      "Role": "Himself",
      "Director": "Rakesh Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1988,
      "Title": "Shahenshah",
      "Role": "Inspector Vijay Kumar Srivastav / Shahenshah",
      "Director": "Tinnu Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1988,
      "Title": "Hero Hiralal",
      "Role": "Himself",
      "Director": "Ketan Mehta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1988,
      "Title": "Gangaa Jamunaa Saraswati",
      "Role": "Ganga Prasad",
      "Director": "Manmohan Desai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1988,
      "Title": "Soorma Bhopali",
      "Role": "Police Inspector",
      "Director": "Jagdeep",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1989,
      "Title": "Toofan",
      "Role": "Shyam / Toofan",
      "Director": "Ketan Desai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1989,
      "Title": "Batwara",
      "Role": "Narrator",
      "Director": "J. P. Dutta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1989,
      "Title": "Jaadugar",
      "Role": "Goga / Gogeshwar",
      "Director": "Prakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1989,
      "Title": "Main Azaad Hoon",
      "Role": "Azaad",
      "Director": "Tinnu Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1990,
      "Title": "Agneepath",
      "Role": "Vijay Deenanath Chauhan",
      "Director": "Mukul S. Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1990,
      "Title": "Kroadh",
      "Role": "Himself",
      "Director": "Shashilal K. Nair",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1990,
      "Title": "Aaj Ka Arjun",
      "Role": "Bheema",
      "Director": "K. C. Bokadia",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1991,
      "Title": "Hum",
      "Role": "Tiger / Shekhar Malhotra",
      "Director": "Mukul S. Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1991,
      "Title": "Ajooba",
      "Role": "Ajooba/Zaffar Ali Rizwan",
      "Director": "Shashi Kapoor\nGennadi Vasilyev",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1991,
      "Title": "Indrajeet",
      "Role": "Indrajeet",
      "Director": "K. V. Raju",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1991,
      "Title": "Akayla",
      "Role": "Inspector Vijay Verma",
      "Director": "Ramesh Sippy",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1992,
      "Title": "Khuda Gawah",
      "Role": "Badshah Khan",
      "Director": "Mukul S. Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1992,
      "Title": "Zulm Ki Hukumat",
      "Role": "Narrator",
      "Director": "Bharat Rangachary",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1993,
      "Title": "Professor Ki Padosan",
      "Role": "",
      "Director": "Shantilal Soni",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1994,
      "Title": "Insaniyat",
      "Role": "Inspector Amar",
      "Director": "Tony Juneja",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1994,
      "Title": "Akka",
      "Role": "Himself",
      "Director": "Shridhar Joshi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1996,
      "Title": "Ghatak: Lethal",
      "Role": "Himself",
      "Director": "Rajkumar Santoshi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1996,
      "Title": "Tere Mere Sapne",
      "Role": "Narrator",
      "Director": "Joy Augustine",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1997,
      "Title": "Mrityudata",
      "Role": "Dr. Ram Prasad Ghayal",
      "Director": "Mehul Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1998,
      "Title": "Major Saab",
      "Role": "Major Jasbir Singh Rana",
      "Director": "Tinnu Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1998,
      "Title": "Bade Miyan Chote Miyan",
      "Role": "Inspector Arjun Singh / Bade Miyan",
      "Director": "David Dhawan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1998,
      "Title": "Hero Hindustani",
      "Role": "Narrator",
      "Director": "Aziz Sejawal",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1999,
      "Title": "Lal Baadshah",
      "Role": "Lal 'Baadshah' Singh / Ranbhir Singh",
      "Director": "K. C. Bokadia",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1999,
      "Title": "Sooryavansham",
      "Role": "Thakur Bhanu Pratap Singh / Heera Singh",
      "Director": "E. V. V. Satyanarayana",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1999,
      "Title": "Biwi No.1",
      "Role": "Himself",
      "Director": "David Dhawan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1999,
      "Title": "Hindustan Ki Kasam",
      "Role": "Kabeera",
      "Director": "Veeru Devgan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1999,
      "Title": "Kohram",
      "Role": "Col. Balbir Singh Sodi (Devraj Hathoda) / Dada Bhai",
      "Director": "Mehul Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 1999,
      "Title": "Hello Brother",
      "Role": "God (voice)",
      "Director": "Sohail Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2000,
      "Title": "Mohabbatein",
      "Role": "Narayan Shankar",
      "Director": "Aditya Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2001,
      "Title": "Ek Rishtaa: The Bond of Love",
      "Role": "Vijay Kapoor",
      "Director": "Suneel Darshan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2001,
      "Title": "Lagaan",
      "Role": "Narrator",
      "Director": "Ashutosh Gowariker",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2001,
      "Title": "Aks",
      "Role": "Insp. Manu Verma",
      "Director": "Rakeysh Omprakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2001,
      "Title": "Kabhi Khushi Kabhie Gham...",
      "Role": "Yashvardhan \"Yash\" Raichand",
      "Director": "Karan Johar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2002,
      "Title": "Aankhen",
      "Role": "Vijay Singh Rajput",
      "Director": "Vipul Amrutlal Shah",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2002,
      "Title": "Hum Kisise Kum Nahin",
      "Role": "Dr. Rastogi",
      "Director": "David Dhawan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2002,
      "Title": "Agni Varsha",
      "Role": "Devraj",
      "Director": "Arjun Sajnani",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2002,
      "Title": "Kaante",
      "Role": "Yashvardhan Rampal 'Major'",
      "Director": "Sanjay Gupta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2003,
      "Title": "Khushi",
      "Role": "Narrator",
      "Director": "S. J. Surya",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2003,
      "Title": "Armaan",
      "Role": "Dr. Siddharth Sinha",
      "Director": "Honey Irani",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2003,
      "Title": "Mumbai Se Aaya Mera Dost",
      "Role": "Narrator",
      "Director": "Apoorva Lakhia",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2003,
      "Title": "Boom",
      "Role": "Bade Mia",
      "Director": "Kaizad Gustad",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2003,
      "Title": "Baghban",
      "Role": "Raj Malhotra",
      "Director": "Ravi Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2003,
      "Title": "Fun 2shh: Dudes in the 10th Century",
      "Role": "Narrator",
      "Director": "Imtiaz Punjabi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Khakee",
      "Role": "DCP Anant Kumar Shrivastav",
      "Director": "Rajkumar Santoshi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Aetbaar",
      "Role": "Dr. Ranveer Malhotra",
      "Director": "Vikram Bhatt",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Rudraksh",
      "Role": "Narrator",
      "Director": "Mani Shankar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Insaaf: The Justice",
      "Role": "Narrator",
      "Director": "Shrey Shrivastav",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Dev",
      "Role": "DCP Dev Pratap Singh",
      "Director": "Govind Nihalani",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Lakshya",
      "Role": "Col. Sunil Damle",
      "Director": "Farhan Akhtar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Deewaar",
      "Role": "Major Ranvir Kaul",
      "Director": "Milan Luthria",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Kyun! Ho Gaya Na...",
      "Role": "Raj Chauhan",
      "Director": "Samir Karnik",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Hum Kaun Hai?",
      "Role": "Major Frank John Williams / Frank James Williams",
      "Director": "Ravi Sharma Shankar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Veer-Zaara",
      "Role": "Choudhary Sumer Singh",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2004,
      "Title": "Ab Tumhare Hawale Watan Saathiyo",
      "Role": "Major General Amarjeet Singh",
      "Director": "Anil Sharma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Black",
      "Role": "Debraj Sahai",
      "Director": "Sanjay Leela Bhansali",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Waqt: The Race Against Time",
      "Role": "Ishwarchand Thakur",
      "Director": "Vipul Amrutlal Shah",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Bunty Aur Babli",
      "Role": "DCP Dashrath Singh",
      "Director": "Shaad Ali",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Parineeta",
      "Role": "Narrator",
      "Director": "Pradeep Sarkar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Paheli",
      "Role": "Gadariya",
      "Director": "Amol Palekar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Sarkar",
      "Role": "Subhash Nagre (Sarkar)",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Viruddh... Family Comes First",
      "Role": "Vidhyadhar Patwardhan",
      "Director": "Mahesh Manjrekar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Ramji Londonwaley",
      "Role": "Himself",
      "Director": "Sanjay Dayma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Dil Jo Bhi Kahey...",
      "Role": "Shekhar Sinha",
      "Director": "Romesh Sharma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Amrithadhare",
      "Role": "Himself",
      "Director": "Nagathihalli Chandrashekhar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2005,
      "Title": "Ek Ajnabee",
      "Role": "Suryaveer Singh",
      "Director": "Apoorva Lakhia",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2006,
      "Title": "Family",
      "Role": "Viren Sahai",
      "Director": "Rajkumar Santoshi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2006,
      "Title": "Darna Zaroori Hai",
      "Role": "Sunil Khanna",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2006,
      "Title": "Kabhi Alvida Naa Kehna",
      "Role": "Samarjit Talwar",
      "Director": "Karan Johar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2006,
      "Title": "Ganga",
      "Role": "Thakur Vijay Singh",
      "Director": "Abhishek Chaddha",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2006,
      "Title": "Baabul",
      "Role": "Balraj Kapoor",
      "Director": "Ravi Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "Eklavya: The Royal Guard",
      "Role": "Eklavya",
      "Director": "Vidhu Vinod Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "Nishabd",
      "Role": "Vijay Anand",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "Ek Krantiveer: Vasudev Balwant Phadke",
      "Role": "Narrator",
      "Director": "Gajendra Ahire",
      "Language": "Marathi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "Cheeni Kum",
      "Role": "Buddhadev Gupta",
      "Director": "R. Balki",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "Shootout at Lokhandwala",
      "Role": "Advocate Dhingra",
      "Director": "Apoorva Lakhia",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "Swami",
      "Role": "Narrator",
      "Director": "Ganesh Acharya",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "Jhoom Barabar Jhoom",
      "Role": "Sutradhar",
      "Director": "Shaad Ali",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "Aag",
      "Role": "Babban Singh",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "The Last Lear",
      "Role": "Harish Mishra",
      "Director": "Rituparno Ghosh",
      "Language": "English"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2007,
      "Title": "Om Shanti Om",
      "Role": "Himself",
      "Director": "Farah Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2008,
      "Title": "Jodhaa Akbar",
      "Role": "Narrator",
      "Director": "Ashutosh Gowariker",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2008,
      "Title": "Yaar Meri Zindagi",
      "Role": "Dr. Ajay Singh",
      "Director": "Ashok Gupta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2008,
      "Title": "Bhoothnath",
      "Role": "Kailash Nath a.k.a. Bhoothnath",
      "Director": "Vivek Sharma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2008,
      "Title": "Sarkar Raj",
      "Role": "Subhash Nagre (Sarkar)",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2008,
      "Title": "God Tussi Great Ho",
      "Role": "God",
      "Director": "Rumi Jaffrey",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2009,
      "Title": "Delhi-6",
      "Role": "Dadaji",
      "Director": "Rakeysh Omprakash Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2009,
      "Title": "Zor Lagaa Ke...Haiya!",
      "Role": "Narrator",
      "Director": "Girish Girija Joshi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2009,
      "Title": "Aladin",
      "Role": "Genius",
      "Director": "Sujoy Ghosh",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2009,
      "Title": "Paa",
      "Role": "Auro",
      "Director": "R. Balki",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2010,
      "Title": "Rann",
      "Role": "Vijay Harshwardhan Malik",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2010,
      "Title": "Teen Patti",
      "Role": "Prof. Venkat Subramanium",
      "Director": "Leena Yadav",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2010,
      "Title": "Kandahar",
      "Role": "Lokanatha Sharma",
      "Director": "Major Ravi",
      "Language": "Malayalam"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2011,
      "Title": "Bbuddah... Hoga Terra Baap",
      "Role": "Vijay 'Vijju' Malhotra",
      "Director": "Puri Jagannadh",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2011,
      "Title": "Aarakshan",
      "Role": "Prabhakar Anand",
      "Director": "Prakash Jha",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2011,
      "Title": "Ra.One",
      "Role": "Narrator",
      "Director": "Anubhav Sinha",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2012,
      "Title": "Kahaani",
      "Role": "",
      "Director": "Sujoy Ghosh",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2012,
      "Title": "Mr. Bhatti on Chutti",
      "Role": "Himself",
      "Director": "Karan Razdan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2012,
      "Title": "Department",
      "Role": "Sarjerao Gaikwad",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2012,
      "Title": "Bol Bachchan",
      "Role": "Himself",
      "Director": "Rohit Shetty",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2012,
      "Title": "English Vinglish",
      "Role": "Passenger in the aeroplane",
      "Director": "Gauri Shinde",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2013,
      "Title": "The Great Gatsby",
      "Role": "Meyer Wolfsheim",
      "Director": "Baz Luhrmann",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2013,
      "Title": "Bombay Talkies",
      "Role": "Himself",
      "Director": "Anurag Kashyap",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2013,
      "Title": "Satyagraha",
      "Role": "Dwarka Anand",
      "Director": "Prakash Jha",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2013,
      "Title": "Boss",
      "Role": "Narrator",
      "Director": "Anthony D'Souza",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2013,
      "Title": "Krrish 3",
      "Role": "Narrator",
      "Director": "Rakesh Roshan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2013,
      "Title": "Mahabharat",
      "Role": "Bhishma (voice)",
      "Director": "Amaan Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2014,
      "Title": "Bhoothnath Returns",
      "Role": "Khailash Nath a.k.a. Bhoothnath",
      "Director": "Nitesh Tiwari",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2014,
      "Title": "Manam",
      "Role": "Pratap",
      "Director": "Vikram Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2014,
      "Title": "Kochadaiiyaan",
      "Role": "Narrator",
      "Director": "Soundarya R. Ashwin",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2015,
      "Title": "Shamitabh",
      "Role": "Amitabh Sinha",
      "Director": "R. Balki",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2015,
      "Title": "Hey Bro",
      "Role": "",
      "Director": "Ajay Chandhok",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2015,
      "Title": "Piku",
      "Role": "Bhashkor Banerjee",
      "Director": "Shoojit Sircar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2016,
      "Title": "Wazir",
      "Role": "Pandit Omkarnath Dhar",
      "Director": "Bejoy Nambiar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2016,
      "Title": "Ki & Ka",
      "Role": "Himself",
      "Director": "R. Balki",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2016,
      "Title": "Te3n",
      "Role": "John Biswas",
      "Director": "Ribhu Dasgupta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2016,
      "Title": "Pink",
      "Role": "Deepak Sehgall",
      "Director": "Aniruddha Roy Chowdhury",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2017,
      "Title": "The Ghazi Attack",
      "Role": "Narrator",
      "Director": "Sankalp Reddy",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2017,
      "Title": "Begum Jaan",
      "Role": "Narrator",
      "Director": "Srijit Mukherji",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2017,
      "Title": "Sarkar 3",
      "Role": "Subhash Nagre (Sarkar)",
      "Director": "Ram Gopal Varma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2017,
      "Title": "Firangi",
      "Role": "Narrator",
      "Director": "Rajiv Dhingra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2018,
      "Title": "Pad Man",
      "Role": "Narrator",
      "Director": "R. Balki",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2018,
      "Title": "102 Not Out",
      "Role": "Dattatraya Vakharia",
      "Director": "Umesh Shukla",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2018,
      "Title": "Helicopter Eela",
      "Role": "Cameo appearance",
      "Director": "Pradeep Sarkar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2018,
      "Title": "Thugs of Hindostan",
      "Role": "Khudabaksh Azaad",
      "Director": "Vijay Krishna Acharya",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2019,
      "Title": "Manikarnika: The Queen of Jhansi",
      "Role": "Narrator",
      "Director": "Krish\nKangana Ranaut",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2019,
      "Title": "Badla",
      "Role": "Badal Gupta",
      "Director": "Sujoy Ghosh",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2019,
      "Title": "Sye Raa Narasimha Reddy",
      "Role": "Gosayi Venkanna",
      "Director": "Surender Reddy",
      "Language": "Telugu"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2020,
      "Title": "AB Aani CD",
      "Role": "Himself",
      "Director": "Milind Lele",
      "Language": "Marathi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2020,
      "Title": "Ghoomketu",
      "Role": "Himself",
      "Director": "Pushpendra Nath Misra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2020,
      "Title": "Gulabo Sitabo",
      "Role": "Chunnan Mirza Nawab",
      "Director": "Shoojit Sircar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2021,
      "Title": "Chehre",
      "Role": "Advocate Lateef Zaidi",
      "Director": "Rumy Jafry",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2022,
      "Title": "Jhund",
      "Role": "Vijay Borade",
      "Director": "Nagraj Manjule",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2022,
      "Title": "Radhe Shyam",
      "Role": "Narrator",
      "Director": "Radha Krishna Kumar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Amitabh",
      "Year": 2022,
      "Title": "Runway 34",
      "Role": "Narayan Vedant",
      "Director": "Ajay Devgn",
      "Language": "Hindi"
    }
  ];

  private shahrukh: Array<Movie>=[
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Deewana",
      "Year": 1992,
      "Role": "Raja Sahay",
      "Director": "Raj Kanwar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Chamatkar",
      "Year": 1992,
      "Role": "Sunder Srivastava",
      "Director": "Rajiv Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Raju Ban Gaya Gentleman",
      "Year": 1992,
      "Role": "Raj Mathur",
      "Director": "Aziz Mirza",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Dil Aashna Hai",
      "Year": 1992,
      "Role": "Karan Singh",
      "Director": "Hema Malini",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Maya Memsaab",
      "Year": 1993,
      "Role": "Lalit Kumar",
      "Director": "Ketan Mehta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Pehla Nasha",
      "Year": 1993,
      "Role": "Himself",
      "Director": "Ashutosh Gowariker",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "King Uncle",
      "Year": 1993,
      "Role": "Anil Bhansal",
      "Director": "Rakesh Roshan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Baazigar",
      "Year": 1993,
      "Role": "Vicky Malhotra (Ajay Sharma)",
      "Director": "Abbas-Mustan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Darr",
      "Year": 1993,
      "Role": "Rahul Mehra",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Kabhi Haan Kabhi Naa",
      "Year": 1994,
      "Role": "Sunil",
      "Director": "Kundan Shah",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Anjaam",
      "Year": 1994,
      "Role": "Vijay Agnihotri",
      "Director": "Rahul Rawail",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Karan Arjun",
      "Year": 1995,
      "Role": "Arjun Singh / Vijay",
      "Director": "Rakesh Roshan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Zamaana Deewana",
      "Year": 1995,
      "Role": "Rahul Singh",
      "Director": "Ramesh Sippy",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Guddu",
      "Year": 1995,
      "Role": "Guddu Bahadur",
      "Director": "Abrar Alvi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Oh Darling! Yeh Hai India!",
      "Year": 1995,
      "Role": "Hero",
      "Director": "Ketan Mehta",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Dilwale Dulhania Le Jayenge",
      "Year": 1995,
      "Role": "Raj Malhotra",
      "Director": "Aditya Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Ram Jaane",
      "Year": 1995,
      "Role": "Ram Jaane",
      "Director": "Rajiv Mehra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Trimurti",
      "Year": 1995,
      "Role": "Romi Singh",
      "Director": "Mukul S. Anand",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "English Babu Desi Mem",
      "Year": 1996,
      "Role": "Gopal Mayur / Hari Mayur / \nVikram Mayur",
      "Director": "Praveen Nischol",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Chaahat",
      "Year": 1996,
      "Role": "Roop Rathore",
      "Director": "Mahesh Bhatt",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Army",
      "Year": 1996,
      "Role": "Major Arjun Singh",
      "Director": "Ram Shetty",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Dushman Duniya Ka",
      "Year": 1996,
      "Role": "Badru",
      "Director": "Mehmood Ali",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Gudgudee",
      "Year": 1997,
      "Role": "Unknown",
      "Director": "Basu Chatterjee",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Koyla",
      "Year": 1997,
      "Role": "Shankar",
      "Director": "Rakesh Roshan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Yes Boss",
      "Year": 1997,
      "Role": "Rahul Joshi",
      "Director": "Aziz Mirza",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Pardes",
      "Year": 1997,
      "Role": "Arjun Sagar",
      "Director": "Subhash Ghai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Dil To Pagal Hai",
      "Year": 1997,
      "Role": "Rahul",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Duplicate",
      "Year": 1998,
      "Role": "Bablu Chaudhry / Manu Dada",
      "Director": "Mahesh Bhatt",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Achanak",
      "Year": 1998,
      "Role": "Himself",
      "Director": "Naresh Malhotra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Dil Se..",
      "Year": 1998,
      "Role": "Amarkant Verma",
      "Director": "Mani Ratnam",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Kuch Kuch Hota Hai",
      "Year": 1998,
      "Role": "Rahul Khanna",
      "Director": "Karan Johar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Baadshah",
      "Year": 1999,
      "Role": "Raj (Baadshah)",
      "Director": "Abbas-Mustan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Phir Bhi Dil Hai Hindustani",
      "Year": 2000,
      "Role": "Ajay Bakshi",
      "Director": "Aziz Mirza",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Hey Ram",
      "Year": 2000,
      "Role": "Amjad Khan",
      "Director": "Kamal Haasan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Josh",
      "Year": 2000,
      "Role": "Max \"Maxy\" Dias",
      "Director": "Mansoor Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Har Dil Jo Pyar Karega",
      "Year": 2000,
      "Role": "Rahul",
      "Director": "Raj Kanwar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Mohabbatein",
      "Year": 2000,
      "Role": "Raj Aryan Malhotra",
      "Director": "Aditya Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Gaja Gamini",
      "Year": 2000,
      "Role": "Himself",
      "Director": "M. F. Husain",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "One 2 Ka 4",
      "Year": 2001,
      "Role": "Arun Verma",
      "Director": "Shashilal K. Nair",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "A?oka",
      "Year": 2001,
      "Role": "Ashoka Maurya (Pawan)",
      "Director": "Santosh Sivan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Kabhi Khushi Kabhie Gham...",
      "Year": 2001,
      "Role": "Rahul Raichand",
      "Director": "Karan Johar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Hum Tumhare Hain Sanam",
      "Year": 2002,
      "Role": "Gopal",
      "Director": "K. S. Adhiyaman",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Devdas",
      "Year": 2002,
      "Role": "Devdas Mukherjee",
      "Director": "Sanjay Leela Bhansali",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Shakti: The Power",
      "Year": 2002,
      "Role": "Jai Singh",
      "Director": "Pasupuleti Krishna Vamsi",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Saathiya",
      "Year": 2002,
      "Role": "Yeshwant Rao",
      "Director": "Shaad Ali",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Chalte Chalte",
      "Year": 2003,
      "Role": "Raj Mathur",
      "Director": "Aziz Mirza",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Kal Ho Naa Ho",
      "Year": 2003,
      "Role": "Aman Mathur",
      "Director": "Nikhil Advani",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Yeh Lamhe Judaai Ke",
      "Year": 2004,
      "Role": "Dushant",
      "Director": "Birendra Nath Tiwari",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Main Hoon Na",
      "Year": 2004,
      "Role": "Ram Prasad Sharma",
      "Director": "Farah Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Veer-Zaara",
      "Year": 2004,
      "Role": "Veer Pratap Singh",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Swades",
      "Year": 2004,
      "Role": "Mohan Bhargav",
      "Director": "Ashutosh Gowariker",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Kuchh Meetha Ho Jaye",
      "Year": 2005,
      "Role": "Himself",
      "Director": "Samar Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Kaal",
      "Year": 2005,
      "Role": "Unknown",
      "Director": "Soham Shah",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Silsiilay",
      "Year": 2005,
      "Role": "Sutradhar",
      "Director": "Khalid Mohamed",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Paheli",
      "Year": 2005,
      "Role": "Kishanlal / The Ghost",
      "Director": "Amol Palekar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Alag",
      "Year": 2006,
      "Role": "Unknown",
      "Director": "Ashu Trikha",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Kabhi Alvida Naa Kehna",
      "Year": 2006,
      "Role": "Dev Saran",
      "Director": "Karan Johar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Don – The Chase Begins Again",
      "Year": 2006,
      "Role": "Don / Vijay",
      "Director": "Farhan Akhtar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "I See You",
      "Year": 2006,
      "Role": "Unknown",
      "Director": "Vivek Agrawal",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Chak De! India",
      "Year": 2007,
      "Role": "Kabir Khan",
      "Director": "Shimit Amin",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Heyy Babyy",
      "Year": 2007,
      "Role": "Raj Malhotra",
      "Director": "Sajid Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Om Shanti Om",
      "Year": 2007,
      "Role": "Om Kapoor / \nOm Prakash Makhija",
      "Director": "Farah Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Shaurya",
      "Year": 2008,
      "Role": "",
      "Director": "Samar Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Krazzy 4",
      "Year": 2008,
      "Role": "Unknown",
      "Director": "Jaideep Sen",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Bhoothnath",
      "Year": 2008,
      "Role": "Aditya Sharma",
      "Director": "Vivek Sharma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Kismat Konnection",
      "Year": 2008,
      "Role": "",
      "Director": "Aziz Mirza",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Rab Ne Bana Di Jodi",
      "Year": 2008,
      "Role": "Surinder Sahni (Raj Kapoor)",
      "Director": "Aditya Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Luck by Chance",
      "Year": 2009,
      "Role": "Himself",
      "Director": "Zoya Akhtar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Billu",
      "Year": 2009,
      "Role": "Sahir Khan",
      "Director": "Priyadarshan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Dulha Mil Gaya",
      "Year": 2010,
      "Role": "Pawan Raj Gandhi",
      "Director": "Mudassar Aziz",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "My Name Is Khan",
      "Year": 2010,
      "Role": "Rizwan Khan",
      "Director": "Karan Johar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Shahrukh Bola \"Khoobsurat Hai Tu",
      "Year": 2010,
      "Role": "Himself",
      "Director": "Makarand Deshpande",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Always Kabhi Kabhi",
      "Year": 2011,
      "Role": "Unknown",
      "Director": "Roshan Abbas",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Love Breakups Zindagi",
      "Year": 2011,
      "Role": "Himself",
      "Director": "Sahil Sangha",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Ra.One",
      "Year": 2011,
      "Role": "G.One / Shekhar Subramanium",
      "Director": "Anubhav Sinha",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Don 2",
      "Year": 2011,
      "Role": "Don",
      "Director": "Farhan Akhtar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Student of the Year",
      "Year": 2012,
      "Role": "",
      "Director": "Karan Johar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Jab Tak Hai Jaan",
      "Year": 2012,
      "Role": "Samar Anand",
      "Director": "Yash Chopra",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Bombay Talkies",
      "Year": 2013,
      "Role": "Himself",
      "Director": "Various",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Chennai Express",
      "Year": 2013,
      "Role": "Rahul Y.Y Mithaiwala",
      "Director": "Rohit Shetty",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Bhoothnath Returns",
      "Year": 2014,
      "Role": "Aditya Sharma",
      "Director": "Nitesh Tiwari",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Happy New Year",
      "Year": 2014,
      "Role": "Chandramohan \"Charlie\" Manohar Sharma",
      "Director": "Farah Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Dilwale",
      "Year": 2015,
      "Role": "Raj \"Kaali\" Randhir Bakshi",
      "Director": "Rohit Shetty",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Fan",
      "Year": 2016,
      "Role": "Aryan Khanna / \nGaurav Chandna",
      "Director": "Maneesh Sharma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Tutak Tutak Tutiya",
      "Year": 2016,
      "Role": "",
      "Director": "A. L. Vijay",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Ae Dil Hai Mushkil",
      "Year": 2016,
      "Role": "Tahir Taliyar Khan",
      "Director": "Karan Johar",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Dear Zindagi",
      "Year": 2016,
      "Role": "Dr.Jehangir \"Jug\" Khan",
      "Director": "Gauri Shinde",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Raees",
      "Year": 2017,
      "Role": "Raees Alam",
      "Director": "Rahul Dholakia",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Tubelight",
      "Year": 2017,
      "Role": "Gogo Pasha",
      "Director": "Kabir Khan",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Jab Harry Met Sejal",
      "Year": 2017,
      "Role": "Harinder \"Harry\" Singh Nehra",
      "Director": "Imtiaz Ali",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Zero",
      "Year": 2018,
      "Role": "Bauaa Singh",
      "Director": "Anand L. Rai",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "The Zoya Factor",
      "Year": 2019,
      "Role": "Narrator",
      "Director": "Abhishek Sharma",
      "Language": "Hindi"
    },
    {
      "Industry": "Hindi",
      "Actor": "Shahrukh",
      "Title": "Rocketry: The Nambi Effect",
      "Year": 2022,
      "Role": "Himself",
      "Director": "R. Madhavan",
      "Language": "Hindi"
    }
  ];

  constructor() { }

  getIndustries(): Array<Industry> {
    return this.industries;
  }

  getActors(): Array<Actor> {
    return this.actors;
  }

  getMovies(): Array<Movie> {
    let movies = new Array<Movie>();
    movies = movies.concat(this.mohanlal);
    movies = movies.concat(this.mammootty);
    movies = movies.concat(this.rajini);
    movies = movies.concat(this.kamal);
    movies = movies.concat(this.aamir);
    movies = movies.concat(this.amitabh);
    movies = movies.concat(this.shahrukh);
    return movies;
  }
}
