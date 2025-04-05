import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Building,
  Calendar,
  CalendarDays,
  ChevronDown,
  SquareArrowOutUpRight,
} from "lucide-react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { SquarePen } from "lucide-react";
import { Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NavigationBar from "@/components/NavigationBar";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Profile() {
  return (
    <>
      <NavigationBar />
      <Tabs
        defaultValue="resumes"
        className="w-full max-w-screen-xl mx-auto px-4"
      >
        <TabsList className="flex justify-between w-full bg-transparent mt-3">
          <div className="flex space-x-2 bg-gray-500/10 rounded-lg p-1 ">
            <TabsTrigger value="resumes">
              <FileText />
              Resumes
            </TabsTrigger>
            <TabsTrigger value="applications">
              <Send />
              Applications
            </TabsTrigger>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className="flex" variant="outline">
                  Create New <ChevronDown />{" "}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="">New Resume</DropdownMenuItem>
                <DropdownMenuItem className="">
                  Track Application
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </TabsList>

        <TabsContent value="resumes">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <Card
                key={index}
                className="h-fit px-2    transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ease-in-out"
              >
                <CardHeader>
                  <CardTitle className="flex justify-between text-xl font-bold">
                    <h1>FullStack Developer</h1>
                    <div className="text-xs font-medium rounded-2xl border-2 p-2 flex justify-center items-center">
                      <CalendarDays className="h-5 w-5" />
                      <span className="pl-1"> Feb 20, 2023</span>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <div className="flex p-1">
                      <FileText className="h-5 w-5" />
                      <div className="px-1">2 experiences</div>
                    </div>
                    <div className="flex p-1">
                      <Send className="h-5 w-5" />
                      <div className="px-1">2 applications</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Button className="text-gray-600 bg-transparent border-2 border-gray-600/20 hover:bg-[rgb(13,148,136)] hover:text-white text-sm font-medium">
                      <SquarePen className="mr-1" />
                      Edit
                    </Button>
                    <Button className="text-red-500 bg-transparent border-2 border-gray-600/20   hover:bg-[rgb(13,148,136)] hover:text-white text-sm font-medium">
                      <Trash2 />
                    </Button>
                  </div>
                  <Button className="text-white text-sm font-medium bg-[#051538] hover:bg-[#28385d]">
                    <Send/>Track
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="h-fit px-2 rounded-none">
                <CardHeader>
                  <CardTitle className="flex justify-between text-xl font-bold">
                    <h1>Software Engineer</h1>
                    <div className="text-xs font-medium rounded-2xl border-2 p-2 flex justify-center items-center">
                      <span className="pl-1"> Interview</span>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <div className="flex p-1">
                      <Building className="h-5 w-5" />
                      <div className="px-1 font-semibold">Google</div>
                    </div>
                    <div className="flex p-1">
                      <Calendar className="h-5 w-5" />
                      <div className="px-1">Applied on Mar 25, 2025</div>
                    </div>
                    <div className="p-1">
                      <span className="font-bold">Resume:</span> Software
                      Developer Resume
                    </div>

                    <p className="text-black px-1 text-sm font-semibold">
                      Phone interview scheduled for March 5th
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Button className="text-gray-600 bg-transparent border-2 border-gray-600/20  hover:bg-[rgb(13,148,136)] hover:text-white text-sm font-medium">
                      <SquarePen className="mr-1" />
                      Edit
                    </Button>
                    <Button className="text-red-500 bg-transparent border-2 border-gray-600/20  hover:bg-[rgb(13,148,136)] hover:text-white text-sm font-medium">
                      <Trash2 />
                    </Button>
                  </div>
                  <Button className="text-white text-sm font-medium bg-[#051538] hover:bg-[#28385d]">
                    <SquareArrowOutUpRight />
                    View
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default Profile;
