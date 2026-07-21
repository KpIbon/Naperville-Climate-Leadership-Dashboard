export type Organization = {
  id: number;
  name: string;
  category: string;
  industry: string;
  certification: string;
  reach: number;
  engagement: number;
  recommendation: string;
  contribution: number;
  impact: number;
  initials: string;
  color: string;
  description: string;
  neighborhood: string;
  address: string;
  lat: number;
  lng: number;
  employees: number;
  visibility: number;
  traffic: number;
  sustainability: number;
  influence: number;
  level: 'Platinum' | 'Gold' | 'Silver' | 'Explorer';
};

const places: Array<[string, string, string, string, number, number, number]> = [
  ['Edward Hospital', 'Healthcare', 'East Sector', '801 S Washington St', 41.7674, -88.1477, 2400],
  ['North Central College', 'University', 'Downtown', '30 N Brainard St', 41.7759, -88.1452, 800],
  ['Nokia Naperville', 'Technology', 'I-88 Corridor', '200 S Naperville Rd', 41.7824, -88.2039, 2800],
  ['Naperville Public Library', 'Public service', 'Downtown', '301 S Washington St', 41.7714, -88.1488, 180],
  ['Naperville Park District', 'Public service', 'Riverwalk', '320 W Jackson Ave', 41.7728, -88.1584, 450],
  ['Indian Prairie School District 204', 'School', 'South Sector', '780 Shoreline Dr', 41.7361, -88.2225, 3200],
  ['Naperville Community Unit School District 203', 'School', 'West Sector', '203 W Hillside Rd', 41.7741, -88.1583, 2300],
  ['KeHE Distributors', 'Manufacturing', 'I-88 Corridor', '1245 E Diehl Rd', 41.7928, -88.1116, 1600],
  ['Moser Consulting', 'Professional services', 'Downtown', '175 W Jackson Ave', 41.7725, -88.1604, 230],
  ['Hotel Arista', 'Hospitality', 'I-88 Corridor', '2139 CityGate Ln', 41.7977, -88.2046, 180],
  ['Calamos Investments', 'Finance', 'I-88 Corridor', '2020 Calamos Ct', 41.7935, -88.2105, 260],
  ['PNC Bank Naperville', 'Bank', 'Downtown', '150 W Jefferson Ave', 41.773, -88.152, 55],
  ['Chase Bank - Downtown Naperville', 'Bank', 'Downtown', '5 S Washington St', 41.7741, -88.1476, 42],
  ['City of Naperville', 'Public service', 'Downtown', '400 S Eagle St', 41.7688, -88.1458, 1300],
  ['Naper Settlement', 'Nonprofit', 'Downtown', '523 S Webster St', 41.7684, -88.1538, 70],
  ['DuPage Children’s Museum', 'Nonprofit', 'East Sector', '301 N Washington St', 41.7801, -88.1475, 85],
  ['Loaves & Fishes Community Services', 'Nonprofit', 'South Sector', '1871 High Grove Ln', 41.7341, -88.1886, 120],
  ['Naperville Area Chamber of Commerce', 'Nonprofit', 'I-88 Corridor', '55 S Main St', 41.774, -88.1472, 32],
  ['Grace United Methodist Church', 'Faith organization', 'West Sector', '300 E Gartner Rd', 41.741, -88.1415, 95],
  ['St. Raphael Catholic Church', 'Faith organization', 'South Sector', '1215 Modaff Rd', 41.746, -88.139, 105],
  ['Islamic Center of Naperville', 'Faith organization', 'South Sector', '25W530 75th St', 41.733, -88.184, 75],
  ['Good Shepherd Lutheran Church', 'Faith organization', 'West Sector', '1310 Shepherd Dr', 41.742, -88.185, 55],
  ['Mesón Sabika', 'Restaurant', 'Downtown', '102 W Weaver St', 41.773, -88.149, 75],
  ['Lou Malnati’s Naperville', 'Restaurant', 'Downtown', '131 W Jefferson Ave', 41.773, -88.151, 45],
  ['Quiubo', 'Restaurant', 'Downtown', '120 Water St', 41.773, -88.149, 35],
  ['Sullivan’s Steakhouse', 'Restaurant', 'Downtown', '244 S Main St', 41.770, -88.147, 80],
  ['Hugo’s Frog Bar & Fish House', 'Restaurant', 'Downtown', '55 S Main St', 41.774, -88.147, 70],
  ['Q-BBQ Naperville', 'Restaurant', 'Downtown', '1030 N Washington St', 41.783, -88.148, 38],
  ['Rosebud Italian Specialties', 'Restaurant', 'Downtown', '138 S Washington St', 41.772, -88.148, 42],
  ['Sparrow Coffee', 'Restaurant', 'Downtown', '102 S Webster St', 41.773, -88.153, 25],
  ['Cookie Dough Creations', 'Restaurant', 'Riverwalk', '16 W Jefferson Ave', 41.774, -88.148, 18],
  ['Kimmerle & Associates', 'Professional services', 'Downtown', '175 W Jackson Ave', 41.772, -88.160, 58],
  ['BMO Naperville', 'Bank', 'West Sector', '2728 W 75th St', 41.734, -88.195, 48],
  ['Old Second National Bank', 'Bank', 'Downtown', '555 S Washington St', 41.768, -88.148, 62],
  ['Naperville Animal Hospital', 'Healthcare', 'West Sector', '1003 E Ogden Ave', 41.786, -88.134, 62],
  ['Graham’s Chocolate', 'Retail', 'Downtown', '119 S Main St', 41.772, -88.148, 32],
  ['Anderson’s Bookshop', 'Retail', 'Downtown', '123 W Jefferson Ave', 41.773, -88.151, 38],
  ['Shakou Naperville', 'Restaurant', 'Downtown', '22 E Chicago Ave', 41.775, -88.148, 48],
  ['The White Chocolate Grill', 'Restaurant', 'I-88 Corridor', '1803 Freedom Dr', 41.789, -88.206, 95],
  ['Topgolf Naperville', 'Hospitality', 'I-88 Corridor', '3211 Odyssey Ct', 41.802, -88.205, 210],
  ['Naperville Running Company', 'Retail', 'Downtown', '34 W Jefferson Ave', 41.774, -88.149, 18],
  ['Wentz Concert Hall', 'Arts & culture', 'Downtown', '171 E Chicago Ave', 41.776, -88.144, 50],
  ['BrightSide Theatre', 'Arts & culture', 'Downtown', '23 W Jefferson Ave', 41.774, -88.149, 22],
  ['Naperville Heritage Society', 'Nonprofit', 'Downtown', '523 S Webster St', 41.768, -88.154, 30],
  ['Amdur Productions', 'Professional services', 'I-88 Corridor', '1751 W Diehl Rd', 41.786, -88.197, 110],
  ['Fermi Research Alliance', 'Technology', 'I-88 Corridor', '111 Rte 59', 41.840, -88.242, 180],
  ['TEKsystems', 'Technology', 'I-88 Corridor', '1751 W Diehl Rd', 41.786, -88.197, 190],
  ['Cress Creek Country Club', 'Hospitality', 'East Sector', '1215 Royal St George Dr', 41.752, -88.126, 110],
  ['Naperville Country Club', 'Hospitality', 'East Sector', '25W570 Chicago Ave', 41.782, -88.125, 80],
  ['The Learning Experience', 'School', 'South Sector', '1715 N Aurora Rd', 41.788, -88.165, 42],
  ['Keller Science Academy', 'School', 'South Sector', '700 N Main St', 41.785, -88.147, 140],
  ['Neuqua Valley High School', 'School', 'South Sector', '2360 95th St', 41.719, -88.205, 260],
  ['Naperville Central High School', 'School', 'West Sector', '440 W Aurora Ave', 41.765, -88.158, 230],
  ['Naperville North High School', 'School', 'North Sector', '899 N Mill St', 41.786, -88.148, 230],
  ['St. Francis Hospital', 'Healthcare', 'West Sector', '1101 E Sherman Ave', 41.784, -88.134, 1400],
  ['Northwestern Medicine Immediate Care', 'Healthcare', 'South Sector', '1300 N Main St', 41.791, -88.147, 95],
  ['Rush Copley Medical Center', 'Healthcare', 'South Sector', '2000 Ogden Ave', 41.795, -88.191, 1700],
  ['Lisle Savings Bank', 'Bank', 'West Sector', '1515 N Naper Blvd', 41.794, -88.125, 70],
  ['Wipfli LLP', 'Professional services', 'I-88 Corridor', '1751 W Diehl Rd', 41.786, -88.197, 180],
  ['Klein, Thorpe & Jenkins', 'Professional services', 'Downtown', '20 N Wacker Dr', 41.775, -88.149, 90],
  ['Naperville Dental Specialists', 'Healthcare', 'East Sector', '1520 N Naper Blvd', 41.795, -88.126, 40],
  ['The Branch Naperville', 'Faith organization', 'South Sector', '501 E 5th Ave', 41.766, -88.142, 50],
  ['Compass Church', 'Faith organization', 'South Sector', '1551 Hobson Rd', 41.748, -88.164, 70],
  ['Little Friends', 'Nonprofit', 'West Sector', '140 N Wright St', 41.779, -88.162, 240],
  ['360 Youth Services', 'Nonprofit', 'South Sector', '1320 N Route 59', 41.793, -88.201, 125],
  ['Naperville CARES', 'Nonprofit', 'Downtown', '527 S Washington St', 41.768, -88.148, 25],
  ['Naper Aero Club', 'Nonprofit', 'North Sector', '1S151 Winfield Rd', 41.738, -88.184, 45],
  ['Wheaton Eye Clinic', 'Healthcare', 'West Sector', '2015 N Main St', 41.802, -88.147, 52],
  ['Burlington Coat Factory', 'Retail', 'South Sector', '2904 Aurora Ave', 41.761, -88.195, 150],
  ['Whole Foods Market Naperville', 'Retail', 'I-88 Corridor', '2607 W 75th St', 41.733, -88.191, 220],
  ['Trader Joe’s Naperville', 'Retail', 'West Sector', '1232 Naper Blvd', 41.793, -88.126, 100],
  ['Mariano’s Naperville', 'Retail', 'South Sector', '1300 S Naper Blvd', 41.748, -88.127, 300],
  ['Jewel-Osco Naperville', 'Retail', 'West Sector', '2855 W 95th St', 41.715, -88.196, 180],
  ['Verilife Naperville', 'Retail', 'I-88 Corridor', '3S450 Illinois Rte 59', 41.763, -88.204, 40],
  ['Wilson Sporting Goods', 'Manufacturing', 'I-88 Corridor', '1301 N Naperville Rd', 41.794, -88.203, 950],
  ['Office Revolution', 'Manufacturing', 'I-88 Corridor', '1751 W Diehl Rd', 41.786, -88.197, 130],
  ['Naperville Parkview Plaza', 'Retail', 'East Sector', '2940 Audrey Blvd', 41.759, -88.117, 75]
];

