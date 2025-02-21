import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const features = [
  { title: "Bill Tracking", description: "Stay updated on the latest bills and their progress.", icon: "📊" },
  { title: "Voting System", description: "Express your opinion by voting on bills.", icon: "🗳️" },
  { title: "Community Discussions", description: "Engage in meaningful debates about policies.", icon: "💬" },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 gradient-bg text-transparent bg-clip-text">
        About PolicyFeel
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-political-blue">Our Mission</h2>
          <p className="text-lg mb-4">
            PolicyFeel is dedicated to empowering citizens by providing easy access to information about federal, state, and local bills. We believe that an informed populace is crucial for a thriving democracy.
          </p>
          <Button className="btn-primary">Learn More</Button>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden glass-effect">
          <Image
            src="https://placehold.co/600x400?text=People+discussing+policies"
            alt="People discussing policies"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-center text-political-red">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={feature.title} className={index % 2 === 0 ? "bg-political-blue" : "bg-political-red"}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">{feature.icon}</span>
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4 gradient-bg text-transparent bg-clip-text">
          Join the PolicyFeel Community
        </h2>
        <p className="text-lg mb-6">
          Be part of the change. Stay informed, vote on bills, and make your voice heard.
        </p>
        <Button className="btn-secondary">Sign Up Now</Button>
      </div>

      <Card className="glass-effect">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-political-blue">1M+</p>
              <p>Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-political-red">50K+</p>
              <p>Bills Tracked</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-political-blue">5M+</p>
              <p>Votes Cast</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
