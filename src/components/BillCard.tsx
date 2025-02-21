import { Button } from "$lib/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
import { ThumbsUp, ThumbsDown, MessageCircle, Minus } from 'lucide-react';
import * as Tooltip from "$lib/components/ui/tooltip";
import { useMemo } from 'react';

interface BillProps {
  bill: {
    title: string;
    introducedBy: string;
    description: string;
  }
}

export default function BillCard({ bill }: BillProps) {
  // Convert $derived to useMemo
  const totalVotes = useMemo(() => Math.floor(Math.random() * 1000) + 100, []); // Random total between 100-1100
  const yesPercentage = useMemo(() => Math.floor(Math.random() * 40) + 30, []); // Random 30-70%
  const noPercentage = useMemo(() => Math.floor(Math.random() * 30) + 10, []); // Random 10-40%
  const neutralPercentage = useMemo(() => Math.floor(Math.random() * 30) + 10, []); // Random 10-40%

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{bill.title}</CardTitle>
        <p className="text-sm text-muted-foreground">Introduced by {bill.introducedBy}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{bill.description}</p>
        <div className="flex flex-col space-y-2 mb-4">
          <span className="text-sm font-semibold">Voting Statistics:</span>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-green-500"
                style={{ width: `${yesPercentage}%` }}
              />
              <div
                className="h-full bg-gray-400"
                style={{ width: `${neutralPercentage}%` }}
              />
              <div
                className="h-full bg-red-500"
                style={{ width: `${noPercentage}%` }}
              />
            </div>
          </div>
          <div className="flex justify-between text-xs">
            <span>{yesPercentage.toFixed(1)}% Yes</span>
            <span>{neutralPercentage.toFixed(1)}% Neutral</span>
            <span>{noPercentage.toFixed(1)}% No</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-2">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline" size="icon" className="border-green-500 text-green-700 hover:bg-green-50">
                  <ThumbsUp className="w-4 h-4" />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>Vote Yes</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline" size="icon" className="border-gray-400 text-gray-700 hover:bg-gray-50">
                  <Minus className="w-4 h-4" />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>Vote Neutral</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline" size="icon" className="border-red-500 text-red-700 hover:bg-red-50">
                  <ThumbsDown className="w-4 h-4" />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>Vote No</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline" size="icon" className="border-blue-500 text-blue-700 hover:bg-blue-50">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>Comment</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </CardFooter>
    </Card>
  );
}