const levels: Organization['level'][] = ['Platinum', 'Gold', 'Silver', 'Explorer'];
const palette = ['#246a57', '#2d7e67', '#7a9f42', '#d78a50', '#5d7191'];

export const organizations: Organization[] = places.map(([name, category, neighborhood, address, lat, lng, employees], index) => {
  const visibility = 42 + ((index * 13) % 54);
  const traffic = 38 + ((index * 17) % 59);
  const sustainability = 28 + ((index * 19) % 68);
  const influence = Math.round((employees > 500 ? 92 : employees > 150 ? 74 : 52) + ((index * 7) % 12));
  const score = Math.round(visibility * 0.2 + traffic * 0.2 + sustainability * 0.2 + influence * 0.4);
  const level = score > 84 ? 'Platinum' : score > 70 ? 'Gold' : score > 54 ? 'Silver' : 'Explorer';
  const contribution = level === 'Platinum' ? 12500 + (index % 4) * 1500 : level === 'Gold' ? 6500 + (index % 3) * 750 : level === 'Silver' ? 2500 + (index % 4) * 250 : 0;
  return {
    id: index + 1, name, category, industry: category, certification: level, neighborhood, address, lat, lng, employees, visibility, traffic, sustainability, influence,
    level, contribution, impact: Math.round(contribution / 100 * 1.8), engagement: score, recommendation: score > 80 ? 'Peer messenger' : score > 65 ? 'Warm introduction' : 'Education first', reach: Math.round(employees * (traffic / 10)), initials: name.split(/\s+/).map((part) => part[0]).slice(0, 2).join(''), color: palette[index % palette.length],
    description: `${category} organization serving the Naperville community. Demonstration profile uses public location and sector information.`
  };
});

