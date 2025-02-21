import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.billFederal.deleteMany()

  // Sample bills data
  const bills = [
    {
      congress: "118",
      billType: "hr",
      billNumber: "2670",
      title: "FY2024 Agriculture Appropriations Bill",
      description: "Making appropriations for Agriculture, Rural Development, Food and Drug Administration, and Related Agencies programs for the fiscal year ending September 30, 2024.",
      introducedDate: new Date("2023-04-10"),
      originChamber: "House",
      status: "Introduced",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/house-bill/2670",
      sponsor: "Rep. Simpson, Michael K. [R-ID-2]",
      committees: ["House Committee on Appropriations"],
      subjects: ["Agriculture and Food", "Government Operations and Politics", "Economics and Public Finance"]
    },
    {
      congress: "118",
      billType: "s",
      billNumber: "1289",
      title: "Artificial Intelligence Research, Innovation, and Accountability Act of 2023",
      description: "To establish a framework for artificial intelligence research, development, and deployment.",
      introducedDate: new Date("2023-04-25"),
      originChamber: "Senate",
      status: "In Committee",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/senate-bill/1289",
      sponsor: "Sen. Klobuchar, Amy [D-MN]",
      committees: ["Senate Commerce, Science, and Transportation Committee"],
      subjects: ["Science, Technology, Communications", "Commerce"]
    },
    {
      congress: "118",
      billType: "hr",
      billNumber: "5376",
      title: "Protecting Americans from Foreign Adversary Controlled Applications Act",
      description: "To protect Americans from the threat posed by certain foreign adversary controlled applications.",
      introducedDate: new Date("2023-09-12"),
      originChamber: "House",
      status: "Passed House",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/house-bill/5376",
      sponsor: "Rep. McMorris Rodgers, Cathy [R-WA-5]",
      committees: ["House Energy and Commerce Committee"],
      subjects: ["International Affairs", "Science, Technology, Communications"]
    },
    {
      congress: "118",
      billType: "s",
      billNumber: "2024",
      title: "Clean Energy Innovation Act",
      description: "To promote research and development in clean energy technologies.",
      introducedDate: new Date("2023-06-15"),
      originChamber: "Senate",
      status: "In Committee",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/senate-bill/2024",
      sponsor: "Sen. Heinrich, Martin [D-NM]",
      committees: ["Senate Energy and Natural Resources Committee"],
      subjects: ["Environmental Protection", "Energy", "Science, Technology, Communications"]
    },
    {
      congress: "118",
      billType: "hr",
      billNumber: "3456",
      title: "Veterans Healthcare Enhancement Act",
      description: "To improve healthcare services for veterans and their families.",
      introducedDate: new Date("2023-05-20"),
      originChamber: "House",
      status: "Passed House",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/house-bill/3456",
      sponsor: "Rep. Takano, Mark [D-CA-39]",
      committees: ["House Veterans Affairs Committee"],
      subjects: ["Armed Forces and National Security", "Health"]
    },
    {
      congress: "118",
      billType: "s",
      billNumber: "789",
      title: "Cybersecurity Infrastructure Protection Act",
      description: "To strengthen the nation's cybersecurity infrastructure and protect against cyber threats.",
      introducedDate: new Date("2023-03-15"),
      originChamber: "Senate",
      status: "Passed Senate",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/senate-bill/789",
      sponsor: "Sen. Warner, Mark [D-VA]",
      committees: ["Senate Intelligence Committee"],
      subjects: ["Science, Technology, Communications", "National Security"]
    },
    {
      congress: "118",
      billType: "hr",
      billNumber: "4567",
      title: "Small Business Relief Act",
      description: "To provide relief and support for small businesses affected by economic challenges.",
      introducedDate: new Date("2023-07-08"),
      originChamber: "House",
      status: "Introduced",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/house-bill/4567",
      sponsor: "Rep. Williams, Roger [R-TX-25]",
      committees: ["House Small Business Committee"],
      subjects: ["Commerce", "Economics and Public Finance"]
    },
    {
      congress: "118",
      billType: "s",
      billNumber: "3333",
      title: "Education Modernization Act",
      description: "To modernize educational infrastructure and promote digital learning.",
      introducedDate: new Date("2023-08-01"),
      originChamber: "Senate",
      status: "In Committee",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/senate-bill/3333",
      sponsor: "Sen. Murphy, Christopher [D-CT]",
      committees: ["Senate Education Committee"],
      subjects: ["Education", "Science, Technology, Communications"]
    },
    {
      congress: "118",
      billType: "hr",
      billNumber: "1111",
      title: "Infrastructure Investment Act",
      description: "To fund critical infrastructure projects across the United States.",
      introducedDate: new Date("2023-02-14"),
      originChamber: "House",
      status: "Passed House",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/house-bill/1111",
      sponsor: "Rep. DeFazio, Peter [D-OR-4]",
      committees: ["House Transportation and Infrastructure Committee"],
      subjects: ["Transportation and Public Works", "Economics and Public Finance"]
    },
    {
      congress: "118",
      billType: "s",
      billNumber: "2222",
      title: "Climate Action Now Act",
      description: "To address climate change and promote renewable energy adoption.",
      introducedDate: new Date("2023-05-01"),
      originChamber: "Senate",
      status: "In Committee",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/senate-bill/2222",
      sponsor: "Sen. Markey, Edward J. [D-MA]",
      committees: ["Senate Environment and Public Works Committee"],
      subjects: ["Environmental Protection", "Energy"]
    },
    {
      congress: "118",
      billType: "hr",
      billNumber: "6789",
      title: "Healthcare Affordability Act",
      description: "To reduce healthcare costs and expand access to affordable healthcare.",
      introducedDate: new Date("2023-09-20"),
      originChamber: "House",
      status: "Introduced",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/house-bill/6789",
      sponsor: "Rep. Pallone, Frank [D-NJ-6]",
      committees: ["House Energy and Commerce Committee"],
      subjects: ["Health", "Commerce"]
    },
    {
      congress: "118",
      billType: "s",
      billNumber: "4444",
      title: "Rural Development Act",
      description: "To promote economic development in rural communities.",
      introducedDate: new Date("2023-07-15"),
      originChamber: "Senate",
      status: "Passed Senate",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/senate-bill/4444",
      sponsor: "Sen. Ernst, Joni [R-IA]",
      committees: ["Senate Agriculture Committee"],
      subjects: ["Agriculture and Food", "Economics and Public Finance"]
    },
    {
      congress: "118",
      billType: "hr",
      billNumber: "8901",
      title: "Mental Health Services Enhancement Act",
      description: "To improve access to mental health services and support.",
      introducedDate: new Date("2023-10-05"),
      originChamber: "House",
      status: "In Committee",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/house-bill/8901",
      sponsor: "Rep. Porter, Katie [D-CA-47]",
      committees: ["House Energy and Commerce Committee"],
      subjects: ["Health", "Social Welfare"]
    },
    {
      congress: "118",
      billType: "s",
      billNumber: "5555",
      title: "National Security Enhancement Act",
      description: "To strengthen national security and defense capabilities.",
      introducedDate: new Date("2023-08-30"),
      originChamber: "Senate",
      status: "In Committee",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/senate-bill/5555",
      sponsor: "Sen. Reed, Jack [D-RI]",
      committees: ["Senate Armed Services Committee"],
      subjects: ["Armed Forces and National Security", "International Affairs"]
    },
    {
      congress: "118",
      billType: "hr",
      billNumber: "7777",
      title: "Student Debt Relief Act",
      description: "To provide relief for students with federal student loan debt.",
      introducedDate: new Date("2023-09-01"),
      originChamber: "House",
      status: "Introduced",
      lastUpdated: new Date(),
      externalSourceUrl: "https://www.congress.gov/bill/118th-congress/house-bill/7777",
      sponsor: "Rep. Scott, Bobby [D-VA-3]",
      committees: ["House Education and Labor Committee"],
      subjects: ["Education", "Economics and Public Finance"]
    }
  ]

  // Insert bills
  for (const bill of bills) {
    await prisma.billFederal.create({
      data: bill
    })
  }

  console.log('Database has been seeded with 15 sample federal bills')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 
