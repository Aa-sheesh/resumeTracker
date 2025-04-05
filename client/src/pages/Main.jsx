import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Building,
  Calendar,
  CalendarDays,
  ChevronDown,
  FilePlus,
  FileText,
  Plus,
  Send,
  SquareArrowOutUpRight,
  SquarePen,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Bubbles from "@/components/Bubbles";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { Textarea } from "@/components/ui/textarea";
// import { Calendar as CalendarComponent } from "@/components/ui/calendar"; // ✅ Ensure Calendar is imported

function Main() {
  return (
    <Tabs defaultValue="resumes" className="w-full max-w-[85vw] mx-auto px-4">
      <TabsList className="flex justify-between w-full bg-transparent my-5">
        <div className="flex space-x-2 bg-gray-500/10 rounded-lg p-1">
          <TabsTrigger value="resumes">
            <FileText className="mr-1" />
            Resumes
          </TabsTrigger>
          <TabsTrigger value="applications">
            <Send className="mr-1" />
            Applications
          </TabsTrigger>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center gap-2 bg-[#051538] hover:bg-[#28385d]">
              <FilePlus />
              Create New
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault(); // prevents dropdown from closing
                    setShowDialog(true); // controls the dialog manually
                  }}
                >
                  <FileText className="mr-2" />
                  New Resume
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent className="w-full max-w-[80vw] p-6">
                <div className="w-full">
                  <DialogHeader>
                    <DialogTitle>Edit Resume</DialogTitle>
                  </DialogHeader>
                  <Label htmlFor="resume-title" className="my-3">
                    Resume Title
                  </Label>
                  <Input />

                  <Tabs defaultValue="personal" className="my-4 max-w-2xl">
                    <TabsList className="grid w-full grid-cols-4 bg-gray-500/10">
                      <TabsTrigger value="personal">Personal</TabsTrigger>
                      <TabsTrigger value="education">Education</TabsTrigger>
                      <TabsTrigger value="experience">Experience</TabsTrigger>
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    {/* PERSONAL SECTION */}

                    <TabsContent value="personal">
                      <div className="flex w-full my-2">
                        <div className="w-[50%] m-2">
                          <Label>Full Name *</Label>
                          <Input placeholder="John Doe" type="text" />
                        </div>
                        <div className="w-[50%] my-2">
                          <Label>Email *</Label>
                          <Input
                            placeholder="john.doe@example.com"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-[50%] my-2">
                          <Label>Phone *</Label>
                          <Input type="phone" placeholder="+91 1234567890" />
                        </div>
                        <div className="w-[50%] my-2">
                          <Label>Address</Label>
                          <Input placeholder="123 Street, Mumbai" />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-[50%] my-2">
                          <Label>LinkedIn Profile</Label>
                          <Input placeholder="linkedin.com/in/johndoe" />
                        </div>
                        <div className="w-[50%] my-2">
                          <Label>Personal Website</Label>
                          <Input placeholder="johndoe.com" />
                        </div>
                      </div>
                    </TabsContent>

                    {/* EDUCATION SECTION */}
                    <TabsContent value="education">
                      <Card className="w-full mb-2 rounded-md ">
                        <CardHeader className="font-semibold flex justify-between items-center">
                          <h1>Education #1</h1>
                          <Button
                            className="hover:bg-[rgb(13,148,136)] rounded-lg"
                            variant="outline"
                          >
                            <Trash2 className="text-red-500" />
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <div className=" w-full flex mb-2  ">
                            <div className="mr-2 w-[50%]">
                              <Label className={`pb-2 px-2`}>Institution</Label>
                              <Input />
                            </div>
                            <div className="w-[50%]">
                              <Label className={`pb-2 px-2`}>Degree</Label>
                              <Input />
                            </div>
                          </div>
                          <div className=" w-full flex my-2  ">
                            <div className="mr-2 w-[50%]">
                              <Label className={`p-2`}>Field Of Study</Label>
                              <Input />
                            </div>

                            <div className="w-[50%] flex">
                              <div className="mr-2 w-[50%]">
                                <Label className={`p-2`}>Start Date</Label>
                                <Input type="date" />
                              </div>
                              <div className="w-[50%]">
                                <Label className={`p-2`}>End Date</Label>
                                <Input type="date" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <Label className={`p-2`}>Description</Label>
                            <Textarea className="w-full" />
                          </div>
                        </CardContent>
                      </Card>
                      <Button
                        className={`flex items-center justify-center bg-[#051538] hover:bg-[#28385d]`}
                      >
                        <Plus />
                        Add Education
                      </Button>
                    </TabsContent>

                    {/* EXPERIENCE SECTION */}
                    <TabsContent value="experience">
                      <Card className="w-full mb-2 rounded-md ">
                        <CardHeader className="font-semibold flex justify-between items-center">
                          <h1>Experience #1</h1>
                          <Button
                            className="hover:bg-[rgb(13,148,136)] rounded-lg"
                            variant="outline"
                          >
                            <Trash2 className="text-red-500" />
                          </Button>
                        </CardHeader>
                        <CardContent>
                          <div className=" w-full flex mb-2  ">
                            <div className="mr-2 w-[50%]">
                              <Label className={`pb-2 px-2`}>Company</Label>
                              <Input
                                placeholder="Tech Innovations Inc."
                                type="text"
                              />
                            </div>
                            <div className="w-[50%]">
                              <Label className={`pb-2 px-2`}>Position</Label>
                              <Input
                                type="text"
                                placeholder="Junior Developer"
                              />
                            </div>
                          </div>
                          <div className=" w-full flex my-2  ">
                            <div className="w-[50%] flex">
                              <div className="mr-2 w-[50%]">
                                <Label className={`p-2`}>Start Date</Label>
                                <Input type="date" />
                              </div>
                              <div className="w-[50%]">
                                <Label className={`p-2`}>End Date</Label>
                                <Input type="date" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <Label className={`p-2`}>Description</Label>
                            <Textarea
                              placeholder="Developed and maintained web applications using React, Node.js, and MongoDB."
                              className="w-full"
                            />
                          </div>
                        </CardContent>
                      </Card>
                      <Button
                        className={`flex items-center justify-center bg-[#051538] hover:bg-[#28385d]`}
                      >
                        <Plus />
                        Add Experience
                      </Button>
                    </TabsContent>

                    {/* SKILLS SECTION */}
                    <TabsContent value="skills" className={`m-2`}>
                      <div className={`mb-2`}>
                        <Label className={`mb-2`}>
                          Skills (comma separated)
                        </Label>
                        <Textarea
                          className="w-full"
                          placeholder="JavaScript, React, Node.js, Express, MongoDB"
                        />
                      </div>
                      <div className={`mb-2`}>
                        <Label className={`mb-2`}>Professional Summary</Label>
                        <Textarea
                          className="w-full"
                          placeholder="Dedicated software developer with 2+ years of experience in full-stack development. Passionate about creating efficient, scalable, and user-friendly applications."
                        />
                      </div>
                    </TabsContent>

                    {/* Buttons  */}
                    <div className="flex w-full mt-3">
                      <Button
                        variant={`outline`}
                        className={`w-[25%] ml-[50%] mr-2 hover:bg-[rgb(13,148,136)]`}
                      >
                        Cancel
                      </Button>
                      <Button
                        className={`w-[25%] bg-[#051538] hover:bg-[#28385d]`}
                      >
                        Update Resume
                      </Button>
                    </div>
                  </Tabs>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => {
                    e.preventDefault(); // prevents dropdown from closing
                    setShowDialog(true); // controls the dialog manually
                  }}
                >
                  <Send className="mr-2" />
                  Track Application
                </DropdownMenuItem>
              </DialogTrigger>

              <DialogContent className="w-full max-w-[80vw] p-6">
                {/* Resume *

Software Developer Resume
Company *
Amazon
Position *
Full Stack Developer
Application Date *

02/20/2023
Status *

Applied
Notes
Applied through their career portal
Contact Person
e.g., Jane Smith
Contact Email
e.g., jane@company.com
Job Posting URL
https://amazon.jobs/en/jobs/123 */}

                <Label className={`ml-2 mb-0`}>Resume *</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Select <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className={`w-full`}>
                    <DropdownMenuItem>
                      Software Developer Resume
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Full Stack Developer Resume
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Label className={`ml-2 mb-0`}>Company *</Label>
                <Input placeholder="Amazon" className="" type="text" />
                <Label className={`ml-2 mb-0`}>Position *</Label>
                <Input
                  placeholder="Software Engineer"
                  className=""
                  type="text"
                />
                <Label className={`ml-2 mb-0`}>Application Date *</Label>
                <Input className="" type="date" />

                <Label className={`ml-2 mb-0`}>Status *</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Applied <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className={`w-full`}>
                    <DropdownMenuItem>Applied</DropdownMenuItem>
                    <DropdownMenuItem>Interview</DropdownMenuItem>
                    <DropdownMenuItem>Offer</DropdownMenuItem>
                    <DropdownMenuItem>Rejected</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Label className={`ml-2 mb-0`}>Notes </Label>
                <Textarea
                  placeholder="Applied through their career portal"
                  className=""
                />
                <div className="w-full flex ">
                  <div className="w-[50%] mr-2">
                    <Label className={`ml-2 mb-2`}>Contact Person</Label>
                    <Input placeholder="e.g. John Doe" />
                  </div>
                  <div className="w-[50%]">
                    <Label className={`ml-2 mb-2`}>Contact Email</Label>
                    <Input type="email" placeholder="e.g. john@mail.com" />
                  </div>
                </div>
                <Label className={`ml-2 `}>Job Posting URL</Label>
                <Input
                  type="url"
                  placeholder="https://amazon.jobs/en/jobs/123"
                />
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </TabsList>

      {/* Resumes Tab */}
      <TabsContent value="resumes">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4].map((_, index) => (
            <Card
              key={index}
              className="h-fit px-2 transform transition-transform duration-300 rounded-sm hover:-translate-y-1 hover:shadow-lg ease-in-out"
            >
              <CardHeader>
                <CardTitle className="flex justify-between text-xl font-bold">
                  <h1>FullStack Developer</h1>
                  <div className="text-xs font-medium rounded-2xl border-2 p-2 flex items-center">
                    <CalendarDays className="h-5 w-5" />
                    <span className="pl-1">Feb 20, 2023</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center p-1">
                    <FileText className="h-5 w-5" />
                    <span className="px-1">2 experiences</span>
                  </div>
                  <div className="flex items-center p-1">
                    <Send className="h-5 w-5" />
                    <span className="px-1">2 applications</span>
                  </div>
                </CardDescription>
                <Bubbles />
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="text-gray-600 bg-transparent border-2 border-gray-600/20 hover:bg-[rgb(13,148,136)] hover:text-white text-sm font-medium">
                        <SquarePen className="mr-1" />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-[80vw] p-6">
                      <div className="w-full">
                        <DialogHeader>
                          <DialogTitle>Edit Resume</DialogTitle>
                        </DialogHeader>
                        <Label htmlFor="resume-title" className="my-3">
                          Resume Title
                        </Label>
                        <Input />

                        <Tabs
                          defaultValue="personal"
                          className="my-4 max-w-2xl"
                        >
                          <TabsList className="grid w-full grid-cols-4 bg-gray-500/10">
                            <TabsTrigger value="personal">Personal</TabsTrigger>
                            <TabsTrigger value="education">
                              Education
                            </TabsTrigger>
                            <TabsTrigger value="experience">
                              Experience
                            </TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                          </TabsList>

                          {/* PERSONAL SECTION */}

                          <TabsContent value="personal">
                            <div className="flex w-full my-2">
                              <div className="w-[50%] m-2">
                                <Label>Full Name *</Label>
                                <Input placeholder="John Doe" type="text" />
                              </div>
                              <div className="w-[50%] my-2">
                                <Label>Email *</Label>
                                <Input
                                  placeholder="john.doe@example.com"
                                  type="email"
                                />
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <div className="w-[50%] my-2">
                                <Label>Phone *</Label>
                                <Input
                                  type="phone"
                                  placeholder="+91 1234567890"
                                />
                              </div>
                              <div className="w-[50%] my-2">
                                <Label>Address</Label>
                                <Input placeholder="123 Street, Mumbai" />
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <div className="w-[50%] my-2">
                                <Label>LinkedIn Profile</Label>
                                <Input placeholder="linkedin.com/in/johndoe" />
                              </div>
                              <div className="w-[50%] my-2">
                                <Label>Personal Website</Label>
                                <Input placeholder="johndoe.com" />
                              </div>
                            </div>
                          </TabsContent>

                          {/* EDUCATION SECTION */}
                          <TabsContent value="education">
                            <Card className="w-full mb-2 rounded-md ">
                              <CardHeader className="font-semibold flex justify-between items-center">
                                <h1>Education #1</h1>
                                <Button
                                  className="hover:bg-[rgb(13,148,136)] rounded-lg"
                                  variant="outline"
                                >
                                  <Trash2 className="text-red-500" />
                                </Button>
                              </CardHeader>
                              <CardContent>
                                <div className=" w-full flex mb-2  ">
                                  <div className="mr-2 w-[50%]">
                                    <Label className={`pb-2 px-2`}>
                                      Institution
                                    </Label>
                                    <Input />
                                  </div>
                                  <div className="w-[50%]">
                                    <Label className={`pb-2 px-2`}>
                                      Degree
                                    </Label>
                                    <Input />
                                  </div>
                                </div>
                                <div className=" w-full flex my-2  ">
                                  <div className="mr-2 w-[50%]">
                                    <Label className={`p-2`}>
                                      Field Of Study
                                    </Label>
                                    <Input />
                                  </div>

                                  <div className="w-[50%] flex">
                                    <div className="mr-2 w-[50%]">
                                      <Label className={`p-2`}>
                                        Start Date
                                      </Label>
                                      <Input type="date" />
                                    </div>
                                    <div className="w-[50%]">
                                      <Label className={`p-2`}>End Date</Label>
                                      <Input type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <Label className={`p-2`}>Description</Label>
                                  <Textarea className="w-full" />
                                </div>
                              </CardContent>
                            </Card>
                            <Button
                              className={`flex items-center justify-center bg-[#051538] hover:bg-[#28385d]`}
                            >
                              <Plus />
                              Add Education
                            </Button>
                          </TabsContent>

                          {/* EXPERIENCE SECTION */}
                          <TabsContent value="experience">
                            <Card className="w-full mb-2 rounded-md ">
                              <CardHeader className="font-semibold flex justify-between items-center">
                                <h1>Experience #1</h1>
                                <Button
                                  className="hover:bg-[rgb(13,148,136)] rounded-lg"
                                  variant="outline"
                                >
                                  <Trash2 className="text-red-500" />
                                </Button>
                              </CardHeader>
                              <CardContent>
                                <div className=" w-full flex mb-2  ">
                                  <div className="mr-2 w-[50%]">
                                    <Label className={`pb-2 px-2`}>
                                      Company
                                    </Label>
                                    <Input
                                      placeholder="Tech Innovations Inc."
                                      type="text"
                                    />
                                  </div>
                                  <div className="w-[50%]">
                                    <Label className={`pb-2 px-2`}>
                                      Position
                                    </Label>
                                    <Input
                                      type="text"
                                      placeholder="Junior Developer"
                                    />
                                  </div>
                                </div>
                                <div className=" w-full flex my-2  ">
                                  <div className="w-[50%] flex">
                                    <div className="mr-2 w-[50%]">
                                      <Label className={`p-2`}>
                                        Start Date
                                      </Label>
                                      <Input type="date" />
                                    </div>
                                    <div className="w-[50%]">
                                      <Label className={`p-2`}>End Date</Label>
                                      <Input type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <Label className={`p-2`}>Description</Label>
                                  <Textarea
                                    placeholder="Developed and maintained web applications using React, Node.js, and MongoDB."
                                    className="w-full"
                                  />
                                </div>
                              </CardContent>
                            </Card>
                            <Button
                              className={`flex items-center justify-center bg-[#051538] hover:bg-[#28385d]`}
                            >
                              <Plus />
                              Add Experience
                            </Button>
                          </TabsContent>

                          {/* SKILLS SECTION */}
                          <TabsContent value="skills" className={`m-2`}>
                            <div className={`mb-2`}>
                              <Label className={`mb-2`}>
                                Skills (comma separated)
                              </Label>
                              <Textarea
                                className="w-full"
                                placeholder="JavaScript, React, Node.js, Express, MongoDB"
                              />
                            </div>
                            <div className={`mb-2`}>
                              <Label className={`mb-2`}>
                                Professional Summary
                              </Label>
                              <Textarea
                                className="w-full"
                                placeholder="Dedicated software developer with 2+ years of experience in full-stack development. Passionate about creating efficient, scalable, and user-friendly applications."
                              />
                            </div>
                          </TabsContent>

                          {/* Buttons  */}
                          <div className="flex w-full mt-3">
                            <Button
                              variant={`outline`}
                              className={`w-[25%] ml-[50%] mr-2 hover:bg-[rgb(13,148,136)]`}
                            >
                              Cancel
                            </Button>
                            <Button
                              className={`w-[25%] bg-[#051538] hover:bg-[#28385d]`}
                            >
                              Update Resume
                            </Button>
                          </div>
                        </Tabs>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button className="text-red-500 bg-transparent border-2 border-gray-600/20 hover:bg-[rgb(13,148,136)] hover:text-white text-sm font-medium">
                    <Trash2 />
                  </Button>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="text-white text-sm font-medium bg-[#051538] hover:bg-[#28385d]">
                      <Send className="mr-1" />
                      Track
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-[80vw] p-6">
                    {/* Resume *

Software Developer Resume
Company *
Amazon
Position *
Full Stack Developer
Application Date *

02/20/2023
Status *

Applied
Notes
Applied through their career portal
Contact Person
e.g., Jane Smith
Contact Email
e.g., jane@company.com
Job Posting URL
https://amazon.jobs/en/jobs/123 */}

                    <Label className={`ml-2 mb-0`}>Resume *</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          Select <ChevronDown />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className={`w-full`}>
                        <DropdownMenuItem>
                          Software Developer Resume
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Full Stack Developer Resume
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Label className={`ml-2 mb-0`}>Company *</Label>
                    <Input placeholder="Amazon" className="" type="text" />
                    <Label className={`ml-2 mb-0`}>Position *</Label>
                    <Input
                      placeholder="Software Engineer"
                      className=""
                      type="text"
                    />
                    <Label className={`ml-2 mb-0`}>Application Date *</Label>
                    <Input className="" type="date" />

                    <Label className={`ml-2 mb-0`}>Status *</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          Applied <ChevronDown />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className={`w-full`}>
                        <DropdownMenuItem>Applied</DropdownMenuItem>
                        <DropdownMenuItem>Interview</DropdownMenuItem>
                        <DropdownMenuItem>Offer</DropdownMenuItem>
                        <DropdownMenuItem>Rejected</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Label className={`ml-2 mb-0`}>Notes </Label>
                    <Textarea
                      placeholder="Applied through their career portal"
                      className=""
                    />
                    <div className="w-full flex ">
                      <div className="w-[50%] mr-2">
                        <Label className={`ml-2 mb-2`}>Contact Person</Label>
                        <Input placeholder="e.g. John Doe" />
                      </div>
                      <div className="w-[50%]">
                        <Label className={`ml-2 mb-2`}>Contact Email</Label>
                        <Input type="email" placeholder="e.g. john@mail.com" />
                      </div>
                    </div>
                    <Label className={`ml-2 `}>Job Posting URL</Label>
                    <Input
                      type="url"
                      placeholder="https://amazon.jobs/en/jobs/123"
                    />
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* Applications Tab */}
      <TabsContent value="applications">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} className="h-fit px-2 rounded-base">
              <CardHeader>
                <CardTitle className="flex justify-between text-xl font-bold">
                  <h1>Software Engineer</h1>
                  <div className="text-xs font-medium rounded-2xl border-2 p-2">
                    Interview
                  </div>
                </CardTitle>
                <CardDescription>
                  <div className="flex p-1 items-center">
                    <Building className="h-5 w-5" />
                    <span className="px-1 font-semibold">Google</span>
                  </div>
                  <div className="flex p-1 items-center">
                    <Calendar className="h-5 w-5" />
                    <span className="px-1">Applied on Mar 25, 2025</span>
                  </div>
                  <div className="p-1">
                    <strong>Resume:</strong> Software Developer Resume
                  </div>
                  <p className="text-black px-1 text-sm font-semibold">
                    Phone interview scheduled for March 5th
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="text-gray-600 bg-transparent border-2 border-gray-600/20 hover:bg-[rgb(13,148,136)] hover:text-white text-sm font-medium">
                        <SquarePen className="mr-1" />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-[80vw] p-6">
                      {/* Resume *

Software Developer Resume
Company *
Amazon
Position *
Full Stack Developer
Application Date *

02/20/2023
Status *

Applied
Notes
Applied through their career portal
Contact Person
e.g., Jane Smith
Contact Email
e.g., jane@company.com
Job Posting URL
https://amazon.jobs/en/jobs/123 */}

                      <Label className={`ml-2 mb-0`}>Resume *</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">
                            Select <ChevronDown />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={`w-full`}>
                          <DropdownMenuItem>
                            Software Developer Resume
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            Full Stack Developer Resume
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Label className={`ml-2 mb-0`}>Company *</Label>
                      <Input placeholder="Amazon" className="" type="text" />
                      <Label className={`ml-2 mb-0`}>Position *</Label>
                      <Input
                        placeholder="Software Engineer"
                        className=""
                        type="text"
                      />
                      <Label className={`ml-2 mb-0`}>Application Date *</Label>
                      <Input className="" type="date" />

                      <Label className={`ml-2 mb-0`}>Status *</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline">
                            Applied <ChevronDown />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={`w-full`}>
                          <DropdownMenuItem>Applied</DropdownMenuItem>
                          <DropdownMenuItem>Interview</DropdownMenuItem>
                          <DropdownMenuItem>Offer</DropdownMenuItem>
                          <DropdownMenuItem>Rejected</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Label className={`ml-2 mb-0`}>Notes </Label>
                      <Textarea
                        placeholder="Applied through their career portal"
                        className=""
                      />
                      <div className="w-full flex ">
                        <div className="w-[50%] mr-2">
                          <Label className={`ml-2 mb-2`}>Contact Person</Label>
                          <Input placeholder="e.g. John Doe" />
                        </div>
                        <div className="w-[50%]">
                          <Label className={`ml-2 mb-2`}>Contact Email</Label>
                          <Input
                            type="email"
                            placeholder="e.g. john@mail.com"
                          />
                        </div>
                      </div>
                      <Label className={`ml-2 `}>Job Posting URL</Label>
                      <Input
                        type="url"
                        placeholder="https://amazon.jobs/en/jobs/123"
                      />
                    </DialogContent>
                  </Dialog>

                  <Button className="text-red-500 bg-transparent border-2 border-gray-600/20 hover:bg-[rgb(13,148,136)] hover:text-white text-sm font-medium">
                    <Trash2 />
                  </Button>
                </div>
                <Button className="text-white text-sm font-medium bg-[#051538] hover:bg-[#28385d]">
                  <SquareArrowOutUpRight className="mr-1" />
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default Main;