export const participatingOrganizations = organizations.filter((organization) => organization.level !== 'Explorer');
export const totalContributions = participatingOrganizations.reduce((sum, organization) => sum + organization.contribution, 0);
export const engagementRanked = [...organizations].sort((a, b) => (b.visibility * 0.2 + b.traffic * 0.2 + b.sustainability * 0.2 + b.influence * 0.4) - (a.visibility * 0.2 + a.traffic * 0.2 + a.sustainability * 0.2 + a.influence * 0.4));

export const contributionTrend = [
  { month: 'Jan', contributions: 21800, members: 31 }, { month: 'Feb', contributions: 25400, members: 34 }, { month: 'Mar', contributions: 29200, members: 38 },
  { month: 'Apr', contributions: 34800, members: 43 }, { month: 'May', contributions: 42700, members: 49 }, { month: 'Jun', contributions: 51800, members: 57 },
  { month: 'Jul', contributions: 63500, members: 64 }
];

export const impactTrend = [
  { month: 'Jan', co2: 24, savings: 18 }, { month: 'Feb', co2: 29, savings: 21 }, { month: 'Mar', co2: 35, savings: 27 },
  { month: 'Apr', co2: 42, savings: 33 }, { month: 'May', co2: 51, savings: 41 }, { month: 'Jun', co2: 63, savings: 49 }, { month: 'Jul', co2: 78, savings: 61 }
];

export const activity = [
  { organization: 'Edward Hospital', action: 'advanced to Platinum', time: '18 min ago', color: '#e4f3ec' },
  { organization: 'Mesón Sabika', action: 'joined the Green Business Directory', time: '2 hrs ago', color: '#fff1e9' },
  { organization: 'North Central College', action: 'funded a solar installation', time: 'Yesterday', color: '#eef1ff' },
  { organization: 'Loaves & Fishes', action: 'completed a community impact report', time: 'Yesterday', color: '#f5f0df' }
];

export const sourceNotes = ['City of Naperville public information', 'U.S. Census / ACS community statistics', 'EPA ENERGY STAR and DOE program references', 'OpenStreetMap geospatial locations'];
