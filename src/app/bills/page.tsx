import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import BillCard from "@/components/BillCard";
import { Search, Filter, SortAsc } from 'lucide-react';
import prisma from "@/lib/db";
// This is a Server Component, so we can fetch data directly
async function getBills() {
    const bills = await prisma.BillFederal.findMany()
    console.log('bills: ', bills)
    return bills
}

export default async function BillsPage() {
  const bills = await getBills();

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-8 rounded-t-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Discover Bills</h1>
        <p className="text-center mb-6">Explore and engage with the latest legislative proposals</p>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Search bills..."
            />
          </div>
          <div className="flex space-x-4 w-full md:w-auto">
            <Select defaultValue="All">
              <SelectTrigger className="w-full md:w-40 bg-white/20 border-2 border-white text-white rounded-full focus:ring-2 focus:ring-white">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Levels</SelectItem>
                <SelectItem value="Federal">Federal</SelectItem>
                <SelectItem value="State">State</SelectItem>
                <SelectItem value="Local">Local</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="name">
              <SelectTrigger className="w-full md:w-40 bg-white/20 border-2 border-white text-white rounded-full focus:ring-2 focus:ring-white">
                <SortAsc className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="votes">Most Voted</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-md">
        {bills.map((bill) => (
          <BillCard key={bill.id} bill={bill} />
        ))}
      </div>
    </div>
  );
}
  
  