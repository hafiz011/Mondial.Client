import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpRight, TrendingUp } from "lucide-react"

export default function InvestmentDashboard() {
  return (
    <div className="space-y-8">
      {/* 1. Quick Stats - 3 Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { label: "Total Raised", value: "$970K", trend: "+8.2%" },
          { label: "Total Raised", value: "$970K", trend: "+8.2%" },
          { label: "Total Raised", value: "$970K", trend: "+8.2%" },
        ].map((item, i) => (
          <Card key={i} className="border shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </span>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-500">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.trend}</span>
                </div>
              </div>
              <div className="text-4xl font-bold tracking-tight">
                {item.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 2. Investor Insights Table */}
      <Card className="border shadow">
        <CardHeader className="pb-4">
          <CardTitle>Investor Insights</CardTitle>
          <p className="text-sm text-muted-foreground">
            Explore investment prospects and manage your investments
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                    Investor
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                    Concept
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                    Investment
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                    Share
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">
                    Stage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  {
                    name: "Aaliyah Taylor",
                    email: "aaliyah.taylor@gmail.com",
                    concept: "Smart City Energy Grid",
                    date: "22 January 2027",
                    amount: "$90,000",
                    share: "4.00%",
                    stage: "Seed",
                  },
                  {
                    name: "Finley Thompson",
                    email: "finley.thompson@gmail.com",
                    concept: "Sustainable Agriculture Tech",
                    date: "15 February 2027",
                    amount: "$75,000",
                    share: "3.25%",
                    stage: "Series A",
                  },
                  {
                    name: "Harper Wilson",
                    email: "harper.wilson@gmail.com",
                    concept: "Wearable Health Monitoring",
                    date: "01 January 2027",
                    amount: "$110,000",
                    share: "5.00%",
                    stage: "Angel",
                  },
                  {
                    name: "Leo Wright",
                    email: "leo.wright@gmail.com",
                    concept: "Eco-Friendly Packaging Solutions",
                    date: "12 February 2027",
                    amount: "$120,000",
                    share: "5.25%",
                    stage: "Series B",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`https://i.pravatar.cc/40?u=${row.name}`} />
                          <AvatarFallback>{row.name.slice(0,2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{row.name}</div>
                          <div className="text-xs text-muted-foreground">{row.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {row.concept}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {row.date}
                    </td>
                    <td className="px-6 py-4 font-medium">{row.amount}</td>
                    <td className="px-6 py-4 text-sm">{row.share}</td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className="text-xs">
                        {row.stage}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* 3. Equity Distribution by Idea */}
      <Card className="border shadow">
        <CardHeader className="pb-4">
          <CardTitle>Equity Distribution by Idea</CardTitle>
          <p className="text-sm text-muted-foreground">
            Manage your ideas in this space
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            {
              title: "Launch a Mobile Pet Grooming Service",
              soldPercent: 12,
              totalPercent: 25,
              soldText: "Sold 12.50% ($15,000)",
              availableText: "Available 13.00% ($40,000)",
              status: "normal",
            },
            {
              title: "Develop an AI-Powered Language Tutor",
              soldPercent: 22,
              totalPercent: 30,
              soldText: "Sold 22.50%",
              availableText: "Available 23.00%",
              status: "normal",
            },
            {
              title: "Establish a Vertical Hydroponics System",
              soldPercent: 100,
              totalPercent: 100,
              soldText: "100.00% of 100.00% achieved",
              availableText: "",
              status: "complete",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="space-y-3 rounded-lg border bg-card/50 p-6 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-primary/10 p-2">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {item.soldPercent}% sold of {item.totalPercent}%
                </div>
              </div>

              <div className="relative h-3 rounded-full bg-muted overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-primary transition-all duration-500"
                  style={{ width: `${item.soldPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{item.soldText}</span>
                {item.availableText && <span>{item.availableText}</span>}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}